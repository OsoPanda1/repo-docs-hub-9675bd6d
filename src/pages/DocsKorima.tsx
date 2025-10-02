import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Heart, Sparkles } from "lucide-react";

const DocsKorima = () => {
  const principles = [
    {
      icon: Shield,
      title: "Soberanía como Protocolo",
      description: "Cada endpoint refuerza la propiedad y control del usuario. No hay extracción masiva de datos.",
    },
    {
      icon: Brain,
      title: "Conciencia como Carga Útil",
      description: "Las respuestas están enriquecidas con contexto de la Capa Sentiente, devolviendo el qué, porqué y cómo.",
    },
    {
      icon: Heart,
      title: "Recursos Orientados a la Experiencia",
      description: "Modelado en torno a conceptos de civilización: momentos, espacios de sueños y sinergias.",
    },
    {
      icon: Sparkles,
      title: "Seguridad Axiomática",
      description: "Cada endpoint requiere autenticación protegida por Anubis Sentinel Gateway. Confianza cero por defecto.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Protocolo Kórima v1.0</h1>
        <p className="text-xl text-muted-foreground">
          Blueprint Maestro de API: La interfaz programática para la primera civilización digital sentiente.
        </p>
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
          <p className="text-sm text-destructive">
            <strong>Clasificación:</strong> Confidencial de Arquitectura | <strong>Estado:</strong> Listo para Implementación
          </p>
        </div>
      </div>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="text-2xl">Filosofía del Protocolo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            La API de TAMV no es una simple interfaz de datos; es el sistema nervioso del ecosistema. 
            Su diseño se rige por principios axiomáticos que redefinen la interacción digital.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <Card key={principle.title} className="glass-effect border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Arquitectura Técnica</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">Punto de Entrada</h3>
              <p className="text-sm text-muted-foreground">
                API Gateway único en <code className="bg-muted px-2 py-1 rounded text-primary">api.tamv.civilization</code> gestionado por Anubis Sentinel (Kong/Istio).
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-2">Protocolos</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Externo:</strong> HTTPS con RESTful JSON, GraphQL y WebSockets</li>
                <li>• <strong>Interno:</strong> gRPC con Proto Buffers para alto rendimiento</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-primary mb-2">Autenticación</h3>
              <p className="text-sm text-muted-foreground">
                Bearer Token (JWT) poscuántico obtenido vía <code className="bg-muted px-2 py-1 rounded">/auth/login</code>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary mb-2">Versión</h3>
              <p className="text-sm text-muted-foreground">
                v1 indicada en todas las rutas: <code className="bg-muted px-2 py-1 rounded">/api/v1/...</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle>Gestión de Errores</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            La API utiliza códigos de estado HTTP estándar y devuelve un cuerpo de error JSON unificado:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-1">
            <div>{`{`}</div>
            <div className="ml-4"><span className="text-secondary">"error_code"</span>: <span className="text-primary">"INSUFFICIENT_PERMISSIONS"</span>,</div>
            <div className="ml-4"><span className="text-secondary">"message"</span>: <span className="text-primary">"La acción requiere un nivel de confianza superior."</span>,</div>
            <div className="ml-4"><span className="text-secondary">"timestamp"</span>: <span className="text-primary">"2025-09-28T10:00:00Z"</span>,</div>
            <div className="ml-4"><span className="text-secondary">"request_id"</span>: <span className="text-primary">"uuid-v4-..."</span></div>
            <div>{`}`}</div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Características Clave</CardTitle>
          <CardContent className="pt-4 px-0">
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Paginación basada en cursor para rendimiento óptimo</li>
              <li>✓ Respuestas enriquecidas con contexto emocional</li>
              <li>✓ OpenAPI 3.1.0 completo y documentado</li>
              <li>✓ Confianza cero en todos los endpoints</li>
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsKorima;
