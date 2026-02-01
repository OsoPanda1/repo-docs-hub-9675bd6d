import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { 
  Brain, AlertTriangle, CheckCircle2, Clock, Shield, 
  MessageSquare, Eye, Zap, Activity, RefreshCw 
} from 'lucide-react';

interface IsabellaEvent {
  id: string;
  created_at: string;
  event_type: string;
  layer: string;
  role: string;
  content: string | null;
  ethical_state: string | null;
  risk_level: string | null;
  hitl_required: boolean;
  aign_score: number | null;
}

const eventTypeIcons: Record<string, typeof Brain> = {
  'USER_MESSAGE': MessageSquare,
  'ASSISTANT_RESPONSE': Brain,
  'POLICY_EVALUATION': Shield,
  'PENDING_HITL': Clock,
  'HITL_APPROVED': CheckCircle2,
  'HITL_BLOCKED': AlertTriangle,
  'ETHICS_CHECK': Eye,
  'SECURITY_SCAN': Shield,
  'GOVERNANCE_VOTE': Zap,
};

const riskColors: Record<string, string> = {
  'low': 'text-emerald-400 bg-emerald-400/20',
  'medium': 'text-amber-400 bg-amber-400/20',
  'high': 'text-orange-400 bg-orange-400/20',
  'critical': 'text-red-400 bg-red-400/20',
};

export default function IsabellaEventsMonitor() {
  const [events, setEvents] = useState<IsabellaEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [pendingHITL, setPendingHITL] = useState(0);

  const fetchEvents = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('isabella_events')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);
    
    if (data) {
      setEvents(data as unknown as IsabellaEvent[]);
      setPendingHITL(data.filter((e: any) => e.hitl_required && e.event_type === 'PENDING_HITL').length);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();

    // Suscripción en tiempo real
    const channel = supabase
      .channel('isabella-events')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'isabella_events' 
      }, (payload) => {
        setEvents(prev => [payload.new as IsabellaEvent, ...prev].slice(0, 50));
        if ((payload.new as any).hitl_required && (payload.new as any).event_type === 'PENDING_HITL') {
          setPendingHITL(p => p + 1);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString('es-MX', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <Card className="glass-effect border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Monitor de Eventos Isabella
        </CardTitle>
        <div className="flex items-center gap-2">
          {pendingHITL > 0 && (
            <Badge variant="destructive" className="animate-pulse">
              {pendingHITL} HITL Pendientes
            </Badge>
          )}
          <Button variant="ghost" size="icon" onClick={fetchEvents} disabled={loading}>
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {events.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No hay eventos registrados aún</p>
            </div>
          ) : (
            <div className="space-y-2">
              {events.map((event) => {
                const Icon = eventTypeIcons[event.event_type] || Brain;
                return (
                  <div 
                    key={event.id}
                    className={`p-3 rounded-lg border ${
                      event.hitl_required ? 'border-amber-500/50 bg-amber-500/5' : 'border-border/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        event.hitl_required ? 'bg-amber-500/20' : 'bg-primary/20'
                      }`}>
                        <Icon className={`w-4 h-4 ${
                          event.hitl_required ? 'text-amber-400' : 'text-primary'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">
                            {event.event_type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {event.layer}
                          </Badge>
                          {event.risk_level && (
                            <Badge className={`text-xs ${riskColors[event.risk_level]}`}>
                              {event.risk_level.toUpperCase()}
                            </Badge>
                          )}
                          {event.aign_score !== null && (
                            <span className="text-xs text-muted-foreground">
                              AIGN: {event.aign_score}
                            </span>
                          )}
                        </div>
                        {event.content && (
                          <p className="text-sm text-muted-foreground mt-1 truncate">
                            {event.content}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatTime(event.created_at)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
