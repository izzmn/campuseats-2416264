import React from 'react';
import { useCart } from '../hooks/useCart';

export default function MenuItemCard({ item }) {
  const { addToCart } = useCart();

  if (!item) return null;

  // Helper to display spice icons or labels
  const getSpiceBadge = (level) => {
    if (level === undefined || level === null || level === 0) return null;
    const peppers = '🌶️'.repeat(level);
    return (
      <span style={{
        fontSize: '0.8rem',
        backgroundColor: '#ffebee',
        color: '#c62828',
        padding: '0.2rem 0.5rem',
        borderRadius: '12px',
        fontWeight: 'bold',
        marginLeft: '0.5rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.2rem'
      }}>
        {peppers} Lvl {level}
      </span>
    );
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1rem',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <h4 style={{ margin: 0, color: '#1b5e20' }}>{item.name}</h4>
          {getSpiceBadge(item.spiceLevel)}
        </div>
        
        {item.description && (
          <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 0.5rem 0' }}>
            {item.description}
          </p>
        )}
        
        <p style={{ fontWeight: 'bold', margin: '0 0 1rem 0', color: '#2e7d32' }}>
          RM {Number(item.price).toFixed(2)}
        </p>
      </div>

      <button 
        onClick={() => addToCart(item)}
        style={{
          backgroundColor: '#1b5e20',
          color: '#ffffff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}