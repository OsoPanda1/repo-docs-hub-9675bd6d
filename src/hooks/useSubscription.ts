import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

// Stripe product/price mappings for TAMV memberships
export const MEMBERSHIP_TIERS = {
  creator: {
    product_id: "prod_TxgUzsPjNGdnkh",
    price_id: "price_1Szl7r2c9MT9LcDv4JEYV5zI",
    name: "Creador",
    price: 9.99,
  },
  vip: {
    product_id: "prod_TxgVMy3rBpnrfv",
    price_id: "price_1Szl812c9MT9LcDvkBpErIzl",
    name: "VIP",
    price: 49.99,
  },
  elite: {
    product_id: "prod_TxgV4ZwsTQNFbO",
    price_id: "price_1Szl822c9MT9LcDvFThKAgoM",
    name: "Elite",
    price: 99.99,
  },
  celestial: {
    product_id: "prod_TxgVIYJ7GhbGpj",
    price_id: "price_1Szl842c9MT9LcDvNpSKLCAz",
    name: "Celestial",
    price: 299.99,
  },
} as const;

export type TierKey = keyof typeof MEMBERSHIP_TIERS;

interface SubscriptionState {
  subscribed: boolean;
  productId: string | null;
  tierKey: TierKey | null;
  subscriptionEnd: string | null;
  loading: boolean;
}

export function useSubscription() {
  const { user } = useAuth();
  const [state, setState] = useState<SubscriptionState>({
    subscribed: false,
    productId: null,
    tierKey: null,
    subscriptionEnd: null,
    loading: true,
  });

  const checkSubscription = useCallback(async () => {
    if (!user) {
      setState({ subscribed: false, productId: null, tierKey: null, subscriptionEnd: null, loading: false });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("check-subscription");
      if (error) throw error;

      let tierKey: TierKey | null = null;
      if (data?.product_id) {
        const entry = Object.entries(MEMBERSHIP_TIERS).find(
          ([, v]) => v.product_id === data.product_id
        );
        if (entry) tierKey = entry[0] as TierKey;
      }

      setState({
        subscribed: data?.subscribed ?? false,
        productId: data?.product_id ?? null,
        tierKey,
        subscriptionEnd: data?.subscription_end ?? null,
        loading: false,
      });
    } catch {
      setState((s) => ({ ...s, loading: false }));
    }
  }, [user]);

  useEffect(() => {
    checkSubscription();
  }, [checkSubscription]);

  const checkout = async (priceId: string) => {
    const { data, error } = await supabase.functions.invoke("create-checkout", {
      body: { priceId },
    });
    if (error) throw error;
    if (data?.url) window.open(data.url, "_blank");
  };

  const manageSubscription = async () => {
    const { data, error } = await supabase.functions.invoke("customer-portal");
    if (error) throw error;
    if (data?.url) window.open(data.url, "_blank");
  };

  return { ...state, checkout, manageSubscription, refresh: checkSubscription };
}
