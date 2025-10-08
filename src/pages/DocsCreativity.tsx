import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Box, Users, GraduationCap, Music, Sparkles } from "lucide-react";

const DocsCreativity = () => {
  const features = [
    {
      icon: Box,
      title: "Dream Spaces",
      subtitle: "Espacios Virtuales Inmersivos en 4D",
      description: "No son 'grupos' o 'servidores', son realidades compartidas con física simulada, audio espacial y persistencia total.",
      capabilities: [
        "Entornos 3D personalizables con motor DIM-X4",
        "Audio espacial con el sistema Kaos Audio",
        "Física simulada (QuantumPhysicsEngine)",
        "Multijugador sincronizado en tiempo real",
        "Eventos en vivo (conciertos, conferencias, exposiciones)"
      ],
      example: "Un Dream Space para un curso de filosofía puede tener una biblioteca virtual con textos interactivos, un anfiteatro griego para debates y una sala de meditación con música generativa.",
      color: "border-purple-500/50"
    },
    {
      icon: Palette,
      title: "DIM-X4 Studio",
      subtitle: "Herramientas de Creación de Experiencias 4D",
      description: "Suite de herramientas integradas con Unreal Engine 5 para que creadores diseñen experiencias multisensoriales sin necesidad de ser desarrolladores 3D expertos.",
      capabilities: [
        "Editor visual drag-and-drop para espacios 3D",
        "Biblioteca de assets pre-optimizados (modelos, texturas, animaciones)",
        "Sistema de scripting visual para interacciones",
        "Integración con Blender y Unity (importación de assets)",
        "Marketplace de templates y componentes"
      ],
      example: "Un artista musical puede crear un concierto virtual con efectos visuales reactivos al audio, sin escribir una línea de código.",
      color: "border-blue-500/50"
    },
    {
      icon: GraduationCap,
      title: "Puentes de Conocimiento",
      subtitle: "Sistema de Mentoría y Aprendizaje Peer-to-Peer",
      description: "Plataforma que conecta mentores y aprendices según intereses, objetivos y resonancias emocionales, no solo habilidades técnicas.",
      capabilities: [
        "Matchmaking basado en ConsciousScore y resonancias",
        "Sesiones de mentoría en vivo (video, voz, texto, 3D)",
        "Sistema de recompensas para mentores (TAMV Tokens)",
        "Certificaciones verificables en blockchain",
        "Rutas de aprendizaje personalizadas por ISABELLA AI"
      ],
      example: "Un estudiante de programación es conectado con un mentor senior que no solo enseña código, sino que comparte su historia de resiliencia ante el síndrome del impostor.",
      color: "border-green-500/50"
    },
    {
      icon: Users,
      title: "Mentores Empáticos",
      subtitle: "IA Especializada en Educación y Apoyo Emocional",
      description: "Extensiones de ISABELLA entrenadas en dominios específicos (música, arte, programación, filosofía) que actúan como tutores personalizados con empatía codificada.",
      capabilities: [
        "Detección de estilos de aprendizaje (visual, auditivo, kinestésico)",
        "Adaptación de dificultad en tiempo real",
        "Feedback constructivo sin juzgar",
        "Detección de frustración y ajuste de estrategia",
        "Co-creación de proyectos con el estudiante"
      ],
      example: "Un Mentor Empático de piano detecta que el estudiante aprende mejor con analogías visuales y adapta la enseñanza para comparar acordes con colores.",
      color: "border-orange-500/50"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          El Lienzo del Futuro
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          TAMV como plataforma para el arte, la cultura y la educación. Una nueva infraestructura 
          donde la creatividad no es solo consumida, sino co-creada en experiencias multisensoriales 
          que honran la profundidad humana.
        </p>
      </div>

      {/* Visión General */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Más Allá del Consumo: La Era de la Co-Creación
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Las plataformas tradicionales convirtieron a los usuarios en <strong>consumidores pasivos</strong> 
            de contenido. TAMV los transforma en <strong>co-creadores activos</strong> de experiencias. 
            No solo ves arte, lo habitas. No solo escuchas música, la sientes en el espacio. No solo 
            aprendes conceptos, los encarnas en realidades virtuales.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Este cambio no es solo filosófico, es arquitectónico: TAMV provee las herramientas, 
            infraestructura y economía para que <strong>cualquier persona</strong> pueda crear 
            experiencias de nivel AAA sin un equipo de ingenieros.
          </p>
        </CardContent>
      </Card>

      {/* Características Principales */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Las Cuatro Columnas de la Creatividad en TAMV</h2>
        
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <Card key={idx} className={`glass-effect border-2 ${feature.color}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="glass-effect p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="glass-effect p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Capacidades Clave
                  </h4>
                  <ul className="space-y-2">
                    {feature.capabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/30">
                  <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Ejemplo de Uso
                  </h4>
                  <p className="text-sm text-muted-foreground italic">
                    {feature.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Casos de Uso */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Music className="w-6 h-6 text-primary" />
            Casos de Uso: Del Concepto a la Realidad
          </CardTitle>
          <CardDescription>
            Ejemplos concretos de cómo creadores están usando TAMV
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-effect p-6 rounded-lg">
              <Badge variant="outline" className="mb-3">Música</Badge>
              <h3 className="font-semibold mb-2">Conciertos Sensoriales</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Un DJ crea un Dream Space donde la música no solo se escucha, se <strong>ve</strong> 
                (visualizaciones reactivas) y se <strong>siente</strong> (vibraciones hápticas en VR).
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tecnología: DIM-X4 + Kaos Audio + QuantumPhysics para efectos de partículas sincronizadas con bajos
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <Badge variant="outline" className="mb-3">Educación</Badge>
              <h3 className="font-semibold mb-2">Aulas de Historia Inmersiva</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Un profesor de historia crea un Dream Space que recrea la Roma antigua. Los estudiantes 
                no solo leen sobre el Coliseo, lo exploran y lo habitan.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tecnología: DIM-X4 + assets de Unreal Marketplace + narración contextual de ISABELLA AI
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <Badge variant="outline" className="mb-3">Arte</Badge>
              <h3 className="font-semibold mb-2">Galerías 4D</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Un artista digital exhibe pinturas que <strong>respiran</strong> (animaciones sutiles) 
                y cambian según las emociones del espectador (análisis de expresiones faciales).
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tecnología: DIM-X4 + análisis emocional de ISABELLA + shaders procedurales
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <Badge variant="outline" className="mb-3">Comunidad</Badge>
              <h3 className="font-semibold mb-2">Retiros de Bienestar Virtual</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Una comunidad de meditación crea un Dream Space con jardines zen, música binaural 
                espacial y sesiones guiadas por un Mentor Empático especializado en mindfulness.
              </p>
              <p className="text-xs text-muted-foreground italic">
                Tecnología: DIM-X4 + Kaos Audio (binaural beats) + ISABELLA AI + sistema de voz espacial
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparativa con Plataformas Tradicionales */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">TAMV vs. Plataformas Tradicionales de Creación</CardTitle>
          <CardDescription>
            Por qué TAMV redefine el paradigma de plataformas para creadores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-center">Patreon / Ko-fi</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">↔</span>
                  <span>Monetización vía suscripciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Sin herramientas de creación integradas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Experiencias 2D limitadas a posts y videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No hay economía de tokens ni NFTs nativos</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-center">Discord / Slack</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Comunidades activas y organizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Sin experiencias inmersivas 3D/4D</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Engagement superficial (texto, voz)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>No hay sistema de recompensas por valor creado</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg border border-primary/50">
              <h3 className="font-semibold mb-3 text-center text-primary">TAMV</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Monetización vía TAMV Tokens (valor significativo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Suite completa de creación 3D/4D (DIM-X4 Studio)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Experiencias inmersivas multisensoriales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Economía soberana con NFTs, TC y recompensas</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusión */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">El Arte del Futuro No Se Consume, Se Habita</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TAMV no es solo una plataforma para creadores, es un <strong>ecosistema para civilizaciones 
            creativas</strong>. Donde la música se siente en el cuerpo, donde el arte cambia según 
            tus emociones, donde la educación se vive en realidades alternativas y donde cada 
            contribución valiosa se recompensa con una economía consciente.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            El lienzo del futuro no es 2D ni 3D. Es <strong>4D</strong> — donde el tiempo, el espacio, 
            las emociones y la consciencia convergen en experiencias que transforman, no solo entretienen.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsCreativity;
