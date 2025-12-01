import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export function useUserProfile() {
  const { user: authUser } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single()
        .then(({ data }) => {
          setProfile(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [authUser]);

  return { 
    profile, 
    loading,
    user: authUser 
  };
}
