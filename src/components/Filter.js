import React from 'react';

function Filter({ onCategoryChange }) {
  // Handle category change event
  const handleChange = (event) => {
    // Call the callback function with the selected category value
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
      {/* Add more categories as needed */}
    </select>
  );
}

export default Filter;
