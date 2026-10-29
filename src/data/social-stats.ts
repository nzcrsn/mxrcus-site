export type SocialPlatform = {
  name: string;
  handle: string;
  followers: number | null;
  profileUrl: string | null;
  accent: string;
};

export const socialStats: SocialPlatform[] = [
  {
    name: "Instagram",
    handle: "@mxrcusvlog",
    followers: null,
    profileUrl: "https://www.instagram.com/mxrcusvlog/",
    accent: "#d6a58c"
  },
  {
    name: "TikTok",
    handle: "Añadir perfil",
    followers: null,
    profileUrl: null,
    accent: "#a9c2b2"
  },
  {
    name: "Facebook",
    handle: "Memorias y Trayectorias",
    followers: null,
    profileUrl: "https://www.facebook.com/memoriasytrayectorias",
    accent: "#c8b68d"
  }
];
