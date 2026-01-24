import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/StarfieldBackground';
import ImmortalProtocolDashboard from '@/components/ImmortalProtocolDashboard';
import SeventhGenVisualizer from '@/components/SeventhGenVisualizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Flame, Shield, Brain, Database, Layers, Zap, 
  Eye, Lock, Activity, Cpu, Globe, Sparkles 
} from 'lucide-react';

export default function ProtocoloInmortal() {
  const features = [
    {
      icon: Brain,
      title: 'Isabella AI Core',
      description: 'Interfaz semántica emocional con memoria expandida y conexión a redes sociales',
      layer: 1,
      status: 'active'
    },
    {
      icon: Zap,
      title: 'Intention Gateway',
      description: 'Traducción de intenciones humanas a comandos ejecutables del sistema',
      layer: 2,
      status: 'active'
    },
    {
      icon: Database,
      title: 'BookPI++ Ledger',
      description: 'Registro criptográfico inmutable con versionado y revisión humana',
      layer: 3,
      status: 'active'
    },
    {
      icon: Lock,
      title: 'Policy Engine',
      description: 'Motor de políticas con evaluación multi-fase y triggers automáticos',
      layer: 4,
      status: 'active'
    },
    {
      icon: Layers,
      title: 'Orchestrator Raft',
      description: 'Orquestador distribuido con consenso y tolerancia a fallos',
      layer: 5,
      status: 'active'
    },
    {
      icon: Cpu,
      title: 'Execution Mesh',
      description: 'Workers aislados para ejecución segura de acciones del sistema',
      layer: 6,
      status: 'active'
    },
    {
      icon: Shield,
      title: 'Watchdog Anubis',
      description: 'Servicio autónomo de seguridad con chaos testing y skeleton mode',
      layer: 7,
      status: 'active'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
              <Flame className="w-4 h-4 mr-1" />
              PROTOCOLO INMORTAL v1.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-4">
              TAMV Immortal Core
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistema de auto-análisis, auto-mejora y resiliencia de 7ª generación.
              Arquitectura federada de 7 capas con inteligencia artificial evolutiva.
            </p>
          </div>

          {/* 7th Gen Visualizer */}
          <div className="mb-12">
            <Card className="glass-effect p-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Visualización de 7ª Generación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SeventhGenVisualizer />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 7 Layers Grid */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-orbitron font-bold text-center gradient-text mb-8">
            Arquitectura de 7 Capas Federadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="glass-effect hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">L{feature.layer}</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">
                          {feature.status}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Protocol Dashboard */}
        <section className="container mx-auto px-4 py-12">
          <ImmortalProtocolDashboard />
        </section>

        {/* Founder Section */}
        <section className="container mx-auto px-4 py-12">
          <Card className="glass-effect">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                  Creador del Protocolo Inmortal
                </h3>
                <p className="text-xl text-primary mb-2">
                  Edwin Oswaldo Castillo Trejo
                </p>
                <p className="text-muted-foreground italic mb-4">
                  (Anubis Villaseñor)
                </p>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Arquitecto de la primera civilización digital soberana. 
                  5 años de desarrollo ininterrumpido. 86 repositorios públicos.
                  Más de 210 millones de usuarios impactados.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Badge className="bg-primary/20 text-primary">
                    <Globe className="w-4 h-4 mr-1" />
                    TAMV DM-X4™
                  </Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400">
                    <Activity className="w-4 h-4 mr-1" />
                    100% Operativo
                  </Badge>
                  <Badge className="bg-amber-500/20 text-amber-400">
                    <Flame className="w-4 h-4 mr-1" />
                    Modo Inmortal
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
