import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuantumBackground from "@/components/QuantumBackground";
import { 
  Shield, Lock, Eye, AlertTriangle, CheckCircle2, 
  Activity, Fingerprint, Key, Smartphone, Globe,
  Scan, Database, Cpu, Zap, RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Security = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const [isQuantumShield, setIsQuantumShield] = useState(true);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  const securityScore = 94;
  
  const securityLayers = [
    { name: "ANUBIS Sentinel", status: "active", description: "Cifrado caótico Ed25519", icon: Shield, level: 100 },
    { name: "HORUS Vision", status: "active", description: "Detección de amenazas ML", icon: Eye, level: 98 },
    { name: "DEKATEOTL Quantum", status: "active", description: "Criptografía post-cuántica", icon: Lock, level: 100 },
    { name: "Phoenix Protocol", status: "standby", description: "Reset de emergencia", icon: RefreshCw, level: 85 },
    { name: "ID-NVIDA Verify", status: "active", description: "Identidad soberana", icon: Fingerprint, level: 92 },
  ];

  const recentActivity = [
    { type: "success", message: "Sesión iniciada desde nuevo dispositivo", time: "Hace 2h", device: "iPhone 15 Pro" },
    { type: "warning", message: "Intento de acceso bloqueado", time: "Hace 5h", location: "IP: 192.168.x.x" },
    { type: "success", message: "Contraseña actualizada", time: "Hace 1d", device: "Chrome, Windows" },
    { type: "info", message: "2FA activado exitosamente", time: "Hace 3d", device: "Safari, macOS" },
  ];

  const devices = [
    { name: "iPhone 15 Pro", type: "mobile", lastActive: "Activo ahora", trusted: true },
    { name: "MacBook Pro M3", type: "desktop", lastActive: "Hace 3h", trusted: true },
    { name: "iPad Air", type: "tablet", lastActive: "Hace 2d", trusted: true },
    { name: "Windows PC", type: "desktop", lastActive: "Hace 5d", trusted: false },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <QuantumBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="mb-8 fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-orbitron gradient-text">Centro de Seguridad</h1>
              <p className="text-muted-foreground">DEKATEOTL™ System - 11 Capas de Blindaje</p>
            </div>
          </div>
        </div>

        {/* Security Score Card */}
        <Card className="glass-card border-green-500/30 mb-8 fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Score Circle */}
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    strokeDasharray={`${securityScore * 2.83} 283`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(150, 85%, 45%)" />
                      <stop offset="100%" stopColor="hsl(185, 100%, 50%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold font-orbitron">{securityScore}</span>
                  <span className="text-sm text-muted-foreground">Puntuación</span>
                </div>
              </div>
              
              {/* Score Details */}
              <div className="flex-1 text-center md:text-left">
                <Badge variant="secondary" className="mb-3 bg-green-500/20 text-green-500">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  EXCELENTE
                </Badge>
                <h2 className="text-2xl font-bold font-orbitron mb-2">Tu cuenta está protegida</h2>
                <p className="text-muted-foreground mb-4">
                  El sistema DEKATEOTL™ mantiene activas 11 capas de seguridad cuántico-emocional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1">
                    <Lock className="w-3 h-3" />
                    Cifrado Quantum
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Fingerprint className="w-3 h-3" />
                    Biometría Activa
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Shield className="w-3 h-3" />
                    Zero-Knowledge
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="layers" className="space-y-6">
          <TabsList className="glass-effect p-1">
            <TabsTrigger value="layers" className="gap-2">
              <Shield className="w-4 h-4" />
              Capas de Seguridad
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Key className="w-4 h-4" />
              Configuración
            </TabsTrigger>
            <TabsTrigger value="activity" className="gap-2">
              <Activity className="w-4 h-4" />
              Actividad
            </TabsTrigger>
            <TabsTrigger value="devices" className="gap-2">
              <Smartphone className="w-4 h-4" />
              Dispositivos
            </TabsTrigger>
          </TabsList>

          {/* Security Layers */}
          <TabsContent value="layers" className="space-y-4">
            <div className="grid gap-4">
              {securityLayers.map((layer, idx) => (
                <Card 
                  key={layer.name} 
                  className="glass-card border-border/50 fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${
                        layer.status === 'active' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        <layer.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{layer.name}</h3>
                          <Badge variant={layer.status === 'active' ? 'default' : 'secondary'}>
                            {layer.status === 'active' ? 'ACTIVO' : 'STANDBY'}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-2xl font-bold font-orbitron text-primary">{layer.level}%</span>
                        <Progress value={layer.level} className="w-24 h-2 mt-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5 text-primary" />
                    Autenticación
                  </CardTitle>
                  <CardDescription>Configura métodos de acceso seguro</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autenticación 2FA</p>
                      <p className="text-sm text-muted-foreground">SMS o app autenticador</p>
                    </div>
                    <Switch checked={is2FAEnabled} onCheckedChange={setIs2FAEnabled} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Biometría</p>
                      <p className="text-sm text-muted-foreground">Huella o Face ID</p>
                    </div>
                    <Switch checked={isBiometricEnabled} onCheckedChange={setIsBiometricEnabled} />
                  </div>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Key className="w-4 h-4" />
                    Cambiar Contraseña
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Escudo Quantum
                  </CardTitle>
                  <CardDescription>Protección avanzada DEKATEOTL™</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Escudo Quantum</p>
                      <p className="text-sm text-muted-foreground">Criptografía post-cuántica</p>
                    </div>
                    <Switch checked={isQuantumShield} onCheckedChange={setIsQuantumShield} />
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="font-medium">Estado del Escudo</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Algoritmos: Kyber, Dilithium, SPHINCS+
                    </p>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity */}
          <TabsContent value="activity" className="space-y-4">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Registro de accesos y cambios de seguridad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 rounded-lg border border-border/50 fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className={`p-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500/20 text-green-500' :
                        activity.type === 'warning' ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        {activity.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
                         activity.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
                         <Activity className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.message}</p>
                        <p className="text-sm text-muted-foreground">{activity.device || activity.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Devices */}
          <TabsContent value="devices" className="space-y-4">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Dispositivos Conectados</CardTitle>
                <CardDescription>Gestiona los dispositivos con acceso a tu cuenta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {devices.map((device, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border/50 fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="p-3 rounded-xl bg-muted">
                        <Smartphone className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{device.name}</p>
                          {device.trusted && (
                            <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-500">
                              De confianza
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{device.lastActive}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        Revocar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link to="/dashboard">
            <Button variant="outline" size="lg" className="gap-2">
              ← Volver al Dashboard
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;