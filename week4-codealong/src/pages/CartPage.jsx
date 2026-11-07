import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function CartPage() {
  const { cart = [], removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Your Cart is Empty</h2>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          Looks like you haven't added any food items yet.
        </p>
        <Link
          to="/"
          style={{
            backgroundColor: '#1b5e20',
            color: '#ffffff',
            padding: '0.6rem 1.2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Browse Vendors
        </Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#1b5e20', marginBottom: '1.5rem' }}>Your Cart</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #e0e0e0',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}
          >
            <div>
              <h4 style={{ margin: '0 0 0.3rem 0' }}>{item.name}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                RM {Number(item.price).toFixed(2)} x {item.quantity || 1}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontWeight: 'bold', color: '#1b5e20' }}>
                RM {(item.price * (item.quantity || 1)).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#c62828',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '2px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3>Total: RM {totalPrice.toFixed(2)}</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={clearCart}
            style={{
              backgroundColor: '#757575',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Clear Cart
          </button>
          <button
            onClick={() => {
              alert('Order placed successfully!');
              clearCart();
            }}
            style={{
              backgroundColor: '#1b5e20',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}