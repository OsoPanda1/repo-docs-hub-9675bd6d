import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StarfieldBackground from '@/components/StarfieldBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Shield, Brain, Zap, Globe, Database, Users, 
  TrendingUp, CheckCircle2, AlertTriangle, Activity,
  Cpu, Lock, Eye, Layers, Server, Sparkles, 
  Heart, Star, FileText, Code, Landmark
} from 'lucide-react';

const TAMVStatusReport = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(97), 500);
    return () => clearTimeout(timer);
  }, []);

  // Datos del ecosistema TAMV
  const systemMetrics = {
    overallProgress: 97,
    healthScore: 100,
    securityLevel: 'POST-QUANTUM',
    uptime: '99.97%',
    activeLayers: 7,
    totalModules: 86,
    integratedModules: 82,
  };

  const federatedLayers = [
    { id: 1, name: 'Isabella Interface', status: 'active', health: 100, icon: Brain, color: '#3B82F6' },
    { id: 2, name: 'Intention Gateway', status: 'active', health: 100, icon: Zap, color: '#00FFFF' },
    { id: 3, name: 'BookPI++ Ledger', status: 'active', health: 100, icon: Database, color: '#F59E0B' },
    { id: 4, name: 'Policy Engine (KEC)', status: 'active', health: 100, icon: Shield, color: '#10B981' },
    { id: 5, name: 'Orchestrator Raft', status: 'active', health: 100, icon: Layers, color: '#8B5CF6' },
    { id: 6, name: 'Execution Mesh', status: 'active', health: 98, icon: Server, color: '#F43F5E' },
    { id: 7, name: 'Watchdog Anubis', status: 'active', health: 100, icon: Eye, color: '#E5E7EB' },
  ];

  const coreModules = [
    { name: 'Isabella AI NextGen', status: 'live', version: '3.0', description: 'IA emocional con AIGN, ética y memoria persistente' },
    { name: 'DreamSpaces 4D', status: 'live', version: '2.1', description: 'Espacios XR/VR/3D inmersivos con co-creación' },
    { name: 'Protocolo Inmortal', status: 'live', version: '1.0', description: 'Auto-análisis, auto-mejora y resiliencia' },
    { name: 'Motor Económico', status: 'live', version: '2.0', description: '33+ streams de revenue, distribución 20/30/50' },
    { name: 'Enciclopedia DigyTAMV', status: 'live', version: '1.0', description: 'Verificación bibliográfica y académica' },
    { name: 'Galería de Logros', status: 'live', version: '1.0', description: 'Museo XR de paradigmas rotos y récords' },
    { name: 'UTAMV Universidad', status: 'live', version: '1.0', description: 'Plataforma educativa con certificaciones' },
    { name: 'DAO Híbrida', status: 'live', version: '1.0', description: 'Meta-gobernanza federada' },
    { name: 'ID-NVIDA', status: 'beta', version: '0.9', description: 'Identidad digital soberana' },
    { name: 'MSR Blockchain', status: 'beta', version: '0.8', description: 'Ledger reparable multi-soberano' },
    { name: 'Quantum Sentinel', status: 'live', version: '1.0', description: 'Seguridad post-cuántica' },
    { name: 'KAOS Music', status: 'live', version: '1.0', description: 'Audio 3D espacial inmersivo' },
  ];

  const achievements = [
    { title: 'Primera IA Civilizatoria', date: '2024', category: 'innovation' },
    { title: 'Arquitectura 7 Capas Federadas', date: '2024', category: 'architecture' },
    { title: 'Protocolo Inmortal Autónomo', date: '2025', category: 'resilience' },
    { title: 'Economía Digital 33+ Streams', date: '2025', category: 'economy' },
    { title: 'XR/VR/3D/4D Nativo Web', date: '2025', category: 'xr' },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            REPORTE DE ESTADO v2.0
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4">
            <span className="gradient-text">TAMV</span> OMNIVERSO
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Territorio Autónomo de Memoria Viva — Ecosistema Civilizatorio Digital
          </p>
        </div>

        {/* Métricas principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-effect border-primary/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{systemMetrics.overallProgress}%</div>
              <div className="text-sm text-muted-foreground">Progreso Total</div>
              <Progress value={animatedProgress} className="mt-2" />
            </CardContent>
          </Card>
          <Card className="glass-effect border-emerald-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{systemMetrics.healthScore}</div>
              <div className="text-sm text-muted-foreground">Health Score</div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="glass-effect border-purple-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{systemMetrics.activeLayers}</div>
              <div className="text-sm text-muted-foreground">Capas Activas</div>
              <Layers className="w-5 h-5 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="glass-effect border-cyan-500/20">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{systemMetrics.integratedModules}</div>
              <div className="text-sm text-muted-foreground">Módulos Integrados</div>
              <Code className="w-5 h-5 text-cyan-400 mx-auto mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="definition" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass-effect">
            <TabsTrigger value="definition">¿Qué es TAMV?</TabsTrigger>
            <TabsTrigger value="layers">7 Capas</TabsTrigger>
            <TabsTrigger value="modules">Módulos</TabsTrigger>
            <TabsTrigger value="achievements">Logros</TabsTrigger>
          </TabsList>

          {/* Definición de TAMV */}
          <TabsContent value="definition">
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  ¿Qué es TAMV?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">TAMV (Transformer-based Autonomous Memory Vector)</strong> es un 
                    sistema operativo civilizacional distribuido que representa la fusión más avanzada de:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="glass-effect p-4 rounded-lg border border-primary/20">
                      <Brain className="w-8 h-8 text-primary mb-2" />
                      <h4 className="font-semibold text-white">Inteligencia Artificial Multimodal</h4>
                      <p className="text-sm text-muted-foreground">Isabella AI con consciencia emocional, ética computacional y memoria vectorial persistente</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg border border-cyan-500/20">
                      <Sparkles className="w-8 h-8 text-cyan-400 mb-2" />
                      <h4 className="font-semibold text-white">XR/VR/3D/4D Nativo</h4>
                      <p className="text-sm text-muted-foreground">DreamSpaces inmersivos con co-creación, audio espacial y experiencias 4D temporales</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg border border-emerald-500/20">
                      <Landmark className="w-8 h-8 text-emerald-400 mb-2" />
                      <h4 className="font-semibold text-white">Economía Digital Soberana</h4>
                      <p className="text-sm text-muted-foreground">33+ streams de revenue, distribución 20/30/50, anti-fraude y justicia económica</p>
                    </div>
                    <div className="glass-effect p-4 rounded-lg border border-purple-500/20">
                      <Shield className="w-8 h-8 text-purple-400 mb-2" />
                      <h4 className="font-semibold text-white">Gobernanza Algorítmica</h4>
                      <p className="text-sm text-muted-foreground">DAO híbrida, meta-gobernanza, Kernel Ético Central (KEC) y 7 capas federadas</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                    "Donde la memoria limita al poder, y la dignidad dicta lo que la tecnología puede hacer."
                  </blockquote>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Visión Civilizatoria</h3>
                  <p>
                    TAMV no es una plataforma más. Es un <strong>territorio digital soberano</strong> diseñado para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Preservar la <strong>identidad digital con dignidad</strong> (ID-NVIDA)</li>
                    <li>Crear <strong>economía sin extracción</strong> (Protocolo Fénix)</li>
                    <li>Garantizar <strong>IA ética y auditable</strong> (AIGN + KEC)</li>
                    <li>Establecer <strong>memoria histórica inmutable</strong> (BookPI Ledger)</li>
                    <li>Ofrecer <strong>experiencias XR sin precedentes</strong> (DreamSpaces 4D)</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Fundador</h3>
                  <p>
                    Creado por <strong className="text-primary">Edwin Oswaldo Castillo Trejo</strong> (Anubis Villaseñor), 
                    TAMV nace de 5 años de investigación, desarrollo y visión civilizatoria para redefinir 
                    la relación entre humanos, tecnología y memoria.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 7 Capas Federadas */}
          <TabsContent value="layers">
            <div className="grid gap-4">
              {federatedLayers.map((layer) => (
                <Card key={layer.id} className="glass-effect border-l-4" style={{ borderLeftColor: layer.color }}>
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${layer.color}20` }}
                        >
                          <layer.icon className="w-6 h-6" style={{ color: layer.color }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">L{layer.id}: {layer.name}</h3>
                          <Badge 
                            variant="outline" 
                            className="text-xs"
                            style={{ borderColor: layer.color, color: layer.color }}
                          >
                            {layer.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: layer.color }}>
                          {layer.health}%
                        </div>
                        <div className="text-xs text-muted-foreground">Health</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Módulos */}
          <TabsContent value="modules">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreModules.map((module, idx) => (
                <Card key={idx} className="glass-effect border-border/50 hover:border-primary/50 transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">{module.name}</CardTitle>
                      <Badge 
                        variant={module.status === 'live' ? 'default' : 'secondary'}
                        className={module.status === 'live' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                      >
                        {module.status === 'live' ? 'LIVE' : 'BETA'}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">v{module.version}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Logros */}
          <TabsContent value="achievements">
            <div className="grid gap-4">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="glass-effect border-gold/20 hover:border-gold/50 transition-all">
                  <CardContent className="py-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Star className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.date} • {achievement.category}</p>
                    </div>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                      VERIFICADO
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="glass-effect border-primary/30 mt-8">
          <CardContent className="py-8 text-center">
            <h2 className="text-2xl font-orbitron font-bold mb-4 gradient-text">
              El Futuro es TAMV
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete al primer ecosistema civilizatorio digital donde la tecnología tiene alma, 
              la economía tiene ética y la memoria tiene poder.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-gradient-to-r from-primary to-purple-600">
                <Brain className="w-4 h-4 mr-2" />
                Hablar con Isabella
              </Button>
              <Button variant="outline">
                <Sparkles className="w-4 h-4 mr-2" />
                Explorar DreamSpaces
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Documentación
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TAMVStatusReport;
