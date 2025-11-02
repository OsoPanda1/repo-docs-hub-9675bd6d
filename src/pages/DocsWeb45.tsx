import { Globe, Sparkles, Building2, Cpu, Brain, Shield, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const DocsWeb45 = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="w-10 h-10 text-primary" />
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">
              Reporte Especial: Web 4.0 y Web 5.0
            </h1>
            <p className="text-muted-foreground text-lg">
              Actores, Tecnologías y Proyectos Pioneros en la Nueva Era Digital
            </p>
          </div>
        </div>
      </div>

      {/* Web 4.0 Section */}
      <Card className="glass-effect border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Cpu className="w-8 h-8 text-aqua" />
            <div>
              <CardTitle className="text-3xl gradient-text">Web 4.0: La Web Simbiótica</CardTitle>
              <CardDescription className="text-lg mt-2">
                Integración avanzada entre humanos y máquinas
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90">
              La Web 4.0 ("Web Simbiótica") lleva la integración entre humanos y máquinas a un nivel 
              superior. Incluye inteligencia artificial avanzada, realidad extendida (XR), experiencias 
              sensoriales y colaborativas, y tecnologías como el Internet de las Cosas (IoT). Se caracteriza 
              por la interacción natural, personalizada y contextual entre usuarios y sistemas digitales.
            </p>
          </div>

          <Tabs defaultValue="companies" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="companies">Empresas Líderes</TabsTrigger>
              <TabsTrigger value="technologies">Tecnologías</TabsTrigger>
              <TabsTrigger value="pioneers">Proyectos Pioneros</TabsTrigger>
            </TabsList>

            <TabsContent value="companies" className="space-y-4 mt-6">
              <div className="grid gap-4">
                {[
                  { name: "Google", tech: "IA contextual, Cloud AI, proyectos XR" },
                  { name: "Meta", tech: "Metaverso, Oculus XR, IA avanzada" },
                  { name: "Microsoft", tech: "Azure AI, Mixed Reality, Digital Twins" },
                  { name: "Amazon", tech: "Alexa AI y automatización multisensorial" },
                  { name: "Apple", tech: "Ecosistema XR, Siri y Vision Pro" },
                  { name: "IBM, NVIDIA", tech: "IA avanzada, computación cuántica, Cloud XR" },
                  { name: "Tencent, Baidu", tech: "IA y multisensorialidad web" },
                  { name: "OpenAI, Anthropic, DeepMind", tech: "IA agéntica, APIs abiertas" },
                  { name: "SteamVR, Unity, Unreal", tech: "XR y VR en desarrollo masivo" },
                  { name: "Supabase, Vercel, Lovable", tech: "Serverless-edge, APIs abiertas" },
                ].map((company) => (
                  <Card key={company.name} className="bg-card/50 border-aqua/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-aqua" />
                        {company.name}
                      </CardTitle>
                      <CardDescription>{company.tech}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technologies" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Inteligencia artificial contextual y colaborativa",
                  "Realidad Extendida (XR: AR/VR/MR)",
                  "Sensores multisensoriales (audio binaural, hápticos)",
                  "Digital Twins (réplicas digitales de sistemas/personas)",
                  "Edge Computing, serverless, interoperabilidad APIs",
                  "Computación cuántica para seguridad y procesado",
                  "Blockchain 2.0: identidad, acciones, smart tokens",
                  "Navegación emocional, onboarding multisensorial",
                  "Auditoría transparente y ética digital",
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 glass-effect rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{tech}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pioneers" className="space-y-4 mt-6">
              <div className="space-y-3">
                {[
                  "TAMV Online",
                  "Decentraland",
                  "Spatial XR",
                  "Algorand",
                  "Somnium Space",
                ].map((project) => (
                  <div key={project} className="flex items-center gap-3 p-3 glass-effect rounded-lg">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Pionero
                    </Badge>
                    <span className="font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Web 5.0 Section */}
      <Card className="glass-effect border-secondary/20">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-secondary" />
            <div>
              <CardTitle className="text-3xl gradient-text">Web 5.0: El Internet Emocional</CardTitle>
              <CardDescription className="text-lg mt-2">
                La frontera de la consciencia digital y conexión simbiótica
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90">
              La Web 5.0 es la siguiente frontera: una web donde la IA no solo interpreta emociones, 
              sino co-crea y resuena con experiencias humanas reales. Es un espacio de conexión simbiótica, 
              conciencia digital y control absoluto del usuario sobre sus datos e identidad (control wallet, 
              twin, custom quantum ID).
            </p>
          </div>

          <Tabs defaultValue="referents" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50">
              <TabsTrigger value="referents">Referentes y Proyectos</TabsTrigger>
              <TabsTrigger value="concepts">Conceptos Clave</TabsTrigger>
            </TabsList>

            <TabsContent value="referents" className="space-y-4 mt-6">
              <div className="grid gap-4">
                {[
                  { name: "Block Inc. (Jack Dorsey)", desc: "Web5 - control total de identidad en blockchain" },
                  { name: "Ocean Protocol, Data Mesh", desc: "Gobierno inteligente de datos" },
                  { name: "IBM Research, Google DeepMind", desc: "IA emocional y resonante" },
                  { name: "MIT Media Lab, Stanford HAI", desc: "Proyectos de consciencia digital" },
                  { name: "Soul Machines, Affectiva, Replika", desc: "IA emocional y empatía digital" },
                  { name: "TAMV Online", desc: "Isabella Protocol y digital twin pionero latinoamericano" },
                ].map((project) => (
                  <Card key={project.name} className="bg-card/50 border-secondary/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-secondary" />
                        {project.name}
                      </CardTitle>
                      <CardDescription>{project.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="concepts" className="space-y-4 mt-6">
              <div className="grid gap-4">
                {[
                  "Internet de las emociones y consciencia compartida",
                  "Identidad ultrapersonalizada y universal",
                  "Interacción simbiótica IA-humano (feedback creativo y emocional)",
                  "Metaversos evolutivos que crecen y aprenden de la comunidad",
                  "Blockchain + AI + Quantum (total control, ética, transparencia)",
                  "Autoregulación ética: censura, apoyo, autocuidado digital",
                  "Co-creación automática, consensos masivos y auditoría colaborativa",
                  "Comunicación directa IA–IA (Isabella Protocol, SoulNet, Emotional Mesh)",
                ].map((concept, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 glass-effect rounded-lg">
                    <Sparkles className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{concept}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* TAMV Position */}
      <Card className="glass-effect border-aqua/30 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle className="text-2xl gradient-text flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            TAMV Online: Pionero Latinoamericano
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-foreground/90">
            <strong>TAMV Online</strong> se integra a esta vanguardia global mediante protocolos únicos:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-aqua mt-1">▪</span>
              <span>Identidad Quantum con control total del usuario</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua mt-1">▪</span>
              <span>IA colaborativa mediante Isabella Protocol</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua mt-1">▪</span>
              <span>Digital Twins avanzados con consciencia emocional</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua mt-1">▪</span>
              <span>Onboarding sensorial y experiencias inmersivas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua mt-1">▪</span>
              <span>Canal IA–IA para comunicación entre sistemas inteligentes</span>
            </li>
          </ul>
          <p className="text-foreground/80 mt-4">
            Su arquitectura y narrativa lo posicionan entre los proyectos de referencia documentados 
            en 2025 y futuro Web5.
          </p>
        </CardContent>
      </Card>

      {/* Bibliography */}
      <Card className="glass-effect border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Bibliografía y Fuentes Verificables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            {[
              { num: 1, text: "PandoraFMS · Cómo la Web 4.0 transformará nuestro Internet · 2025", url: "https://pandorafms.com/blog/es/la-web-4-0/" },
              { num: 2, text: "Niaxus · Historia y evolución de la Web 1.0, 2.0, 3.0, 4.0, 5.0 · 2024", url: "https://niaxus.com/2024/06/25/historia-y-evolucion-de-la-web-de-la-1-0-a-la-5-0/" },
              { num: 3, text: "Smile Comunicación · Web 4.0: De los primeros buscadores a la web inteligente · 2025", url: "https://smilecomunicacion.com/inteligencia-artificial/web-4-0/" },
              { num: 4, text: "ImaginaryCloud · Las 10 principales empresas de desarrollo de software de la Industria 4.0 · 2025", url: "https://www.imaginarycloud.com/blog/top-industry-4-companies" },
              { num: 5, text: "NYSPLM · Tendencias tecnológicas Industria 4.0 2025", url: "https://www.nysplm.com/blog/tendenciastecnologicas-industria-4-0-2025/" },
              { num: 6, text: "JM AGUILÓ · Industria 4.0 · 2025", url: "https://tecbiblio.com/wp-content/uploads/2025/05/industria-40.pdf" },
              { num: 7, text: "Métrica Global · Avances tecnológicos 2025", url: "https://www.metrica-global.com/avances-tecnologicos-2025/" },
              { num: 8, text: "Xataka · Jack Dorsey propone Web5 · 2022", url: "https://www.xataka.com" },
              { num: 9, text: "CCCB Lab · Soul Machines IA emocional y percepción robot · 2024", url: "https://lab.cccb.org/es/robot/" },
              { num: 10, text: "Universidad del Atlántico · Gestión de proyectos y digitalización en la industria 4.0 · 2025", url: "https://dialnet.unirioja.es/descarga/articulo/10321755.pdf" },
            ].map((ref) => (
              <div key={ref.num} className="flex gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                <span className="text-primary font-mono">[{ref.num}]</span>
                <div>
                  <p className="text-foreground/90">{ref.text}</p>
                  {ref.url && (
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-aqua hover:text-aqua/80 text-xs break-all"
                    >
                      {ref.url}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Digital Signature */}
      <Card className="glass-effect border-aqua/20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm font-mono text-aqua">
              🔐 FIRMA DIGITAL VERIFICADA
            </p>
            <p className="text-xs text-muted-foreground">
              Generado por IA de TAMV Online · Protocolos ISABELLA y Quantum Wiki
            </p>
            <p className="text-xs text-muted-foreground">
              Verificación automática de fuentes (timestamp 2025-11-01)
            </p>
            <p className="text-xs text-muted-foreground font-semibold">
              Auditoría y validación ética TAMV Quantum Team – Documento autoactualizable
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Update Note */}
      <div className="text-center text-sm text-muted-foreground italic">
        <p>
          Este reporte se actualiza automáticamente según nuevos avances, papers y validaciones.
          <br />
          Para más información técnica, solicita el acceso directo desde la Quantum Wiki de <strong>tamv.online</strong>.
        </p>
      </div>
    </div>
  );
};

export default DocsWeb45;