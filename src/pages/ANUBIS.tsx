import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  Activity,
  Lock,
  Layers,
  Zap,
  Eye,
  Database,
  Network,
  Server
} from "lucide-react";

const ANUBIS = () => {
  const securityLayers = [
    { id: 1, name: "Capa Física", status: "optimal", health: 100 },
    { id: 2, name: "Red Perimetral", status: "optimal", health: 100 },
    { id: 3, name: "Firewall Adaptativo", status: "optimal", health: 98 },
    { id: 4, name: "IDS/IPS Cuántico", status: "optimal", health: 100 },
    { id: 5, name: "Cifrado Post-Cuántico", status: "optimal", health: 100 },
    { id: 6, name: "Autenticación Multi-Factor", status: "optimal", health: 97 },
    { id: 7, name: "Control de Acceso", status: "warning", health: 85 },
    { id: 8, name: "Auditoría y Logs", status: "optimal", health: 100 },
    { id: 9, name: "IA Anti-Amenazas", status: "optimal", health: 99 },
    { id: 10, name: "Respaldo y Recuperación", status: "optimal", health: 100 },
    { id: 11, name: "Gobernanza Ética", status: "optimal", health: 100 },
  ];

  const recentThreats = [
    { id: 1, type: "DDoS", severity: "high", blocked: true, time: "Hace 2 min" },
    { id: 2, type: "SQL Injection", severity: "critical", blocked: true, time: "Hace 15 min" },
    { id: 3, type: "Phishing", severity: "medium", blocked: true, time: "Hace 1 hora" },
    { id: 4, type: "Brute Force", severity: "high", blocked: true, time: "Hace 2 horas" },
  ];

  const metrics = [
    { label: "Amenazas Bloqueadas (24h)", value: "1,247", icon: Shield },
    { label: "Nivel de Seguridad", value: "98.2%", icon: CheckCircle2 },
    { label: "Uptime del Sistema", value: "99.99%", icon: Activity },
    { label: "Incidentes Activos", value: "0", icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-orbitron">
            ANUBIS Security System
          </h1>
          <p className="text-muted-foreground">
            Sistema de Seguridad Cuántico de 11 Capas - Dekateotl Synthesis™
          </p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-3xl font-bold">{metric.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="layers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="layers">Capas de Seguridad</TabsTrigger>
            <TabsTrigger value="threats">Amenazas Recientes</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoreo en Vivo</TabsTrigger>
          </TabsList>

          <TabsContent value="layers" className="space-y-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  11 Capas de Seguridad Dekateotl
                </CardTitle>
                <CardDescription>
                  Sistema de defensa en profundidad con cifrado post-cuántico
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {securityLayers.map((layer) => (
                  <div key={layer.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Capa {layer.id}</span>
                        <span className="text-sm text-muted-foreground">{layer.name}</span>
                      </div>
                      <Badge variant={layer.status === "optimal" ? "default" : "secondary"}>
                        {layer.health}%
                      </Badge>
                    </div>
                    <Progress value={layer.health} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="threats" className="space-y-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Amenazas Bloqueadas
                </CardTitle>
                <CardDescription>
                  Intentos de intrusión detectados y neutralizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentThreats.map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Shield className="h-8 w-8 text-green-500" />
                        <div>
                          <p className="font-medium">{threat.type}</p>
                          <p className="text-sm text-muted-foreground">{threat.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={threat.severity === "critical" ? "destructive" : "secondary"}>
                          {threat.severity}
                        </Badge>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5" />
                    Tráfico de Red
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Entrada</span>
                      <span className="font-bold">2.4 GB/s</span>
                    </div>
                    <Progress value={65} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Salida</span>
                      <span className="font-bold">1.8 GB/s</span>
                    </div>
                    <Progress value={45} />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5" />
                    Recursos del Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CPU</span>
                      <span className="font-bold">42%</span>
                    </div>
                    <Progress value={42} />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Memoria</span>
                      <span className="font-bold">67%</span>
                    </div>
                    <Progress value={67} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Actividad en Tiempo Real
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span>Escaneo de vulnerabilidades completado - Sin amenazas</span>
                    <span className="text-muted-foreground ml-auto">Ahora</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Backup automático ejecutado exitosamente</span>
                    <span className="text-muted-foreground ml-auto">Hace 5 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="h-4 w-4 text-blue-500" />
                    <span>Cifrado cuántico actualizado en todas las capas</span>
                    <span className="text-muted-foreground ml-auto">Hace 12 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="h-4 w-4 text-purple-500" />
                    <span>Sincronización de base de datos completada</span>
                    <span className="text-muted-foreground ml-auto">Hace 30 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ANUBIS;
