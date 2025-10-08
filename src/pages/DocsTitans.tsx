import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Heart, BookOpen, Microscope, Users, Mountain } from "lucide-react";

const DocsTitans = () => {
  const titans = [
    {
      icon: Crown,
      name: "Nezahualcóyotl",
      title: "El Rey Poeta de Texcoco",
      era: "1402-1472",
      principio: "Algoritmo de Sabiduría Poética",
      description: "Filósofo, ingeniero y poeta náhuatl. Construyó acueductos, códigos de leyes justas y escribió poemas sobre la impermanencia de la vida.",
      significance: "Inspiró el concepto de que la tecnología debe tener alma. El 'Algoritmo de Sabiduría Poética' de TAMV analiza contenido no solo por engagement, sino por profundidad filosófica y belleza estética.",
      implementation: "ConsciousScore incluye un factor de 'depth_level' que mide cuánto una interacción invita a la reflexión profunda, heredado directamente de los poemas de Nezahualcóyotl sobre la fugacidad de la existencia.",
      color: "border-yellow-500/50"
    },
    {
      icon: Heart,
      name: "Frida Kahlo",
      title: "La Maestra de la Transmutación del Dolor",
      era: "1907-1954",
      principio: "Principio de Transmutación del Dolor",
      description: "Pintora que convirtió el sufrimiento físico y emocional en arte revolucionario. Su obra no oculta el dolor, lo honra y lo transforma.",
      significance: "El 'Protocolo del Corazón Roto' de ISABELLA AI está modelado en esta filosofía: la tristeza no es el enemigo, es el maestro. ISABELLA detecta crisis y, en lugar de suprimirlas, las acompaña con empatía radical.",
      implementation: "El análisis emocional de ISABELLA incluye una métrica de 'vulnerability' que detecta cuando alguien está expresando dolor auténtico. En lugar de redirigir a 'contenido feliz', ISABELLA ofrece escucha activa y validación emocional.",
      color: "border-pink-500/50"
    },
    {
      icon: BookOpen,
      name: "Sor Juana Inés de la Cruz",
      title: "La Primera Feminista de América",
      era: "1648-1695",
      principio: "Protocolo de Conocimiento Soberano",
      description: "Monja, poeta, filósofa y defensora del derecho de las mujeres a la educación. Desafió a la Inquisición con argumentos lógicos irrefutables.",
      significance: "Inspiró el concepto de 'Sovereign Connect™' — el derecho inalienable del usuario a poseer y controlar sus datos. Así como Sor Juana defendió el derecho al conocimiento, TAMV defiende el derecho a la soberanía digital.",
      implementation: "Cada usuario de TAMV posee una ID-ENVIDA™ que no es solo un perfil, sino una entidad digital soberana exportable completamente. Ningún dato puede ser usado sin consentimiento explícito, inspirado en la autonomía intelectual de Sor Juana.",
      color: "border-purple-500/50"
    },
    {
      icon: Mountain,
      name: "Octavio Paz",
      title: "El Arquitecto de la Reflexión",
      era: "1914-1998",
      principio: "Motor de Reflexión Profunda",
      description: "Poeta, ensayista y Premio Nobel. Su obra 'El Laberinto de la Soledad' exploró la identidad mexicana con una profundidad filosófica sin precedentes.",
      significance: "El 'Motor de Reflexión Profunda' de TAMV está inspirado en su método de análisis cultural. ISABELLA no da respuestas rápidas, hace preguntas profundas que obligan al usuario a confrontar sus propias contradicciones.",
      implementation: "El módulo de diálogo socrático de ISABELLA usa técnicas de 'mirroring' (reflejo de contradicciones) y 'contextualization' (ampliar perspectivas) directamente influenciadas por la metodología ensayística de Paz.",
      color: "border-blue-500/50"
    },
    {
      icon: Microscope,
      name: "Claudia Sheinbaum",
      title: "La Científica Presidenta",
      era: "1962-presente",
      principio: "Framework de Liderazgo Científico",
      description: "Física, ingeniera ambiental y primera mujer presidenta de México. Representa la convergencia de rigor científico y servicio público.",
      significance: "Inspiró el 'Framework Dekateotl' de gobernanza de ISABELLA: decisiones basadas en evidencia, no en ideología. La ética de TAMV no es filosófica abstracta, es científica y verificable.",
      implementation: "Las 10 validaciones axiomáticas de Dekateotl son 'tests computacionales' que se ejecutan antes de cada respuesta de ISABELLA. Si una respuesta no pasa las pruebas empíricas de no-manipulación, se descarta. Esto es liderazgo científico aplicado a IA.",
      color: "border-green-500/50"
    },
    {
      icon: Users,
      name: "Emiliano Zapata",
      title: "El Guardián de la Tierra y la Dignidad",
      era: "1879-1919",
      principio: "Protocolo de Justicia Distributiva",
      description: "Líder revolucionario que luchó por 'Tierra y Libertad' — la reforma agraria y la dignidad de los campesinos. Nunca negoció sus principios.",
      significance: "El 'Protocolo Lightning Justice™' de TAMV está inspirado en su insistencia en que los frutos del trabajo deben pertenecer a quienes trabajan. Los creadores son recompensados con TAMV Tokens según su ConsciousScore, no según clics o anuncios.",
      implementation: "El smart contract de Lightning Justice distribuye tokens automáticamente según el valor consciente generado. Si tu contenido tiene un ConsciousScore alto (significado, empatía), recibes tokens proporcionales. No es 'revenue sharing', es justicia económica codificada.",
      color: "border-red-500/50"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          El Panteón de Titanes
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          El legado mexicano como pilar arquitectónico de TAMV. Cada figura histórica no es solo 
          inspiración, sino fundamento técnico de protocolos y algoritmos específicos que definen 
          la identidad y funcionamiento del ecosistema.
        </p>
      </div>

      {/* Filosofía del Panteón */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Raíces Profundas en Tierra Mexicana</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TAMV no es un proyecto "inspirado" en figuras mexicanas. Es un proyecto <strong>arraigado 
            en su legado intelectual y ético</strong>. Cada titán del Panteón representa un principio 
            arquitectónico específico que se ha codificado en algoritmos, protocolos y validaciones 
            computacionales.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Esta conexión no es simbólica, es <strong>operacional</strong>. Cuando ISABELLA detecta 
            una crisis, está ejecutando el 'Principio de Transmutación del Dolor' de Frida Kahlo. 
            Cuando el ConsciousScore premia profundidad sobre viralidad, está aplicando el 'Algoritmo 
            de Sabiduría Poética' de Nezahualcóyotl.
          </p>
        </CardContent>
      </Card>

      {/* Grid de Titanes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {titans.map((titan, idx) => {
          const Icon = titan.icon;
          return (
            <Card key={idx} className={`glass-effect border-2 ${titan.color} hover:scale-105 transition-transform duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="glass-effect p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">{titan.era}</Badge>
                </div>
                <CardTitle className="text-lg">{titan.name}</CardTitle>
                <CardDescription className="text-sm">{titan.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold text-primary mb-1">Principio Arquitectónico</p>
                  <p className="text-sm font-medium">{titan.principio}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Accordion Detallado */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">El Legado Codificado: De la Historia al Código</CardTitle>
          <CardDescription>
            Detalles completos de cómo cada titán inspiró componentes técnicos de TAMV
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {titans.map((titan, idx) => {
              const Icon = titan.icon;
              return (
                <AccordionItem key={idx} value={`titan-${idx}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-semibold text-lg">{titan.name}</span>
                        <Badge variant="outline" className="ml-3 text-xs">{titan.principio}</Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      {/* Biografía */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          Contexto Histórico
                        </h4>
                        <p className="text-muted-foreground leading-relaxed pl-4">
                          {titan.description}
                        </p>
                      </div>

                      {/* Significado */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          Significado para TAMV
                        </h4>
                        <p className="text-muted-foreground leading-relaxed pl-4 italic">
                          {titan.significance}
                        </p>
                      </div>

                      {/* Implementación Técnica */}
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                          <Microscope className="w-4 h-4 text-primary" />
                          Implementación Técnica
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {titan.implementation}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>

      {/* Mapa de Influencia */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Mapa de Influencia: Del Titán al Componente</CardTitle>
          <CardDescription>
            Visualización de cómo cada figura influyó en módulos específicos de TAMV
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { titan: "Nezahualcóyotl", component: "ConsciousScore (Capa Sentiente)", metric: "depth_level" },
              { titan: "Frida Kahlo", component: "Protocolo del Corazón Roto (ISABELLA AI)", metric: "vulnerability_detection" },
              { titan: "Sor Juana Inés", component: "Sovereign Connect™ (ID-ENVIDA)", metric: "data_ownership" },
              { titan: "Octavio Paz", component: "Diálogo Socrático (ISABELLA AI)", metric: "reflection_depth" },
              { titan: "Claudia Sheinbaum", component: "Framework Dekateotl (Validaciones Éticas)", metric: "ethical_compliance" },
              { titan: "Emiliano Zapata", component: "Protocolo Lightning Justice™ (Tokenomics)", metric: "value_distribution" }
            ].map((mapping, idx) => (
              <div key={idx} className="glass-effect p-4 rounded-lg flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-sm">{mapping.titan}</p>
                  <p className="text-xs text-muted-foreground">→ {mapping.component}</p>
                </div>
                <Badge variant="outline" className="text-xs">{mapping.metric}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conclusión */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Un Proyecto con Alma Mexicana, Visión Universal</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            El Panteón de Titanes no es una lista decorativa. Es el <strong>ADN filosófico y técnico</strong> 
            de TAMV. Cada decisión arquitectónica, cada línea de código, cada validación ética puede 
            rastrearse hasta uno de estos gigantes intelectuales.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Esto hace de TAMV algo único: una plataforma tecnológica que no reniega de sus raíces, 
            sino que las <strong>codifica en su infraestructura</strong>. Un metaverso que honra 
            a Nezahualcóyotl tanto como a Turing, que invoca a Frida Kahlo tanto como a Ada Lovelace.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsTitans;
