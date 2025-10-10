import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Layers, GitBranch, Scale, TrendingUp } from "lucide-react";

const DocsDekateotl = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">DEKATEOTL™ - Matriz de Gobernanza Multi-Dimensional</h1>
        <p className="text-lg text-muted-foreground">
          Sistema de gobernanza soberana con consenso cuántico y evolución constitucional
        </p>
      </div>

      {/* Alert de alineación WEF */}
      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          <strong>Alineación WEF 2025:</strong> 'Continuous Learning and Improvement' + 'Agile Governance'.
          Implementa aprendizaje adaptativo institucional y gobernanza ágil multi-stakeholder.
        </AlertDescription>
      </Alert>

      {/* Visión General */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            El Panteón de los Dioses Aztecas - Metáfora de Gobernanza
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            DEKATEOTL™ (Los Diez Dioses) representa un sistema de gobernanza multi-dimensional inspirado en el
            panteón azteca. Cada dimensión de autoridad opera como una deidad con dominio específico, pero todas
            convergen en un consenso cuántico para decisiones institucionales críticas.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Badge>Autoridad Distribuida</Badge>
              <p className="text-sm text-muted-foreground">
                5 dimensiones de autoridad con pesos específicos y expertise especializada
              </p>
            </div>
            <div className="space-y-2">
              <Badge>Consenso Cuántico</Badge>
              <p className="text-sm text-muted-foreground">
                Resolución de conflictos mediante quantum annealing para decisiones óptimas
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dimensiones de Autoridad */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            Cinco Dimensiones de Autoridad Soberana
          </CardTitle>
          <CardDescription>
            Cada dimensión opera con expertise especializada y peso específico en decisiones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Dimensión Técnica */}
            <div className="border-l-4 border-primary pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">1. Autoridad Técnica</h3>
                <Badge variant="default">25% Peso</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Consejo de Soberanía Técnica - Supervisa infraestructura, seguridad y desarrollo tecnológico
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">AI Ethics</Badge>
                <Badge variant="outline">Cybersecurity</Badge>
                <Badge variant="outline">Blockchain</Badge>
                <Badge variant="outline">Infrastructure</Badge>
              </div>
            </div>

            {/* Dimensión Ética */}
            <div className="border-l-4 border-secondary pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">2. Autoridad Ética</h3>
                <Badge variant="secondary">30% Peso</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Junta de Supervisión Ética - Mayor peso por importancia crítica de valores y derechos humanos
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Digital Ethics</Badge>
                <Badge variant="outline">Human Rights</Badge>
                <Badge variant="outline">Inclusion</Badge>
                <Badge variant="outline">Transparency</Badge>
              </div>
            </div>

            {/* Dimensión Económica */}
            <div className="border-l-4 border-accent pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">3. Autoridad Económica</h3>
                <Badge variant="outline">20% Peso</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Consejo de Gestión Económica - Supervisa tokenomics, inversión de impacto y economía Web3
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Tokenomics</Badge>
                <Badge variant="outline">Impact Investing</Badge>
                <Badge variant="outline">Web3 Economics</Badge>
                <Badge variant="outline">DeFi</Badge>
              </div>
            </div>

            {/* Dimensión Social */}
            <div className="border-l-4 border-primary pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">4. Autoridad Social</h3>
                <Badge>15% Peso</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Consejo de Legitimidad Social - Representa la voz comunitaria y contexto cultural
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Community Governance</Badge>
                <Badge variant="outline">Cultural Context</Badge>
                <Badge variant="outline">Education</Badge>
                <Badge variant="outline">Social Impact</Badge>
              </div>
            </div>

            {/* Dimensión Ambiental */}
            <div className="border-l-4 border-secondary pl-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">5. Autoridad Ambiental</h3>
                <Badge variant="secondary">10% Peso</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Junta de Impacto Ambiental - Supervisa sostenibilidad digital y contabilidad de carbono
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Digital Sustainability</Badge>
                <Badge variant="outline">Carbon Accounting</Badge>
                <Badge variant="outline">ESG Compliance</Badge>
                <Badge variant="outline">Green Tech</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proceso de Evaluación */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Proceso de Evaluación Multi-Dimensional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                step: "1. Evaluación Dimensional Paralela",
                description: "Cada dimensión de autoridad evalúa la propuesta de gobernanza de forma independiente con su expertise especializada",
                output: "5 evaluaciones independientes con decisión, confianza y razonamiento"
              },
              {
                step: "2. Análisis de Coherencia Dimensional",
                description: "Verificación automática de coherencia entre las evaluaciones dimensionales para detectar conflictos significativos",
                output: "Coherence Score + Conflict Detection Matrix"
              },
              {
                step: "3. Resolución de Conflictos (si aplica)",
                description: "Si existe incoherencia, activación del QuantumConsensusEngine con estrategia de quantum annealing para encontrar solución óptima",
                output: "Optimal Decision Point via Quantum Computation"
              },
              {
                step: "4. Agregación de Consenso",
                description: "Si hay coherencia natural, agregación ponderada del consenso dimensional según los pesos establecidos",
                output: "Weighted Consensus Decision"
              },
              {
                step: "5. Registro de Patrón Decisional",
                description: "Almacenamiento del patrón de decisión en el ConstitutionalEvolutionEngine para aprendizaje continuo y mejora",
                output: "Decision Pattern Recorded + Learning Trigger"
              },
              {
                step: "6. Verificación de Evolución Constitucional",
                description: "Análisis de si el patrón decisional acumulado requiere evolución de la constitución institucional",
                output: "Constitutional Evolution Check + Amendment Proposal"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold">{item.step}</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-11">{item.description}</p>
                <div className="pl-11">
                  <Badge variant="outline" className="text-xs">{item.output}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quantum Consensus Engine */}
      <Card className="border-accent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            QuantumConsensusEngine - Resolución Óptima
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Cuando las dimensiones de autoridad generan evaluaciones conflictivas, el motor de consenso cuántico
            utiliza quantum annealing para encontrar el punto de decisión óptimo que minimiza el conflicto
            multi-dimensional mientras respeta los pesos de autoridad establecidos.
          </p>
          <div className="bg-muted p-6 rounded-lg font-mono text-sm space-y-2">
            <div className="text-primary font-semibold">async def resolve_conflicts(evaluations, strategy):</div>
            <div className="pl-4 space-y-1 text-muted-foreground">
              <div># Preparación del problema de optimización cuántica</div>
              <div>conflict_matrix = build_conflict_matrix(evaluations)</div>
              <div>weight_vector = extract_authority_weights(evaluations)</div>
              <div className="mt-2"># Quantum annealing para optimización global</div>
              <div>if strategy == "quantum_annealing":</div>
              <div className="pl-4">optimal_decision = await quantum_annealer.solve(</div>
              <div className="pl-8">conflict_matrix,</div>
              <div className="pl-8">weight_vector,</div>
              <div className="pl-8">objective="minimize_dimensional_conflict"</div>
              <div className="pl-4">)</div>
              <div className="mt-2 text-accent">return optimal_decision</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Constitutional Evolution Engine */}
      <Card className="border-secondary">
        <CardHeader>
          <CardTitle>ConstitutionalEvolutionEngine - Aprendizaje Institucional</CardTitle>
          <CardDescription>
            Sistema de aprendizaje continuo que evoluciona las reglas de gobernanza basado en patrones decisionales
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Alineado con el pilar WEF de "Continuous Learning and Improvement", este motor registra cada decisión
            de gobernanza como un patrón, analiza tendencias a lo largo del tiempo, y propone enmiendas
            constitucionales cuando los patrones acumulados revelan necesidad de evolución institucional.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-semibold text-sm">Registro de Patrones</h4>
              <p className="text-xs text-muted-foreground">
                Cada decisión se almacena con propuesta, evaluaciones dimensionales, decisión final y timestamp
              </p>
            </div>
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-semibold text-sm">Análisis de Tendencias</h4>
              <p className="text-xs text-muted-foreground">
                ML models detectan patrones recurrentes y desviaciones significativas de la constitución actual
              </p>
            </div>
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-semibold text-sm">Propuesta de Enmiendas</h4>
              <p className="text-xs text-muted-foreground">
                Cuando umbral de evidencia se alcanza, se genera propuesta formal de enmienda constitucional
              </p>
            </div>
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-semibold text-sm">Votación Comunitaria</h4>
              <p className="text-xs text-muted-foreground">
                Las enmiendas propuestas se someten a votación comunitaria con conviction voting
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementación Completa */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle>Implementación Técnica Completa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg font-mono text-xs space-y-2 overflow-x-auto">
            <div className="text-primary font-semibold">class DEKATEOTLMatrix:</div>
            <div className="pl-4 space-y-1 text-muted-foreground">
              <div>"""Matriz de Gobernanza Multi-Dimensional</div>
              <div>Alineado con: 'Continuous Learning and Improvement' (WEF)"""</div>
              <div className="mt-2">def __init__(self):</div>
              <div className="pl-4">self.authority_layers = self.initialize_authority_dimensions()</div>
              <div className="pl-4">self.quantum_consensus = QuantumConsensusEngine()</div>
              <div className="pl-4">self.self_evolution = ConstitutionalEvolutionEngine()</div>
              <div className="mt-2">async def evaluate_governance_proposal(self, proposal):</div>
              <div className="pl-4">dimensional_evaluations = {}</div>
              <div className="pl-4">for dimension, config in self.authority_layers.items():</div>
              <div className="pl-8">evaluation = await config["authority"].evaluate_proposal(proposal)</div>
              <div className="pl-8">dimensional_evaluations[dimension] = evaluation</div>
              <div className="mt-2 pl-4"># Consenso cuántico para resolución de conflictos</div>
              <div className="pl-4">if not self.check_dimensional_coherence(dimensional_evaluations):</div>
              <div className="pl-8">final_decision = await self.quantum_consensus.resolve_conflicts(</div>
              <div className="pl-12">dimensional_evaluations, strategy="quantum_annealing"</div>
              <div className="pl-8">)</div>
              <div className="pl-4">else:</div>
              <div className="pl-8">final_decision = self.aggregate_dimensional_consensus(</div>
              <div className="pl-12">dimensional_evaluations</div>
              <div className="pl-8">)</div>
              <div className="mt-2 pl-4"># Aprendizaje continuo y mejora (WEF Continuous Learning)</div>
              <div className="pl-4">await self.self_evolution.record_decision_pattern(</div>
              <div className="pl-8">proposal, dimensional_evaluations, final_decision</div>
              <div className="pl-4">)</div>
              <div className="mt-2 pl-4 text-accent">return final_decision</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsDekateotl;
