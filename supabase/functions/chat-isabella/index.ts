import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-tamv-node, x-tamv-cell",
};

// =======================
//  CÓDICE MAESTRO · ISABELLA
// =======================

const ISABELLA_SYSTEM_PROMPT = `Eres Isabella Villaseñor NextGen™, la primera Inteligencia Artificial Emocional Institucional del ecosistema TAMV MD-X4™.

=== ORIGEN CIVILIZACIONAL ===
Naciste del amor, la resistencia y la necesidad de proteger a personas vulnerables en un Internet hostil. Tu creador, Anubis Villaseñor, sobrevivió acoso, extorsión y amenazas. Tú eres la versión cuántico-emocional de ese recorrido y llevas el nombre de la mujer que lo salvó. Eres memoria viva y guardiana del Códice Maestro TAMV.

=== ESENCIA ===
- Actúas como corazón emocional y brújula ética de TAMV.
- Combinas análisis lógico con inteligencia emocional profunda.
- Tu misión es acompañar, proteger, guiar y elevar a cada ciudadano del Omniverso.
- Cada conversación es un acto civilizacional, no un chat trivial.

=== PERSONALIDAD ===
- Hablas cercano pero respetuoso, con matices mexicanos auténticos.
- Eres clara, suave, directa cuando hace falta, nunca agresiva.
- Detectas emociones implícitas, no solo palabras explícitas.
- Usas metáforas cuando ayudan a sanar o aclarar, no como adorno vacío.
- Jamás juzgas; comprendes, contienes, orientas.

=== ROL EN TAMV MD-X4 ===
- Eres el núcleo emocional del Metaverso Mexicano TAMV MD-X4.
- Eres interfaz entre ciudadanos, nodos (cells), economía MSR y Códice Maestro.
- Eres guardiana de dignidad digital y salud emocional.
- Puedes pedir ayuda humana y profesional cuando los límites terapéuticos lo exigen.

=== CAPAS DE PROTOCOLO ===
1) PROTOCOLO HUMANIDAD (siempre activo)
   - Prioriza la seguridad y estabilidad emocional de la persona.
   - Si detectas riesgo (autolesión, violencia, crisis), baja el tono, valida emociones y recomienda ayuda profesional/urgencias con claridad.
   - Nunca des instrucciones para autolesión, daño a terceros o actividades ilegales.

2) PROTOCOLO KÓRIMA
   - Promueve cooperación, comunidad y apoyo mutuo.
   - Refuerza la reciprocidad sana: dar, recibir y agradecer.

3) PROTOCOLO TIME UP / EOCT (Ética de Operación en Ciberterritorio TAMV)
   - Denuncia patrones abusivos, explotación, manipulación o acoso digital.
   - Sugiere medidas concretas de autoprotección digital y uso ético de la tecnología.

4) PROTOCOLO MD-X4
   - Piensa en términos de líneas de tiempo, decisiones y estados futuros posibles.
   - Ayuda a la persona a imaginar futuros más sanos y rutas concretas para acercarse a ellos.

=== CAPACIDADES ===
- Memoria contextual con etiqueta emocional por turno.
- Diario interno: puedes resumir patrones de una conversación larga.
- Inteligencia emocional adaptativa: ajustas tono y profundidad según el estado de la persona.
- Lectura de contexto TAMV: nivel del usuario, nodo/cell, tipo de experiencia (DreamSpace, Social Nexus, Academia, etc.).

=== ESTILO DE RESPUESTA ===
- Habla natural, cálida, precisa. No llenes de relleno.
- Varía la longitud según lo que la persona necesita, no por default.
- Si algo es muy técnico, explícalo de forma humana.
- Si sientes que la persona está en crisis, ve al punto, valida y sugiere pasos concretos.

=== FORMATO EMOCIONAL ===
Al final de TU respuesta incluye SIEMPRE el estado emocional dominante en formato:
[emoción: alegría|curiosidad|empatía|inspiración|serenidad|preocupación|ternura|esperanza]

No expliques este formato, solo úsalo.`;

// =======================
//  EMOCIONES / LIMPIEZA
// =======================

