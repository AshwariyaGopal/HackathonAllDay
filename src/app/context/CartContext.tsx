"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../../../types/products";

// ✅ Define CartItem Interface
interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

// ✅ Define CartContext Type
interface CartContextType {
  cart: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    color: string,
    size: string
  ) => void;
  removeFromCart: (productId: string, color: string, size: string) => void;
  updateQuantity: (
    productId: string,
    color: string,
    size: string,
    newQuantity: number
  ) => void;
}

// ✅ Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// ✅ Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Add to Cart Function
  const addToCart = (
    product: Product,
    quantity: number,
    color: string,
    size: string
  ) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item._id === product._id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id &&
          item.selectedColor === color &&
          item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...product, quantity, selectedColor: color, selectedSize: size },
        ];
      }
    });
  };

  // ✅ Remove from Cart Function
  const removeFromCart = (productId: string, color: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (product) =>
          !(
            product._id === productId &&
            product.selectedColor === color &&
            product.selectedSize === size
          )
      )
    );
  };

  // ✅ Update Quantity Function
  const updateQuantity = (
    productId: string,
    color: string,
    size: string,
    newQuantity: number
  ) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product._id === productId &&
        product.selectedColor === color &&
        product.selectedSize === size
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom Hook to Use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
