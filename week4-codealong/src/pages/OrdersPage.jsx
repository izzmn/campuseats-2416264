// src/pages/VendorPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useVendors } from '../hooks/useVendors';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCart } from '../hooks/useCart';

export default function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error } = useVendors();
  const { addToCart } = useCart();
  
  // Save max-spice setting with useLocalStorage (defaulting to max spice level e.g., 3 or 5)
  const [maxSpice, setMaxSpice] = useLocalStorage('campuseats_max_spice', 3);

  if (loading) return <div>Loading vendor...</div>;
  if (error) return <div>Error: {error}</div>;

  const vendor = vendors.find((v) => String(v.id) === String(id));

  if (!vendor) {
    return <div className="not-found">Vendor not found</div>;
  }

  // Filter items based on the max-spice setting
  const filteredItems = (vendor.items || []).filter(
    (item) => (item.spiceLevel || 0) <= Number(maxSpice)
  );

  return (
    <div className="vendor-page">
      <h1>{vendor.name}</h1>
      <p>{vendor.description}</p>

      {/* Spice Filter Control */}
      <div className="spice-filter" style={{ margin: '20px 0' }}>
        <label htmlFor="maxSpiceRange">
          <strong>Max Spice Level Filter: </strong> {maxSpice}
        </label>
        <input
          id="maxSpiceRange"
          type="range"
          min="0"
          max="5"
          value={maxSpice}
          onChange={(e) => setMaxSpice(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <h2>Menu</h2>
      <div className="menu-list">
        {filteredItems.length === 0 ? (
          <p>No menu items match your spice preference.</p>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} className="menu-item" style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px' }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              
              {/* Spice-level Badge */}
              {item.spiceLevel > 0 && (
                <span className="spice-badge" style={{ background: '#ffdddd', color: '#d9534f', padding: '3px 8px', borderRadius: '4px', fontSize: '0.85em' }}>
                  🌶️ Spice Level: {item.spiceLevel}
                </span>
              )}

              <button 
                onClick={() => addToCart(item)}
                style={{ display: 'block', marginTop: '10px' }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}