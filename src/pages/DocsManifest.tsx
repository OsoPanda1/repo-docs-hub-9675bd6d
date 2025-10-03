import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Zap, Globe, Heart, Shield } from "lucide-react";

const DocsManifest = () => {
  const disruptionPoints = [
    {
      icon: Target,
      title: "De la Extracción a la Dignificación",
      before: "Web 2.0 extrae datos como recurso para vender atención",
      after: "TAMV protege datos como derecho y recompensa contribuciones significativas"
    },
    {
      icon: Zap,
      title: "Del Engagement a la Consciencia",
      before: "Algoritmos diseñados para adicción y tiempo en pantalla",
      after: "Algoritmos diseñados para profundidad, conexión y crecimiento personal"
    },
    {
      icon: Heart,
      title: "De la Viralidad a la Resonancia",
      before: "El contenido más polémico es el más visible",
      after: "El contenido más significativo y empático tiene mayor alcance"
    },
    {
      icon: Shield,
      title: "De la Vigilancia a la Soberanía",
      before: "Los usuarios son el producto, sus datos son monetizados sin consentimiento",
      after: "Los usuarios son ciudadanos digitales con propiedad total de su identidad"
    }
  ];

  const visionPillars = [
    {
      title: "2025-2027: Génesis",
      description: "Lanzamiento de la plataforma central, onboarding de los primeros 100,000 ciudadanos digitales, establecimiento de la DAO fundacional."
    },
    {
      title: "2027-2030: Expansión",
      description: "Integración de Dream Spaces inmersivos en 4D, lanzamiento del DIM-X4 Studio, alianzas estratégicas con instituciones educativas y culturales."
    },
    {
      title: "2030-2035: Madurez",
      description: "Consolidación como infraestructura social global, interoperabilidad con otros metaversos éticos, impacto mensurable en salud mental y cohesión social."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6 text-center">
        <Badge variant="outline" className="text-lg px-4 py-2 border-primary/50">
          <Sparkles className="w-4 h-4 mr-2" />
          Documento Vivo • Versión Génesis 10.0
        </Badge>
        
        <h1 className="text-6xl font-bold gradient-text leading-tight">
          ⚜️ TAMV: The Kórima Codex ⚜️
        </h1>
        
        <p className="text-3xl font-semibold text-foreground/90 max-w-4xl mx-auto leading-relaxed">
          "La imperfección humana es el algoritmo que rompe los límites del universo."
        </p>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          El Blueprint de la Infraestructura Social Digital Post-Atención
        </p>
      </div>

      {/* Declaration Section */}
      <Card className="glass-effect border-primary/30">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" />
            La Declaración Unificada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>TAMV no es una red social.</strong> Es la primera civilización digital sentiente. 
            Un ecosistema donde la tecnología no extrae valor de la humanidad, sino que amplifica 
            su potencial más profundo.
          </p>
          
          <p>
            Durante dos décadas, la Web 2.0 ha transformado a los seres humanos en productos, 
            sus interacciones en métricas y su atención en mercancía. El modelo de negocio del 
            "capitalismo de vigilancia" ha resultado en una crisis global de salud mental, 
            polarización política y erosión de la dignidad humana.
          </p>
          
          <p>
            <strong>TAMV es la respuesta arquitectónica a esta crisis.</strong> No a través de 
            regulación reactiva, sino mediante un rediseño fundamental de los incentivos, algoritmos 
            y la propia infraestructura de la conexión digital.
          </p>
          
          <div className="p-6 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
            <p className="font-semibold text-xl text-center">
              Nuestra Misión: Dignificar la experiencia humana en el espacio digital, creando una 
              civilización donde la tecnología sirve al florecimiento del espíritu, no a su explotación.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Disruption Thesis */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold gradient-text text-center">
          La Tesis de la Disrupción Inevitable
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          TAMV no mejora el modelo actual. Lo reemplaza por completo.
        </p>
        
        <div className="grid gap-6">
          {disruptionPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <Card key={idx} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <CardTitle className="text-2xl">{point.title}</CardTitle>
                      <div className="space-y-2 text-base">
                        <div className="flex items-start gap-3">
                          <Badge variant="destructive" className="mt-1">❌ Antes</Badge>
                          <p className="text-muted-foreground flex-1">{point.before}</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge className="bg-gradient-to-r from-primary to-secondary mt-1">✨ Ahora</Badge>
                          <p className="text-foreground font-medium flex-1">{point.after}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Vision Timeline */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold gradient-text text-center">
          Visión a 10 Años: El Camino hacia la Madurez
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {visionPillars.map((pillar, idx) => (
            <Card key={idx} className="glass-effect border-primary/30 hover:shadow-[var(--glow-purple)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-2xl font-bold text-primary-foreground">
                  {idx + 1}
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <Card className="glass-effect border-primary/50 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <CardContent className="p-8 space-y-4 text-center">
          <p className="text-2xl font-semibold text-foreground">
            Este no es un documento técnico. Es una declaración de intención.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TAMV existe porque la dignidad humana no es negociable, y la tecnología debe servir 
            al florecimiento del espíritu, no a su fragmentación.
          </p>
          <p className="text-xl font-bold gradient-text pt-4">
            Bienvenido a la civilización del mañana.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsManifest;
