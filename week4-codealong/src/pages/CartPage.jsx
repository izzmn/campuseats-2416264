// src/pages/CartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function CartPage() {
  const { cart, total, changeQty, removeFromCart, placeOrder } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    placeOrder({ note: 'Standard Delivery' });
    navigate('/orders');
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Your Cart is Empty</h2>
        <p>Add some items from the vendor pages to get started!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Shopping Cart</h2>
      <div style={{ marginTop: '1rem' }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #ddd',
              padding: '10px 0',
            }}
          >
            <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => changeQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => changeQty(item.id, item.qty + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ color: 'red' }}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Total: ${total.toFixed(2)}
      </div>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: '1rem',
          padding: '10px 20px',
          background: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Place Order
      </button>
    </div>
  );
}