import React from 'react';
import { CartContext } from './cart-context';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function CartProvider({ children }) {
  // Use localStorage so the cart persists across page refreshes ('campus-eats-cart' is the storage key)
  const [cart, setCart] = useLocalStorage('campus-eats-cart', []);

  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // If it exists, increase quantity
        const updated = [...prevCart];
        updated[existingItemIndex] = {
          ...updated[existingItemIndex],
          quantity: (updated[existingItemIndex].quantity || 1) + 1
        };
        return updated;
      }
      // Otherwise add new item with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}