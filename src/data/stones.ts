import stonesData from "./stones.json";

export type StoneType = "granit" | "marmar" | "travertin" | "keramogranit";

export type ColorFamily =
  | "qora"
  | "oq"
  | "kulrang"
  | "jigarrang"
  | "yashil"
  | "pushti"
  | "bej";

export interface StoneProject {
  image: string;
  caption: string;
}

export interface StoneSpecs {
  thickness: string;
  formats: string;
  application: string[];
  hardness: string;
  absorption: string;
}

export interface Stone {
  id: string;
  name: string;
  origin: string;
  type: StoneType;
  colorFamily: ColorFamily;
  finish: string[];
  description: string;
  specs: StoneSpecs;
  images: string[];
  projects: StoneProject[];
  featured: boolean;
}

export const TYPE_LABELS: Record<StoneType, string> = {
  granit: "Granit",
  marmar: "Marmar",
  travertin: "Travertin",
  keramogranit: "Keramogranit",
};

export const COLOR_LABELS: Record<ColorFamily, string> = {
  qora: "Qora",
  oq: "Oq",
  kulrang: "Kulrang",
  jigarrang: "Jigarrang",
  yashil: "Yashil",
  pushti: "Pushti",
  bej: "Bej",
};

// Data lives in stones.json (not here) so the local admin dashboard can read
// and rewrite it directly on disk without touching TypeScript source.
export const STONES = stonesData as Stone[];
