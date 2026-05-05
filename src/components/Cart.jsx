import React from 'react';

const Cart = ({ cartItems }) => {
  // Calculate total price using the reduce method
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-section" style={{ marginTop: '20px', borderTop: '2px solid #ccc' }}>
      <h2>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              // Using index as part of key if IDs aren't unique across multiple adds
              <li key={`${item.id}-${index}`}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;