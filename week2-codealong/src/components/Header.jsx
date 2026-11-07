function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">CampusEats</div>
      <nav>
        <span>Vendors</span>
        <span>My Orders</span>
        <span className="cart-badge">Cart ({cartCount})</span>
      </nav>
    </header>
  )
}

export default Header