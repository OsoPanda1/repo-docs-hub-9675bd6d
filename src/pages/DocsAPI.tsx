import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DocsAPI = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/spaces",
      description: "Crear un nuevo espacio virtual",
      auth: true,
    },
    {
      method: "GET",
      path: "/api/v1/spaces/:id",
      description: "Obtener información de un espacio",
      auth: true,
    },
    {
      method: "PUT",
      path: "/api/v1/spaces/:id",
      description: "Actualizar configuración de un espacio",
      auth: true,
    },
    {
      method: "DELETE",
      path: "/api/v1/spaces/:id",
      description: "Eliminar un espacio virtual",
      auth: true,
    },
    {
      method: "POST",
      path: "/api/v1/users/register",
      description: "Registrar un nuevo usuario",
      auth: false,
    },
    {
      method: "POST",
      path: "/api/v1/users/login",
      description: "Autenticar usuario",
      auth: false,
    },
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
        <h1 className="text-4xl font-bold gradient-text">API Reference</h1>
        <p className="text-xl text-muted-foreground">
          Documentación completa de la API REST del Metaverso TAMV.
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle>Autenticación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            La API utiliza tokens JWT para autenticación. Incluye el token en el header Authorization:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
            <code className="text-primary">Authorization: Bearer {'<tu-token-jwt>'}</code>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Endpoints Principales</h2>
        <div className="space-y-3">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 flex-wrap">
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
                <p className="text-sm text-muted-foreground mt-2">{endpoint.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Ejemplo de Respuesta</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6">
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-1">
              <div>{`{`}</div>
              <div className="ml-4"><span className="text-secondary">"success"</span>: <span className="text-primary">true</span>,</div>
              <div className="ml-4"><span className="text-secondary">"data"</span>: {`{`}</div>
              <div className="ml-8"><span className="text-secondary">"id"</span>: <span className="text-primary">"space_123abc"</span>,</div>
              <div className="ml-8"><span className="text-secondary">"name"</span>: <span className="text-primary">"Mi Espacio"</span>,</div>
              <div className="ml-8"><span className="text-secondary">"dimension"</span>: <span className="text-primary">"3d"</span>,</div>
              <div className="ml-8"><span className="text-secondary">"maxUsers"</span>: <span className="text-accent">100</span></div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Rate Limits</CardTitle>
          <CardContent className="pt-4 px-0">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Plan Gratuito:</strong> 100 requests/hora</li>
              <li>• <strong>Plan Pro:</strong> 1,000 requests/hora</li>
              <li>• <strong>Plan Enterprise:</strong> Ilimitado</li>
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsAPI;
