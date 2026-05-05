import React from "react";

const ProductList = ({ products = [] }) => {
  // Prevents crash if products is undefined
  const filteredProducts = products.filter(product => product);

  return (
    <div>
      <h2>Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map(product => (
          <div key={product.id}>
            {product.name}
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;