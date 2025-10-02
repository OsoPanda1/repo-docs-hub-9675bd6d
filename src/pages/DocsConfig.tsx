import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, FileCode, Shield, Zap } from "lucide-react";

const DocsConfig = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Configuración</h1>
        <p className="text-xl text-muted-foreground">
          Guía completa para configurar y personalizar tu instancia del Metaverso TAMV.
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="w-5 h-5 text-primary" />
            Archivo de Configuración
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            La configuración principal se encuentra en <code className="bg-muted px-2 py-1 rounded text-primary">metaverso.config.json</code>:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-1">
            <div>{`{`}</div>
            <div className="ml-4"><span className="text-secondary">"server"</span>: {`{`}</div>
            <div className="ml-8"><span className="text-secondary">"port"</span>: <span className="text-accent">8080</span>,</div>
            <div className="ml-8"><span className="text-secondary">"host"</span>: <span className="text-primary">"0.0.0.0"</span>,</div>
            <div className="ml-8"><span className="text-secondary">"environment"</span>: <span className="text-primary">"production"</span></div>
            <div className="ml-4">{`},`}</div>
            <div className="ml-4"><span className="text-secondary">"database"</span>: {`{`}</div>
            <div className="ml-8"><span className="text-secondary">"url"</span>: <span className="text-primary">"postgresql://..."</span>,</div>
            <div className="ml-8"><span className="text-secondary">"pool"</span>: <span className="text-accent">20</span></div>
            <div className="ml-4">{`},`}</div>
            <div className="ml-4"><span className="text-secondary">"metaverse"</span>: {`{`}</div>
            <div className="ml-8"><span className="text-secondary">"maxUsersPerSpace"</span>: <span className="text-accent">100</span>,</div>
            <div className="ml-8"><span className="text-secondary">"tickRate"</span>: <span className="text-accent">60</span></div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Variables de Entorno</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <code className="bg-muted px-2 py-1 rounded text-primary block mb-1">API_KEY</code>
                <p className="text-muted-foreground">Tu clave de API del Metaverso TAMV</p>
              </div>
              <div>
                <code className="bg-muted px-2 py-1 rounded text-primary block mb-1">DATABASE_URL</code>
                <p className="text-muted-foreground">Conexión a la base de datos PostgreSQL</p>
              </div>
              <div>
                <code className="bg-muted px-2 py-1 rounded text-primary block mb-1">REDIS_URL</code>
                <p className="text-muted-foreground">Conexión al servidor Redis para caché</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Seguridad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-foreground block mb-1">JWT Secret</strong>
                <p className="text-muted-foreground">Clave secreta para firmado de tokens</p>
              </div>
              <div>
                <strong className="text-foreground block mb-1">CORS Origins</strong>
                <p className="text-muted-foreground">Dominios permitidos para peticiones cross-origin</p>
              </div>
              <div>
                <strong className="text-foreground block mb-1">Rate Limiting</strong>
                <p className="text-muted-foreground">Límites de peticiones por IP y usuario</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Optimización de Rendimiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Ajusta estos parámetros según tu hardware y carga esperada:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Worker Threads</h4>
                <p className="text-sm text-muted-foreground">
                  Número de hilos para procesamiento paralelo. Recomendado: número de cores CPU.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Tick Rate</h4>
                <p className="text-sm text-muted-foreground">
                  Frecuencia de actualización del estado (Hz). Valores típicos: 30-60 Hz.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Cache TTL</h4>
                <p className="text-sm text-muted-foreground">
                  Tiempo de vida de los objetos en caché Redis (segundos).
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Connection Pool</h4>
                <p className="text-sm text-muted-foreground">
                  Tamaño del pool de conexiones a la base de datos.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Entornos Predefinidos</CardTitle>
          <CardContent className="pt-4 px-0">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Development</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hot reload habilitado</li>
                  <li>• Logs verbosos</li>
                  <li>• Sin rate limiting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Staging</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Configuración similar a producción</li>
                  <li>• Datos de prueba</li>
                  <li>• Logs moderados</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Production</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Optimizaciones completas</li>
                  <li>• Seguridad maximizada</li>
                  <li>• Monitoreo activo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsConfig;
