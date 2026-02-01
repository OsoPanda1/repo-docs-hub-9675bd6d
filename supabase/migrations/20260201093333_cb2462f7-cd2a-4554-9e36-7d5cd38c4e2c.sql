-- Tabla de eventos civilizatorios de Isabella
-- Auditoría + HITL + Gobernanza + Multi-Agente

CREATE TABLE IF NOT EXISTS public.isabella_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  conversation_id UUID NOT NULL,
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (
    event_type IN (
      'USER_MESSAGE',
      'ASSISTANT_RESPONSE',
      'POLICY_EVALUATION',
      'PENDING_HITL',
      'HITL_APPROVED',
      'HITL_EDITED',
      'HITL_BLOCKED',
      'SYSTEM_ERROR',
      'ETHICS_CHECK',
      'SECURITY_SCAN',
      'GOVERNANCE_VOTE',
      'MULTI_AGENT_SYNC'
    )
  ),
  layer TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT,
  ethical_state TEXT,
  risk_level TEXT CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
  governance_flag TEXT,
  hitl_required BOOLEAN DEFAULT false,
  aign_score INTEGER CHECK (aign_score >= 0 AND aign_score <= 100),
  is_creator BOOLEAN DEFAULT false,
  guardian_user_id UUID,
  meta JSONB DEFAULT '{}'::jsonb
);

-- Índices para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_isabella_events_conversation ON public.isabella_events(conversation_id);
CREATE INDEX IF NOT EXISTS idx_isabella_events_type ON public.isabella_events(event_type);
CREATE INDEX IF NOT EXISTS idx_isabella_events_created_at ON public.isabella_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_isabella_events_risk ON public.isabella_events(risk_level);
CREATE INDEX IF NOT EXISTS idx_isabella_events_hitl ON public.isabella_events(hitl_required) WHERE hitl_required = true;

-- Enable RLS
ALTER TABLE public.isabella_events ENABLE ROW LEVEL SECURITY;

-- Usuario puede leer eventos de sus conversaciones
CREATE POLICY "read_own_conversation_events"
ON public.isabella_events
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM conversations c
    WHERE c.id = conversation_id
    AND c.user_id = auth.uid()
  )
);

-- Guardianes pueden leer todos los eventos
CREATE POLICY "guardians_read_all_events"
ON public.isabella_events
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'moderator')
  )
);

-- Sistema puede insertar eventos
CREATE POLICY "authenticated_insert_events"
ON public.isabella_events
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Guardianes pueden actualizar eventos HITL
CREATE POLICY "guardians_update_hitl"
ON public.isabella_events
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid()
    AND role IN ('admin', 'moderator')
  )
);

-- Habilitar realtime para eventos
ALTER PUBLICATION supabase_realtime ADD TABLE public.isabella_events;