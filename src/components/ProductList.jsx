import React from "react";

const ProductList = ({ products = [], addToCart }) => {
  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map(product => (
          <div key={product.id}>
            <span>{product.name}</span>

            {/* ✅ REQUIRED FOR TEST */}
            <button
              data-testid={`product-${product.id}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;