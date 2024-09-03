export interface MenuItem {
  description: string;
  items: FoodItem[];
}

export interface FoodItem {
  name: string;
  description: string;
  price: string;
  isSpicy: boolean;
  isReccommend: boolean;
}
