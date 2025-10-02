import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Zap, Shield, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DocsHome = () => {
  const features = [
    {
      icon: Book,
      title: "Documentación Completa",
      description: "Guías detalladas y referencias completas para todos los componentes del metaverso.",
    },
    {
      icon: Zap,
      title: "Inicio Rápido",
      description: "Comienza a desarrollar en minutos con nuestras guías de inicio rápido.",
    },
    {
      icon: Shield,
      title: "Seguridad Robusta",
      description: "Implementación de mejores prácticas de seguridad en toda la plataforma.",
    },
    {
      icon: Rocket,
      title: "Alto Rendimiento",
      description: "Arquitectura optimizada para experiencias fluidas y escalables.",
    },
  ];

  const quickLinks = [
    { title: "Protocolo Kórima", href: "/docs/korima", description: "Filosofía y diseño de la API TAMV" },
    { title: "Endpoints de API", href: "/docs/api-endpoints", description: "Referencia completa de endpoints" },
    { title: "Modelos de Datos", href: "/docs/models", description: "Esquemas y estructuras de datos" },
    { title: "Ejemplos", href: "/docs/examples", description: "Guías prácticas de implementación" },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          Documentación Metaverso TAMV
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Bienvenido a la documentación completa del Metaverso TAMV. Encuentra guías, referencias de API y recursos para construir experiencias inmersivas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Enlaces Rápidos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.title} to={link.href}>
              <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {link.title}
                    </CardTitle>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="text-2xl">¿Necesitas ayuda?</CardTitle>
          <CardDescription className="text-base">
            Si tienes preguntas o necesitas asistencia, nuestro equipo está aquí para ayudarte.
          </CardDescription>
          <div className="pt-4">
            <Button className="bg-gradient-to-r from-primary to-secondary">
              Contactar Soporte
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsHome;
