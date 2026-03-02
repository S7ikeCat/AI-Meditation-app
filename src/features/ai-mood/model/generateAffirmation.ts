import type { Mood } from "./types";

const POOL: Record<Mood, string[]> = {
  good: [
    "Сегодня я в потоке: спокойно делаю шаг за шагом.",
    "Я выбираю ясность и мягкую уверенность.",
    "Моя энергия направлена на то, что действительно важно.",
  ],
  neutral: [
    "Я замедляюсь и возвращаюсь в момент.",
    "Мне не нужно спешить — я двигаюсь устойчиво.",
    "Я замечаю дыхание и отпускаю лишнее напряжение.",
  ],
  bad: [
    "Мне можно чувствовать это — и всё равно быть в безопасности.",
    "С каждым выдохом я отпускаю тяжесть хотя бы на 1%.",
    "Я делаю маленький шаг к спокойствию прямо сейчас.",
  ],
};

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export async function generateAffirmation(mood: Mood): Promise<string> {
  // имитация вызова LLM (чтобы было похоже на реальный запрос)
  await sleep(1200);

  const arr = POOL[mood];
  return arr[Math.floor(Math.random() * arr.length)];
}