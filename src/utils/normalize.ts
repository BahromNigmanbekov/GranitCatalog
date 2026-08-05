const CYR_MAP: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "j", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "x", ц: "s", ч: "ch", ш: "sh", щ: "sh",
  ъ: "", ы: "i", ь: "", э: "e", ю: "yu", я: "ya", ў: "o", қ: "q", ғ: "g", ҳ: "h",
};

export function normalize(input: string): string {
  if (!input) return "";
  let out = "";
  for (const ch of input.toLowerCase()) {
    out += CYR_MAP[ch] ?? ch;
  }
  return out
    .replace(/['‘’ʻʼ`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
