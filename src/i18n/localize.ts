import type { Lang } from "./types";
import type { Stone, StoneProject } from "../data/stones";
import { TYPE_LABELS_I18N, COLOR_LABELS_I18N, translateOrigin, translateFinish, translateThickness, translateHardness, translateAbsorption, translateApplication } from "./dictionaries";
import { DESCRIPTIONS_I18N } from "./descriptions";

export interface LocalizedStone {
  id: string;
  name: string;
  origin: string;
  typeLabel: string;
  colorLabel: string;
  finish: string[];
  description: string;
  specs: {
    thickness: string;
    formats: string;
    application: string[];
    hardness: string;
    absorption: string;
  };
  images: string[];
  projects: StoneProject[];
  featured: boolean;
}

export function localizeStone(stone: Stone, lang: Lang): LocalizedStone {
  const description =
    lang === "uz" ? stone.description : DESCRIPTIONS_I18N[stone.id]?.[lang] ?? stone.description;

  return {
    id: stone.id,
    name: stone.name,
    origin: translateOrigin(stone.origin, lang),
    typeLabel: TYPE_LABELS_I18N[stone.type]?.[lang] ?? stone.type,
    colorLabel: COLOR_LABELS_I18N[stone.colorFamily]?.[lang] ?? stone.colorFamily,
    finish: stone.finish.map((f) => translateFinish(f, lang)),
    description,
    specs: {
      thickness: translateThickness(stone.specs.thickness, lang),
      // "formats" values in the source data are inconsistent/garbled (e.g. "60xП"),
      // so we pass them through as-is rather than fabricate a translation.
      formats: stone.specs.formats,
      application: stone.specs.application.map((a) => translateApplication(a, lang)),
      hardness: translateHardness(stone.specs.hardness, lang),
      absorption: translateAbsorption(stone.specs.absorption, lang),
    },
    images: stone.images,
    projects: stone.projects,
    featured: stone.featured,
  };
}
