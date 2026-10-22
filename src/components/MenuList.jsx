import MenuItemCard from './MenuItemCard'

function MenuList({ items, onAddToCart }) {
  if (!items || items.length === 0) {
    return <p>No items on this menu yet.</p>
  }

  return (
    <div className="menu-list">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default MenuList