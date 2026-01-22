import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Scale, FileText, Shield, Vote, Users, 
  AlertTriangle, CheckCircle, Clock, Gavel
} from "lucide-react";

const GovernancePage = () => {
  const constitutionArticles = [
    { id: 1, title: "Dignidad Digital Universal", status: "active" },
    { id: 2, title: "Soberanía de Datos Personales", status: "active" },
    { id: 3, title: "Gobernanza Federada 7 Capas", status: "active" },
    { id: 4, title: "Protocolo TIME UP", status: "active" },
    { id: 5, title: "Economía Justa 20/30/50", status: "active" },
    { id: 6, title: "Isabella AI - Ética Inmutable", status: "active" },
    { id: 7, title: "MSR Blockchain - Transparencia Total", status: "active" },
  ];

  const msrLedger = [
    { hash: "0x7f3a...8c21", type: "PROPOSAL", timestamp: "Hace 2 min", status: "confirmed" },
    { hash: "0x9b2e...4d67", type: "VOTE", timestamp: "Hace 5 min", status: "confirmed" },
    { hash: "0x1c5f...9e34", type: "TRANSACTION", timestamp: "Hace 8 min", status: "pending" },
    { hash: "0x3d8a...2b56", type: "IDENTITY", timestamp: "Hace 12 min", status: "confirmed" },
    { hash: "0x6e4c...7f89", type: "DREAMSPACE", timestamp: "Hace 15 min", status: "confirmed" },
  ];

  const safetyAlerts = [
    { id: 1, level: "info", message: "Sistema operando normalmente", time: "Ahora" },
    { id: 2, level: "success", message: "Protocolo Quantum Sentinel activo", time: "Hace 1h" },
    { id: 3, level: "warning", message: "Pico de actividad detectado en Nexus-Alpha", time: "Hace 3h" },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/50">
            <Gavel className="w-4 h-4 mr-2 text-primary" />
            Metagobernanza TAMV
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Centro de Gobernanza
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constitución digital, ledger MSR y monitoreo de seguridad en tiempo real.
          </p>
        </div>

        <Tabs defaultValue="constitution" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="constitution" className="font-orbitron">
              <FileText className="w-4 h-4 mr-2" />
              Constitución
            </TabsTrigger>
            <TabsTrigger value="msr" className="font-orbitron">
              <Scale className="w-4 h-4 mr-2" />
              MSR Ledger
            </TabsTrigger>
            <TabsTrigger value="safety" className="font-orbitron">
              <Shield className="w-4 h-4 mr-2" />
              Seguridad
            </TabsTrigger>
          </TabsList>

          {/* Constitution Viewer */}
          <TabsContent value="constitution">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Constitución Digital TAMV
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {constitutionArticles.map((article) => (
                        <div 
                          key={article.id}
                          className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">Artículo {article.id}</p>
                              <h3 className="font-medium">{article.title}</h3>
                            </div>
                            <Badge variant="default" className="bg-green-500/20 text-green-500 border-green-500/30">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Activo
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Vote className="w-5 h-5 text-primary" />
                    Propuestas Activas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10">
                    <p className="text-sm font-medium">PRP-2024-047</p>
                    <p className="text-xs text-muted-foreground mt-1">Expansión de DreamSpaces 4D</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="outline">67% a favor</Badge>
                      <span className="text-xs text-muted-foreground">2 días restantes</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/10">
                    <p className="text-sm font-medium">PRP-2024-048</p>
                    <p className="text-xs text-muted-foreground mt-1">Nuevas certificaciones UTAMV</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="outline">82% a favor</Badge>
                      <span className="text-xs text-muted-foreground">5 días restantes</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Ver Todas las Propuestas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* MSR Ledger */}
          <TabsContent value="msr">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  MSR Blockchain - Registro Inmutable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {msrLedger.map((tx, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <code className="text-sm font-mono text-primary">{tx.hash}</code>
                        <Badge variant="secondary">{tx.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{tx.timestamp}</span>
                        <Badge variant={tx.status === 'confirmed' ? 'default' : 'outline'}>
                          {tx.status === 'confirmed' ? (
                            <><CheckCircle className="w-3 h-3 mr-1" /> Confirmado</>
                          ) : (
                            <><Clock className="w-3 h-3 mr-1" /> Pendiente</>
                          )}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety Monitor */}
          <TabsContent value="safety">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    Estado de Seguridad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Quantum Sentinel", status: "ACTIVO", color: "green" },
                      { label: "ANUBIS Guardian", status: "ACTIVO", color: "green" },
                      { label: "Protocolo TIME UP", status: "STANDBY", color: "yellow" },
                      { label: "Hoyo Negro", status: "INACTIVO", color: "blue" },
                    ].map((system, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-border/50">
                        <p className="text-xs text-muted-foreground">{system.label}</p>
                        <Badge 
                          variant="outline" 
                          className={`mt-1 border-${system.color}-500/50 text-${system.color}-500`}
                        >
                          {system.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    Alertas del Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {safetyAlerts.map((alert) => (
                        <div 
                          key={alert.id}
                          className={`p-3 rounded-lg border ${
                            alert.level === 'warning' 
                              ? 'border-yellow-500/30 bg-yellow-500/10' 
                              : alert.level === 'success'
                              ? 'border-green-500/30 bg-green-500/10'
                              : 'border-border/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm">{alert.message}</p>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default GovernancePage;
