import dims from "./imageDims.json";

// Intrinsic pixel sizes for each asset, used to set width/height on <img>
// so the layout never shifts while an image is loading.
// Lives in imageDims.json so the local admin dashboard can update it directly.
export const IMG_DIMS = dims as unknown as Record<string, [number, number]>;

export const DEFAULT_DIMS: [number, number] = [3, 4];
