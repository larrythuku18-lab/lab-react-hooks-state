import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, category, onAddToCart }) => {
  // 1. Filter the products inside the component
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category);

  // 2. Return the JSX inside the component
  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))
      )}
    </div>
  );
};

export default ProductList;