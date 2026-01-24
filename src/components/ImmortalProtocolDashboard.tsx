import { useImmortalProtocol } from '@/hooks/useImmortalProtocol';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, Activity, Zap, AlertTriangle, CheckCircle2, 
  RefreshCw, Eye, Cpu, Database, Lock, Brain,
  Layers, Sparkles, Flame, Clock, ArrowUpRight
} from 'lucide-react';

const statusColors: Record<string, string> = {
  immortal: 'bg-gradient-to-r from-amber-500 to-orange-600',
  active: 'bg-emerald-500',
  degraded: 'bg-yellow-500',
  skeleton: 'bg-orange-500',
  lockdown: 'bg-red-500'
};

const severityColors: Record<string, string> = {
  low: 'text-emerald-400',
  medium: 'text-yellow-400',
  high: 'text-orange-400',
  critical: 'text-red-400'
};

export default function ImmortalProtocolDashboard() {
  const {
    protocolState,
    analyses,
    isAnalyzing,
    runSystemAnalysis,
    autoFix,
    activateImmortalMode,
    LAYER_NAMES
  } = useImmortalProtocol();

  const activeIssues = analyses.filter(a => a.status === 'detected');
  const resolvedIssues = analyses.filter(a => a.status === 'resolved');

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-orbitron font-bold gradient-text flex items-center gap-3">
            <Flame className="w-8 h-8 text-orange-500" />
            Protocolo Inmortal TAMV
          </h1>
          <p className="text-muted-foreground mt-1">
            Sistema de Auto-Análisis y Mejora Continua de 7ª Generación
          </p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={runSystemAnalysis}
            disabled={isAnalyzing}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
            {isAnalyzing ? 'Analizando...' : 'Ejecutar Análisis'}
          </Button>
          {protocolState?.status !== 'immortal' && (
            <Button 
              onClick={activateImmortalMode}
              className="bg-gradient-to-r from-amber-500 to-orange-600 gap-2"
            >
              <Flame className="w-4 h-4" />
              Activar Modo Inmortal
            </Button>
          )}
        </div>
      </div>

      {/* Protocol Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-effect">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Estado del Sistema</p>
                <Badge className={`mt-1 ${statusColors[protocolState?.status || 'active']}`}>
                  {protocolState?.status?.toUpperCase() || 'LOADING'}
                </Badge>
              </div>
              <Shield className="w-10 h-10 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Health Score</p>
                <p className="text-3xl font-bold text-emerald-400">
                  {protocolState?.health_score?.toFixed(0) || 100}%
                </p>
              </div>
              <Activity className="w-10 h-10 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Fase Actual</p>
                <p className="text-3xl font-bold text-primary">
                  {protocolState?.phase || 1}/7
                </p>
              </div>
              <Layers className="w-10 h-10 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Issues Activos</p>
                <p className="text-3xl font-bold text-yellow-400">
                  {activeIssues.length}
                </p>
              </div>
              <AlertTriangle className="w-10 h-10 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 7 Federated Layers */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            7 Capas Federadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
            {LAYER_NAMES.map((layer, idx) => {
              const isActive = protocolState?.subphase?.layers?.includes(idx + 1);
              return (
                <div 
                  key={idx}
                  className={`p-3 rounded-lg text-center border transition-all ${
                    isActive 
                      ? 'border-primary bg-primary/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)]' 
                      : 'border-border/50 bg-muted/20'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    {idx + 1}
                  </div>
                  <p className="text-xs font-medium">{layer.split(': ')[1]}</p>
                  {isActive && <Sparkles className="w-4 h-4 mx-auto mt-1 text-primary" />}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Tabs defaultValue="issues" className="w-full">
        <TabsList className="glass-effect">
          <TabsTrigger value="issues" className="gap-2">
            <AlertTriangle className="w-4 h-4" />
            Issues ({activeIssues.length})
          </TabsTrigger>
          <TabsTrigger value="resolved" className="gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Resueltos ({resolvedIssues.length})
          </TabsTrigger>
          <TabsTrigger value="components" className="gap-2">
            <Cpu className="w-4 h-4" />
            Componentes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="issues" className="mt-4">
          <div className="space-y-3">
            {activeIssues.length === 0 ? (
              <Card className="glass-effect">
                <CardContent className="py-8 text-center">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400 mb-3" />
                  <p className="text-lg font-medium">Sistema 100% Operativo</p>
                  <p className="text-muted-foreground">No hay issues pendientes</p>
                </CardContent>
              </Card>
            ) : (
              activeIssues.map((issue) => (
                <Card key={issue.id} className="glass-effect">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          issue.severity === 'critical' ? 'bg-red-500' :
                          issue.severity === 'high' ? 'bg-orange-500' :
                          issue.severity === 'medium' ? 'bg-yellow-500' : 'bg-emerald-500'
                        }`} />
                        <div>
                          <p className="font-medium">{issue.component}</p>
                          <p className="text-sm text-muted-foreground">{issue.description}</p>
                          {issue.recommendation && (
                            <p className="text-xs text-primary mt-1">
                              💡 {issue.recommendation}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={severityColors[issue.severity]}>
                          {issue.severity}
                        </Badge>
                        {issue.auto_fix_available && (
                          <Button size="sm" onClick={() => autoFix(issue.id)}>
                            <Zap className="w-4 h-4 mr-1" />
                            Auto-Fix
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="resolved" className="mt-4">
          <div className="space-y-2">
            {resolvedIssues.slice(0, 10).map((issue) => (
              <Card key={issue.id} className="glass-effect opacity-75">
                <CardContent className="py-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div className="flex-1">
                      <p className="font-medium">{issue.component}</p>
                      <p className="text-xs text-muted-foreground">{issue.description}</p>
                    </div>
                    <Badge variant="outline" className="text-emerald-400">Resuelto</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="components" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Isabella AI', icon: Brain, status: 'active' },
              { name: 'BookPI Ledger', icon: Database, status: 'active' },
              { name: 'ANUBIS Guard', icon: Shield, status: 'active' },
              { name: 'Policy Engine', icon: Lock, status: 'active' },
              { name: 'XR Renderer', icon: Eye, status: 'active' },
              { name: 'Economy Engine', icon: Zap, status: 'active' },
              { name: 'Auth System', icon: Lock, status: 'active' },
              { name: 'Real-time Sync', icon: RefreshCw, status: 'active' },
            ].map((comp) => (
              <Card key={comp.name} className="glass-effect">
                <CardContent className="py-4 text-center">
                  <comp.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium text-sm">{comp.name}</p>
                  <Badge className="mt-2 bg-emerald-500/20 text-emerald-400">
                    {comp.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Integrity Hash */}
      <Card className="glass-effect">
        <CardContent className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Hash de Integridad</p>
                <code className="text-xs font-mono text-primary">
                  {protocolState?.integrity_hash || 'sha3-512:genesis'}
                </code>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Última evaluación: {protocolState?.last_eval_at 
                ? new Date(protocolState.last_eval_at).toLocaleString() 
                : 'Never'}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
