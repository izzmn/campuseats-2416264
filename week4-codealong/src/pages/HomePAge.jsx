import React from 'react';
import VendorCard from '../components/VendorCard';
import vendorsData from '../data/vendors';

export default function HomePage() {
  const vendors = Array.isArray(vendorsData) ? vendorsData : [];

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Choose a vendor
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem'
      }}>
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </main>
  );
}