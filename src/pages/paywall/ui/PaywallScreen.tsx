import * as React from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { useSubscription } from "@/features/subscription";

export default function PaywallScreen() {
  const { subscribe } = useSubscription();
  const [plan, setPlan] = React.useState<"monthly" | "yearly">("yearly");


  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ScrollView
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
>
        <Text style={styles.title}>ZenPulse Premium</Text>
        <Text style={styles.subtitle}>Медитации и аффирмации на каждый день</Text>

        <View style={styles.benefits}>
          {["Доступ ко всем сессиям", "AI-настрой дня", "Сессии для сна"].map((t) => (
            <Text key={t} style={styles.benefit}>• {t}</Text>
          ))}
        </View>

        <View style={styles.plans}>
          <Pressable
            onPress={() => setPlan("monthly")}
            style={[styles.planCard, plan === "monthly" ? styles.planActive : styles.planInactive]}
          >
            <Text style={styles.planTitle}>Месячный</Text>
            <Text style={styles.planPrice}>299 ₽ / мес</Text>
          </Pressable>

          <Pressable
            onPress={() => setPlan("yearly")}
            style={[styles.planCard, plan === "yearly" ? styles.planActive : styles.planInactive]}
          >
            <Text style={styles.planTitle}>Годовой</Text>
            <Text style={styles.planPrice}>1990 ₽ / год</Text>
            <Text style={styles.badge}>Выгодно</Text>
          </Pressable>
        </View>

        <Pressable
  style={styles.cta}
  onPress={() => {
    console.log("pressed");
    subscribe();
    router.replace("/");
  }}
>
  <Text style={styles.ctaText}>Попробовать бесплатно</Text>
</Pressable>

        <Text style={styles.note}>Покупка имитируется. Для прототипа.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#06060A" },
  container: { flex: 1, paddingHorizontal: 18, paddingTop: 14, justifyContent: "center" },
  title: { color: "white", fontSize: 34, fontWeight: "700", marginBottom: 6 },
  subtitle: { color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 18 },
  benefits: { gap: 8, marginBottom: 18 },
  benefit: { color: "rgba(255,255,255,0.85)", fontSize: 15 },

  plans: { gap: 12, marginBottom: 18 },
  planCard: { borderRadius: 18, padding: 14, borderWidth: 1 },
  planActive: {
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.1)",
    transform: [{ scale: 1.03 }],
  },
  planInactive: { borderColor: "rgba(255,255,255,0.18)", backgroundColor: "rgba(255,255,255,0.03)" },
  planTitle: { color: "white", fontSize: 16, fontWeight: "600" },
  planPrice: { color: "rgba(255,255,255,0.75)", marginTop: 4 },
  badge: {
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
    fontWeight: "700",
    alignSelf: "flex-start",
  },

  cta: { borderRadius: 18, paddingVertical: 14, alignItems: "center", backgroundColor: "white" },
  ctaText: { color: "#06060A", fontSize: 16, fontWeight: "700" },
  note: { color: "rgba(255,255,255,0.55)", marginTop: 12, fontSize: 12, textAlign: "center" },
});