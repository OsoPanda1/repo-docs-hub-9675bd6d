-- TAMV IMMORTAL CORE PROTOCOL - Complete Database Schema
-- Estado del protocolo TAMV con las 7 capas federadas
CREATE TABLE IF NOT EXISTS public.tamv_protocol_state (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID DEFAULT gen_random_uuid(),
  phase INT NOT NULL DEFAULT 1 CHECK (phase BETWEEN 0 AND 7),
  subphase JSONB NOT NULL DEFAULT '{"name": "INITIALIZATION", "progress": 0}',
  last_metrics_snapshot UUID,
  last_eval_at TIMESTAMPTZ DEFAULT now(),
  next_actions JSONB DEFAULT '[]',
  integrity_hash TEXT NOT NULL DEFAULT 'sha3-512:initial',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'degraded', 'skeleton', 'lockdown', 'immortal')),
  health_score DECIMAL(5,2) DEFAULT 100.00,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Ledger de auditoría inmutable (BookPI++)
CREATE TABLE IF NOT EXISTS public.tamv_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID,
  module TEXT NOT NULL,
  action TEXT NOT NULL,
  result TEXT NOT NULL CHECK (result IN ('success', 'failure', 'warning', 'info')),
  data JSONB,
  hash TEXT NOT NULL,
  previous_hash TEXT,
  severity TEXT DEFAULT 'info' CHECK (severity IN ('debug', 'info', 'warning', 'error', 'critical')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Sistema de auto-análisis y mejora continua
CREATE TABLE IF NOT EXISTS public.tamv_system_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  analysis_type TEXT NOT NULL CHECK (analysis_type IN ('performance', 'security', 'bottleneck', 'error', 'optimization', 'health')),
  component TEXT NOT NULL,
  severity TEXT DEFAULT 'info' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  description TEXT NOT NULL,
  metrics JSONB DEFAULT '{}',
  recommendation TEXT,
  auto_fix_available BOOLEAN DEFAULT false,
  auto_fix_applied BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'detected' CHECK (status IN ('detected', 'analyzing', 'fixing', 'resolved', 'ignored')),
  created_at TIMESTAMPTZ DEFAULT now(),
  resolved_at TIMESTAMPTZ
);

-- Registro de logros y paradigmas rotos
CREATE TABLE IF NOT EXISTS public.tamv_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('record', 'paradigm_broken', 'innovation', 'milestone', 'certification')),
  evidence JSONB DEFAULT '{}',
  bibliography JSONB DEFAULT '[]',
  verification_status TEXT DEFAULT 'pending' CHECK (verification_status IN ('pending', 'verified', 'disputed', 'certified')),
  verification_sources JSONB DEFAULT '[]',
  impact_score DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  verified_at TIMESTAMPTZ
);

-- Métricas del sistema en tiempo real
CREATE TABLE IF NOT EXISTS public.tamv_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name TEXT NOT NULL,
  metric_value DECIMAL(15,4) NOT NULL,
  metric_unit TEXT,
  component TEXT NOT NULL,
  layer INT CHECK (layer BETWEEN 1 AND 7),
  tags JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Índices para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_audit_log_created ON public.tamv_audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_module ON public.tamv_audit_log(module);
CREATE INDEX IF NOT EXISTS idx_system_analysis_status ON public.tamv_system_analysis(status);
CREATE INDEX IF NOT EXISTS idx_metrics_component ON public.tamv_metrics(component, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_achievements_category ON public.tamv_achievements(category);

-- Enable RLS
ALTER TABLE public.tamv_protocol_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tamv_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tamv_system_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tamv_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tamv_metrics ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública para transparencia
CREATE POLICY "Protocol state is publicly readable" ON public.tamv_protocol_state FOR SELECT USING (true);
CREATE POLICY "Audit log is publicly readable" ON public.tamv_audit_log FOR SELECT USING (true);
CREATE POLICY "System analysis is publicly readable" ON public.tamv_system_analysis FOR SELECT USING (true);
CREATE POLICY "Achievements are publicly readable" ON public.tamv_achievements FOR SELECT USING (true);
CREATE POLICY "Metrics are publicly readable" ON public.tamv_metrics FOR SELECT USING (true);

-- Políticas de escritura para usuarios autenticados
CREATE POLICY "Authenticated can insert audit logs" ON public.tamv_audit_log FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "Authenticated can insert metrics" ON public.tamv_metrics FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_tamv_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tamv_protocol_state_updated
  BEFORE UPDATE ON public.tamv_protocol_state
  FOR EACH ROW EXECUTE FUNCTION update_tamv_updated_at();

-- Función para calcular hash de integridad
CREATE OR REPLACE FUNCTION calculate_audit_hash(p_module TEXT, p_action TEXT, p_result TEXT, p_data JSONB, p_previous_hash TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN encode(sha256((COALESCE(p_previous_hash, '') || p_module || p_action || p_result || COALESCE(p_data::TEXT, ''))::bytea), 'hex');
END;
$$ LANGUAGE plpgsql;

-- Insertar estado inicial del protocolo
INSERT INTO public.tamv_protocol_state (phase, subphase, status, integrity_hash)
VALUES (1, '{"name": "IMMORTAL_CORE_ACTIVE", "progress": 100, "layers": [1,2,3,4,5,6,7]}', 'immortal', 'sha3-512:genesis-tamv-2026')
ON CONFLICT DO NOTHING;

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.tamv_protocol_state;
ALTER PUBLICATION supabase_realtime ADD TABLE public.tamv_system_analysis;
ALTER PUBLICATION supabase_realtime ADD TABLE public.tamv_metrics;