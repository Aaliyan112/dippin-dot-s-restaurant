export type CategoryId = 
  | 'all'
  | 'burgers'
  | 'fries'
  | 'deals'
  | 'momos'
  | 'pizzas'
  | 'bbq_karahi'
  | 'rolls_broast'
  | 'dippin_dots'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: CategoryId;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  isFeaturedHome?: boolean; // For the 8 home cards
  isDeal?: boolean;
  isSpicy?: boolean;
  isBestseller?: boolean;
  serving?: string;
  persons?: string;
  includes?: string[];
  options?: {
    spiciness?: string[];
    addCheese?: boolean;
    drinks?: string[];
  };
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions?: {
    spiciness?: string;
    extraCheese?: boolean;
    drink?: string;
    specialInstructions?: string;
  };
  totalPrice: number;
}

export interface DealItem extends MenuItem {
  isDeal: true;
  savings?: number;
  persons?: string;
  includedItems: string[];
}
