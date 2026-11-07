import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const { cart = [] } = useCart();
  const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <header style={{
      backgroundColor: '#1b5e20',
      color: '#ffffff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>CampusEats</h1>
      </Link>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <NavLink to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Vendors</NavLink>
        <NavLink to="/orders" style={{ color: '#ffffff', textDecoration: 'none' }}>My Orders</NavLink>
        <NavLink to="/cart" style={{ color: '#ffffff', textDecoration: 'none' }}>
          Cart ({count})
        </NavLink>
      </nav>
    </header>
  );
}