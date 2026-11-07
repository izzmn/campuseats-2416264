import React from 'react';
import MenuItemCard from './MenuItemCard';

export default function MenuList({ items = [], menu = [] }) {
  // Use menu if passed, otherwise use items
  const menuItems = menu.length > 0 ? menu : items;

  if (!menuItems || menuItems.length === 0) {
    return <p>No menu items available.</p>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '1rem'
    }}>
      {menuItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}