import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SubscriptionProvider } from "@/features/subscription";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SubscriptionProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SubscriptionProvider>
    </SafeAreaProvider>
  );
}