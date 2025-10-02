import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Code } from "lucide-react";

const DocsModels = () => {
  const models = [
    {
      name: "ContextualMoment",
      description: "Representa un momento de interacción significativa en el ecosistema TAMV.",
      properties: [
        { name: "id", type: "string (uuid)", description: "Identificador único del momento" },
        { name: "userId", type: "string (uuid)", description: "ID del ciudadano que creó el momento" },
        { name: "content", type: "string", description: "Contenido textual de la interacción" },
        { name: "timestamp", type: "string (date-time)", description: "Momento de creación" },
        { name: "depthLevel", type: "enum", description: "SURFACE | ENGAGED | MEANINGFUL | TRANSFORMATIVE" },
        { name: "resonance", type: "array[enum]", description: "JOY, CURIOSITY, VULNERABILITY, INSPIRATION, etc." },
        { name: "consciousScore", type: "number (float)", description: "Score de 0 a 1 que mide importancia" },
      ]
    },
    {
      name: "IDEnvida",
      description: "El Alma Digital de un ciudadano TAMV. Identidad soberana y verificable.",
      properties: [
        { name: "id", type: "string (uuid)", description: "Identificador único del ciudadano" },
        { name: "username", type: "string", description: "Nombre de usuario único" },
        { name: "consciousScore_avg", type: "number (float)", description: "Score consciente promedio" },
        { name: "resonance_profile", type: "object", description: "Perfil de resonancias emocionales dominantes" },
      ]
    },
    {
      name: "DreamSpace",
      description: "Espacios virtuales 4D donde los ciudadanos co-crean y colaboran.",
      properties: [
        { name: "id", type: "string (uuid)", description: "Identificador único del espacio" },
        { name: "ownerId", type: "string (uuid)", description: "Propietario del espacio" },
        { name: "name", type: "string", description: "Nombre del espacio" },
        { name: "description", type: "string", description: "Descripción y propósito" },
        { name: "state", type: "enum", description: "PRIVATE | PUBLIC | ARCHIVED" },
      ]
    },
    {
      name: "SynergyOpportunity",
      description: "Oportunidad de colaboración detectada por el CoCreationEngine.",
      properties: [
        { name: "collaboratorId", type: "string (uuid)", description: "ID del colaborador potencial" },
        { name: "synergyScore", type: "number (float)", description: "Score de compatibilidad 0-1" },
        { name: "sharedInterests", type: "array[string]", description: "Intereses compartidos" },
        { name: "suggestedProject", type: "string", description: "Proyecto sugerido por ISABELLA AI" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Modelos de Datos</h1>
        <p className="text-xl text-muted-foreground">
          Esquemas y estructuras de datos del Protocolo Kórima v1.0
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            Esquemas OpenAPI 3.1.0
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Todos los modelos de datos están definidos en el estándar OpenAPI 3.1.0 y son validados automáticamente 
            por el API Gateway antes de procesarse.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {models.map((model) => (
          <Card key={model.name} className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">{model.name}</CardTitle>
              <p className="text-muted-foreground">{model.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-2 px-3 font-semibold text-primary">Propiedad</th>
                      <th className="text-left py-2 px-3 font-semibold text-primary">Tipo</th>
                      <th className="text-left py-2 px-3 font-semibold text-primary">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {model.properties.map((prop) => (
                      <tr key={prop.name} className="border-b border-border/30">
                        <td className="py-2 px-3 font-mono text-secondary">{prop.name}</td>
                        <td className="py-2 px-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
                        <td className="py-2 px-3 text-muted-foreground">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Ejemplo de Uso con TypeScript
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-secondary">interface</span> <span className="text-primary">ContextualMoment</span> {`{`}</div>
            <div className="ml-4">id: <span className="text-accent">string</span>;</div>
            <div className="ml-4">userId: <span className="text-accent">string</span>;</div>
            <div className="ml-4">content: <span className="text-accent">string</span>;</div>
            <div className="ml-4">timestamp: <span className="text-accent">string</span>;</div>
            <div className="ml-4">depthLevel: <span className="text-primary">'SURFACE'</span> | <span className="text-primary">'ENGAGED'</span> | <span className="text-primary">'MEANINGFUL'</span> | <span className="text-primary">'TRANSFORMATIVE'</span>;</div>
            <div className="ml-4">resonance: <span className="text-primary">Resonance</span>[];</div>
            <div className="ml-4">consciousScore: <span className="text-accent">number</span>;</div>
            <div>{`}`}</div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Validación de Datos</CardTitle>
          <CardContent className="pt-4 px-0">
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Todos los UUIDs deben ser válidos v4</li>
              <li>✓ Los timestamps siguen formato ISO 8601</li>
              <li>✓ Los enums solo aceptan valores predefinidos</li>
              <li>✓ Los scores numéricos están limitados a 0.0-1.0</li>
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsModels;
