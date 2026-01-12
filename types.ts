export type Category = "ALL" | "GOODS" | "CLOTHES" | "COSMETICS";

export interface Item {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  imageUrl: string;
  price: number;
  link: string;
  reason: string;
  isGot: boolean;
}