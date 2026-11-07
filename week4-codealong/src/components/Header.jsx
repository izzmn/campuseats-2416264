import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: '#1b5e20', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          CampusEats
        </Link>
      </h1>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Vendors</Link>
        <Link to="/orders" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>My Orders</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Cart</Link>
      </nav>
    </header>
  );
}