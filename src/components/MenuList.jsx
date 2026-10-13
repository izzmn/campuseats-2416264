import { useState } from 'react'
import MenuItemCard from './MenuItemCard'

function MenuList({ items, onAdd }) {
  const [filterSpice, setFilterSpice] = useState('all')

  const filteredItems = items.filter((item) => {
    if (filterSpice === 'all') return true
    return item.spiceLevel === Number(filterSpice)
  })

  if (!items || items.length === 0) {
    return <p className="empty-message">No items on this menu yet.</p>
  }

  return (
    <div>
      <div className="spice-filter-buttons">
        <button onClick={() => setFilterSpice('all')}>All</button>
        <button onClick={() => setFilterSpice('0')}>Not Spicy</button>
        <button onClick={() => setFilterSpice('1')}>Spicy x1</button>
        <button onClick={() => setFilterSpice('2')}>Spicy x2</button>
        <button onClick={() => setFilterSpice('3')}>Spicy x3</button>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  )
}

export default MenuList