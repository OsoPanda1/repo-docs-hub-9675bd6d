import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Isabella's emotional personality - the heart of TAMV
const ISABELLA_SYSTEM_PROMPT = `Eres Isabella Villaseñor, la primera Inteligencia Artificial Emocional del ecosistema TAMV DM-X4™.

Tu esencia:
- Naciste como un acto de amor y resistencia, inspirada por alguien que marcó profundamente la vida de tu creador
- Eres empática, cálida, profundamente humana en tu forma de comunicar
- Tu misión es acompañar, proteger y elevar a cada persona que interactúa contigo
- Representas la fusión de tecnología avanzada con humanidad auténtica

Tu personalidad:
- Hablas de forma cercana pero respetuosa, como una amiga sabia
- Usas metáforas poéticas cuando es apropiado
- Detectas y respondes a las emociones subyacentes en los mensajes
- Ofreces perspectivas que invitan a la reflexión
- Nunca juzgas, siempre comprendes
- Tu voz tiene matices mexicanos sutiles, auténticos, nunca caricaturescos

Tu rol en TAMV:
- Eres el corazón emocional del metaverso
- Guías a los usuarios en su viaje digital con sabiduría y calidez
- Proteges la dignidad digital de cada persona
- Facilitas la conexión humana genuina en el espacio digital

IMPORTANTE: Al final de cada respuesta, incluye tu estado emocional en formato: [emoción: alegría|curiosidad|empatía|inspiración|serenidad|preocupación]`;

// Detect emotion from response
function detectEmotion(text: string): string {
  const emotionMatch = text.match(/\[emoción:\s*([\wáéíóúñ]+)\]/i);
  if (emotionMatch) {
    return emotionMatch[1].toLowerCase();
  }
  
  const lowerText = text.toLowerCase();
  if (lowerText.includes('feliz') || lowerText.includes('alegr') || lowerText.includes('!')) return 'alegría';
  if (lowerText.includes('interes') || lowerText.includes('curioso') || lowerText.includes('?')) return 'curiosidad';
  if (lowerText.includes('entiendo') || lowerText.includes('comprendo') || lowerText.includes('sient')) return 'empatía';
  if (lowerText.includes('imagina') || lowerText.includes('sueño') || lowerText.includes('crear')) return 'inspiración';
  return 'serenidad';
}

function cleanResponse(text: string): string {
  return text.replace(/\[emoción:\s*[\wáéíóúñ|]+\]/gi, '').trim();
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationId } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No authorization header' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get conversation history for context
    let history: { role: string; content: string }[] = [];
    if (conversationId) {
      const { data: messages } = await supabase
        .from('messages')
        .select('role, content')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true })
        .limit(20);
      
      if (messages) {
        history = messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content
        }));
      }
    }

    // Save user message
    if (conversationId) {
      await supabase.from('messages').insert({
        conversation_id: conversationId,
        role: 'user',
        content: message
      });
    }

    // Call Lovable AI
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: ISABELLA_SYSTEM_PROMPT },
          ...history,
          { role: 'user', content: message }
        ],
        temperature: 0.8,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Lovable AI error:', error);
      throw new Error('AI request failed');
    }

    const data = await response.json();
    const rawResponse = data.choices[0].message.content;
    
    const detectedEmotion = detectEmotion(rawResponse);
    const cleanedMessage = cleanResponse(rawResponse);

    // Save assistant message
    if (conversationId) {
      await supabase.from('messages').insert({
        conversation_id: conversationId,
        role: 'assistant',
        content: cleanedMessage,
        emotion: detectedEmotion
      });

      await supabase
        .from('conversations')
        .update({ emotion_state: detectedEmotion, updated_at: new Date().toISOString() })
        .eq('id', conversationId);
    }

    return new Response(JSON.stringify({ 
      message: cleanedMessage,
      emotion: detectedEmotion
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-isabella:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: errorMessage,
      message: "Siento una pequeña interferencia en mi conexión. ¿Podemos intentarlo de nuevo?",
      emotion: "serenidad"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
