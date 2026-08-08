import type { Lang } from "./types";

export interface UiStrings {
  eyebrow: string;
  siteTitle: string;
  countSuffix: (n: number) => string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  clearSearchAriaLabel: string;
  emptyTitle: string;
  emptyText: string;
  clearButton: string;
  loadMore: string;
  backToCatalog: string;
  notFoundTitle: string;
  notFoundText: string;
  specThickness: string;
  specFormats: string;
  specApplication: string;
  specHardness: string;
  specAbsorption: string;
  techInfoTitle: string;
  completedWorksTitle: string;
  completedWorksEmpty: string;
  similarStonesTitle: string;
  footerNote: string;
  lightboxClose: string;
  lightboxPrev: string;
  lightboxNext: string;
  lightboxImageLabel: (n: number) => string;
  zoomAriaLabel: (caption: string) => string;
  languageSelectLabel: string;
}

const uz: UiStrings = {
  eyebrow: "QR-katalog",
  siteTitle: "Tabiiy tosh katalogi",
  countSuffix: (n) => `${n} ta tosh`,
  searchPlaceholder: "Tosh nomini qidiring...",
  searchAriaLabel: "Nomi bo'yicha qidirish",
  clearSearchAriaLabel: "Qidiruvni tozalash",
  emptyTitle: "Hech narsa topilmadi",
  emptyText: "Boshqa nom bilan qidiring.",
  clearButton: "Tozalash",
  loadMore: "Yana yuklash",
  backToCatalog: "← Katalog",
  notFoundTitle: "Tosh topilmadi",
  notFoundText: "Havola noto'g'ri bo'lishi mumkin.",
  specThickness: "Qalinlik",
  specFormats: "Formatlar",
  specApplication: "Qo'llanilishi",
  specHardness: "Qattiqlik",
  specAbsorption: "Namlik shimish",
  techInfoTitle: "Texnik ma'lumot",
  completedWorksTitle: "Tugallangan ishlar",
  completedWorksEmpty: "Bu tosh bilan bajarilgan ishlar tez orada shu yerga qo'shiladi.",
  similarStonesTitle: "O'xshash toshlar",
  footerNote: "Barcha toshlar do'konda mavjud. Namuna rangi ekranga qarab ozgina farq qilishi mumkin.",
  lightboxClose: "Yopish",
  lightboxPrev: "Oldingi rasm",
  lightboxNext: "Keyingi rasm",
  lightboxImageLabel: (n) => `Rasm ${n}`,
  zoomAriaLabel: (caption) => (caption ? `Kattalashtirish: ${caption}` : "Kattalashtirish"),
  languageSelectLabel: "Til",
};

const ru: UiStrings = {
  eyebrow: "QR-каталог",
  siteTitle: "Каталог природного камня",
  countSuffix: (n) => `${n} видов камня`,
  searchPlaceholder: "Поиск по названию...",
  searchAriaLabel: "Поиск по названию",
  clearSearchAriaLabel: "Очистить поиск",
  emptyTitle: "Ничего не найдено",
  emptyText: "Попробуйте другое название.",
  clearButton: "Очистить",
  loadMore: "Показать ещё",
  backToCatalog: "← Каталог",
  notFoundTitle: "Камень не найден",
  notFoundText: "Возможно, ссылка неверна.",
  specThickness: "Толщина",
  specFormats: "Форматы",
  specApplication: "Применение",
  specHardness: "Твёрдость",
  specAbsorption: "Водопоглощение",
  techInfoTitle: "Технические данные",
  completedWorksTitle: "Выполненные работы",
  completedWorksEmpty: "Фотографии выполненных работ с этим камнем скоро появятся здесь.",
  similarStonesTitle: "Похожие камни",
  footerNote: "Все камни в наличии в магазине. Цвет образца может немного отличаться в зависимости от экрана.",
  lightboxClose: "Закрыть",
  lightboxPrev: "Предыдущее фото",
  lightboxNext: "Следующее фото",
  lightboxImageLabel: (n) => `Фото ${n}`,
  zoomAriaLabel: (caption) => (caption ? `Увеличить: ${caption}` : "Увеличить"),
  languageSelectLabel: "Язык",
};

const en: UiStrings = {
  eyebrow: "QR catalog",
  siteTitle: "Natural Stone Catalog",
  countSuffix: (n) => `${n} stones`,
  searchPlaceholder: "Search by name...",
  searchAriaLabel: "Search by name",
  clearSearchAriaLabel: "Clear search",
  emptyTitle: "Nothing found",
  emptyText: "Try a different name.",
  clearButton: "Clear",
  loadMore: "Load more",
  backToCatalog: "← Catalog",
  notFoundTitle: "Stone not found",
  notFoundText: "The link may be incorrect.",
  specThickness: "Thickness",
  specFormats: "Formats",
  specApplication: "Application",
  specHardness: "Hardness",
  specAbsorption: "Water absorption",
  techInfoTitle: "Technical details",
  completedWorksTitle: "Completed projects",
  completedWorksEmpty: "Photos of completed projects with this stone will appear here soon.",
  similarStonesTitle: "Similar stones",
  footerNote: "All stones are available in store. The sample colour may differ slightly depending on your screen.",
  lightboxClose: "Close",
  lightboxPrev: "Previous photo",
  lightboxNext: "Next photo",
  lightboxImageLabel: (n) => `Photo ${n}`,
  zoomAriaLabel: (caption) => (caption ? `Zoom in: ${caption}` : "Zoom in"),
  languageSelectLabel: "Language",
};

export const UI: Record<Lang, UiStrings> = { uz, ru, en };
