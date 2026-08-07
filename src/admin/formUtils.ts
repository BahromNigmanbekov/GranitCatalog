import type { ColorFamily, Stone, StoneType } from "../data/stones";

export interface ProductFormValues {
  name: string;
  origin: string;
  type: StoneType;
  colorFamily: ColorFamily;
  finish: string;
  description: string;
  thickness: string;
  formats: string;
  application: string;
  hardness: string;
  absorption: string;
  featured: boolean;
}

export interface ProjectDraft {
  key: string;
  image: string | null; // already-uploaded path (editing an existing project photo)
  file: File | null; // newly picked file, not uploaded yet
  previewUrl: string | null;
  caption: string;
}

export const EMPTY_FORM_VALUES: ProductFormValues = {
  name: "",
  origin: "",
  type: "granit",
  colorFamily: "kulrang",
  finish: "",
  description: "",
  thickness: "",
  formats: "",
  application: "",
  hardness: "",
  absorption: "",
  featured: false,
};

export function stoneToFormValues(stone: Stone): ProductFormValues {
  return {
    name: stone.name,
    origin: stone.origin,
    type: stone.type,
    colorFamily: stone.colorFamily,
    finish: stone.finish.join(", "),
    description: stone.description,
    thickness: stone.specs.thickness,
    formats: stone.specs.formats,
    application: stone.specs.application.join(", "),
    hardness: stone.specs.hardness,
    absorption: stone.specs.absorption,
    featured: stone.featured,
  };
}

export function stoneProjectsToDrafts(stone: Stone): ProjectDraft[] {
  return stone.projects.map((p, i) => ({
    key: `existing-${i}`,
    image: p.image,
    file: null,
    previewUrl: null,
    caption: p.caption,
  }));
}
