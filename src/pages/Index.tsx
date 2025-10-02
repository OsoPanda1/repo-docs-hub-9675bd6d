import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Globe, Zap, Users, Shield, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: "Espacios Virtuales",
      description: "Crea mundos inmersivos en 3D con herramientas intuitivas y potentes APIs.",
    },
    {
      icon: Users,
      title: "Colaboración en Tiempo Real",
      description: "Conecta a miles de usuarios simultáneamente con baja latencia.",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Protección de datos robusta con encriptación end-to-end.",
    },
    {
      icon: Layers,
      title: "Arquitectura Escalable",
      description: "Infraestructura diseñada para crecer con tu proyecto.",
    },
    {
      icon: Code,
      title: "API Completa",
      description: "SDKs y APIs documentadas para integración rápida.",
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Optimizado para experiencias fluidas en cualquier dispositivo.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Construye el Futuro del{" "}
              <span className="gradient-text">Metaverso</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma completa para desarrollar experiencias virtuales inmersivas con tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/docs">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg">
                  Ver Documentación
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/50 text-lg">
                Explorar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Características Principales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para crear experiencias virtuales de clase mundial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="glass-effect border-border/50 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-12 text-center space-y-8">
            <h2 className="text-4xl font-bold gradient-text">
              Comienza Hoy
            </h2>
            <p className="text-xl text-muted-foreground">
              Únete a cientos de desarrolladores construyendo el futuro de las experiencias digitales
            </p>
            <Link to="/docs/quickstart">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg">
                Inicio Rápido
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
