export type Lang = "uz" | "ru" | "en";

export const LANGS: Lang[] = ["uz", "ru", "en"];

export const LANG_LABELS: Record<Lang, string> = {
  uz: "O'zbek",
  ru: "Русский",
  en: "English",
};

export const LANG_SHORT_LABELS: Record<Lang, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const LANG_FLAGS: Record<Lang, string> = {
  uz: "🇺🇿",
  ru: "🇷🇺",
  en: "🇬🇧",
};
