import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartContextType, Product } from "../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEYS = {
  cart: "cartItems",
  favorites: "favoriteItems",
};

function readItems(key: string): Product[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>(() =>
    readItems(STORAGE_KEYS.cart)
  );
  const [favoriteItems, setFavoriteItems] = useState<Product[]>(() =>
    readItems(STORAGE_KEYS.favorites)
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const addToFavorites = (product: Product) => {
    setFavoriteItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const removeFromCart = (productId: string | number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const removeFromFavorites = (productId: string | number) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartCount: cartItems.length,
        favoritesCount: favoriteItems.length,
        cartItems,
        favoriteItems,
        addToCart,
        addToFavorites,
        removeFromCart,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
