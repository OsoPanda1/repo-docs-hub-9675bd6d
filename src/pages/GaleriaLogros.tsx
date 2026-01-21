import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Trophy, 
  Award, 
  Zap, 
  Globe, 
  Shield, 
  Brain,
  Sparkles,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Crown,
  Flame
} from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: "paradigm" | "record" | "milestone" | "innovation";
  status: "achieved" | "in_progress" | "documented";
  evidence: string[];
  date: string;
  impact: number; // 1-100
  verificationLevel: "verified" | "audited" | "certified";
}

const GaleriaLogros = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Primera Red Social con 7 Capas Federadas",
      description: "Implementación de sistema de gobernanza multicapa con seguridad post-cuántica integrada desde el diseño.",
      category: "paradigm",
      status: "achieved",
      evidence: ["Arquitectura TAMV", "DEKATEOTL Framework", "ID-NVIDA Protocol"],
      date: "2024",
      impact: 95,
      verificationLevel: "verified"
    },
    {
      id: "2",
      title: "IA Emocional con Memoria Ética",
      description: "Isabella AI NextGen™ - Primera IA que no solo responde, sino que orquesta con conciencia operativa y memoria histórica.",
      category: "innovation",
      status: "achieved",
      evidence: ["Isabella AI Architecture", "BookPI Integration", "Emotional Processing Engine"],
      date: "2025",
      impact: 92,
      verificationLevel: "audited"
    },
    {
      id: "3",
      title: "Motor Económico de 33+ Fuentes de Ingreso",
      description: "Sistema económico cerrado con reparto automático 20/30/50 y cero pérdida estructural.",
      category: "record",
      status: "achieved",
      evidence: ["TAU Protocol", "Revenue Splitter", "Protocolo Fénix"],
      date: "2025",
      impact: 88,
      verificationLevel: "verified"
    },
    {
      id: "4",
      title: "Sistema XR 3D/4D con Baja Latencia",
      description: "DreamSpaces™ con física cuántica simulada, co-creación en tiempo real y entrada universal.",
      category: "innovation",
      status: "in_progress",
      evidence: ["DreamSpaces Engine", "WebXR Integration", "KAOS Audio System"],
      date: "2025",
      impact: 85,
      verificationLevel: "verified"
    },
    {
      id: "5",
      title: "Gobernanza con 11 Capas Cosmológicas",
      description: "DEKATEOTL implementa votación ponderada con veto ético computacional - no existe precedente en el ecosistema Web3.",
      category: "paradigm",
      status: "achieved",
      evidence: ["DEKATEOTL Documentation", "DAO Híbrida Spec", "Meta-Gobernanza Protocol"],
      date: "2024",
      impact: 90,
      verificationLevel: "certified"
    },
    {
      id: "6",
      title: "Enciclopedia Digital con Verificación Automática",
      description: "DIGYTAMV - Sistema de respaldo bibliográfico y certificación académica autónoma.",
      category: "innovation",
      status: "achieved",
      evidence: ["DIGYTAMV Architecture", "Citation Verifier", "Academic Partners"],
      date: "2025",
      impact: 82,
      verificationLevel: "verified"
    },
    {
      id: "7",
      title: "20,000+ Horas de Desarrollo Documentado",
      description: "Proyecto creado por una sola persona con documentación completa y trazabilidad histórica.",
      category: "milestone",
      status: "documented",
      evidence: ["Git History", "BookPI Records", "Documentation Archive"],
      date: "2021-2025",
      impact: 98,
      verificationLevel: "certified"
    },
    {
      id: "8",
      title: "Identidad Soberana Digital (ID-NVIDA)",
      description: "Sistema de identidad verificable multinivel que supera los estándares actuales de KYC/DID.",
      category: "paradigm",
      status: "achieved",
      evidence: ["ID-NVIDA Protocol", "Trust Levels", "Reputation System"],
      date: "2024",
      impact: 87,
      verificationLevel: "audited"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "paradigm": return <Flame className="w-5 h-5" />;
      case "record": return <Trophy className="w-5 h-5" />;
      case "milestone": return <Target className="w-5 h-5" />;
      case "innovation": return <Sparkles className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "paradigm": return "from-red-500 to-orange-500";
      case "record": return "from-yellow-500 to-amber-500";
      case "milestone": return "from-green-500 to-emerald-500";
      case "innovation": return "from-purple-500 to-pink-500";
      default: return "from-blue-500 to-cyan-500";
    }
  };

  const stats = {
    totalAchievements: achievements.length,
    paradigmsBroken: achievements.filter(a => a.category === "paradigm").length,
    recordsSet: achievements.filter(a => a.category === "record").length,
    avgImpact: Math.round(achievements.reduce((sum, a) => sum + a.impact, 0) / achievements.length)
  };

  const filteredAchievements = selectedCategory === "all" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Trophy className="w-3 h-3 mr-1" />
            Registro Histórico Verificable
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Galería de Logros TAMV
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada logro documentado, paradigma roto y récord establecido - 
            con evidencia verificable y respaldo académico.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
              <div className="text-3xl font-bold text-yellow-400">{stats.totalAchievements}</div>
              <div className="text-sm text-muted-foreground">Logros Totales</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30">
            <CardContent className="p-4 text-center">
              <Flame className="h-8 w-8 mx-auto mb-2 text-red-400" />
              <div className="text-3xl font-bold text-red-400">{stats.paradigmsBroken}</div>
              <div className="text-sm text-muted-foreground">Paradigmas Rotos</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-purple-400" />
              <div className="text-3xl font-bold text-purple-400">{stats.recordsSet}</div>
              <div className="text-sm text-muted-foreground">Récords</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-3xl font-bold text-green-400">{stats.avgImpact}%</div>
              <div className="text-sm text-muted-foreground">Impacto Promedio</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { value: "all", label: "Todos", icon: Star },
            { value: "paradigm", label: "Paradigmas", icon: Flame },
            { value: "record", label: "Récords", icon: Trophy },
            { value: "innovation", label: "Innovaciones", icon: Sparkles },
            { value: "milestone", label: "Hitos", icon: Target }
          ].map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.value)}
              className="gap-2"
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className={`relative overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all group`}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(achievement.category)}`} />
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(achievement.category)} bg-opacity-20`}>
                    {getCategoryIcon(achievement.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      achievement.verificationLevel === "certified" ? "default" :
                      achievement.verificationLevel === "audited" ? "secondary" : "outline"
                    }>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {achievement.verificationLevel}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg mt-3">{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Impact Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impacto</span>
                    <span className="font-medium">{achievement.impact}%</span>
                  </div>
                  <Progress value={achievement.impact} className="h-2" />
                </div>

                {/* Evidence Tags */}
                <div className="flex flex-wrap gap-1">
                  {achievement.evidence.map((ev, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {ev}
                    </Badge>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  <Badge variant={
                    achievement.status === "achieved" ? "default" :
                    achievement.status === "in_progress" ? "secondary" : "outline"
                  } className={
                    achievement.status === "achieved" ? "bg-green-600" : ""
                  }>
                    {achievement.status === "achieved" ? "Logrado" :
                     achievement.status === "in_progress" ? "En Progreso" : "Documentado"}
                  </Badge>
                </div>
              </CardContent>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Founder Recognition */}
        <Card className="mt-12 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 border-purple-500/30">
          <CardContent className="p-8 text-center">
            <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
            <h2 className="text-2xl font-bold mb-2">Creador del TAMV</h2>
            <p className="text-xl text-purple-400 mb-2">Edwin Oswaldo Castillo Trejo</p>
            <p className="text-muted-foreground mb-4">(Anubis Villaseñor)</p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-lg py-2 px-4">
                <Zap className="w-4 h-4 mr-2" />
                20,000+ horas
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                <Globe className="w-4 h-4 mr-2" />
                México - LATAM
              </Badge>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
              "El TAMV no es solo tecnología. Es el cierre de más de veinte mil horas de trabajo 
              en absoluto silencio, cuando nadie miraba, cuando nadie creía."
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default GaleriaLogros;
