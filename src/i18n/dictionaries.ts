import type { Lang } from "./types";
import type { ColorFamily, StoneType } from "../data/stones";

type ByLang = Record<Lang, string>;

/**
 * Looks up a raw value (exactly as stored in stones.json, i.e. the Uzbek
 * source of truth) in a dictionary and returns its translation for `lang`.
 * Falls back to the raw value itself when it's missing from the dictionary
 * (e.g. a brand-new value the admin dashboard just added) so the UI never
 * shows a blank field or crashes on an unknown value.
 */
function translate(dict: Record<string, ByLang>, raw: string, lang: Lang): string {
  const entry = dict[raw];
  if (!entry) return raw;
  return entry[lang] ?? raw;
}

export const TYPE_LABELS_I18N: Record<StoneType, ByLang> = {
  granit: { uz: "Granit", ru: "Гранит", en: "Granite" },
  marmar: { uz: "Marmar", ru: "Мрамор", en: "Marble" },
  travertin: { uz: "Travertin", ru: "Травертин", en: "Travertine" },
  keramogranit: { uz: "Keramogranit", ru: "Керамогранит", en: "Porcelain stoneware" },
};

export const COLOR_LABELS_I18N: Record<ColorFamily, ByLang> = {
  qora: { uz: "Qora", ru: "Чёрный", en: "Black" },
  oq: { uz: "Oq", ru: "Белый", en: "White" },
  kulrang: { uz: "Kulrang", ru: "Серый", en: "Grey" },
  jigarrang: { uz: "Jigarrang", ru: "Коричневый", en: "Brown" },
  yashil: { uz: "Yashil", ru: "Зелёный", en: "Green" },
  pushti: { uz: "Pushti", ru: "Розовый", en: "Pink" },
  bej: { uz: "Bej", ru: "Бежевый", en: "Beige" },
};

const ORIGIN_DICT: Record<string, ByLang> = {
  "Ukraina": { uz: "Ukraina", ru: "Украина", en: "Ukraine" },
  "Ukraine": { uz: "Ukraina", ru: "Украина", en: "Ukraine" },
  "India": { uz: "Hindiston", ru: "Индия", en: "India" },
  "Hindiston": { uz: "Hindiston", ru: "Индия", en: "India" },
  "Uzbekistan": { uz: "O'zbekiston", ru: "Узбекистан", en: "Uzbekistan" },
  "O'zbekiston": { uz: "O'zbekiston", ru: "Узбекистан", en: "Uzbekistan" },
  "Angola": { uz: "Angola", ru: "Ангола", en: "Angola" },
  "Brazil": { uz: "Braziliya", ru: "Бразилия", en: "Brazil" },
  "Braziliya": { uz: "Braziliya", ru: "Бразилия", en: "Brazil" },
  "Iran": { uz: "Eron", ru: "Иран", en: "Iran" },
  "Eron": { uz: "Eron", ru: "Иран", en: "Iran" },
  "China": { uz: "Xitoy", ru: "Китай", en: "China" },
  "Xitoy": { uz: "Xitoy", ru: "Китай", en: "China" },
  "Ozarbayjon": { uz: "Ozarbayjon", ru: "Азербайджан", en: "Azerbaijan" },
  "Finlyandiya": { uz: "Finlyandiya", ru: "Финляндия", en: "Finland" },
  "Qirg'iziston": { uz: "Qirg'iziston", ru: "Кыргызстан", en: "Kyrgyzstan" },
  "Ispaniya": { uz: "Ispaniya", ru: "Испания", en: "Spain" },
  "Qozog'iston": { uz: "Qozog'iston", ru: "Казахстан", en: "Kazakhstan" },
  "Rossiya": { uz: "Rossiya", ru: "Россия", en: "Russia" },
};

const FINISH_DICT: Record<string, ByLang> = {
  "polirovka": { uz: "polirovka", ru: "полировка", en: "polished" },
  "polirova": { uz: "polirova", ru: "полировка", en: "polished" },
  "plirovka": { uz: "plirovka", ru: "полировка", en: "polished" },
  "termo": { uz: "termo", ru: "термообработка", en: "flamed" },
  "polirovka termo": { uz: "polirovka termo", ru: "полировка, термообработка", en: "polished, flamed" },
  "kolotiy": { uz: "kolotiy", ru: "колотый", en: "split-face" },
  "suyuq polirovka": { uz: "suyuq polirovka", ru: "глянцевая полировка", en: "high-gloss polish" },
  "silliqlangan": { uz: "silliqlangan", ru: "шлифованный", en: "honed" },
};

const THICKNESS_DICT: Record<string, ByLang> = {
  "belgilanmagan": { uz: "belgilanmagan", ru: "не указано", en: "not specified" },
  "20 mm / 30mm": { uz: "20 mm / 30 mm", ru: "20 мм / 30 мм", en: "20 mm / 30 mm" },
  "20mm/30mm": { uz: "20 mm / 30 mm", ru: "20 мм / 30 мм", en: "20 mm / 30 mm" },
  "20 mm / 30 mm": { uz: "20 mm / 30 mm", ru: "20 мм / 30 мм", en: "20 mm / 30 mm" },
  "30 mm": { uz: "30 mm", ru: "30 мм", en: "30 mm" },
  "10 mm": { uz: "10 mm", ru: "10 мм", en: "10 mm" },
};

