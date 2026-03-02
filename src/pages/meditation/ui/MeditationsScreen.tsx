import { FlatList, StyleSheet, Text, View, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { useSubscription } from "@/features/subscription";
import { MEDITATIONS, type Meditation } from "@/entities/meditation";
import { MeditationCard } from "@/entities/meditation/ui/MeditationCard";

import { AiMoodCard } from "@/features/ai-mood";

export default function MeditationsScreen() {
  const { isSubscribed, reset } = useSubscription();

  function onPressMeditation(item: Meditation) {
    console.log("pressed card:", item.title);
  
    const locked = item.isPremium && !isSubscribed;
    if (locked) {
      router.push("/paywall");
      return;
    }
  
    // временно вместо Alert:
    alert(`Запускаем: ${item.title} (${item.minutes} мин)`);
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Text style={styles.h1}>Медитации</Text>

        {/* <Pressable
  onPress={() => {
    reset();
    router.replace("/");
  }}
  style={styles.smallBtn}
>
  <Text style={styles.smallBtnText}>Сброс</Text>
</Pressable> */}
      </View>

      <FlatList
        data={MEDITATIONS}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<AiMoodCard />}
        renderItem={({ item }) => {
          const locked = item.isPremium && !isSubscribed;
          return (
            <MeditationCard
              title={item.title}
              minutes={item.minutes}
              isPremium={item.isPremium}
              locked={locked}
              onPress={() => onPressMeditation(item)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#06060A" },
  header: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: { color: "white", fontSize: 26, fontWeight: "700" },
  smallBtn: { paddingVertical: 8, paddingHorizontal: 10, borderRadius: 12, backgroundColor: "rgba(255,255,255,0.08)" },
  smallBtnText: { color: "rgba(255,255,255,0.8)", fontSize: 12 },
  list: { paddingHorizontal: 18, paddingBottom: 18, gap: 12 },
});