import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle2, Clock, TrendingUp, Users, DollarSign, Target, Calendar } from "lucide-react";

const DocsProjectStatus = () => {
  const components = [
    { name: "Frontend UI/UX", progress: 70, status: "success", priority: "Media" },
    { name: "Backend API", progress: 0, status: "error", priority: "CRÍTICA" },
    { name: "Base de Datos", progress: 0, status: "error", priority: "CRÍTICA" },
    { name: "Autenticación", progress: 0, status: "error", priority: "CRÍTICA" },
    { name: "ISABELLA AI", progress: 5, status: "error", priority: "CRÍTICA" },
    { name: "Sistema de Pagos", progress: 0, status: "error", priority: "Alta" },
    { name: "Infraestructura IaC", progress: 40, status: "warning", priority: "Alta" },
    { name: "CI/CD Workflows", progress: 60, status: "warning", priority: "Media" },
    { name: "Seguridad", progress: 10, status: "error", priority: "Alta" },
    { name: "Documentación", progress: 90, status: "success", priority: "Baja" },
  ];

  const roadmap = [
    {
      phase: "Fase 1: Fundación",
      duration: "2-3 meses",
      status: "pending",
      priority: "CRÍTICA",
      goals: [
        "Configurar proyecto GCP",
        "Desplegar infraestructura Terraform",
        "Crear backend API básico",
        "Implementar autenticación con Supabase",
        "Sistema de registro y login completo"
      ]
    },
    {
      phase: "Fase 2: Características Core",
      duration: "3-4 meses",
      status: "pending",
      priority: "Alta",
      goals: [
        "Integración de ISABELLA AI con OpenAI/Anthropic",
        "Sistema de conversación con memoria",
        "Sistema de Créditos TAMV",
        "Wallet digital para TC",
        "Red social básica"
      ]
    },
    {
      phase: "Fase 3: Características Avanzadas",
      duration: "4-6 meses",
      status: "pending",
      priority: "Media",
      goals: [
        "Motor 3D con Three.js/Babylon.js",
        "Dreamweave Spaces (entornos 3D)",
        "Marketplace de NFTs",
        "Sistema de pagos con Stripe",
        "Mensajería directa"
      ]
    },
    {
      phase: "Fase 4: Producción y Escalado",
      duration: "2-3 meses",
      status: "pending",
      priority: "Media",
      goals: [
        "Auditoría de seguridad completa",
        "Load testing (10,000+ usuarios)",
        "Despliegue a producción",
        "Configuración de backups automáticos",
        "Plan de disaster recovery"
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge variant="default" className="bg-green-500/20 text-green-500 border-green-500/50">Completado</Badge>;
      case "warning":
        return <Badge variant="default" className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50">En Progreso</Badge>;
      case "error":
        return <Badge variant="default" className="bg-red-500/20 text-red-500 border-red-500/50">Pendiente</Badge>;
      default:
        return <Badge variant="outline">Desconocido</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "CRÍTICA":
        return <Badge variant="destructive" className="ml-2">🔥 CRÍTICA</Badge>;
      case "Alta":
        return <Badge variant="default" className="ml-2 bg-orange-500/20 text-orange-500 border-orange-500/50">Alta</Badge>;
      case "Media":
        return <Badge variant="secondary" className="ml-2">Media</Badge>;
      default:
        return <Badge variant="outline" className="ml-2">Baja</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          Estado del Proyecto TAMV
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Dashboard completo del avance real del ecosistema TAMV DM-X4™. Seguimiento de componentes,
          roadmap de desarrollo y métricas de progreso.
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            Progreso General del Proyecto
          </CardTitle>
          <CardDescription>
            Estado actual: En Desarrollo Temprano
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold gradient-text">20%</span>
              <Badge variant="outline" className="text-sm">
                Fecha de análisis: 30 de Septiembre, 2025
              </Badge>
            </div>
            <Progress value={20} className="h-4" />
            <p className="text-sm text-muted-foreground">
              20 de 100 puntos completados hacia el lanzamiento de producción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Completado</span>
              </div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-muted-foreground">componentes</p>
            </div>
            
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-muted-foreground">En Progreso</span>
              </div>
              <p className="text-2xl font-bold">2</p>
              <p className="text-xs text-muted-foreground">componentes</p>
            </div>
            
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm text-muted-foreground">Pendiente</span>
              </div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-xs text-muted-foreground">componentes críticos</p>
            </div>
            
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Tiempo Estimado</span>
              </div>
              <p className="text-2xl font-bold">12-16</p>
              <p className="text-xs text-muted-foreground">meses</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="components" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="components">Componentes</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
          <TabsTrigger value="risks">Riesgos</TabsTrigger>
        </TabsList>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-4">
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle>Desglose por Componente</CardTitle>
              <CardDescription>
                Estado actual de cada módulo del ecosistema TAMV
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {components.map((component, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{component.name}</span>
                      {getPriorityBadge(component.priority)}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">{component.progress}%</span>
                      {getStatusBadge(component.status)}
                    </div>
                  </div>
                  <Progress value={component.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Roadmap Tab */}
        <TabsContent value="roadmap" className="space-y-4">
          {roadmap.map((phase, idx) => (
            <Card key={idx} className="glass-effect border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{phase.phase}</CardTitle>
                    <CardDescription>{phase.duration}</CardDescription>
                  </div>
                  {getPriorityBadge(phase.priority)}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.goals.map((goal, gIdx) => (
                    <li key={gIdx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-4">
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Inversión Estimada
              </CardTitle>
              <CardDescription>
                Recursos necesarios para completar el proyecto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-effect p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Equipo Completo</p>
                  <p className="text-3xl font-bold gradient-text">$1.25M</p>
                  <p className="text-xs text-muted-foreground mt-1">Año 1</p>
                </div>
                <div className="glass-effect p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Infraestructura</p>
                  <p className="text-3xl font-bold gradient-text">$24K</p>
                  <p className="text-xs text-muted-foreground mt-1">Anual</p>
                </div>
                <div className="glass-effect p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Servicios Externos</p>
                  <p className="text-3xl font-bold gradient-text">$15.5K</p>
                  <p className="text-xs text-muted-foreground mt-1">Anual</p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-primary/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Inversión Total Estimada</p>
                    <p className="text-4xl font-bold gradient-text mt-2">$1,289,500</p>
                    <p className="text-sm text-muted-foreground mt-1">Primer año de desarrollo</p>
                  </div>
                  <Target className="w-12 h-12 text-primary opacity-50" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Equipo Necesario
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">DevOps Engineers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Backend Developers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Frontend Developers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">AI/ML Engineers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">3D/WebGL Developers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">Security Engineer</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">QA Engineers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">Audio Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Risks Tab */}
        <TabsContent value="risks" className="space-y-4">
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle>Riesgos Técnicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { risk: "Escalabilidad de IA", probability: "Alta", impact: "Alto", mitigation: "Usar caching, rate limiting, modelos optimizados" },
                { risk: "Costos de infraestructura", probability: "Media", impact: "Alto", mitigation: "Monitoreo de costos, auto-scaling, optimización" },
                { risk: "Seguridad de datos", probability: "Media", impact: "Crítico", mitigation: "Auditorías regulares, encriptación, compliance" },
                { risk: "Complejidad 3D", probability: "Alta", impact: "Medio", mitigation: "MVP simple primero, iterar gradualmente" }
              ].map((item, idx) => (
                <div key={idx} className="glass-effect p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{item.risk}</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">Prob: {item.probability}</Badge>
                      <Badge variant="outline" className="text-xs">Impacto: {item.impact}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mitigación:</strong> {item.mitigation}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle>Riesgos de Negocio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { risk: "Regulación de criptomonedas", probability: "Alta", impact: "Alto", mitigation: "Consultoría legal, diseño como utility token" },
                { risk: "Competencia", probability: "Media", impact: "Medio", mitigation: "Diferenciación clara, comunidad fuerte" },
                { risk: "Adopción de usuarios", probability: "Media", impact: "Alto", mitigation: "Marketing, onboarding excelente, tier gratuito" }
              ].map((item, idx) => (
                <div key={idx} className="glass-effect p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{item.risk}</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">Prob: {item.probability}</Badge>
                      <Badge variant="outline" className="text-xs">Impacto: {item.impact}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mitigación:</strong> {item.mitigation}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Items */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>🎯 Próximos Pasos Críticos</CardTitle>
          <CardDescription>Top 5 tareas prioritarias para las próximas 2 semanas</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <Badge variant="destructive" className="mt-1">1</Badge>
              <div>
                <p className="font-semibold">Configurar Proyecto GCP</p>
                <p className="text-sm text-muted-foreground">Tiempo estimado: 2 días</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="destructive" className="mt-1">2</Badge>
              <div>
                <p className="font-semibold">Implementar Backend API Básico</p>
                <p className="text-sm text-muted-foreground">Tiempo estimado: 1 semana</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="destructive" className="mt-1">3</Badge>
              <div>
                <p className="font-semibold">Integrar Supabase Auth</p>
                <p className="text-sm text-muted-foreground">Tiempo estimado: 3 días</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="destructive" className="mt-1">4</Badge>
              <div>
                <p className="font-semibold">Crear Esquema de Base de Datos</p>
                <p className="text-sm text-muted-foreground">Tiempo estimado: 3 días</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="destructive" className="mt-1">5</Badge>
              <div>
                <p className="font-semibold">Desplegar a Staging</p>
                <p className="text-sm text-muted-foreground">Tiempo estimado: 2 días</p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsProjectStatus;
