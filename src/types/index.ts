import React from "react";

export interface HeroItem {
  button_url: string;
  image: string;
}

export type HeroData = HeroItem[];

export interface HeroProps {
  data: HeroData;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string | React.ReactElement;
  image?: string;
  image_redirect_url?: string | null;
}

export type ServiceFeatureData = ServiceFeature[];
export interface ServicesProps {
  data: ServiceFeatureData;
}

export interface Product {
  id: number;
  product_code: number;
  name: string;
  slug: string;
  price: number;
  discount: string;
  discounted_price: number;
  perMonth: {
    month: number;
    price: number;
  };
  quantity: number;
  reviewCount: number;
  rate: number;
  image: string;
  campaign_widgets: unknown[];
  gift_widgets: unknown[];
  is_online: boolean;
  is_basket: boolean;
  is_favorite: boolean;
  is_compare: boolean;
}

export interface ProductCategory {
  title: string;
  products: Product[];
}

export type ProductsData = ProductCategory[];
export interface ProductsProps {
  products: Product[];
}

export interface OfferedProductsProps {
  data: ProductCategory[];
}

export interface CategoryNavigationProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export interface CartContextType {
  cartCount: number;
  favoritesCount: number;
  cartItems: Product[];
  favoriteItems: Product[];
  addToCart: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  removeFromFavorites: (productId: string | number) => void;
  updateCartItemQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
}

export interface CustomToastProps {
  show: boolean;
  onClose: () => void;
  product: { image: string; name: string } | null;
  message?: string;
  linkText?: string;
  linkHref?: string;
}


export interface HomeProps {
  heroData: HeroData;
  serviceFeatures: ServiceFeatureData;
  products: ProductsData;
}

export interface TopToolBarProps {
  isFixed?: boolean;
}