import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './components/CartPage'
import VendorCard from './components/VendorCard'
import MenuList from './components/MenuList'
import './App.css'

function App() {
  const [view, setView] = useState('menu') // 'menu' | 'cart' | 'done'
  const [cart, setCart] = useState([])
  const [lastOrder, setLastOrder] = useState(null)
  
  // 1. Add maxSpice state for the Week 3 personal feature
  const [maxSpice, setMaxSpice] = useState(3)

  const [vendors, setVendors] = useState([])
  const [selectedVendor, setSelectedVendor] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  // Automatically fetch vendors.json and select the first vendor on load
  useEffect(() => {
    setLoading(true)
    fetch('/api/vendors.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch vendors')
        return res.json()
      })
      .then((data) => {
        setVendors(data)
        if (data && data.length > 0) {
          setSelectedVendor(data[0]) // Automatically selects the first vendor
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [reloadKey])

  // Compute cartCount using reduce
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)

  function handleChangeQty(itemId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((line) => {
          if (line.item.id === itemId) {
            const newQty = line.qty + delta
            return newQty > 0 ? { ...line, qty: newQty } : null
          }
          return line
        })
        .filter(Boolean)
    )
  }

  function handleRemove(itemId) {
    setCart((prevCart) => prevCart.filter((line) => line.item.id !== itemId))
  }

  function handleAddToCart(item) {
    setCart((prevCart) => {
      const existing = prevCart.find((line) => line.item.id === item.id)
      if (existing) {
        return prevCart.map((line) =>
          line.item.id === item.id
            ? { ...line, qty: line.qty + 1 }
            : line
        )
      }
      return [...prevCart, { item, qty: 1 }]
    })
  }

  function handlePlaceOrder(details) {
    const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0)
    setLastOrder({ ...details, total })
    setCart([])
    setView('done')
  }

  // 2. Filter menu items by maxSpice level
  const menuItems = selectedVendor?.menu || []
  const filteredMenu = menuItems.filter((item) => {
    const itemSpice = item.spiceLevel || 0
    return itemSpice <= maxSpice
  })

  let content
  if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    )
  } else if (view === 'done') {
    content = (
      <div>
        <p>Order placed.</p>
        {lastOrder && (
          <p>
            Total paid: RM {lastOrder.total.toFixed(2)}
          </p>
        )}
      </div>
    )
  } else if (loading) {
    content = <p>Loading...</p>
  } else if (error) {
    content = (
      <div>
        <p>{error}</p>
        <button onClick={() => setReloadKey((k) => k + 1)}>Retry</button>
      </div>
    )
  } else {
    content = (
      <>
        {/* Vendor Selector List */}
        <div className="vendor-list" style={{ display: 'flex', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {vendors.map((vendor) => (
            <button
              key={vendor.id}
              type="button"
              onClick={() => setSelectedVendor(vendor)}
              style={{
                padding: '8px 12px',
                background: selectedVendor?.id === vendor.id ? '#333' : '#eee',
                color: selectedVendor?.id === vendor.id ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {vendor.name}
            </button>
          ))}
        </div>

        {/* Week 3 Feature: Controlled Max Spice Range Slider */}
        <div className="spice-filter-control" style={{ margin: '1rem 0' }}>
          <label htmlFor="spice-slider" style={{ fontWeight: 'bold' }}>
            Max Spice Level: {maxSpice} 🌶️
          </label>
          <input
            id="spice-slider"
            type="range"
            min="0"
            max="3"
            value={maxSpice}
            onChange={(e) => setMaxSpice(Number(e.target.value))}
            style={{ marginLeft: '10px', verticalAlign: 'middle' }}
          />
        </div>

        {/* Safely render VendorCard only when selectedVendor exists */}
        {selectedVendor && <VendorCard vendor={selectedVendor} />}

        {/* Pass filteredMenu and onAddToCart to MenuList */}
        <MenuList items={filteredMenu} onAddToCart={handleAddToCart} />
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  )
}

export default App