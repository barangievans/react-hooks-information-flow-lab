import React, { useState } from 'react';

function Item({ name, category }) {
  // State to manage if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle inCart state when the button is clicked
  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name} ({category})
      <button onClick={handleAddToCart}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
