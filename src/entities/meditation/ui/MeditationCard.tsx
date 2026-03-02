import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  minutes: number;
  locked: boolean;
  isPremium: boolean;
  onPress: () => void;
};

export function MeditationCard({ title, minutes, locked, isPremium, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.card, locked ? styles.locked : styles.open]}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{minutes} мин</Text>
      </View>

      <Text style={styles.meta}>
        {isPremium ? (locked ? "Premium • 🔒" : "Premium") : "Free"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 18, padding: 14, borderWidth: 1 },
  open: { backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" },
  locked: {
    backgroundColor: "rgba(255,255,255,0.02)",
    borderColor: "rgba(255,255,255,0.08)",
    opacity: 0.55,
  },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { color: "white", fontSize: 16, fontWeight: "600" },
  time: { color: "rgba(255,255,255,0.7)" },
  meta: { color: "rgba(255,255,255,0.65)", marginTop: 6 },
});