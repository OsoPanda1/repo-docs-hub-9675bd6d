import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Layers, Cloud, Shield } from "lucide-react";

const DocsInfrastructure = () => {
  const components = [
    {
      icon: Server,
      title: "Servidores de Aplicación",
      description: "Clúster de servidores Node.js distribuidos que manejan la lógica de negocio y las conexiones WebSocket en tiempo real.",
    },
    {
      icon: Layers,
      title: "Arquitectura de Microservicios",
      description: "Servicios desacoplados que permiten escalabilidad independiente: autenticación, espacios virtuales, gestión de usuarios y renderizado.",
    },
    {
      icon: Cloud,
      title: "CDN Global",
      description: "Red de entrega de contenidos distribuida globalmente para minimizar la latencia y optimizar la carga de recursos 3D.",
    },
    {
      icon: Shield,
      title: "Seguridad y Encriptación",
      description: "Comunicaciones cifradas end-to-end, autenticación JWT y políticas de seguridad basadas en roles (RBAC).",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Arquitectura e Infraestructura</h1>
        <p className="text-xl text-muted-foreground">
          Visión general de la arquitectura técnica que impulsa el Metaverso TAMV.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Card key={component.title} className="glass-effect border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{component.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Diagrama de Arquitectura</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6">
            <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center space-y-4">
                <Layers className="w-16 h-16 mx-auto text-primary" />
                <p className="text-muted-foreground">Diagrama de arquitectura detallado</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Stack Tecnológico</h2>
        <Card className="glass-effect border-border/50">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Backend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Node.js + Express</li>
                  <li>• WebSocket (Socket.io)</li>
                  <li>• GraphQL API</li>
                  <li>• Redis Cache</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• React + TypeScript</li>
                  <li>• Three.js / WebGL</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vite</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Base de Datos</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• PostgreSQL</li>
                  <li>• MongoDB (Assets)</li>
                  <li>• Redis (Caché)</li>
                  <li>• S3 (Storage)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocsInfrastructure;
