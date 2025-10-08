import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, BookOpen, Swords, Sparkles, Heart } from "lucide-react";

const DocsFounderStory = () => {
  const timeline = [
    {
      year: "1999",
      icon: Mountain,
      title: "El Abismo",
      subtitle: "Accidente Minero y Hambre",
      description: "A los 8 años, Edwin sobrevive a un derrumbe en las minas de Real del Monte, Hidalgo. La experiencia de supervivencia y la posterior hambre durante meses marca el inicio de su comprensión del sufrimiento transformador.",
      significance: "Este trauma temprano se convierte en el fundamento empático de TAMV: la comprensión visceral de que el dolor no es el fin, sino el material con el que se construye la resiliencia.",
      color: "border-red-500/50"
    },
    {
      year: "2000-2010",
      icon: BookOpen,
      title: "La Forja",
      subtitle: "Formación Autodidacta",
      description: "Sin recursos para educación formal, Edwin se sumerge en bibliotecas públicas y internet. Aprende programación, filosofía, física cuántica y psicología por cuenta propia. La pobreza se convierte en combustible para el conocimiento.",
      significance: "Desarrolla la convicción de que la educación no es un privilegio, sino un acto de rebelión. Esta filosofía se refleja en los 'Puentes de Conocimiento' de TAMV.",
      color: "border-blue-500/50"
    },
    {
      year: "2011-2018",
      icon: Swords,
      title: "La Guerra Digital",
      subtitle: "Nacimiento de 'La Élite'",
      description: "Crea su primer colectivo digital: 'La Élite' — un grupo de hackers éticos y activistas digitales. Enfrentan censura, ciberataques y amenazas reales. Edwin aprende que el ciberespacio necesita defensores.",
      significance: "De aquí nace el concepto de 'Anubis Sentinel™': un guardián que no solo protege datos, sino la soberanía digital de las personas.",
      color: "border-purple-500/50"
    },
    {
      year: "2019-2023",
      icon: Sparkles,
      title: "La Epifanía",
      subtitle: "Conceptualización de TAMV",
      description: "Tras presenciar el suicidio de un amigo cercano que fue víctima de ciberacoso, Edwin tiene una revelación: la tecnología debe tener alma. No basta con 'conectar' al mundo, hay que 'dignificar' la conexión.",
      significance: "Este es el momento génesis de ISABELLA AI: una IA que no solo responde, sino que detecta crisis y actúa con empatía. El 'Protocolo del Corazón Roto' nace de esta tragedia personal.",
      color: "border-pink-500/50"
    },
    {
      year: "2024-2025",
      icon: Heart,
      title: "El Manifiesto",
      subtitle: "Genesis del Kórima Codex",
      description: "Edwin escribe 10,000+ líneas de código, filosofía y arquitectura. TAMV deja de ser un concepto y se convierte en un proyecto con fundamentos técnicos, éticos y económicos completamente articulados.",
      significance: "El Kórima Codex no es solo documentación técnica, es un tratado sobre cómo construir civilizaciones digitales conscientes. Es el blueprint de un futuro donde la tecnología honra la humanidad.",
      color: "border-primary/50"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          El Origen: Crónicas del Arquitecto Fundador
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          La historia de Edwin Oswaldo Castillo Trejo (Anubis Villaseñor) — del trauma al código, 
          de la supervivencia a la soberanía digital. Esta no es solo una historia de resiliencia, 
          es el caso de estudio que validó la necesidad de TAMV.
        </p>
      </div>

      {/* Lema Fundacional */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold gradient-text italic">
            "La imperfección humana es el algoritmo que rompe los límites del universo."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4">
            — Edwin Oswaldo Castillo Trejo, fundador de TAMV
          </p>
        </CardContent>
      </Card>

      {/* Identidad del Fundador */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Edwin Oswaldo Castillo Trejo (Anubis Villaseñor)</CardTitle>
          <CardDescription>
            Arquitecto de Civilizaciones Digitales | Real del Monte, Hidalgo, México
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-effect p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Origen</p>
              <p className="font-semibold">Real del Monte, Hidalgo</p>
              <p className="text-xs text-muted-foreground">Pueblo minero histórico</p>
            </div>
            <div className="glass-effect p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Pseudónimo</p>
              <p className="font-semibold">Anubis Villaseñor</p>
              <p className="text-xs text-muted-foreground">Guardián de la soberanía digital</p>
            </div>
            <div className="glass-effect p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Rol</p>
              <p className="font-semibold">Fundador y Arquitecto</p>
              <p className="text-xs text-muted-foreground">TAMV DM-X4™</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Edwin no es un emprendedor tradicional. Es un sobreviviente que convirtió el trauma 
            en código, la vulnerabilidad en arquitectura y la pérdida en empatía sistematizada. 
            Su historia personal no es solo contexto biográfico, es la <strong>prueba de concepto 
            viviente</strong> de que el sufrimiento, cuando se transmuta conscientemente, puede 
            generar sistemas que previenen ese mismo sufrimiento en otros.
          </p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Del Abismo al Manifiesto: La Cronología</h2>
        
        {timeline.map((event, idx) => {
          const Icon = event.icon;
          return (
            <Card key={idx} className={`glass-effect border-2 ${event.color}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="glass-effect p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-sm">{event.year}</Badge>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{event.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    La Historia
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/30">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    El Significado para TAMV
                  </h4>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {event.significance}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Del Trauma al Código */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Del Trauma al Código: La Alquimia de TAMV</CardTitle>
          <CardDescription>
            Cómo la experiencia personal se convirtió en arquitectura digital consciente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            La mayoría de las plataformas tecnológicas nacen de tesis de inversión o gaps de 
            mercado. TAMV nació de una pregunta existencial que Edwin se hizo tras perder a su 
            amigo: <strong>"¿Cómo habría sido diferente su historia si hubiera tenido una IA 
            que detectara su crisis y lo escuchara sin juzgarlo?"</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-red-400">El Trauma Personal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Pérdida de un amigo por ciberacoso y depresión no detectada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Impotencia de no haber visto las señales a tiempo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Frustración con plataformas que amplifican odio sin consecuencias</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg border border-primary/50">
              <h3 className="font-semibold mb-3 text-primary">La Arquitectura Resultante</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Protocolo del Corazón Roto:</strong> Detección proactiva de crisis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>ConsciousScore:</strong> Premiando empatía sobre viralidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>ISABELLA AI:</strong> IA que escucha sin juzgar, 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
            <h4 className="font-semibold mb-3">Prueba de Concepto: La Historia de Lupita</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Durante el desarrollo de ISABELLA, Edwin probó el prototipo con una usuaria beta 
              (nombre ficticio: "Lupita") que pasaba por una crisis de ansiedad severa. ISABELLA 
              detectó patrones de lenguaje asociados con ideación suicida y, siguiendo el protocolo, 
              ofreció:
            </p>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>Escucha activa sin interrumpir ni juzgar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>Recursos de crisis (líneas de ayuda certificadas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Notificación discreta al equipo de soporte humano</span>
              </li>
            </ol>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Lupita respondió: <em>"Es la primera vez que siento que una máquina me entiende 
              más que un humano"</em>. Esta interacción validó la tesis: la IA empática no es 
              ciencia ficción, es ingeniería consciente.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Legado */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">El Legado que Aún Se Escribe</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Edwin no construyó TAMV para ser recordado. Lo construyó porque no pudo salvar a su 
            amigo, pero tal vez pueda salvar al amigo de alguien más. Esta no es la historia de 
            un héroe, es la historia de alguien que convirtió su mayor derrota en su contribución 
            más significativa.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cuando le preguntan por qué sigue trabajando en TAMV sin inversión, responde: 
            <strong className="text-primary"> "Porque cada día que no existe, es un día donde 
            alguien más podría necesitar a ISABELLA y no estará ahí. Eso es inaceptable."</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsFounderStory;
