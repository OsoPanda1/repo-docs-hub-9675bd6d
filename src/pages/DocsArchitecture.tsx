import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Shield, Brain, Network, Layers, Cpu } from "lucide-react";

const DocsArchitecture = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Arquitectura Soberana TAMV DM-X4™</h1>
        <p className="text-lg text-muted-foreground">
          Sistema de nación-estado digital alineado con los pilares estratégicos del World Economic Forum 2025
        </p>
      </div>

      {/* Alineación WEF */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Alineación con World Economic Forum 2025
          </CardTitle>
          <CardDescription>
            Resonancia con los pilares estratégicos globales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Badge variant="default">Transformación Ética</Badge>
              <p className="text-sm text-muted-foreground">
                ANUBIS™ e ISABELLA AI™ como motores de legitimidad emocional
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="default">Infraestructura Resiliente</Badge>
              <p className="text-sm text-muted-foreground">
                KAOS™ y arquitectura de mitigación entrópica
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="default">Innovación Inclusiva</Badge>
              <p className="text-sm text-muted-foreground">
                DEKATEOTL™ para gobernanza multi-dimensional
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Módulos Centrales */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Módulos Propietarios del Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* ANUBIS */}
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">ANUBIS™</h3>
                <Badge>Motor Emocional</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Motor de inteligencia emocional existencial que convierte adversidad en legitimidad institucional.
                Implementa análisis multi-dimensional para síntesis de legitimidad basada en crecimiento post-traumático.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">EmotionalTopologyMapper</Badge>
                <Badge variant="outline">LegitimacyQuantifier</Badge>
                <Badge variant="outline">AdversityTransformer</Badge>
              </div>
            </div>

            {/* DEKATEOTL */}
            <div className="border-l-4 border-secondary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">DEKATEOTL™</h3>
                <Badge variant="secondary">Gobernanza Multi-Capa</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Matriz de gobernanza multi-dimensional con consenso cuántico y evolución constitucional.
                5 dimensiones de autoridad: técnica, ética, económica, social y ambiental.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">QuantumConsensus</Badge>
                <Badge variant="outline">ConstitutionalEvolution</Badge>
                <Badge variant="outline">MultiLayerAuthority</Badge>
              </div>
            </div>

            {/* KAOS */}
            <div className="border-l-4 border-accent pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">KAOS™</h3>
                <Badge variant="outline">Resiliencia Entrópica</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Motor de mitigación entrópica con monitoreo continuo multi-dimensional y auto-curación proactiva.
                Predice puntos de bifurcación caótica y activa protocolos de resiliencia.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">EntropyMonitoring</Badge>
                <Badge variant="outline">ChaosPredictor</Badge>
                <Badge variant="outline">SelfHealing</Badge>
              </div>
            </div>

            {/* ID-NVIDA */}
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">ID-NVIDA™</h3>
                <Badge>Identidad Soberana</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Protocolo de identidad digital soberana con biometría multi-modal, criptografía post-cuántica
                y credenciales verificables W3C DID compliant.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">MultiModalBiometric</Badge>
                <Badge variant="outline">PostQuantumCrypto</Badge>
                <Badge variant="outline">VerifiableCredentials</Badge>
              </div>
            </div>

            {/* ISABELLA AI */}
            <div className="border-l-4 border-secondary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">ISABELLA AI™</h3>
                <Badge variant="secondary">IA Existencial</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Sistema de inteligencia emocional-semántica entrenado en corrientes de memoria existencial.
                Detección de crisis, soporte emocional y escalación humana integrada.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">CrisisDetection</Badge>
                <Badge variant="outline">EmotionalSupport</Badge>
                <Badge variant="outline">HumanEscalation</Badge>
              </div>
            </div>

            {/* Motor Render */}
            <div className="border-l-4 border-accent pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Motor Render™</h3>
                <Badge variant="outline">Renderizado Soberano</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Motor de renderizado soberano para ambientes multi-sensoriales inmersivos.
                Traduce lógica arquitectónica en piel digital perceptible con WebGPU y audio espacial 3D.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">WebGPU</Badge>
                <Badge variant="outline">WebXR</Badge>
                <Badge variant="outline">SpatialAudio</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stack Tecnológico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            Stack Tecnológico Web 4.0
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              <TabsTrigger value="ai">IA/ML</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Frontend Soberano</h4>
                  <Badge className="bg-green-500">85% Completado</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Framework: React 18 + TypeScript + WebAssembly</li>
                  <li>• State Management: Zustand + SovereignStateSync</li>
                  <li>• UI Components: TAMV Design System + WebGPU Acceleration</li>
                  <li>• Rendering: Motor Render™ + Immersive Shell</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Orquestación Backend</h4>
                  <Badge className="bg-yellow-500">45% Completado</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Runtime: Node.js 18 + Deno + WebContainer API</li>
                  <li>• API Architecture: Microservices + GraphQL Federation</li>
                  <li>• Event System: Event Sourcing + CQRS + DAG Streaming</li>
                  <li>• Edge Functions: Supabase Edge Runtime</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="blockchain" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Integración Blockchain</h4>
                  <Badge className="bg-yellow-500">30% Completado</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Identity Layer: DID + Verifiable Credentials + Soulbound Tokens</li>
                  <li>• Governance: DAO Stack + Conviction Voting + Quadratic Funding</li>
                  <li>• Computation: Zero-Knowledge Proofs + Homomorphic Encryption</li>
                  <li>• Smart Contracts: Solidity + Rust (Solana)</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Stack de IA Emocional</h4>
                  <Badge className="bg-yellow-500">35% Completado</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Core Models: BERT + GPT-4 + Custom Emotional Transformers</li>
                  <li>• Training Data: Ethically Sourced Emotional Corpora</li>
                  <li>• Inference: Federated Learning + Edge AI Deployment</li>
                  <li>• Integration: Lovable AI + Vertex AI + Custom Models</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Arquitectura de Implementación */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Núcleo de Implementación Soberana
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg font-mono text-sm space-y-2">
            <div className="text-primary font-semibold">class TAMVSovereignCore:</div>
            <div className="pl-4 space-y-1 text-muted-foreground">
              <div>def __init__(self):</div>
              <div className="pl-4">self.emotional_engine = ANUBISCore()</div>
              <div className="pl-4">self.governance_matrix = DEKATEOTLMatrix()</div>
              <div className="pl-4">self.chaos_resilience = KAOSEngine()</div>
              <div className="pl-4">self.identity_layer = ID_NVIDAProtocol()</div>
              <div className="pl-4">self.ai_intelligence = ISABELLACore()</div>
              <div className="mt-4">async def initialize_sovereign_architecture(self):</div>
              <div className="pl-4"># FASE 1: Cimientos de Seguridad y Identidad</div>
              <div className="pl-4"># FASE 2: Inteligencia Emocional y Gobernanza</div>
              <div className="pl-4"># FASE 3: IA Existencial y Ecosistema Completo</div>
              <div className="pl-4 text-accent">return "sovereign_architecture_active"</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métricas de Legitimidad */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Sistema de Medición de Legitimidad
          </CardTitle>
          <CardDescription>
            TAMV Legitimacy Index™ - Cuantificación de legitimidad institucional
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { metric: "Autenticidad Emocional", weight: "30%", sources: "ANUBIS™, User Feedback, Social Sentiment" },
              { metric: "Transparencia de Gobernanza", weight: "25%", sources: "DEKATEOTL™, Blockchain Ledger, Public Audits" },
              { metric: "Impacto Económico", weight: "20%", sources: "Economic Engine, Transaction Analysis, Surveys" },
              { metric: "Inclusión Social", weight: "15%", sources: "Usage Analytics, Demographic Data, Feedback" },
              { metric: "Resiliencia Técnica", weight: "10%", sources: "KAOS™, Security Audits, Uptime Metrics" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div className="space-y-1">
                  <p className="font-medium">{item.metric}</p>
                  <p className="text-xs text-muted-foreground">{item.sources}</p>
                </div>
                <Badge variant="outline">{item.weight}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsArchitecture;
