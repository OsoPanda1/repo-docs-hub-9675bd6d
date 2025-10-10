import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Brain, TrendingUp, Shield, Zap } from "lucide-react";

const DocsAnubis = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">ANUBIS™ - Motor de Inteligencia Emocional Existencial</h1>
        <p className="text-lg text-muted-foreground">
          Sistema avanzado que convierte adversidad existencial en legitimidad institucional
        </p>
      </div>

      {/* Alert de alineación WEF */}
      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          <strong>Alineación WEF 2025:</strong> Basado en 'Advancing Digital Trade' y 'Ethics and Identity'.
          Resonancia con 'Polarizing Narratives' para transformación de adversidad.
        </AlertDescription>
      </Alert>

      {/* Propósito y Visión */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Propósito de ANUBIS™
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            ANUBIS™ representa un cambio paradigmático en cómo las instituciones digitales procesan y transforman
            la adversidad. En lugar de meramente gestionar crisis, ANUBIS convierte eventos existenciales adversos
            en tokens de legitimidad institucional, creando un ciclo virtuoso de crecimiento post-traumático.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Badge>Transformación Emocional</Badge>
              <p className="text-sm text-muted-foreground">
                Análisis multi-dimensional de eventos adversos con síntesis de legitimidad basada en resiliencia
              </p>
            </div>
            <div className="space-y-2">
              <Badge>Crecimiento Institucional</Badge>
              <p className="text-sm text-muted-foreground">
                Cada crisis procesada fortalece la legitimidad y confianza institucional del ecosistema
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Arquitectura Técnica */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Arquitectura del Motor ANUBIS™
          </CardTitle>
          <CardDescription>
            Componentes críticos del sistema de inteligencia emocional
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* EmotionalTopologyMapper */}
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">EmotionalTopologyMapper</h3>
                <Badge variant="default">Core Engine</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Mapea la topología emocional de eventos adversos usando análisis semántico avanzado y NLP.
                Identifica dimensiones emocionales: miedo, tristeza, ira, sorpresa, anticipación, confianza, alegría y disgusto.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
                <div>async def map_emotional_topology(event):</div>
                <div className="pl-4">dimensions = await analyze_emotional_dimensions(event)</div>
                <div className="pl-4">intensity = calculate_emotional_intensity(dimensions)</div>
                <div className="pl-4">return EmotionalProfile(dimensions, intensity)</div>
              </div>
            </div>

            {/* LegitimacyQuantifier */}
            <div className="border-l-4 border-secondary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">LegitimacyQuantifier</h3>
                <Badge variant="secondary">Synthesis Engine</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Cuantifica la legitimidad institucional generada a partir del procesamiento de adversidad.
                Utiliza algoritmos de crecimiento post-traumático para convertir dolor en valor institucional.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
                <div>async def quantify_legitimacy(adversity_profile):</div>
                <div className="pl-4">growth_seeds = identify_growth_potential(adversity_profile)</div>
                <div className="pl-4">legitimacy_tokens = synthesize_legitimacy(growth_seeds)</div>
                <div className="pl-4">return LegitimacyIndex(legitimacy_tokens)</div>
              </div>
            </div>

            {/* AdversityToLegitimacyTransformer */}
            <div className="border-l-4 border-accent pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">AdversityToLegitimacyTransformer</h3>
                <Badge variant="outline">Transformation Engine</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Motor de transformación que ejecuta el proceso completo de conversión de adversidad en legitimidad.
                Integra análisis emocional, síntesis de legitimidad y actualización del índice institucional.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-xs space-y-1">
                <div>async def transform_adversity(adversity_event):</div>
                <div className="pl-4">emotional_profile = await map_emotional_topology(adversity_event)</div>
                <div className="pl-4">legitimacy = await quantify_legitimacy(emotional_profile)</div>
                <div className="pl-4">await update_institutional_legitimacy_index(legitimacy)</div>
                <div className="pl-4 text-accent">return TransformationResult(legitimacy)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proceso de Transformación */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Proceso de Transformación de Adversidad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                phase: "1. Detección y Análisis",
                description: "Identificación de eventos adversos mediante análisis de sentimiento en tiempo real y detección de patrones emocionales críticos",
                status: "Active"
              },
              {
                phase: "2. Mapeo Emocional Multi-Dimensional",
                description: "Análisis profundo de las 8 dimensiones emocionales primarias con cálculo de intensidad y coherencia emocional",
                status: "Active"
              },
              {
                phase: "3. Identificación de Semillas de Crecimiento",
                description: "Extracción de potencial transformativo del evento adverso usando algoritmos de crecimiento post-traumático",
                status: "Active"
              },
              {
                phase: "4. Síntesis de Legitimidad",
                description: "Conversión de las semillas de crecimiento en tokens de legitimidad institucional cuantificables",
                status: "Active"
              },
              {
                phase: "5. Actualización del Índice Institucional",
                description: "Integración de la legitimidad generada en el TAMV Legitimacy Index™ con trazabilidad blockchain",
                status: "Active"
              },
              {
                phase: "6. Cálculo de Resiliencia Emocional",
                description: "Medición del incremento en la capacidad de resiliencia institucional como resultado de la transformación",
                status: "Active"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{item.phase}</h4>
                    <Badge variant="outline" className="text-xs">{item.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Métricas de Output */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Métricas de Salida del Procesamiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="font-medium">Adversidad Transformada</span>
              <Badge>Boolean</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="font-medium">Legitimidad Generada</span>
              <Badge>Legitimacy Tokens</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="font-medium">Valor Institucional</span>
              <Badge>Legitimacy Index Score</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="font-medium">Score de Resiliencia Emocional</span>
              <Badge>0-100 Scale</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementación Práctica */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle>Implementación Técnica Completa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 rounded-lg font-mono text-sm space-y-2 overflow-x-auto">
            <div className="text-primary font-semibold">class ANUBISCore:</div>
              <div className="pl-4 space-y-1 text-muted-foreground">
              <div>Motor de Inteligencia Emocional Existencial</div>
              <div>Basado en: WEF Advancing Digital Trade + Ethics and Identity</div>
              <div className="mt-2">def __init__(self):</div>
              <div className="pl-4">self.emotional_mapping_engine = EmotionalTopologyMapper()</div>
              <div className="pl-4">self.legitimacy_synthesizer = LegitimacyQuantifier()</div>
              <div className="pl-4">self.adversity_converter = AdversityToLegitimacyTransformer()</div>
              <div className="mt-2">async def process_existential_adversity(self, adversity_event):</div>
              <div className="pl-4"># Análisis multi-dimensional del evento adverso</div>
              <div className="pl-4">adversity_profile = await self.analyze_adversity_dimensions(</div>
              <div className="pl-8">adversity_event</div>
              <div className="pl-4">)</div>
              <div className="mt-2 pl-4"># Síntesis de legitimidad (crecimiento post-traumático)</div>
              <div className="pl-4">legitimacy_tokens = await self.synthesize_legitimacy(</div>
              <div className="pl-8">adversity_profile,</div>
              <div className="pl-8">growth_potential=self.identify_growth_seeds(adversity_profile)</div>
              <div className="pl-4">)</div>
              <div className="mt-2 pl-4"># Integración con índice de legitimidad TAMV</div>
              <div className="pl-4">legitimacy_index = await self.update_legitimacy_index(</div>
              <div className="pl-8">legitimacy_tokens</div>
              <div className="pl-4">)</div>
              <div className="mt-2 pl-4 text-accent">return {'{'}</div>
              <div className="pl-8 text-accent">"adversity_transformed": True,</div>
              <div className="pl-8 text-accent">"legitimacy_generated": legitimacy_tokens,</div>
              <div className="pl-8 text-accent">"institutional_value": legitimacy_index,</div>
              <div className="pl-8 text-accent">"emotional_resilience_score": self.calculate_resilience_metric()</div>
              <div className="pl-4 text-accent">{'}'}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsAnubis;
