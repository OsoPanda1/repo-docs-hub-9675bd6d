import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

const DocsQuickstart = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Inicio Rápido</h1>
        <p className="text-xl text-muted-foreground">
          Configura tu entorno de desarrollo en minutos y comienza a construir en el Metaverso TAMV.
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Requisitos Previos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Node.js 18.x o superior</li>
            <li>npm o yarn instalado</li>
            <li>Editor de código (recomendado: VS Code)</li>
            <li>Conocimientos básicos de JavaScript/TypeScript</li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Paso 1: Instalación</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6">
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <code className="text-primary">npm install @metaverso-tamv/core</code>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Paso 2: Configuración Inicial</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6">
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
              <div><span className="text-secondary">import</span> {`{ MetaversoClient }`} <span className="text-secondary">from</span> <span className="text-primary">'@metaverso-tamv/core'</span>;</div>
              <div className="mt-4"><span className="text-secondary">const</span> client = <span className="text-secondary">new</span> <span className="text-primary">MetaversoClient</span>({`{`}</div>
              <div className="ml-4">apiKey: <span className="text-primary">'tu-api-key'</span>,</div>
              <div className="ml-4">environment: <span className="text-primary">'development'</span></div>
              <div>{`});`}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Paso 3: Crear tu Primer Espacio</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-muted-foreground">
              Crea tu primer espacio virtual con unas pocas líneas de código:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
              <div><span className="text-secondary">const</span> space = <span className="text-secondary">await</span> client.<span className="text-primary">createSpace</span>({`{`}</div>
              <div className="ml-4">name: <span className="text-primary">'Mi Primer Espacio'</span>,</div>
              <div className="ml-4">dimension: <span className="text-primary">'3d'</span>,</div>
              <div className="ml-4">maxUsers: <span className="text-accent">100</span></div>
              <div>{`});`}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>¡Listo para Comenzar!</CardTitle>
          <CardDescription>
            Ahora estás preparado para explorar todas las capacidades del Metaverso TAMV. Consulta la documentación de la API para funcionalidades avanzadas.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsQuickstart;
