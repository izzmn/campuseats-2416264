import React from 'react';
import { CartContext } from './cart-context';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('campuseats_cart', []);
  const [orders, setOrders] = useLocalStorage('campuseats_orders', []);

  // Compute total item count and dollar total
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const changeQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const placeOrder = (details) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      details,
      date: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]); // Clear cart after placing order
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        count,
        total,
        addToCart,
        changeQty,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
