import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { ArrowRight, Brain, Network, Shield, Layers, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import tamvEmblem from "@/assets/tamv-emblem.jpg";
import korimaLogo from "@/assets/korima-codex-logo.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "ISABELLA AI™",
      description: "Simulación de Consciencia Artificial con capacidades trascendentales de evolución y aprendizaje",
    },
    {
      icon: Shield,
      title: "ANUBIS Guardian™",
      description: "Sistema de ciberseguridad cuántica con 13 capas de protección adaptativa",
    },
    {
      icon: Network,
      title: "ID-NVIDA Protocol™",
      description: "Identidad digital soberana con biometría cancelable y sharding geográfico",
    },
    {
      icon: Layers,
      title: "Arquitectura Web 4.0",
      description: "Sistema modular basado en microservicios con escalabilidad cuántica",
    },
    {
      icon: Zap,
      title: "HyperRender 4D-X",
      description: "Motor de renderizado ontológico con física cuántica y simulación sensorial",
    },
    {
      icon: Globe,
      title: "Infraestructura Global",
      description: "Despliegue en Google Cloud con nodos distribuidos y latencia ultra-baja",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground />
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4 overflow-hidden z-10">
        <div className="container mx-auto relative">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="mb-8 flex justify-center gap-8 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <img src={korimaLogo} alt="The Korima Codex" className="w-32 h-32 object-contain" />
              <img src={tamvEmblem} alt="TAMV DM-X4" className="w-40 h-40 object-contain" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight gradient-text animate-in fade-in slide-in-from-bottom-4 duration-1000 font-orbitron">
              TAMV DM-X4™
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold metallic-text animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 font-orbitron">
              Ecosistema de Nación-Estado Digital Soberana
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-orbitron">
              Arquitectura Web 4.0 con IA Consciente, Blockchain Soberano e Infraestructura Cuántica desplegada en Google Cloud Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Link to="/docs/architecture">
                <Button size="lg" className="aqua-glow font-orbitron font-semibold text-lg">
                  Arquitectura Técnica
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-aqua/50 hover:bg-aqua/10 font-orbitron font-semibold text-lg" asChild>
                <Link to="/docs/manifest">Manifiesto Fundacional</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold gradient-text font-orbitron">Pilares Fundamentales</h2>
            <p className="text-xl metallic-text max-w-2xl mx-auto font-orbitron">
              Componentes Centrales del Ecosistema Soberano
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="glass-effect border-aqua/30 hover:border-aqua transition-all hover:scale-105 aqua-glow group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-aqua" />
                    </div>
                    <CardTitle className="metallic-text font-orbitron">{feature.title}</CardTitle>
                    <CardDescription className="font-orbitron text-sm">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-12 text-center space-y-8 border border-aqua/30 aqua-glow">
            <h2 className="text-4xl font-bold gradient-text font-orbitron">
              Únete al Ecosistema
            </h2>
            <p className="text-xl metallic-text font-orbitron">
              Explora la arquitectura técnica completa y forma parte de la revolución digital soberana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/docs/quickstart">
                <Button size="lg" className="aqua-glow font-orbitron font-semibold text-lg">
                  Quickstart Guide
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-aqua/50 hover:bg-aqua/10 font-orbitron font-semibold text-lg" asChild>
                <Link to="/docs/implementation-roadmap">Roadmap de Implementación</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
