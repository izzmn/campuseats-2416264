import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function OrdersPage() {
  const [orders] = useLocalStorage('campuseats_orders', []);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div style={{ marginTop: '1rem' }}>
          {orders.map((order, idx) => (
            <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <h3>Order #{idx + 1}</h3>
              <p>Items: {order.items?.length || 0}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}