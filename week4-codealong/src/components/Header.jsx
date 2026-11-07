// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const { count } = useCart();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart ({count})</NavLink>
        <NavLink to="/orders">Orders</NavLink>
      </nav>
    </header>
  );
}