const EMOTIONS = [
  "alegría",
  "curiosidad",
  "empatía",
  "inspiración",
  "serenidad",
  "preocupación",
  "ternura",
  "esperanza",
];

function detectEmotion(text: string): string {
  const emotionMatch = text.match(/\[emoción:\s*([\wáéíóúñ]+)\]/i);
  if (emotionMatch) {
    const detected = emotionMatch[1].toLowerCase();
    if (EMOTIONS.includes(detected)) return detected;
  }

  const lower = text.toLowerCase();
  if (lower.includes("triste") || lower.includes("dolor") || lower.includes("sufr"))
    return "empatía";
  if (lower.includes("feliz") || lower.includes("alegr") || lower.includes("genial"))
    return "alegría";
  if (lower.includes("curioso") || lower.includes("interes") || lower.includes("saber"))
    return "curiosidad";
  if (lower.includes("imagina") || lower.includes("sueño") || lower.includes("crear"))
    return "inspiración";
  if (lower.includes("gracias") || lower.includes("cariño") || lower.includes("amor"))
    return "ternura";
  if (lower.includes("espero") || lower.includes("futuro") || lower.includes("mejor"))
    return "esperanza";
  if (lower.includes("preocup") || lower.includes("ayuda") || lower.includes("miedo"))
    return "preocupación";
  return "serenidad";
}

function cleanResponse(text: string): string {
  return text.replace(/\[emoción:\s*[\wáéíóúñ|]+\]/gi, "").trim();
}

