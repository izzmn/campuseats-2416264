import { useState } from 'react'
import vendors from './data/vendors'
import Header from './components/Header'
import VendorCard from './components/VendorCard'
import MenuList from './components/MenuList'

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id)
  const [cart, setCart] = useState([])

  // Derived value: find selected vendor from data array
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)

  // Immutable state update for cart
  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  return (
    <div className="app-container">
      <Header cartCount={cart.length} />

      <main>
        <section className="vendor-section">
          <h2>Choose a vendor</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        {selectedVendor && (
          <section className="menu-section">
            <h2>Menu: {selectedVendor.name}</h2>
            <MenuList 
              items={selectedVendor.menu} 
              onAdd={handleAddToCart} 
            />
          </section>
        )}
      </main>
    </div>
  )
}

export default App