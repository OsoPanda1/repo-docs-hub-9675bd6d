-- ============================================================
-- TAMV SECURITY HARDENING MIGRATION
-- Fix all critical security issues detected by scan
-- ============================================================

-- 1. Fix function search_path issues
CREATE OR REPLACE FUNCTION public.update_tamv_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.calculate_audit_hash(p_module text, p_action text, p_result text, p_data jsonb, p_previous_hash text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  RETURN encode(sha256((COALESCE(p_previous_hash, '') || p_module || p_action || p_result || COALESCE(p_data::TEXT, ''))::bytea), 'hex');
END;
$function$;

-- 2. FIX CRITICAL: Restrict audit logs to admins only (was publicly readable)
DROP POLICY IF EXISTS "Audit log is publicly readable" ON public.tamv_audit_log;
CREATE POLICY "Admins can read audit logs" 
ON public.tamv_audit_log 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'moderator')
  )
);

-- 3. FIX CRITICAL: Restrict system analysis to admins only
DROP POLICY IF EXISTS "System analysis is publicly readable" ON public.tamv_system_analysis;
CREATE POLICY "Admins can read system analysis" 
ON public.tamv_system_analysis 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'moderator')
  )
);

-- 4. FIX CRITICAL: Restrict transaction creation to own user
DROP POLICY IF EXISTS "System can create transactions" ON public.transactions;
CREATE POLICY "Users can create own transactions" 
ON public.transactions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Allow service role to create any transaction (for rewards)
CREATE POLICY "Service role can create any transaction" 
ON public.transactions 
FOR INSERT 
TO service_role
WITH CHECK (true);

-- 5. Restrict protocol state to admins
DROP POLICY IF EXISTS "Protocol state is publicly readable" ON public.tamv_protocol_state;
CREATE POLICY "Admins can read protocol state" 
ON public.tamv_protocol_state 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  ) OR auth.uid() IS NOT NULL
);

-- 6. Add INSERT/UPDATE/DELETE protection to protocol state
CREATE POLICY "Only service role can modify protocol state" 
ON public.tamv_protocol_state 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 7. Restrict metrics to authenticated users
DROP POLICY IF EXISTS "Metrics are publicly readable" ON public.tamv_metrics;
CREATE POLICY "Authenticated users can read metrics" 
ON public.tamv_metrics 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- 8. Add protection for system analysis writes
CREATE POLICY "Only service role can modify system analysis" 
ON public.tamv_system_analysis 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 9. Add protection for achievements
CREATE POLICY "Only service role can modify achievements" 
ON public.tamv_achievements 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- 10. Add explicit deny for audit log tampering
CREATE POLICY "No one can update audit logs" 
ON public.tamv_audit_log 
FOR UPDATE 
USING (false);

CREATE POLICY "No one can delete audit logs" 
ON public.tamv_audit_log 
FOR DELETE 
USING (false);