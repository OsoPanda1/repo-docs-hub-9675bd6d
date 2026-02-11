import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export type Profile = {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  level: string | null;
  tc_balance: number | null;
  reputation_score: number | null;
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
        `id, display_name, avatar_url, bio, level, tc_balance, reputation_score, created_at, updated_at`
      )
      .eq("user_id", authUser.id)
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