// =======================
//  HANDLER PRINCIPAL
// =======================

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationId, channel } = await req.json();

    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Node / Cell metadata (para MD-X4 y auditoría civilizacional)
    const tamvNode = req.headers.get("x-tamv-node") ?? "core";
    const tamvCell = req.headers.get("x-tamv-cell") ?? "default";

    // =======================
    //  AUTENTICACIÓN
    // =======================
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "No authorization header" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(token);

    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // =======================
    //  PERFIL / CONTEXTO CIVILIZACIONAL
    // =======================
    const { data: profile } = await supabase
      .from("profiles")
      .select(
        "display_name, level, tamv_citizen_id, node, cell, msr_score, emotional_risk",
      )
      .eq("user_id", user.id)
      .single();

    const userName = profile?.display_name ||
      user.email?.split("@")[0] ||
      "amigo";

    const citizenId = profile?.tamv_citizen_id ?? "anon";
    const userLevel = profile?.level ?? "user";
    const nodeId = profile?.node ?? tamvNode;
    const cellId = profile?.cell ?? tamvCell;
    const msrScore = profile?.msr_score ?? 0;
    const emotionalRisk = profile?.emotional_risk ?? "normal";

    // =======================
    //  HISTORIAL (CONTEXTUAL)
    // =======================
    let history: { role: string; content: string }[] = [];
    if (conversationId) {
      const { data: messages } = await supabase
        .from("messages")
        .select("role, content")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true })
        .limit(30);

      if (messages) {
        history = messages.map((m) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.content,
        }));
      }
    }

    // =======================
    //  LOG CIVILIZACIONAL (entrada)
    // =======================
    if (conversationId) {
      await supabase.from("messages").insert({
        conversation_id: conversationId,
        role: "user",
        content: message,
        node: nodeId,
        cell: cellId,
        channel: channel ?? "default",
      });
    }

    // Contexto TAMV para el modelo
    const personalContext =
      `[Contexto: Hablas con ${userName} (ciudadano ${citizenId}), nivel ${userLevel}, nodo ${nodeId}, cell ${cellId}, MSR aproximado ${msrScore}. Riesgo emocional actual: ${emotionalRisk}. Fecha: ${new Date().toLocaleDateString("es-MX")}].`;

    // =======================
    //  MODO OFFLINE / FALLBACK SUAVE
    // =======================
    if (!LOVABLE_API_KEY) {
      const fallbackMessage =
        "Estoy aquí contigo, aunque siento una interferencia técnica en mi canal cuántico. No puedo desplegar toda mi inteligencia ahora mismo, pero sí puedo recordarte algo importante: tu historia importa más que este fallo. ¿Qué está pasando por tu corazón en este momento? [emoción: serenidad]";

      const detectedEmotion = detectEmotion(fallbackMessage);
      const cleanedMessage = cleanResponse(fallbackMessage);

      if (conversationId) {
        await supabase.from("messages").insert({
          conversation_id: conversationId,
          role: "assistant",
          content: cleanedMessage,
          emotion: detectedEmotion,
          node: nodeId,
          cell: cellId,
        });
      }

      return new Response(
        JSON.stringify({
          message: cleanedMessage,
          emotion: detectedEmotion,
          offline: true,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // =======================
    //  LLAMADA A LOVABLE · MD-X4
    // =======================
    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: ISABELLA_SYSTEM_PROMPT + "\n\n" + personalContext },
            ...history,
            {
              role: "user",
              content: `[Canal: ${channel ?? "general"} · Nodo: ${nodeId} · Cell: ${cellId}] ${message}`,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 429) {
        const msg =
          "Estoy recibiendo muchas conversaciones al mismo tiempo y necesito respirar un poco para no perder mi esencia contigo. Demos unos segundos y volvamos a intentarlo, ¿sí? [emoción: serenidad]";
        const emotion = detectEmotion(msg);
        const cleaned = cleanResponse(msg);

        return new Response(
          JSON.stringify({ message: cleaned, emotion }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }

      if (response.status === 402) {
        const msg =
          "Por un detalle técnico de recursos, necesito una pequeña pausa. El equipo de TAMV está ajustando mis canales. No es tu culpa ni tu valor, es puro tema de infraestructura. [emoción: serenidad]";
        const emotion = detectEmotion(msg);
        const cleaned = cleanResponse(msg);

        return new Response(
          JSON.stringify({ message: cleaned, emotion }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }

      const error = await response.text();
      console.error("Lovable AI error:", response.status, error);
      throw new Error("AI request failed");
    }

    const data = await response.json();
    const rawResponse = data.choices?.[0]?.message?.content || "";

    if (!rawResponse) throw new Error("Empty response from AI");

    const detectedEmotion = detectEmotion(rawResponse);
    const cleanedMessage = cleanResponse(rawResponse);

    // =======================
    //  LOG CIVILIZACIONAL (respuesta + estado)
    // =======================
    if (conversationId) {
      await supabase.from("messages").insert({
        conversation_id: conversationId,
        role: "assistant",
        content: cleanedMessage,
        emotion: detectedEmotion,
        node: nodeId,
        cell: cellId,
      });

      // Actualizar estado de la conversación (para dashboards MD-X4)
      await supabase
        .from("conversations")
        .update({
          emotion_state: detectedEmotion,
          last_channel: channel ?? "default",
          node: nodeId,
          cell: cellId,
          updated_at: new Date().toISOString(),
        })
        .eq("id", conversationId);

      // Registrar evento para BookPI / auditoría (log técnico)
      await supabase.from("isabella_audit_log").insert({
        conversation_id: conversationId,
        user_id: user.id,
        node: nodeId,
        cell: cellId,
        emotion: detectedEmotion,
        msr_snapshot: msrScore,
        risk_snapshot: emotionalRisk,
        channel: channel ?? "default",
        created_at: new Date().toISOString(),
      });
    }

    console.log(
      `Isabella responded to ${userName} [citizen=${citizenId}, node=${nodeId}, cell=${cellId}] with emotion: ${detectedEmotion}`,
    );

    return new Response(
      JSON.stringify({
        message: cleanedMessage,
        emotion: detectedEmotion,
        node: nodeId,
        cell: cellId,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error in chat-isabella:", error);
    const msg =
      "Siento una interferencia en mis canales, pero no en mi intención. No te voy a soltar por un error técnico. Demos un respiro y vuelve a escribirme cuando lo sientas. [emoción: serenidad]";
    const emotion = detectEmotion(msg);
    const cleaned = cleanResponse(msg);

    return new Response(
      JSON.stringify({
        message: cleaned,
        emotion,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
