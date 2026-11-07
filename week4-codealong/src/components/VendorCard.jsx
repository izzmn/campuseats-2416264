import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorCard({ vendor }) {
  if (!vendor) return null;

  const vendorName = vendor.name || 'Unnamed Vendor';
  const initial = vendorName !== 'Unnamed Vendor' ? vendorName.charAt(0) : '?';
  const hours = vendor.openHours || vendor.hours || 'N/A';

  return (
    <Link to={`/vendor/${vendor.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          color: '#1b5e20',
          backgroundColor: '#e8f5e9',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          marginBottom: '1rem'
        }}>
          {initial}
        </div>
        <h3 style={{ color: '#1b5e20', margin: '0 0 0.5rem 0' }}>{vendorName}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.2rem 0' }}>{vendor.location}</p>
        <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.2rem 0' }}>Open: {hours}</p>
        <span style={{ 
          color: vendor.isOpen ? '#2e7d32' : '#c62828', 
          fontSize: '0.85rem', 
          fontWeight: 'bold',
          display: 'inline-block',
          marginTop: '0.5rem'
        }}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </Link>
  );
}