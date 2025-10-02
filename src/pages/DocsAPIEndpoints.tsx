import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Brain, Sparkles, Home } from "lucide-react";

const DocsAPIEndpoints = () => {
  const endpointGroups = [
    {
      category: "Identidad y Soberanía",
      icon: User,
      endpoints: [
        {
          method: "POST",
          path: "/auth/login",
          summary: "Iniciar Sesión y Obtener Token Soberano",
          description: "Autenticación del usuario y obtención de tokens de acceso.",
          auth: false,
          request: {
            email: "usuario@ejemplo.com",
            password: "contraseña_segura"
          },
          response: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            user: {
              id: "uuid-v4",
              username: "ciudadano_tamv",
              consciousScore_avg: 0.87
            }
          }
        },
        {
          method: "GET",
          path: "/users/me",
          summary: "Obtener Perfil del Alma Digital (ID-ENVIDA™)",
          description: "Retorna el perfil completo del ciudadano autenticado.",
          auth: true,
        }
      ]
    },
    {
      category: "Capa Sentiente",
      icon: Brain,
      endpoints: [
        {
          method: "POST",
          path: "/moments",
          summary: "Manifestar una Intención (Crear Momento Contextual)",
          description: "Endpoint central para toda interacción significativa. Cada post, comentario o interacción crea un 'momento'.",
          auth: true,
          request: {
            content: "Explorando la arquitectura de la Capa Sentiente para crear comunidad empática.",
            metadata: {
              is_reply: false,
              thread_depth: 0
            }
          },
          response: {
            id: "uuid-v4",
            userId: "uuid-v4",
            content: "Explorando la arquitectura...",
            timestamp: "2025-10-02T10:00:00Z",
            depthLevel: "MEANINGFUL",
            resonance: ["CURIOSITY", "GROWTH", "CONNECTION"],
            consciousScore: 0.8542
          }
        },
        {
          method: "GET",
          path: "/feed/conscious",
          summary: "Recibir el Flujo Consciente",
          description: "Feed de momentos ordenados por consciousScore, no por viralidad. El feed anti-algoritmo.",
          auth: true,
        },
        {
          method: "GET",
          path: "/synergies/detect",
          summary: "Detectar Oportunidades de Co-Creación",
          description: "Activa el CoCreationEngine para encontrar ciudadanos con sinergia potencial.",
          auth: true,
        }
      ]
    },
    {
      category: "Experiencia 4D",
      icon: Home,
      endpoints: [
        {
          method: "POST",
          path: "/dream-spaces",
          summary: "Forjar un Dream Space",
          description: "Crea un nuevo espacio virtual 4D personalizado.",
          auth: true,
          request: {
            name: "Laboratorio de Ideas",
            description: "Un espacio para explorar conceptos innovadores",
            template: "creative_studio"
          },
          response: {
            id: "uuid-v4",
            ownerId: "uuid-v4",
            name: "Laboratorio de Ideas",
            description: "Un espacio para explorar conceptos innovadores",
            state: "PRIVATE"
          }
        }
      ]
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-secondary/20 text-secondary border-secondary/30";
      case "POST":
        return "bg-primary/20 text-primary border-primary/30";
      case "PUT":
        return "bg-accent/20 text-accent border-accent/30";
      case "DELETE":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Endpoints de la API</h1>
        <p className="text-xl text-muted-foreground">
          Referencia completa de todos los endpoints del Protocolo Kórima v1.0
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle>URL Base</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
            <code className="text-primary">https://api.tamv.civilization/v1</code>
          </div>
        </CardContent>
      </Card>

      {endpointGroups.map((group) => {
        const Icon = group.icon;
        return (
          <div key={group.category} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">{group.category}</h2>
            </div>

            <div className="space-y-4">
              {group.endpoints.map((endpoint, idx) => (
                <Card key={idx} className="glass-effect border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <Badge className={`${getMethodColor(endpoint.method)} font-mono`}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono text-foreground/80">{endpoint.path}</code>
                      {endpoint.auth && (
                        <Badge variant="outline" className="text-xs">
                          🔒 Requiere Auth
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{endpoint.summary}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{endpoint.description}</p>
                  </CardHeader>

                  {endpoint.request && (
                    <CardContent className="border-t border-border/30 pt-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">Request Body:</h4>
                      <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                        <pre>{JSON.stringify(endpoint.request, null, 2)}</pre>
                      </div>
                    </CardContent>
                  )}

                  {endpoint.response && (
                    <CardContent className="border-t border-border/30 pt-4">
                      <h4 className="text-sm font-semibold text-secondary mb-2">Response (200):</h4>
                      <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                        <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        );
      })}

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Autenticación</CardTitle>
          <CardContent className="pt-4 px-0">
            <p className="text-muted-foreground mb-4">
              Todos los endpoints protegidos requieren un Bearer Token en el header:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <code className="text-primary">Authorization: Bearer {'<tu-token-jwt>'}</code>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsAPIEndpoints;
