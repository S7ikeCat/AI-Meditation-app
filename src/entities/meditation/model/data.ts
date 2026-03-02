import type { Meditation } from "./types";

export const MEDITATIONS: Meditation[] = [
  { id: "m1", title: "Утренний фокус", minutes: 5, isPremium: false },
  { id: "m2", title: "Снятие тревоги", minutes: 8, isPremium: false },
  { id: "m3", title: "Перезагрузка дня", minutes: 10, isPremium: true },
  { id: "m4", title: "Глубокий сон", minutes: 12, isPremium: true },
  { id: "m5", title: "Благодарность", minutes: 6, isPremium: true },
];