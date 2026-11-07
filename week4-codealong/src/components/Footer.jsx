import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem 0',
      color: '#666',
      fontSize: '0.9rem',
      width: '100%'
    }}>
      <p style={{ margin: 0 }}>&copy; 2026 CampusEats</p>
    </footer>
  );
}