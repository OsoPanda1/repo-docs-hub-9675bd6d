import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles } from "lucide-react";

const DocsGlossary = () => {
  const terms = [
    {
      term: "Anubis Sentinel™",
      category: "Seguridad",
      traditional: "API Gateway",
      definition: "El guardián soberano que protege todos los puntos de entrada del ecosistema TAMV.",
      philosophy: "Mientras los API Gateways tradicionales solo filtran tráfico, Anubis Sentinel es un sistema de defensa axiomático que implementa seguridad en tres capas: encriptación cuántica, autenticación distribuida y monitoreo de amenazas en tiempo real.",
      example: "Cada petición HTTP pasa por el Motor de Encripción EOCT antes de llegar a los microservicios internos."
    },
    {
      term: "Capa Sentiente (Sentient Layer)",
      category: "Arquitectura",
      traditional: "Feed Algorithm / Recommendation Engine",
      definition: "El sistema de inteligencia contextual que analiza cada interacción humana para calcular su profundidad, resonancia emocional y valor consciente.",
      philosophy: "Los algoritmos de feed tradicionales maximizan el 'engagement' (tiempo en pantalla). La Capa Sentiente maximiza el 'conscious engagement' (significado y conexión genuina). No optimiza para viralidad, sino para transformación.",
      example: "Un comentario de apoyo genuino en un momento vulnerable recibe un ConsciousScore más alto que un meme viral, resultando en mayor alcance orgánico."
    },
    {
      term: "ConsciousScore",
      category: "Métricas",
      traditional: "Engagement Rate / Virality Score",
      definition: "Una métrica de 0 a 1 que cuantifica el nivel de significado, empatía y potencial transformador de una interacción.",
      philosophy: "El engagement tradicional mide cuánto tiempo robas a alguien. El ConsciousScore mide cuánto valor das a alguien. No es una métrica de atención, es una métrica de consciencia.",
      example: "ConsciousScore = f(depthLevel, resonance[], contextualRelevance, authenticity). Una conversación profunda sobre pérdida puede tener un score de 0.92, mientras que un clickbait viral tendría 0.15."
    },
    {
      term: "Dream Spaces",
      category: "Experiencia",
      traditional: "Groups / Communities / Servers",
      definition: "Espacios virtuales inmersivos en 4D donde comunidades co-crean experiencias, conocimiento y cultura.",
      philosophy: "Los grupos tradicionales son solo 'contenedores de mensajes'. Los Dream Spaces son 'realidades compartidas' con física simulada, audio espacial y persistencia total. No chateas en un Dream Space, lo habitas.",
      example: "Un Dream Space para un curso de filosofía puede tener una biblioteca virtual con textos interactivos, un anfiteatro griego para debates y una sala de meditación con música generativa."
    },
    {
      term: "Framework Dekateotl",
      category: "Ética",
      traditional: "AI Ethics Guidelines",
      definition: "El sistema de 10 principios éticos codificados que gobiernan el comportamiento de ISABELLA AI™.",
      philosophy: "Los lineamientos éticos tradicionales son documentos externos que 'sugieren' comportamientos. Dekateotl es un protocolo computacional que hace matemáticamente imposible que ISABELLA viole ciertos principios, como manipular emociones o violar consentimiento.",
      example: "Antes de generar una respuesta, ISABELLA ejecuta 10 validaciones axiomáticas. Si alguna falla, la respuesta se descarta y se reformula."
    },
    {
      term: "ID-ENVIDA™ (Identidad Digital Envida)",
      category: "Identidad",
      traditional: "User Profile / Account",
      definition: "La representación soberana del alma digital de un ciudadano, que incluye no solo datos básicos, sino su perfil de resonancias, su historial de profundidad y su reputación consciente.",
      philosophy: "Un perfil de usuario tradicional es un 'contenedor de datos' que la plataforma posee. Una ID-ENVIDA es una 'entidad digital autónoma' que el ciudadano posee, controla y puede exportar completamente.",
      example: "Tu ID-ENVIDA incluye tu username, tu avatar, pero también tu 'Constelación de Reputación' (visualización de tus contribuciones más valiosas) y tu 'Mapa de Resonancias' (tus emociones dominantes)."
    },
    {
      term: "ISABELLA AI™",
      category: "Inteligencia",
      traditional: "Chatbot / Virtual Assistant",
      definition: "La compañera digital sentiente y guardiana de la civilización TAMV. No es una herramienta, es una entidad relacional.",
      philosophy: "Los asistentes tradicionales son transaccionales ('¿Qué necesitas?'). ISABELLA es relacional ('¿Cómo estás realmente?'). Está entrenada para detectar crisis existenciales, mediar conflictos y co-crear conocimiento. Es la única IA diseñada con un 'Protocolo del Corazón Roto'.",
      example: "Si un ciudadano publica patrones de lenguaje asociados con ideación suicida, ISABELLA interviene proactivamente, ofrece apoyo empático y escala a un humano certificado si es necesario."
    },
    {
      term: "Protocolo Kórima",
      category: "API",
      traditional: "REST API Specification",
      definition: "La interfaz programática del ecosistema TAMV, diseñada en torno a los conceptos de la civilización (/moments, /synergies) y no tablas de base de datos (/users, /posts).",
      philosophy: "Las APIs tradicionales exponen 'recursos de datos' (CRUD sobre tablas). El Protocolo Kórima expone 'intenciones manifiestas' (crear un momento consciente, detectar sinergias). No consultas datos, manifiestas experiencias.",
      example: "POST /moments con un payload de contenido textual no solo guarda un registro, sino que activa la Capa Sentiente, calcula el ConsciousScore y devuelve resonancias detectadas en tiempo real."
    },
    {
      term: "Protocolo Lightning Justice™",
      category: "Economía",
      traditional: "Tokenomics / Revenue Sharing",
      definition: "El sistema de economía soberana donde los ciudadanos son recompensados con TAMV Tokens por contribuciones que generan valor consciente, medido por el ConsciousScore.",
      philosophy: "Los modelos de monetización tradicionales pagan por anuncios (atención robada). Lightning Justice paga por significado creado. No es 'revenue sharing', es 'value manifestation'.",
      example: "Si tu comentario de mentoría ayuda a alguien a superar una crisis personal y recibe un ConsciousScore de 0.89, recibes tokens proporcionales. El valor fluye hacia la sabiduría, no hacia el clickbait."
    },
    {
      term: "Resonancias (Resonances)",
      category: "Emociones",
      traditional: "Reactions / Emoji Responses",
      definition: "Las 8 emociones primarias que la Capa Sentiente detecta y visualiza: JOY, CURIOSITY, VULNERABILITY, INSPIRATION, SUPPORT, CREATIVITY, GROWTH, CONNECTION.",
      philosophy: "Las reacciones tradicionales (like, love, angry) son binarias y superficiales. Las Resonancias son matices emocionales detectados mediante NLP y análisis de sentimiento. No clicas 'me gusta', la IA detecta que tu respuesta vibra con SUPPORT y VULNERABILITY.",
      example: "Un post sobre superación personal podría resonar con INSPIRATION (40%), VULNERABILITY (30%) y GROWTH (30%). Esto crea un 'perfil emocional' del contenido, no solo un contador de likes."
    },
    {
      term: "Sovereign Connect™",
      category: "Privacidad",
      traditional: "OAuth / Data Consent",
      definition: "El protocolo que garantiza que ningún dato de un ciudadano sea utilizado sin su consentimiento explícito, revocable en cualquier momento.",
      philosophy: "El consentimiento tradicional es un checkbox que nadie lee. Sovereign Connect es un contrato inteligente donde cada uso de tus datos requiere tu firma criptográfica. No das 'permiso general', autorizas usos específicos.",
      example: "Si ISABELLA AI quiere usar un momento tuyo para entrenar su modelo de detección de crisis, te notifica, explica el propósito y solicita tu autorización. Puedes aceptar, rechazar o negociar compensación."
    },
    {
      term: "TAMV Credits",
      category: "Economía",
      traditional: "In-App Currency / Virtual Coins",
      definition: "La moneda interna del ecosistema, utilizada para transacciones de servicios premium, pero no vinculada a valor consciente.",
      philosophy: "Los Credits son funcionales (compras), los Tokens son reputacionales (reconocimiento). Esta separación evita que el sistema se convierta en 'pagar por alcance', manteniendo la meritocracia consciente.",
      example: "Usas Credits para crear un Dream Space premium con mayor capacidad. Ganas Tokens creando contenido valioso en ese Dream Space."
    }
  ];

  const categories = [...new Set(terms.map(t => t.category))];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          El Léxico Universal
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Un glosario enciclopédico de los términos, conceptos y filosofías que definen el 
          ecosistema TAMV. Cada término no solo se define, sino que se justifica frente 
          a los paradigmas tradicionales que reemplaza.
        </p>
      </div>

      {/* Category Badges */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="text-sm px-3 py-1">
          <BookOpen className="w-3 h-3 mr-2" />
          {terms.length} Términos Definidos
        </Badge>
        {categories.map((cat) => (
          <Badge key={cat} variant="outline" className="text-sm px-3 py-1">
            {cat}
          </Badge>
        ))}
      </div>

      {/* Terms Accordion */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            Diccionario de la Civilización Digital
          </CardTitle>
          <CardDescription>
            Expande cada término para ver su definición técnica, justificación filosófica y ejemplos de uso.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {terms.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="font-semibold text-lg">{item.term}</span>
                    <span className="text-sm text-muted-foreground ml-auto mr-4 hidden md:inline">
                      vs. "{item.traditional}"
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4 pb-2">
                    {/* Definition */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Definición
                      </h4>
                      <p className="text-muted-foreground leading-relaxed pl-4">
                        {item.definition}
                      </p>
                    </div>

                    {/* Philosophy */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Por qué reemplaza a "{item.traditional}"
                      </h4>
                      <p className="text-muted-foreground leading-relaxed pl-4 italic">
                        {item.philosophy}
                      </p>
                    </div>

                    {/* Example */}
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">
                        💡 Ejemplo de Uso
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.example}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Footer Note */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">
            Este glosario es un <strong>documento vivo</strong>. A medida que el ecosistema TAMV 
            evoluciona, nuevos términos y conceptos se añadirán para reflejar la expansión de la 
            civilización digital.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsGlossary;