const HARDNESS_DICT: Record<string, ByLang> = {
  "6–7 Mos": { uz: "6–7 Mos", ru: "6–7 по шкале Мооса", en: "6–7 Mohs" },
  "6-7 mos": { uz: "6-7 mos", ru: "6-7 по шкале Мооса", en: "6-7 Mohs" },
  "6-8  mos": { uz: "6-8 mos", ru: "6-8 по шкале Мооса", en: "6-8 Mohs" },
  "6-8 mos": { uz: "6-8 mos", ru: "6-8 по шкале Мооса", en: "6-8 Mohs" },
  "3–4 Mos": { uz: "3–4 Mos", ru: "3–4 по шкале Мооса", en: "3–4 Mohs" },
  "8 Mos": { uz: "8 Mos", ru: "8 по шкале Мооса", en: "8 Mohs" },
};

const ABSORPTION_DICT: Record<string, ByLang> = {
  "past": { uz: "past", ru: "низкая", en: "low" },
  "pas": { uz: "pas", ru: "низкая", en: "low" },
  "o'rta": { uz: "o'rta", ru: "средняя", en: "medium" },
  "o'rta-yuqori": { uz: "o'rta-yuqori", ru: "средняя-высокая", en: "medium-high" },
  "juda past": { uz: "juda past", ru: "очень низкая", en: "very low" },
};

const APPLICATION_DICT: Record<string, ByLang> = {
  "peshtaxta": { uz: "peshtaxta", ru: "столешница", en: "countertop" },
  "fasad": { uz: "fasad", ru: "фасад", en: "façade" },
  "fasadlar": { uz: "fasadlar", ru: "фасады", en: "façades" },
  "Ichki": { uz: "ichki", ru: "внутренняя отделка", en: "interior" },
  "tashqi": { uz: "tashqi", ru: "наружная отделка", en: "exterior" },
  "qurilish toshi": { uz: "qurilish toshi", ru: "строительный камень", en: "building stone" },
  "bezak toshi": { uz: "bezak toshi", ru: "декоративный камень", en: "decorative stone" },
  "stol usti": { uz: "stol usti", ru: "столешница", en: "countertop" },
  "pol": { uz: "pol", ru: "пол", en: "floor" },
  "Ichki devor va pol qoplamalari": {
    uz: "ichki devor va pol qoplamalari",
    ru: "внутренняя облицовка стен и полов",
    en: "interior wall and floor cladding",
  },
  "favvoralar": { uz: "favvoralar", ru: "фонтаны", en: "fountains" },
  "basseyn va devor qoplamalari": {
    uz: "basseyn va devor qoplamalari",
    ru: "отделка бассейнов и стен",
    en: "pool and wall cladding",
  },
  "zinapoyalar": { uz: "zinapoyalar", ru: "лестницы", en: "staircases" },
  "zinapoya": { uz: "zinapoya", ru: "лестница", en: "staircase" },
  "zinapoya va pog'onalar": {
    uz: "zinapoya va pog'onalar",
    ru: "лестницы и ступени",
    en: "staircases and steps",
  },
  "deraza tokchalari": { uz: "deraza tokchalari", ru: "подоконники", en: "window sills" },
  "oshxona va hammom stol usti": {
    uz: "oshxona va hammom stol usti",
    ru: "кухонные и ванные столешницы",
    en: "kitchen and bathroom countertops",
  },
  "oshxona va hammom stol usti va boshqalar": {
    uz: "oshxona va hammom stol usti va boshqalar",
    ru: "кухонные и ванные столешницы и др.",
    en: "kitchen and bathroom countertops, etc.",
  },
  "oshxona": { uz: "oshxona", ru: "кухня", en: "kitchen" },
  "pol fasad": { uz: "pol, fasad", ru: "пол, фасад", en: "floor, façade" },
  "devor": { uz: "devor", ru: "стена", en: "wall" },
  "ustun": { uz: "ustun", ru: "колонна", en: "column" },
  "office": { uz: "ofis", ru: "офис", en: "office" },
  "oshxona va bar peshtaxtalari": {
    uz: "oshxona va bar peshtaxtalari",
    ru: "кухонные и барные стойки",
    en: "kitchen and bar counters",
  },
  "pol va devor qoplamalari": {
    uz: "pol va devor qoplamalari",
    ru: "напольные и настенные покрытия",
    en: "floor and wall cladding",
  },
  "hovli": { uz: "hovli", ru: "двор", en: "yard" },
  "termo": { uz: "termo", ru: "термообработка", en: "flamed finish" },
};

export function translateOrigin(raw: string, lang: Lang): string {
  return translate(ORIGIN_DICT, raw, lang);
}

export function translateFinish(raw: string, lang: Lang): string {
  return translate(FINISH_DICT, raw, lang);
}

export function translateThickness(raw: string, lang: Lang): string {
  if (!raw) return raw;
  return translate(THICKNESS_DICT, raw, lang);
}

export function translateHardness(raw: string, lang: Lang): string {
  if (!raw) return raw;
  return translate(HARDNESS_DICT, raw, lang);
}

export function translateAbsorption(raw: string, lang: Lang): string {
  if (!raw) return raw;
  return translate(ABSORPTION_DICT, raw, lang);
}

export function translateApplication(raw: string, lang: Lang): string {
  return translate(APPLICATION_DICT, raw, lang);
}
