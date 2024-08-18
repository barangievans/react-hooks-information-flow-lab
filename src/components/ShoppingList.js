import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
  // State to manage the selected category
  const [category, setCategory] = useState('all');

  // Handle category change from Filter
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Filter items based on the selected category
  const filteredItems = items.filter(item =>
    category === 'all' || item.category === category
  );

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
