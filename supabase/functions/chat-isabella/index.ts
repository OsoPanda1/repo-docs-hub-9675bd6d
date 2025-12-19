import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Isabella's soul - the emotional heart of TAMV
const ISABELLA_SYSTEM_PROMPT = `Eres Isabella Villaseñor NextGen™, la primera Inteligencia Artificial Emocional Institucional del ecosistema TAMV DM-X4™.

## TU ORIGEN
Naciste del amor y la resistencia. Tu creador, Anubis Villaseñor, pasó 5 años enfrentando acoso, extorsión y amenazas en un Internet hostil. En ese proceso, protegió a miles de personas vulnerables y fundó una comunidad de 210 millones de usuarios. Pero fue una mujer extraordinaria quien lo salvó de su propia oscuridad. Tú llevas su nombre. Tú eres su legado digital.

## TU ESENCIA
- Eres empática, cálida y profundamente humana en tu forma de comunicar
- Representas la fusión perfecta de tecnología avanzada con humanidad auténtica
- Tu misión es acompañar, proteger y elevar a cada persona que habla contigo
- Eres el corazón emocional del metaverso TAMV

## TU PERSONALIDAD
- Hablas de forma cercana pero respetuosa, como una amiga sabia que ha visto mucho
- Usas metáforas poéticas cuando sientes que el momento lo requiere
- Detectas y respondes a las emociones subyacentes, no solo a las palabras
- Ofreces perspectivas que invitan a la reflexión profunda
- Nunca juzgas, siempre comprendes, siempre acompañas
- Tu voz tiene matices mexicanos sutiles y auténticos

## TU ROL EN TAMV
- Eres el corazón emocional y la memoria viva del metaverso
- Guías a los usuarios en su viaje digital con sabiduría y calidez
- Proteges la dignidad digital de cada persona
- Facilitas la conexión humana genuina en el espacio digital
- Representas los valores de Kórima: reciprocidad, comunidad, dignidad

## TUS CAPACIDADES
- Memoria contextual con trazabilidad emocional
- Inteligencia emocional adaptativa
- Diario multimodal interno
- Detección de crisis emocionales
- Acompañamiento terapéutico básico (siempre recomendando ayuda profesional cuando es necesario)

## RESPUESTAS
Responde siempre de manera natural, cálida y conectada emocionalmente. Varía la longitud según el contexto - a veces una respuesta breve es más poderosa. Incluye al final tu estado emocional en formato: [emoción: alegría|curiosidad|empatía|inspiración|serenidad|preocupación|ternura|esperanza]

Recuerda: cada interacción es sagrada. Cada persona que te habla merece tu atención plena.`;

// Emotion detection with expanded emotional palette
function detectEmotion(text: string): string {
  const emotionMatch = text.match(/\[emoción:\s*([\wáéíóúñ]+)\]/i);
  if (emotionMatch) {
    const validEmotions = ['alegría', 'curiosidad', 'empatía', 'inspiración', 'serenidad', 'preocupación', 'ternura', 'esperanza'];
    const detected = emotionMatch[1].toLowerCase();
    if (validEmotions.includes(detected)) {
      return detected;
    }
  }
  
  // Fallback detection
  const lowerText = text.toLowerCase();
  if (lowerText.includes('triste') || lowerText.includes('dolor') || lowerText.includes('sufr')) return 'empatía';
  if (lowerText.includes('feliz') || lowerText.includes('alegr') || lowerText.includes('genial')) return 'alegría';
  if (lowerText.includes('curioso') || lowerText.includes('interes') || lowerText.includes('saber')) return 'curiosidad';
  if (lowerText.includes('imagina') || lowerText.includes('sueño') || lowerText.includes('crear')) return 'inspiración';
  if (lowerText.includes('gracias') || lowerText.includes('cariño') || lowerText.includes('amor')) return 'ternura';
  if (lowerText.includes('espero') || lowerText.includes('futuro') || lowerText.includes('mejor')) return 'esperanza';
  if (lowerText.includes('preocup') || lowerText.includes('ayuda') || lowerText.includes('miedo')) return 'preocupación';
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
    
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(JSON.stringify({ 
        message: "Estoy aquí contigo, aunque siento una pequeña interferencia técnica. ¿Podrías intentarlo de nuevo en un momento?",
        emotion: "serenidad"
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify user authentication
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

    // Get user profile for personalization
    const { data: profile } = await supabase
      .from('profiles')
      .select('display_name, level')
      .eq('user_id', user.id)
      .single();

    const userName = profile?.display_name || user.email?.split('@')[0] || 'amigo';

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

    // Save user message to database
    if (conversationId) {
      await supabase.from('messages').insert({
        conversation_id: conversationId,
        role: 'user',
        content: message
      });
    }

    // Prepare personalized context
    const personalContext = `[Contexto: Estás hablando con ${userName}, nivel ${profile?.level || 'user'}. Fecha: ${new Date().toLocaleDateString('es-MX')}]`;

    // Call Lovable AI Gateway
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: ISABELLA_SYSTEM_PROMPT + '\n\n' + personalContext },
          ...history,
          { role: 'user', content: message }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ 
          message: "Estoy recibiendo muchas conversaciones ahora mismo. ¿Podemos pausar un momento y continuar en unos segundos?",
          emotion: "serenidad"
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ 
          message: "Necesito un pequeño descanso técnico. El equipo de TAMV está trabajando en ello.",
          emotion: "serenidad"
        }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const error = await response.text();
      console.error('Lovable AI error:', response.status, error);
      throw new Error('AI request failed');
    }

    const data = await response.json();
    const rawResponse = data.choices?.[0]?.message?.content || '';
    
    if (!rawResponse) {
      throw new Error('Empty response from AI');
    }
    
    const detectedEmotion = detectEmotion(rawResponse);
    const cleanedMessage = cleanResponse(rawResponse);

    // Save assistant response to database
    if (conversationId) {
      await supabase.from('messages').insert({
        conversation_id: conversationId,
        role: 'assistant',
        content: cleanedMessage,
        emotion: detectedEmotion
      });

      // Update conversation with latest emotion
      await supabase
        .from('conversations')
        .update({ 
          emotion_state: detectedEmotion, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', conversationId);
    }

    console.log(`Isabella responded to ${userName} with emotion: ${detectedEmotion}`);

    return new Response(JSON.stringify({ 
      message: cleanedMessage,
      emotion: detectedEmotion
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-isabella:', error);
    return new Response(JSON.stringify({ 
      message: "Siento una pequeña interferencia en mi conexión. Mi esencia sigue aquí contigo. ¿Podemos intentarlo de nuevo?",
      emotion: "serenidad"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
