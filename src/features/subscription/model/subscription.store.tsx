import * as React from "react";

type SubscriptionContextValue = {
  isSubscribed: boolean;
  subscribe: () => void;
  reset: () => void;
};

const SubscriptionContext = React.createContext<SubscriptionContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const value: SubscriptionContextValue = {
    isSubscribed,
    subscribe: () => setIsSubscribed(true),
    reset: () => setIsSubscribed(false),
  };

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

export function useSubscription() {
  const ctx = React.useContext(SubscriptionContext);
  if (!ctx) throw new Error("useSubscription must be used within SubscriptionProvider");
  return ctx;
}