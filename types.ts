export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  sizes: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export type Category = 'Suits' | 'Shirts' | 'Shoes' | 'Accessories';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface CheckoutDetails {
  fullName: string;
  phone: string;
  wilaya: string;
  city: string;
  address: string;
}