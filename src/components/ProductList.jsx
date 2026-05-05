import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]
const filteredProducts =
  category === 'all'
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === category)
{filteredProducts.length === 0 ? (
  <p>No products available</p>
) : (
  filteredProducts.map(...)
)}
const ProductList = () => {
  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))
      )}
    </div>
  )
}

export default ProductList
