export type SocialPlatform = {
  name: string;
  handle: string;
  followersLabel: string;
  profileUrl: string | null;
  accent: string;
  isExample: boolean;
};

export const socialStats: SocialPlatform[] = [
  { name: "Instagram", handle: "@mxrcusvlog", followersLabel: "12.8K", profileUrl: "https://www.instagram.com/mxrcusvlog/", accent: "#d6a58c", isExample: true },
  { name: "TikTok", handle: "Perfil por añadir", followersLabel: "8.4K", profileUrl: null, accent: "#a9c2b2", isExample: true },
  { name: "Facebook", handle: "Memorias y Trayectorias", followersLabel: "6.2K", profileUrl: "https://www.facebook.com/memoriasytrayectorias", accent: "#c8b68d", isExample: true }
];
