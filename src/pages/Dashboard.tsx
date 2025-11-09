import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Brain, 
  Wallet, 
  Shield, 
  Globe, 
  Sparkles, 
  TrendingUp,
  Users,
  Zap,
  Award,
  Rocket
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userStats = {
    name: "Usuario TAMV",
    level: "Premium",
    credits: 1250,
    reputation: 87,
    dreamSpaces: 3,
    interactions: 145
  };

  const quickActions = [
    { icon: Brain, label: "Isabella AI", href: "/isabella", color: "text-purple-400" },
    { icon: Globe, label: "DreamSpaces", href: "/dreamspaces", color: "text-blue-400" },
    { icon: Wallet, label: "TAMV Economy", href: "/economy", color: "text-green-400" },
    { icon: Shield, label: "ANUBIS Security", href: "/security", color: "text-red-400" },
  ];

  const recentActivity = [
    { type: "Isabella AI", action: "Conversación emocional completada", time: "Hace 2h" },
    { type: "DreamSpace", action: "Nuevo espacio XR creado", time: "Hace 5h" },
    { type: "Economy", action: "Créditos recibidos: +50 TC", time: "Hace 1d" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Bienvenido al Metaverso TAMV
          </h1>
          <p className="text-muted-foreground">
            Tu centro de control para el ecosistema digital más avanzado
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TAMV Credits</CardTitle>
              <Wallet className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.credits} TC</div>
              <p className="text-xs text-muted-foreground">+20% este mes</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reputación</CardTitle>
              <Award className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.reputation}%</div>
              <Progress value={userStats.reputation} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">DreamSpaces</CardTitle>
              <Globe className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.dreamSpaces}</div>
              <p className="text-xs text-muted-foreground">Espacios activos</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interacciones</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.interactions}</div>
              <p className="text-xs text-muted-foreground">Esta semana</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="lg:col-span-2 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Acciones Rápidas
              </CardTitle>
              <CardDescription>
                Accede a los módulos principales del ecosistema TAMV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, idx) => (
                  <Link key={idx} to={action.href}>
                    <Button 
                      variant="outline" 
                      className="w-full h-24 flex flex-col items-center justify-center gap-2 hover:border-primary transition-all"
                    >
                      <action.icon className={`h-8 w-8 ${action.color}`} />
                      <span className="text-sm font-medium">{action.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Profile */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Tu Perfil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nivel de Membresía</p>
                  <Badge variant="default" className="mt-1">
                    {userStats.level}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">ID-NVIDA™</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Identidad Digital
                  </Button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">ANUBIS Security</p>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Protección Activa</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-3 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-lg border border-border/50 bg-background/30">
                    <Rocket className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
