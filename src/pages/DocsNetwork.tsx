import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Wifi, Globe, Zap } from "lucide-react";

const DocsNetwork = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Arquitectura de Red</h1>
        <p className="text-xl text-muted-foreground">
          Infraestructura de red optimizada para comunicación en tiempo real y baja latencia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>WebSocket Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Conexiones bidireccionales persistentes para comunicación en tiempo real entre clientes y servidores.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reconexión automática</li>
              <li>• Heartbeat para detección de caídas</li>
              <li>• Compresión de mensajes</li>
              <li>• Rate limiting por cliente</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>CDN Global</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Red de distribución de contenidos con nodos en múltiples continentes.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 200+ puntos de presencia</li>
              <li>• Cache inteligente de assets</li>
              <li>• HTTP/3 con QUIC</li>
              <li>• Optimización automática de imágenes</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-primary" />
            Configuración de Conexión
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div><span className="text-secondary">const</span> socket = <span className="text-secondary">new</span> <span className="text-primary">WebSocket</span>(</div>
            <div className="ml-4"><span className="text-primary">'wss://api.metaverso-tamv.com/ws'</span></div>
            <div>);</div>
            <div className="mt-4">socket.<span className="text-primary">on</span>(<span className="text-primary">'connect'</span>, () {`=>`} {`{`}</div>
            <div className="ml-4">console.<span className="text-primary">log</span>(<span className="text-primary">'Conectado al metaverso'</span>);</div>
            <div>{`});`}</div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Optimización de Latencia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Técnicas implementadas para minimizar la latencia de red:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Predicción de Movimiento:</strong> Interpolación del lado del cliente</li>
              <li><strong>Delta Compression:</strong> Envío solo de cambios incrementales</li>
              <li><strong>Interest Management:</strong> Actualización selectiva por proximidad</li>
              <li><strong>UDP para Datos Críticos:</strong> Posición y rotación en tiempo real</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Latencias Típicas</CardTitle>
          <CardContent className="pt-4 px-0">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;50ms</div>
                <div className="text-sm text-muted-foreground">Misma región</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">&lt;150ms</div>
                <div className="text-sm text-muted-foreground">Inter-continental</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsNetwork;
