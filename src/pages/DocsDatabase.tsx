import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Table, Key, GitBranch } from "lucide-react";

const DocsDatabase = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Base de Datos</h1>
        <p className="text-xl text-muted-foreground">
          Sistema de almacenamiento distribuido con soporte para múltiples esquemas y alta disponibilidad.
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            Esquema Principal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm space-y-2">
            <div className="text-secondary">-- Tabla de Usuarios</div>
            <div><span className="text-primary">CREATE TABLE</span> users (</div>
            <div className="ml-4">id <span className="text-accent">UUID PRIMARY KEY</span>,</div>
            <div className="ml-4">username <span className="text-accent">VARCHAR(255) UNIQUE</span>,</div>
            <div className="ml-4">email <span className="text-accent">VARCHAR(255) UNIQUE</span>,</div>
            <div className="ml-4">created_at <span className="text-accent">TIMESTAMP DEFAULT NOW()</span></div>
            <div>);</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Table className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Tablas Principales</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• users - Gestión de usuarios</li>
              <li>• spaces - Espacios virtuales</li>
              <li>• assets - Recursos 3D y multimedia</li>
              <li>• sessions - Sesiones activas</li>
              <li>• interactions - Registro de eventos</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-effect border-border/50">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Key className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle>Índices y Optimización</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Índices compuestos en consultas frecuentes</li>
              <li>• Particionamiento por fecha en logs</li>
              <li>• Caché Redis para lecturas hot</li>
              <li>• Réplicas de solo lectura</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Migraciones y Versionado
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Utilizamos un sistema de migraciones versionadas para mantener la integridad del esquema:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
            <code className="text-primary">npm run migrate:up</code> - Aplicar migraciones pendientes<br />
            <code className="text-primary">npm run migrate:down</code> - Revertir última migración
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsDatabase;
