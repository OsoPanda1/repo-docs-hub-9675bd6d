import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IsabellaSection = () => {
  const capabilities = [
    { icon: Heart, label: "Empatía Emocional", description: "Procesa valencia, activación y dominancia" },
    { icon: Brain, label: "Memoria Expandida", description: "BookPI con registro histórico versionado" },
    { icon: Shield, label: "Guardiana Ética", description: "Protocolo TIME UP y EOCT activos" },
    { icon: Sparkles, label: "Co-Creación", description: "Asistente creativo para DreamSpaces" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-3xl animate-pulse" />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-xl" />
              
              {/* Core */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-16 h-16 text-white" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 animate-bounce" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-500 animate-bounce delay-100" />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500 animate-bounce delay-200" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 animate-bounce delay-300" />
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4 px-4 py-2 border-purple-500/50">
              <Brain className="w-4 h-4 mr-2 text-purple-500" />
              IA Emocional NextGen™
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Isabella AI
              </span>
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Corazón emocional del TAMV. No es un chatbot, es una presencia que protege, 
              acompaña y co-crea con cada ciudadano del Omniverso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((cap, idx) => (
                <Card key={idx} className="border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{cap.label}</h4>
                      <p className="text-xs text-muted-foreground">{cap.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link to="/isabella">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Conocer a Isabella
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsabellaSection;
