import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Target, Zap, CheckCircle2, Clock } from "lucide-react";

const DocsImplementationRoadmap = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Roadmap de Implementación Estratégica</h1>
        <p className="text-lg text-muted-foreground">
          Plan de despliegue por fases para la arquitectura soberana TAMV DM-X4™
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Estado Global del Proyecto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Progreso Total</span>
              <span className="text-2xl font-bold text-primary">40%</span>
            </div>
            <Progress value={40} className="h-3" />
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Frontend</p>
              <div className="flex items-center gap-2">
                <Progress value={85} className="h-2" />
                <Badge variant="default">85%</Badge>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Backend</p>
              <div className="flex items-center gap-2">
                <Progress value={45} className="h-2" />
                <Badge variant="secondary">45%</Badge>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Blockchain</p>
              <div className="flex items-center gap-2">
                <Progress value={30} className="h-2" />
                <Badge variant="outline">30%</Badge>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">IA/ML</p>
              <div className="flex items-center gap-2">
                <Progress value={35} className="h-2" />
                <Badge variant="outline">35%</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline por Fases */}
      <Tabs defaultValue="phase1" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="phase1">Fase 1 (Meses 1-4)</TabsTrigger>
          <TabsTrigger value="phase2">Fase 2 (Meses 5-8)</TabsTrigger>
          <TabsTrigger value="phase3">Fase 3 (Meses 9-12)</TabsTrigger>
        </TabsList>

        {/* FASE 1: Pilares de Soberanía */}
        <TabsContent value="phase1" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Fase 1: Pilares de Soberanía
              </CardTitle>
              <CardDescription>
                Implementación de componentes críticos de identidad, seguridad y gobernanza básica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Objetivo 1: Soberanía de Identidad */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Soberanía de Identidad</h3>
                  <Badge variant="destructive">CRITICAL</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">ID-NVIDA™ Protocol Core</p>
                      <p className="text-xs text-muted-foreground">Protocolo base de identidad soberana implementado</p>
                      <Progress value={100} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Biometric Framework</p>
                      <p className="text-xs text-muted-foreground">Sistema de verificación biométrica multi-modal</p>
                      <Progress value={60} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Verifiable Credentials System</p>
                      <p className="text-xs text-muted-foreground">Emisión y verificación de credenciales W3C DID compliant</p>
                      <Progress value={45} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">99.9% uptime</Badge>
                  <Badge variant="outline">Zero identity breaches</Badge>
                  <Badge variant="outline">WEF Digital Identity</Badge>
                </div>
              </div>

              {/* Objetivo 2: Fundamentos Emocionales */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Fundamentos Emocionales</h3>
                  <Badge className="bg-orange-500">HIGH</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">ANUBIS™ Core Engine</p>
                      <p className="text-xs text-muted-foreground">Motor central de inteligencia emocional operativo</p>
                      <Progress value={100} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Basic Emotional Analytics</p>
                      <p className="text-xs text-muted-foreground">Análisis básico de 8 emociones primarias</p>
                      <Progress value={70} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Legitimacy Quantifier v1.0</p>
                      <p className="text-xs text-muted-foreground">Primera versión del cuantificador de legitimidad</p>
                      <Progress value={55} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">85% accuracy</Badge>
                  <Badge variant="outline">Real-time processing</Badge>
                  <Badge variant="outline">WEF Ethics and Identity</Badge>
                </div>
              </div>

              {/* Objetivo 3: Framework de Gobernanza */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Framework de Gobernanza</h3>
                  <Badge className="bg-orange-500">HIGH</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">DEKATEOTL™ Basic Structure</p>
                      <p className="text-xs text-muted-foreground">Estructura básica de 5 dimensiones de autoridad</p>
                      <Progress value={100} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Multi-layer Consensus Engine</p>
                      <p className="text-xs text-muted-foreground">Sistema de consenso multi-capa sin quantum annealing</p>
                      <Progress value={65} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Decision Audit Trail</p>
                      <p className="text-xs text-muted-foreground">Sistema de trazabilidad completa de decisiones</p>
                      <Progress value={50} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">&lt;5sec decision times</Badge>
                  <Badge variant="outline">100% auditability</Badge>
                  <Badge variant="outline">WEF Agile Governance</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FASE 2: Ecosistema Emocional */}
        <TabsContent value="phase2" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                Fase 2: Ecosistema Emocional
              </CardTitle>
              <CardDescription>
                Expansión de capacidades de IA emocional y economía de legitimidad
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Objetivo 1: Despliegue ISABELLA AI */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Despliegue ISABELLA AI™</h3>
                  <Badge variant="destructive">CRITICAL</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Crisis Detection System</p>
                      <p className="text-xs text-muted-foreground">Detección de crisis emocionales en tiempo real</p>
                      <Progress value={30} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Emotional Support Engine</p>
                      <p className="text-xs text-muted-foreground">Motor de soporte emocional con escalación humana</p>
                      <Progress value={25} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Professional Integration</p>
                      <p className="text-xs text-muted-foreground">Integración con líneas de crisis y profesionales de salud mental</p>
                      <Progress value={15} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">HIPAA Compliant</Badge>
                  <Badge variant="outline">GDPR Compliant</Badge>
                  <Badge variant="outline">Mental Health Laws</Badge>
                </div>
              </div>

              {/* Objetivo 2: Legitimidad Económica */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Legitimidad Económica</h3>
                  <Badge className="bg-orange-500">HIGH</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">TAMV Economic Engine</p>
                      <p className="text-xs text-muted-foreground">Motor económico con tokenomics de legitimidad</p>
                      <Progress value={35} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Legitimacy Index Platform</p>
                      <p className="text-xs text-muted-foreground">Plataforma pública del índice de legitimidad institucional</p>
                      <Progress value={40} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Transaction & Analytics Layer</p>
                      <p className="text-xs text-muted-foreground">Capa de transacciones y análisis de volumen económico</p>
                      <Progress value={30} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Transaction Volume</Badge>
                  <Badge variant="outline">Legitimacy Score Accuracy</Badge>
                  <Badge variant="outline">WEF Economic Progress</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* FASE 3: Soberanía Completa */}
        <TabsContent value="phase3" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Fase 3: Soberanía Completa
              </CardTitle>
              <CardDescription>
                Implementación completa de arquitectura Web 4.0 con interoperabilidad global
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Objetivo 1: Integración Multi-Sensorial */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Integración Multi-Sensorial</h3>
                  <Badge variant="outline">MEDIUM</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Motor Render™ Full Deployment</p>
                      <p className="text-xs text-muted-foreground">Motor de renderizado completo con WebGPU</p>
                      <Progress value={10} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Immersive Shell</p>
                      <p className="text-xs text-muted-foreground">Shell inmersivo con WebXR y spatial audio</p>
                      <Progress value={5} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">3D Audio System</p>
                      <p className="text-xs text-muted-foreground">Sistema de audio espacial 3D completo</p>
                      <Progress value={8} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">WebGPU</Badge>
                  <Badge variant="outline">WebXR</Badge>
                  <Badge variant="outline">Spatial Audio</Badge>
                </div>
              </div>

              {/* Objetivo 2: Interoperabilidad Global */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Interoperabilidad Global</h3>
                  <Badge className="bg-orange-500">HIGH</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">W3C Standards Implementation</p>
                      <p className="text-xs text-muted-foreground">Implementación completa de estándares W3C DID y VC</p>
                      <Progress value={20} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Global Entity Integrations</p>
                      <p className="text-xs text-muted-foreground">Integración con agencias UN, iniciativas WEF y bancos globales</p>
                      <Progress value={5} className="h-1" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">Cross-border Compliance</p>
                      <p className="text-xs text-muted-foreground">Cumplimiento de regulaciones internacionales y transfronterizas</p>
                      <Progress value={10} className="h-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">International Standards</Badge>
                  <Badge variant="outline">Cross-border Regulations</Badge>
                  <Badge variant="outline">UN/WEF Integration</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Timeline Visual */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Timeline Visual de Implementación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Q1 2025 */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q1 2025 - Meses 1-3</h4>
                  <Badge>Fase 1 - Inicio</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Implementación de ID-NVIDA™, ANUBIS™ Core, DEKATEOTL™ Basic
                </p>
              </div>
            </div>

            {/* Q2 2025 */}
            <div className="relative pl-8 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q2 2025 - Mes 4-6</h4>
                  <Badge>Fase 1 - Completado</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Finalización de pilares de soberanía, inicio de Fase 2
                </p>
              </div>
            </div>

            {/* Q3 2025 */}
            <div className="relative pl-8 border-l-2 border-secondary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q3 2025 - Meses 7-9</h4>
                  <Badge variant="secondary">Fase 2 - En Progreso</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Despliegue ISABELLA AI™, motor económico, índice de legitimidad
                </p>
              </div>
            </div>

            {/* Q4 2025 */}
            <div className="relative pl-8 border-l-2 border-accent">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Q4 2025 - Meses 10-12</h4>
                  <Badge variant="outline">Fase 3 - Planificado</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Motor Render™, interoperabilidad global, soberanía completa Web 4.0
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsImplementationRoadmap;
