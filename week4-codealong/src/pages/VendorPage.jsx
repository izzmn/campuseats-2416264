import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import vendorsData from '../data/vendors';
import MenuList from '../components/MenuList';

export default function VendorPage() {
  const { vendorId } = useParams();
  const [maxSpice, setMaxSpice] = useState(3); // Default max spice level

  const vendor = vendorsData.find((v) => v.id === vendorId);

  if (!vendor) {
    return (
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Vendor Not Found</h2>
        <Link to="/" style={{ color: '#1b5e20', fontWeight: 'bold' }}>Back to Vendors</Link>
      </main>
    );
  }

  // Filter menu items based on spice level (if spiceLevel is defined)
  const filteredMenu = (vendor.menu || []).filter((item) => {
    const spice = item.spiceLevel !== undefined ? item.spiceLevel : 0;
    return spice <= maxSpice;
  });

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#1b5e20', fontWeight: 'bold', display: 'inline-block', marginBottom: '1rem' }}>
        &larr; Back to Vendors
      </Link>
      <div style={{ backgroundColor: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
<h2 style={{ color: '#1b5e20', margin: '0 0 0.5rem 0' }}>
  {vendor.name} <span style={{ fontSize: '1rem', color: '#555', fontWeight: 'normal' }}>(2416264)</span>
</h2>
        <p style={{ margin: '0.2rem 0', color: '#555' }}>{vendor.location}</p>
        <p style={{ margin: '0.2rem 0', color: '#555' }}>Open: {vendor.openHours}</p>
      </div>

      {/* Max Spice Slider Filter */}
      <div style={{ marginBottom: '1.5rem', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <label htmlFor="spiceRange" style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem', color: '#1b5e20' }}>
          Max Spice Level: {maxSpice}
        </label>
        <input 
          id="spiceRange"
          type="range" 
          min="0" 
          max="3" 
          value={maxSpice} 
          onChange={(e) => setMaxSpice(Number(e.target.value))}
          style={{ width: '100%', accentColor: '#1b5e20' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#666', marginTop: '0.3rem' }}>
          <span>0 (Not Spicy)</span>
          <span>1 (Mild)</span>
          <span>2 (Medium)</span>
          <span>3 (Extra Spicy)</span>
        </div>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Menu ({filteredMenu.length} items)</h3>
      <MenuList menu={filteredMenu} />
    </main>
  );
}