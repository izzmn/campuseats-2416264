function MenuItemCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <div className="item-avatar">{item.name[0]}</div>
      <span className="category-tag">{item.category}</span>
      
      {item.spiceLevel > 0 && (
        <span className="spice-badge">🌶️ Spicy x{item.spiceLevel}</span>
      )}
      
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">RM {item.price.toFixed(2)}</p>
      <button 
        type="button" 
        onClick={() => onAddToCart(item)}
        disabled={item.available === false}
      >
        {item.available === false ? 'Out of stock' : 'Add to cart'}
      </button>
    </div>
  )
}

export default MenuItemCard