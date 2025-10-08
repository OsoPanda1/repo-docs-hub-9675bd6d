import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, TrendingDown, Shield, Heart } from "lucide-react";

const DocsDigitalDignity = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold gradient-text">
          La Tesis de la Dignificación Digital
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Un análisis crítico del modelo de negocio de la Web 2.0 y por qué la arquitectura 
          de TAMV representa la corrección evolutiva necesaria para restaurar la dignidad humana 
          en el espacio digital.
        </p>
      </div>

      {/* Crisis de la Web 2.0 */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            La Crisis del Capitalismo de Vigilancia
          </CardTitle>
          <CardDescription>
            Por qué el modelo actual de redes sociales ha fallado al ser humano
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            La Web 2.0 construyó su imperio sobre una promesa rota: "conectar al mundo". 
            En realidad, creó la infraestructura más sofisticada de extracción de datos, 
            manipulación conductual y monetización de la atención humana que la historia 
            haya conocido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-effect p-6 rounded-lg border border-red-500/30">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-lg">El Modelo Extractivo</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Usuarios como producto:</strong> No eres el cliente, eres el inventario que se vende a anunciantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Atención como recurso:</strong> Optimización algorítmica para maximizar tiempo en pantalla, no bienestar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Datos como petróleo:</strong> Extracción masiva sin consentimiento real ni compensación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Engagement tóxico:</strong> Contenido polarizante y viral premiado sobre contenido significativo</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg border border-orange-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-lg">Consecuencias Humanas</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Crisis de salud mental:</strong> Ansiedad, depresión y soledad epidémicas entre usuarios jóvenes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Polarización social:</strong> Algoritmos que amplifican división para maximizar engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Adicción diseñada:</strong> Patrones oscuros y técnicas de "behavioral engineering"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Erosión de la privacidad:</strong> Vigilancia perpetua normalizada como "precio de entrada"</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparativa Web 2.0 vs TAMV */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Web 2.0 vs. TAMV: El Cambio de Paradigma</CardTitle>
          <CardDescription>
            Una comparativa directa de modelos de negocio, valores y arquitectura
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="business">Modelo de Negocio</TabsTrigger>
              <TabsTrigger value="data">Datos</TabsTrigger>
              <TabsTrigger value="metrics">Métricas</TabsTrigger>
              <TabsTrigger value="governance">Gobernanza</TabsTrigger>
            </TabsList>

            <TabsContent value="business" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-lg">
                  <Badge variant="destructive" className="mb-3">Web 2.0</Badge>
                  <h3 className="font-semibold mb-2">Capitalismo de Atención</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Usuarios = Producto vendido a anunciantes</li>
                    <li>• Monetización vía publicidad invasiva</li>
                    <li>• Maximizar tiempo en pantalla</li>
                    <li>• Valor extraído del usuario</li>
                    <li>• Retención: 20-30% anual</li>
                  </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-primary/50">
                  <Badge variant="default" className="mb-3">TAMV</Badge>
                  <h3 className="font-semibold mb-2">Economía del Propósito</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Usuarios = Ciudadanos co-creadores</li>
                    <li>• Monetización vía valor añadido (Premium, NFTs, TC)</li>
                    <li>• Maximizar significado y transformación</li>
                    <li>• Valor compartido con el usuario</li>
                    <li>• Retención proyectada: 70-85% (comunidades de propósito)</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-lg">
                  <Badge variant="destructive" className="mb-3">Web 2.0</Badge>
                  <h3 className="font-semibold mb-2">Datos como Petróleo</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Propiedad corporativa de todos los datos</li>
                    <li>• Tracking invasivo y perfiles sombra</li>
                    <li>• Venta a terceros sin consentimiento real</li>
                    <li>• Términos de servicio incomprensibles</li>
                    <li>• Portabilidad limitada o nula</li>
                  </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-primary/50">
                  <Badge variant="default" className="mb-3">TAMV</Badge>
                  <h3 className="font-semibold mb-2">Sovereign Connect™</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Propiedad del usuario (ID-ENVIDA™)</li>
                    <li>• Consentimiento explícito por uso específico</li>
                    <li>• Compensación por uso de datos (TC rewards)</li>
                    <li>• Contratos inteligentes legibles</li>
                    <li>• Exportación total en cualquier momento</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-lg">
                  <Badge variant="destructive" className="mb-3">Web 2.0</Badge>
                  <h3 className="font-semibold mb-2">Engagement Rate</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tiempo en pantalla (sesiones largas = éxito)</li>
                    <li>• Clics, likes, shares (viralidad &gt; significado)</li>
                    <li>• Ad impressions y CTR</li>
                    <li>• Scroll infinito y notificaciones push</li>
                    <li>• Métrica: ¿Cuánto tiempo robamos?</li>
                  </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-primary/50">
                  <Badge variant="default" className="mb-3">TAMV</Badge>
                  <h3 className="font-semibold mb-2">ConsciousScore</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Profundidad de interacción (significado &gt; duración)</li>
                    <li>• Resonancias emocionales (8 emociones primarias)</li>
                    <li>• Impacto transformador medido por NLP</li>
                    <li>• Contribuciones valiosas recompensadas (TC)</li>
                    <li>• Métrica: ¿Cuánto valor damos?</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="governance" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-effect p-6 rounded-lg">
                  <Badge variant="destructive" className="mb-3">Web 2.0</Badge>
                  <h3 className="font-semibold mb-2">Monarquía Corporativa</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Decisiones unilaterales de la empresa</li>
                    <li>• Opacidad en algoritmos y políticas</li>
                    <li>• Cambios de TOS sin consulta</li>
                    <li>• Moderación centralizada y arbitraria</li>
                    <li>• Usuarios = súbditos sin voz</li>
                  </ul>
                </div>
                <div className="glass-effect p-6 rounded-lg border border-primary/50">
                  <Badge variant="default" className="mb-3">TAMV</Badge>
                  <h3 className="font-semibold mb-2">República Digital</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• DAO con separación de poderes</li>
                    <li>• Transparencia algorítmica total</li>
                    <li>• Propuestas de Evolución Institucional (PEI)</li>
                    <li>• ISABELLA AI como mediadora neutral</li>
                    <li>• Ciudadanos = co-gobernantes activos</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* La Solución Arquitectónica */}
      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            TAMV como Solución Arquitectónica, No Solo Filosófica
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            La diferencia crítica de TAMV no es solo una declaración de valores, sino una 
            arquitectura técnica que hace <strong>matemáticamente imposible</strong> replicar 
            los vicios de la Web 2.0:
          </p>

          <div className="space-y-4">
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="text-primary">1.</span>
                Capa Sentiente: El Algoritmo Empático
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Mientras los feeds tradicionales optimizan para engagement (tiempo), la Capa Sentiente 
                optimiza para <strong>conscious engagement</strong> (significado).
              </p>
              <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-primary">// Pseudocódigo del ConsciousScore</p>
                <p className="text-muted-foreground">
                  ConsciousScore = f(<br />
                  &nbsp;&nbsp;depthLevel,          // Profundidad de la interacción<br />
                  &nbsp;&nbsp;resonance[],         // Emociones detectadas (JOY, VULNERABILITY, etc.)<br />
                  &nbsp;&nbsp;contextualRelevance, // Relevancia al contexto del usuario<br />
                  &nbsp;&nbsp;authenticity         // Detección de sinceridad vs. clickbait<br />
                  )
                </p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="text-primary">2.</span>
                Protocolo Lightning Justice™: Economía Basada en Valor
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Los creadores son recompensados con TAMV Tokens según el ConsciousScore de sus 
                contribuciones, no por anuncios o clickbait.
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Ejemplo:</strong> Un comentario de mentoría profunda que ayuda a alguien 
                  a superar una crisis personal (ConsciousScore: 0.89) genera más tokens que un 
                  meme viral sin contexto (ConsciousScore: 0.15).
                </p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="text-primary">3.</span>
                Framework Dekateotl: Ética Codificada
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Los 10 principios éticos no son "guidelines" opcionales, sino validaciones 
                axiomáticas que ISABELLA AI ejecuta antes de cada respuesta.
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Si una respuesta potencial falla <em>cualquier</em> validación (ej: detecta 
                  manipulación emocional), se descarta automáticamente y se reformula. No es 
                  "inteligencia artificial ética", es "inteligencia artificial axiomáticamente 
                  ética".
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusión */}
      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">La Revolución No Es Opcional</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La dignificación digital no es un lujo moral, es una <strong>necesidad evolutiva</strong>. 
            La Web 2.0 demostró que la tecnología sin ética codificada inevitablemente 
            colapsa en extracción y manipulación.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            TAMV no es simplemente "una mejor red social". Es la respuesta arquitectónica a la 
            pregunta: <em>"¿Cómo construimos tecnología que honre la complejidad, vulnerabilidad 
            y potencial transformador del ser humano?"</em>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsDigitalDignity;
