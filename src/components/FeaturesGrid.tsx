import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, Shield, Globe, Wallet, Users, 
  GraduationCap, Music, Palette
} from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Brain,
      title: "Isabella AI NextGen™",
      description: "IA emocional con memoria expandida, protocolos éticos y capacidad creativa.",
      path: "/isabella",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "DreamSpaces 4D",
      description: "Mundos XR inmersivos co-creados con física cuántica simulada.",
      path: "/dreamspaces",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "ANUBIS Security",
      description: "Protección post-quantum con Aztek Gods Radar y Quantum Sentinel.",
      path: "/anubis",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Wallet,
      title: "Economía TAU/MSR",
      description: "Sistema económico justo con regla 20/30/50 y NubiWallets.",
      path: "/economy",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "DAO Híbrida",
      description: "Gobernanza federada de 7 capas con DEKATEOTL y metagobernanza.",
      path: "/dao",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "Universidad TAMV",
      description: "Educación certificada con cursos, diplomados y evidencia en BookPI.",
      path: "/utamv",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Music,
      title: "KAOS Audio System",
      description: "Audio espacial 3D reactivo al estado emocional del ecosistema.",
      path: "/kaos",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Palette,
      title: "Marketplace XR",
      description: "Comercio de assets 3D, experiencias y regalos digitales.",
      path: "/marketplace",
      gradient: "from-teal-500 to-cyan-500"
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
            Arquitectura del <span className="text-primary">Omniverso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            7 capas federadas de infraestructura civilizatoria digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Link key={idx} to={feature.path}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
