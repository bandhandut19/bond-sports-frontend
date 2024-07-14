export const ProductCategories = {
  CRICKET_KITS: "Cricket Kits",
  FOOTBALL_KITS: "Football Kits",
  SPORTS_SHOE: "Sports Shoe",
} as const;

export type TProductCategories =
  (typeof ProductCategories)[keyof typeof ProductCategories];
