import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Sparkles, Shield, Globe, ArrowRight } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import tamvEmblem from "@/assets/tamv-emblem.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated particles */}
      <FloatingParticles count={60} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-cyan-500 blur-xl opacity-50 animate-pulse" />
            <img 
              src={tamvEmblem} 
              alt="TAMV" 
              className="relative w-24 h-24 rounded-full border-2 border-primary/50"
            />
          </div>
        </div>

        {/* Badge */}
        <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/50">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          Omniverso Civilizatorio XR/AI
        </Badge>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6">
          <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            TAMV Online
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Arte, cultura, economía y dignidad humana universal en un metaverso 
          civilizatorio custodiado por <span className="text-purple-400">Isabella AI</span>.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { icon: Shield, label: "Seguridad Quantum" },
            { icon: Globe, label: "XR Inmersivo 4D" },
            { icon: Sparkles, label: "IA Emocional" },
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => navigate("/auth")}
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8"
          >
            Entrar al Santuario
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate("/dreamspaces")}
            className="text-lg px-8"
          >
            Explorar DreamSpaces
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "24K+", label: "Ciudadanos" },
            { value: "3.4K", label: "DreamSpaces" },
            { value: "156K", label: "Transacciones" },
            { value: "847", label: "Nodos Activos" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold font-orbitron text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
