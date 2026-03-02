export type Meditation = {
    id: string;
    title: string;
    minutes: number;
    image?: string; // пока не используем, под будущие картинки
    isPremium: boolean;
  };