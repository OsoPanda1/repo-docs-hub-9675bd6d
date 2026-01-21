import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield,
  Zap,
  Crown,
  Star,
  Sparkles,
  Check,
  CreditCard,
  Building2,
  GraduationCap,
  Palette,
  Gamepad2,
  Gift,
  Ticket
} from "lucide-react";

interface RevenueSource {
  id: string;
  name: string;
  category: string;
  commission: string;
  margin: string;
  description: string;
  active: boolean;
}

const MotorEconomico = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // 33+ Revenue Sources
  const revenueSources: RevenueSource[] = [
    // Memberships
    { id: "1", name: "Membresía Free", category: "Membresías", commission: "0%", margin: "N/A", description: "Genera tracción y datos", active: true },
    { id: "2", name: "Membresía Creador", category: "Membresías", commission: "100%", margin: ">80%", description: "$5-10 USD/mes", active: true },
    { id: "3", name: "Membresía Profesional", category: "Membresías", commission: "100%", margin: ">80%", description: "$15-25 USD/mes", active: true },
    { id: "4", name: "Membresía Gremial", category: "Membresías", commission: "100%", margin: ">75%", description: "$25-50 USD/mes", active: true },
    { id: "5", name: "Membresía VIP", category: "Membresías", commission: "100%", margin: ">70%", description: "$50-100 USD/mes", active: true },
    { id: "6", name: "Membresía Elite", category: "Membresías", commission: "100%", margin: ">70%", description: "$100-200 USD/mes", active: true },
    { id: "7", name: "Membresía Celestial", category: "Membresías", commission: "100%", margin: ">65%", description: "$300-500 USD/mes", active: true },
    { id: "8", name: "Plan Enterprise", category: "Membresías", commission: "100%", margin: ">60%", description: "$300-1,500 USD/mes", active: true },
    
    // Creator Economy
    { id: "9", name: "Venta de Experiencias XR", category: "Economía Creadora", commission: "25-35%", margin: ">70%", description: "Creador recibe 65-75%", active: true },
    { id: "10", name: "Eventos XR en Vivo", category: "Economía Creadora", commission: "Fee + %", margin: ">60%", description: "Fee base + taquilla", active: true },
    { id: "11", name: "Marketplace DreamSpaces", category: "Economía Creadora", commission: "20-35%", margin: ">70%", description: "Assets 3D/4D", active: true },
    { id: "12", name: "Venta de Assets 3D/4D", category: "Economía Creadora", commission: "25% + royalties", margin: ">70%", description: "Con royalties perpetuos", active: true },
    { id: "13", name: "Gifts XR", category: "Economía Creadora", commission: "30-50%", margin: ">80%", description: "Micro y macro transacciones", active: true },
    { id: "14", name: "Suscripciones a Creadores", category: "Economía Creadora", commission: "25-40%", margin: ">70%", description: "Modelo tipo Patreon", active: true },
    { id: "15", name: "Patrocinios y Branded Spaces", category: "Economía Creadora", commission: "Fee + %", margin: ">60%", description: "Intermediación de contratos", active: true },
    
    // Lottery & Events
    { id: "16", name: "Lotería TAMV", category: "Lotería/Eventos", commission: "50%", margin: "Variable", description: "50% premios / 50% TAMV", active: true },
    { id: "17", name: "Sorteos XR de Terceros", category: "Lotería/Eventos", commission: "Fee + %", margin: ">50%", description: "Fee por emisión", active: true },
    { id: "18", name: "Eventos Históricos/Récords", category: "Lotería/Eventos", commission: "Variable", margin: ">50%", description: "Venta de accesos + sponsors", active: true },
    
    // UTAMV Education
    { id: "19", name: "Publicación de Cursos Extra", category: "UTAMV", commission: "Fee fijo", margin: ">80%", description: "$200-400 USD por curso", active: true },
    { id: "20", name: "Comisión Cursos", category: "UTAMV", commission: "25%", margin: ">80%", description: "Sobre ventas de cursos", active: true },
    { id: "21", name: "Diplomados y Programas", category: "UTAMV", commission: "Variable", margin: ">70%", description: "Ticket alto", active: true },
    { id: "22", name: "Certificaciones XR", category: "UTAMV", commission: "Fee + emisión", margin: ">85%", description: "Exámenes y certificados", active: true },
    { id: "23", name: "Becas Patrocinadas", category: "UTAMV", commission: "Fee/alumno", margin: ">70%", description: "Empresas y gobiernos", active: true },
    
    // SaaS & Infrastructure
    { id: "24", name: "Licencias Isabella IA", category: "SaaS/Infraestructura", commission: "100%", margin: "80%", description: "API / SaaS", active: true },
    { id: "25", name: "Licencias MSR / Blockchain", category: "SaaS/Infraestructura", commission: "100%", margin: ">75%", description: "Por nodo/volumen/storage", active: true },
    { id: "26", name: "Hosting XR", category: "SaaS/Infraestructura", commission: "100%", margin: ">70%", description: "Por GB/escena/tiempo", active: true },
    { id: "27", name: "Render 3D/4D", category: "SaaS/Infraestructura", commission: "100%", margin: ">70%", description: "Créditos prepagados", active: true },
    { id: "28", name: "Paneles de Auditoría", category: "SaaS/Infraestructura", commission: "100%", margin: ">80%", description: "Add-on premium", active: true },
    
    // B2B & Expansion
    { id: "29", name: "Consultoría Constitucional Digital", category: "B2B/Expansión", commission: "100%", margin: ">60%", description: "Proyectos + retainers", active: true },
    { id: "30", name: "White-label / Franquicias", category: "B2B/Expansión", commission: "Setup + share", margin: ">50%", description: "TAMV for X", active: true },
    { id: "31", name: "Eventos XR para Terceros", category: "B2B/Expansión", commission: "Producción + %", margin: ">55%", description: "Producción completa", active: true },
    { id: "32", name: "Merch Físico", category: "B2B/Expansión", commission: "100%", margin: ">40%", description: "Vinculado a logros", active: true },
    { id: "33", name: "Datos Agregados (Éticos)", category: "B2B/Expansión", commission: "100%", margin: ">80%", description: "Estudios culturales", active: true },
  ];

  const membershipPlans = [
    {
      id: "free",
      name: "Free",
      price: 0,
      icon: Users,
      color: "from-gray-500 to-gray-600",
      features: ["Acceso básico", "1 DreamSpace", "Chat con Isabella", "Comunidad"]
    },
    {
      id: "creator",
      name: "Creador",
      price: 9.99,
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      features: ["Todo en Free", "5 DreamSpaces", "Analytics básico", "Publicar contenido", "Margen comisión -5%"]
    },
    {
      id: "professional",
      name: "Profesional",
      price: 24.99,
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      features: ["Todo en Creador", "15 DreamSpaces", "UTAMV acceso", "Isabella Premium", "Margen comisión -10%"]
    },
    {
      id: "vip",
      name: "VIP",
      price: 49.99,
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      features: ["Todo en Profesional", "50 DreamSpaces", "Prioridad soporte", "Eventos exclusivos", "Margen comisión -15%"]
    },
    {
      id: "elite",
      name: "Elite",
      price: 99.99,
      icon: Crown,
      color: "from-amber-500 to-red-500",
      features: ["Todo en VIP", "DreamSpaces ilimitados", "Isabella Archivista", "Acceso anticipado", "Margen comisión -20%"]
    },
    {
      id: "celestial",
      name: "Celestial",
      price: 299.99,
      icon: Sparkles,
      color: "from-pink-500 to-purple-600",
      features: ["Todo en Elite", "Nodo guardián", "Curaduría", "Derechos simbólicos", "Margen comisión -25%"]
    }
  ];

  // Economic metrics
  const metrics = {
    breakeven: { mau: 5500, arpu: 50 },
    target: { mau: 150000, marketShare: "1%" },
    currentSources: 33,
    marginObjective: "≥70%",
    riskLevel: "Minimizado"
  };

  const distribution = {
    fenix: { percentage: 20, label: "Protocolo Fénix", description: "Reparación, becas, justicia económica" },
    infra: { percentage: 30, label: "Infraestructura", description: "Servidores, seguridad, desarrollo" },
    reserve: { percentage: 50, label: "Utilidad Estratégica", description: "Reservas, expansión, legal" }
  };

  const categories = [...new Set(revenueSources.map(s => s.category))];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <DollarSign className="w-3 h-3 mr-1" />
            Motor Económico Civilizatorio
          </Badge>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Sistema Económico TAMV
          </h1>
          <p className="text-muted-foreground">
            33+ fuentes de ingreso con reparto automático 20/30/50 y cero pérdida estructural
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold">{metrics.currentSources}</div>
              <div className="text-xs text-muted-foreground">Fuentes Activas</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold">{metrics.breakeven.mau.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">MAU Break-even</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
              <div className="text-2xl font-bold">${metrics.breakeven.arpu}</div>
              <div className="text-xs text-muted-foreground">ARPU Objetivo</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-6 w-6 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-bold">{metrics.marginObjective}</div>
              <div className="text-xs text-muted-foreground">Margen Bruto</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Shield className="h-6 w-6 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold text-green-400">{metrics.riskLevel}</div>
              <div className="text-xs text-muted-foreground">Riesgo</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="distribution" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="distribution">Reparto 20/30/50</TabsTrigger>
            <TabsTrigger value="sources">33+ Fuentes</TabsTrigger>
            <TabsTrigger value="memberships">Membresías</TabsTrigger>
            <TabsTrigger value="protocols">Protocolos</TabsTrigger>
          </TabsList>

          {/* Distribution Tab */}
          <TabsContent value="distribution" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle>Reparto Automático de Utilidad</CardTitle>
                <CardDescription>
                  Toda utilidad neta TAMV se distribuye automáticamente según la regla 20/30/50
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(distribution).map(([key, data]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{data.label}</span>
                          <p className="text-sm text-muted-foreground">{data.description}</p>
                        </div>
                        <Badge variant="outline" className="text-lg">
                          {data.percentage}%
                        </Badge>
                      </div>
                      <Progress value={data.percentage} className="h-4" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Regla de Oro Inmutable
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nada en TAMV consume recursos reales sin estar anclado a una entrada de valor real, 
                    medible y auditable. Este reparto se ejecuta automáticamente, no por decisión humana.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Revenue Sources Tab */}
          <TabsContent value="sources" className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle>Las 33+ Fuentes de Ingreso</CardTitle>
                <CardDescription>
                  Todas compatibles entre sí, ninguna a pérdida estructural
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {categories.map((category) => (
                    <div key={category}>
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        {category === "Membresías" && <CreditCard className="w-5 h-5" />}
                        {category === "Economía Creadora" && <Palette className="w-5 h-5" />}
                        {category === "Lotería/Eventos" && <Ticket className="w-5 h-5" />}
                        {category === "UTAMV" && <GraduationCap className="w-5 h-5" />}
                        {category === "SaaS/Infraestructura" && <Zap className="w-5 h-5" />}
                        {category === "B2B/Expansión" && <Building2 className="w-5 h-5" />}
                        {category}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {revenueSources
                          .filter(s => s.category === category)
                          .map((source) => (
                            <div key={source.id} className="p-3 bg-background/50 rounded-lg border border-border/50 flex items-center justify-between">
                              <div>
                                <div className="font-medium text-sm">{source.name}</div>
                                <div className="text-xs text-muted-foreground">{source.description}</div>
                              </div>
                              <div className="text-right">
                                <Badge variant="secondary" className="text-xs">
                                  {source.commission}
                                </Badge>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Margen: {source.margin}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Memberships Tab */}
          <TabsContent value="memberships" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {membershipPlans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`relative overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                    selectedPlan === plan.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mb-2`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-3xl font-bold">
                      ${plan.price}
                      <span className="text-sm font-normal text-muted-foreground">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full mt-4 bg-gradient-to-r ${plan.color}`}>
                      {plan.price === 0 ? 'Comenzar Gratis' : 'Suscribirse'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Protocols Tab */}
          <TabsContent value="protocols" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-400">
                    <Shield className="w-5 h-5" />
                    Protocolo Hoyo Negro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Congelamiento de fondos sospechosos
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Reetiquetado de transacciones
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Reasignación con justicia digital
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-orange-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-400">
                    <Zap className="w-5 h-5" />
                    Protocolo Fénix (20%)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Reparación comunitaria
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Becas educativas
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Justicia económica programada
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-blue-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                    Triggers Automáticos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Si margen &lt; X → sube precio
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Si CAC &gt; LTV → apaga canal
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Si costo XR sube → convierte a add-on
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-green-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-400">
                    <Shield className="w-5 h-5" />
                    Regla Anti-Burn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Ningún plan con recursos ilimitados caros
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Todo XR pesado → créditos/límites
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Margen bruto mínimo obligatorio
                    </li>
                  </ul>
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

export default MotorEconomico;
