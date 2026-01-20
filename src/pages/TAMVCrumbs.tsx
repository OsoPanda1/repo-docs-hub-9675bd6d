import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Hash, Shield, Clock, Database, Link, FileCheck, 
  Activity, Zap, Lock, Eye, AlertTriangle, CheckCircle2,
  Fingerprint, Globe, Server, HardDrive
} from "lucide-react";

const TAMVCrumbs = () => {
  const recentCrumbs = [
    {
      id: "crum_001",
      action: "MSR_EMISSION",
      risk_level: "low",
      hash: "0x7f8a...3b2c",
      timestamp: "2026-01-20T10:30:00Z",
      actor: "isabella_ai",
      anchor: "MSR Block #4521",
      verified: true
    },
    {
      id: "crum_002",
      action: "DREAMSPACE_CREATE",
      risk_level: "medium",
      hash: "0x9c4d...8e1f",
      timestamp: "2026-01-20T10:25:00Z",
      actor: "user_anubis",
      anchor: "IPFS QmX7...a9",
      verified: true
    },
    {
      id: "crum_003",
      action: "GOVERNANCE_VOTE",
      risk_level: "low",
      hash: "0x2b6e...5d4a",
      timestamp: "2026-01-20T10:20:00Z",
      actor: "dao_hybrid",
      anchor: "MSR Block #4520",
      verified: true
    },
    {
      id: "crum_004",
      action: "SECURITY_ALERT",
      risk_level: "high",
      hash: "0x1a3f...7c9b",
      timestamp: "2026-01-20T10:15:00Z",
      actor: "anubis_sentinel",
      anchor: "BookPI #89721",
      verified: true
    },
    {
      id: "crum_005",
      action: "TRANSACTION_TC",
      risk_level: "low",
      hash: "0x5e2d...9f1a",
      timestamp: "2026-01-20T10:10:00Z",
      actor: "nubiwallet",
      anchor: "MSR Block #4519",
      verified: true
    }
  ];

  const stats = [
    { label: "Total Crumbs", value: "1,247,892", icon: Database, color: "text-blue-400" },
    { label: "Verificados", value: "99.97%", icon: CheckCircle2, color: "text-green-400" },
    { label: "Anclados MSR", value: "892,431", icon: Link, color: "text-purple-400" },
    { label: "IPFS Stored", value: "355,461", icon: HardDrive, color: "text-amber-400" }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "medium": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "high": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Hash className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
              TAMVCrumbs
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sistema de registro inmutable de eventos con hashes criptográficos, 
            firmas digitales y ancla blockchain MSR
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="border-primary/50">Inmutable</Badge>
            <Badge variant="outline" className="border-purple-500/50">Post-Cuántico</Badge>
            <Badge variant="outline" className="border-green-500/50">Verificable</Badge>
            <Badge variant="outline" className="border-amber-500/50">IPFS + MSR</Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="explorer" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/50">
            <TabsTrigger value="explorer">Explorador</TabsTrigger>
            <TabsTrigger value="create">Crear Crum</TabsTrigger>
            <TabsTrigger value="verify">Verificar</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Explorer Tab */}
          <TabsContent value="explorer">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Crumbs Recientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {recentCrumbs.map((crum) => (
                      <div 
                        key={crum.id}
                        className="p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Hash className="w-4 h-4 text-primary" />
                            <span className="font-mono text-sm">{crum.id}</span>
                            <Badge className={getRiskColor(crum.risk_level)}>
                              {crum.risk_level.toUpperCase()}
                            </Badge>
                          </div>
                          {crum.verified && (
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                          )}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Acción:</span>
                            <p className="font-medium">{crum.action}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Actor:</span>
                            <p className="font-medium">{crum.actor}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Hash:</span>
                            <p className="font-mono">{crum.hash}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Anchor:</span>
                            <p className="font-medium text-primary">{crum.anchor}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {new Date(crum.timestamp).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Create Tab */}
          <TabsContent value="create">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Crear Nuevo Crum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Tipo de Evento</label>
                      <select className="w-full mt-1 p-2 rounded-lg bg-background border border-primary/20">
                        <option>MSR_EMISSION</option>
                        <option>TRANSACTION_TC</option>
                        <option>GOVERNANCE_VOTE</option>
                        <option>DREAMSPACE_CREATE</option>
                        <option>SECURITY_EVENT</option>
                        <option>IDENTITY_UPDATE</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Nivel de Riesgo</label>
                      <select className="w-full mt-1 p-2 rounded-lg bg-background border border-primary/20">
                        <option value="low">Bajo</option>
                        <option value="medium">Medio</option>
                        <option value="high">Alto</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Metadata (JSON)</label>
                      <textarea 
                        className="w-full mt-1 p-2 rounded-lg bg-background border border-primary/20 font-mono text-sm"
                        rows={4}
                        placeholder='{"key": "value"}'
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Anchor Type</label>
                      <select className="w-full mt-1 p-2 rounded-lg bg-background border border-primary/20">
                        <option>MSR Blockchain</option>
                        <option>IPFS</option>
                        <option>BookPI</option>
                        <option>Hybrid (MSR + IPFS)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Signatures Required</label>
                      <select className="w-full mt-1 p-2 rounded-lg bg-background border border-primary/20">
                        <option>1 (Self)</option>
                        <option>2 (Multi-sig)</option>
                        <option>3 (Quorum)</option>
                      </select>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600">
                      <Fingerprint className="w-4 h-4 mr-2" />
                      Crear y Firmar Crum
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Verify Tab */}
          <TabsContent value="verify">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Verificar Crum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Crum ID o Hash</label>
                  <div className="flex gap-2 mt-1">
                    <input 
                      type="text"
                      className="flex-1 p-2 rounded-lg bg-background border border-primary/20 font-mono"
                      placeholder="crum_xxx o 0x..."
                    />
                    <Button>
                      <Eye className="w-4 h-4 mr-2" />
                      Verificar
                    </Button>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-green-400">Verificación Exitosa</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    El crum ha sido verificado contra la blockchain MSR y su hash coincide 
                    con los datos originales. Integridad: 100%
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    Distribución por Tipo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { type: "MSR_EMISSION", count: 423567, pct: 34 },
                      { type: "TRANSACTION_TC", count: 312489, pct: 25 },
                      { type: "GOVERNANCE_VOTE", count: 186234, pct: 15 },
                      { type: "DREAMSPACE_CREATE", count: 149812, pct: 12 },
                      { type: "SECURITY_EVENT", count: 112456, pct: 9 },
                      { type: "IDENTITY_UPDATE", count: 63334, pct: 5 }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-32 text-sm font-mono">{item.type}</div>
                        <div className="flex-1 h-4 bg-background rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-purple-500"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-16 text-right">
                          {item.pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-purple-400" />
                    Storage Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <Database className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                      <p className="text-2xl font-bold">71.5%</p>
                      <p className="text-sm text-muted-foreground">MSR Blockchain</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <HardDrive className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                      <p className="text-2xl font-bold">28.5%</p>
                      <p className="text-sm text-muted-foreground">IPFS Storage</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <Lock className="w-8 h-8 mx-auto mb-2 text-green-400" />
                      <p className="text-2xl font-bold">99.97%</p>
                      <p className="text-sm text-muted-foreground">Verified</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 text-center">
                      <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-400" />
                      <p className="text-2xl font-bold">0.03%</p>
                      <p className="text-sm text-muted-foreground">Disputed</p>
                    </div>
                  </div>
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

export default TAMVCrumbs;
