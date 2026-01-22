import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useIsabellaStore } from "@/stores/isabellaStore";
import { useEconomyStore } from "@/stores/economyStore";
import { 
  Shield, Wallet, Users, Globe, Activity, 
  Zap, TrendingUp, Crown, Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";

const CivilizationHub = () => {
  const { status: isabellaStatus, guardianMode } = useIsabellaStore();
  const { tcBalance, msrBalance, phoenixFund, infraFund, reserveFund } = useEconomyStore();

  const systemMetrics = [
    { label: "Ciudadanos Activos", value: "24,847", icon: Users, trend: "+12.4%" },
    { label: "DreamSpaces Activos", value: "3,421", icon: Globe, trend: "+8.7%" },
    { label: "Transacciones/día", value: "156K", icon: Activity, trend: "+15.2%" },
    { label: "Nodos Conectados", value: "847", icon: Zap, trend: "+3.1%" },
  ];

  const economyDistribution = [
    { label: "Fénix (20%)", value: phoenixFund, color: "bg-orange-500" },
    { label: "Infraestructura (30%)", value: infraFund, color: "bg-blue-500" },
    { label: "Reserva (50%)", value: reserveFund, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/50">
            <Crown className="w-4 h-4 mr-2 text-primary" />
            Hub Civilizatorio Central
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              TAMV Civilization Hub
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Centro de mando del Omniverso Civilizatorio. Monitorea, gobierna y evoluciona.
          </p>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {systemMetrics.map((metric, idx) => (
            <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold font-orbitron mt-1">{metric.value}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <metric.icon className="w-8 h-8 text-primary/60" />
                    <Badge variant="secondary" className="mt-2 text-xs text-green-500">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {metric.trend}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Isabella Status */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className={`w-5 h-5 ${guardianMode ? 'text-green-500' : 'text-primary'}`} />
                Estado Isabella AI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Estado Actual</span>
                <Badge variant={isabellaStatus === 'guarding' ? 'default' : 'secondary'}>
                  {isabellaStatus.toUpperCase()}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Modo Guardián</span>
                <Badge variant={guardianMode ? 'default' : 'outline'}>
                  {guardianMode ? 'ACTIVO' : 'STANDBY'}
                </Badge>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Nivel Emocional</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Índice Creativo</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Economy Overview */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Economía Civilizatoria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-xs text-muted-foreground">TC Balance</p>
                  <p className="text-xl font-bold font-orbitron">{tcBalance.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-xs text-muted-foreground">MSR Balance</p>
                  <p className="text-xl font-bold font-orbitron">{msrBalance.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-medium mb-3">Distribución 20/30/50</p>
                {economyDistribution.map((fund, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${fund.color}`} />
                    <span className="text-sm text-muted-foreground flex-1">{fund.label}</span>
                    <span className="text-sm font-medium">${fund.value.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Acciones Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Crear DreamSpace", path: "/dreamspaces" },
                { label: "Propuesta DAO", path: "/dao" },
                { label: "Consultar Isabella", path: "/isabella" },
                { label: "Ver Enciclopedia", path: "/enciclopedia" },
                { label: "Motor Económico", path: "/motor-economico" },
                { label: "Galería de Logros", path: "/galeria-logros" },
              ].map((action, idx) => (
                <a
                  key={idx}
                  href={action.path}
                  className="block p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <span className="text-sm font-medium">{action.label}</span>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CivilizationHub;
