import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export type Profile = {
  id: string;                  // = auth.users.id (PK / FK) [web:76]
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  level: string | null;
  tamv_citizen_id: string | null;
  node: string | null;
  cell: string | null;
  msr_score: number | null;
  emotional_risk: string | null;
  created_at: string;
  updated_at: string;
};

type UseUserProfileState = {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  user: ReturnType<typeof useAuth>["user"];
  refresh: () => Promise<void>;
};

export function useUserProfile(): UseUserProfileState {
  const { user: authUser } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!authUser) {
      setProfile(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("profiles")
      .select(
        `
        id,
        username,
        display_name,
        avatar_url,
        level,
        tamv_citizen_id,
        node,
        cell,
        msr_score,
        emotional_risk,
        created_at,
        updated_at
      `
      )
      .eq("id", authUser.id) // PK = auth.users.id [web:76]
      .single();

    if (error) {
      console.error("Error loading profile", error);
      setError(error.message);
      setProfile(null);
    } else {
      setProfile(data as Profile);
    }

    setLoading(false);
  };

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!authUser) {
        setProfile(null);
        setLoading(false);
        setError(null);
        return;
      }
      await fetchProfile();
      if (cancelled) return;
    };

    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser?.id]);

  return {
    profile,
    loading,
    error,
    user: authUser,
    refresh: fetchProfile,
  };
}
