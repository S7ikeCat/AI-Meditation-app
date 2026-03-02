import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { Mood } from "../model/types";
import { generateAffirmation } from "../model/generateAffirmation";

export function AiMoodCard() {
  const [mood, setMood] = React.useState<Mood>("good");
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState<string>("");

  async function onGenerate() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await generateAffirmation(mood);
      setText(res);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>AI Настрой дня</Text>

      <View style={styles.row}>
        <MoodButton label="🙂" active={mood === "good"} onPress={() => setMood("good")} />
        <MoodButton label="😐" active={mood === "neutral"} onPress={() => setMood("neutral")} />
        <MoodButton label="😔" active={mood === "bad"} onPress={() => setMood("bad")} />
      </View>

      <Pressable style={styles.btn} onPress={onGenerate} disabled={loading}>
        <Text style={styles.btnText}>{loading ? "Генерирую..." : "Сгенерировать"}</Text>
      </Pressable>

      {text ? <Text style={styles.text}>{text}</Text> : null}
    </View>
  );
}

function MoodButton({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.moodBtn, active ? styles.moodActive : styles.moodIdle]}>
      <Text style={styles.moodLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 0,
    marginBottom: 12,
    padding: 14,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    gap: 10,
  },
  title: { color: "white", fontSize: 16, fontWeight: "600" },

  row: { flexDirection: "row", gap: 10 },
  moodBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  moodActive: { backgroundColor: "rgba(255,255,255,0.16)", borderColor: "rgba(255,255,255,0.5)" },
  moodIdle: { backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" },
  moodLabel: { fontSize: 20 },

  btn: { borderRadius: 14, paddingVertical: 12, alignItems: "center", backgroundColor: "white" },
  btnText: { color: "#06060A", fontWeight: "700" },

  text: { color: "rgba(255,255,255,0.85)", lineHeight: 20 },
});