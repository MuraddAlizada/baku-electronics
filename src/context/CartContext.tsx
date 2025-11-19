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
  // Initialize with empty arrays to avoid hydration mismatch
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage only after mount (client-side only)
  useEffect(() => {
    setMounted(true);
    // Cart starts empty on first visit
    // Only load favorites from localStorage
    setFavoriteItems(readItems(STORAGE_KEYS.favorites));
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favoriteItems));
    }
  }, [favoriteItems, mounted]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      // Add new item with quantity 1 (always start with 1 for new items)
      return [...prevItems, { ...product, quantity: 1 }];
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

  const updateCartItemQuantity = (productId: string | number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total cart count (sum of all quantities)
  const cartCount = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartCount,
        favoritesCount: favoriteItems.length,
        cartItems,
        favoriteItems,
        addToCart,
        addToFavorites,
        removeFromCart,
        removeFromFavorites,
        updateCartItemQuantity,
        clearCart,
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
