import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, Database, Shield, Zap, Clock, 
  CheckCircle2, AlertTriangle, Server, Wifi
} from 'lucide-react';

interface HealthStatus {
  database: 'healthy' | 'degraded' | 'down';
  auth: 'healthy' | 'degraded' | 'down';
  realtime: 'healthy' | 'degraded' | 'down';
  functions: 'healthy' | 'degraded' | 'down';
  overall: number;
}

export default function BackendHealthMonitor() {
  const [health, setHealth] = useState<HealthStatus>({
    database: 'healthy',
    auth: 'healthy',
    realtime: 'healthy',
    functions: 'healthy',
    overall: 100
  });
  const [lastCheck, setLastCheck] = useState<Date>(new Date());
  const [isChecking, setIsChecking] = useState(false);

  const runHealthCheck = async () => {
    setIsChecking(true);
    const newHealth: HealthStatus = {
      database: 'healthy',
      auth: 'healthy',
      realtime: 'healthy',
      functions: 'healthy',
      overall: 100
    };

    try {
      // Check database
      const dbStart = performance.now();
      const { error: dbError } = await supabase
        .from('profiles')
        .select('id')
        .limit(1);
      const dbTime = performance.now() - dbStart;
      
      if (dbError) {
        newHealth.database = 'down';
        newHealth.overall -= 25;
      } else if (dbTime > 1000) {
        newHealth.database = 'degraded';
        newHealth.overall -= 10;
      }

      // Check auth
      const { data: session } = await supabase.auth.getSession();
      // Auth is working if we can get session status

      // Check realtime
      const channel = supabase.channel('health-check');
      await new Promise<void>((resolve) => {
        channel.subscribe((status) => {
          if (status !== 'SUBSCRIBED') {
            newHealth.realtime = 'degraded';
            newHealth.overall -= 10;
          }
          resolve();
        });
        setTimeout(resolve, 2000);
      });
      supabase.removeChannel(channel);

      // Check edge functions
      try {
        const { error: fnError } = await supabase.functions.invoke('immortal-protocol', {
          body: { action: 'GET_STATUS' }
        });
        if (fnError) {
          newHealth.functions = 'degraded';
          newHealth.overall -= 15;
        }
      } catch {
        newHealth.functions = 'degraded';
        newHealth.overall -= 15;
      }

    } catch (error) {
      console.error('Health check error:', error);
      newHealth.overall -= 20;
    }

    setHealth(newHealth);
    setLastCheck(new Date());
    setIsChecking(false);
  };

  useEffect(() => {
    runHealthCheck();
    const interval = setInterval(runHealthCheck, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'degraded':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'degraded':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-red-500/20 text-red-400';
    }
  };

  return (
    <Card className="glass-effect">
      <CardContent className="py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className={`w-5 h-5 ${isChecking ? 'animate-pulse text-primary' : 'text-emerald-400'}`} />
            <span className="font-medium">Estado del Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {lastCheck.toLocaleTimeString()}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm">Salud General</span>
            <span className="text-sm font-bold text-emerald-400">{health.overall}%</span>
          </div>
          <Progress value={health.overall} className="h-2" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
            <Database className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Database</p>
              <Badge className={`text-xs ${getStatusColor(health.database)}`}>
                {getStatusIcon(health.database)}
                <span className="ml-1">{health.database}</span>
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
            <Shield className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Auth</p>
              <Badge className={`text-xs ${getStatusColor(health.auth)}`}>
                {getStatusIcon(health.auth)}
                <span className="ml-1">{health.auth}</span>
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
            <Wifi className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Realtime</p>
              <Badge className={`text-xs ${getStatusColor(health.realtime)}`}>
                {getStatusIcon(health.realtime)}
                <span className="ml-1">{health.realtime}</span>
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
            <Server className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Functions</p>
              <Badge className={`text-xs ${getStatusColor(health.functions)}`}>
                {getStatusIcon(health.functions)}
                <span className="ml-1">{health.functions}</span>
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
