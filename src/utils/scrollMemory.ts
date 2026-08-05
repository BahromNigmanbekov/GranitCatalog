let savedScrollY: number | null = null;

export function saveCatalogScroll() {
  savedScrollY = window.scrollY;
}

export function consumeCatalogScroll(): number | null {
  const value = savedScrollY;
  savedScrollY = null;
  return value;
}
