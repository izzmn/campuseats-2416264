function MenuItemCard({ item, onAdd }) {
  return (
    <div className="menu-item-card">
      <div className="item-avatar">{item.name[0]}</div>
      <span className="category-tag">{item.category}</span>
      
      {/* Spice badge display */}
      {item.spiceLevel > 0 && (
        <span className="spice-badge">🌶️ Spicy x{item.spiceLevel}</span>
      )}
      
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button 
        type="button" 
        onClick={() => onAdd(item)}
        disabled={!item.available}
      >
        {item.available ? 'Add to cart' : 'Out of stock'}
      </button>
    </div>
  )
}

export default MenuItemCard