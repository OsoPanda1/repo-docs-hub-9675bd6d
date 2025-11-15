import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { scanType } = await req.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get auth header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No authorization header' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Verify user
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if user is admin
    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id);

    const isAdmin = roles?.some(r => r.role === 'admin');
    
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Perform security scan based on scanType
    interface ScanVulnerability {
      level: string;
      category: string;
      description: string;
      count: number;
    }

    const scanResults = {
      timestamp: new Date().toISOString(),
      scanType,
      threats: [] as string[],
      vulnerabilities: [] as ScanVulnerability[],
      recommendations: [] as string[],
      score: 85
    };

    // Simulate security checks
    if (scanType === 'full' || scanType === 'auth') {
      // Check for suspicious authentication patterns
      const { data: recentLogins } = await supabase
        .from('profiles')
        .select('user_id, created_at')
        .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
        .order('created_at', { ascending: false })
        .limit(100);

      if (recentLogins && recentLogins.length > 50) {
        scanResults.vulnerabilities.push({
          level: 'warning',
          category: 'authentication',
          description: 'Unusual number of new accounts created in last 24h',
          count: recentLogins.length
        });
      }
    }

    if (scanType === 'full' || scanType === 'transactions') {
      // Check for suspicious transactions
      const { data: suspiciousTransactions } = await supabase
        .from('transactions')
        .select('*')
        .eq('type', 'transfer')
        .gte('amount', 1000)
        .gte('created_at', new Date(Date.now() - 60 * 60 * 1000).toISOString());

      if (suspiciousTransactions && suspiciousTransactions.length > 0) {
        scanResults.vulnerabilities.push({
          level: 'info',
          category: 'economy',
          description: 'Large transactions detected',
          count: suspiciousTransactions.length
        });
      }
    }

    // Add recommendations
    scanResults.recommendations = [
      'Enable 2FA for admin accounts',
      'Regular security audits recommended',
      'Monitor unusual transaction patterns',
      'Keep RLS policies updated'
    ];

    return new Response(JSON.stringify(scanResults), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in security-scan:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
