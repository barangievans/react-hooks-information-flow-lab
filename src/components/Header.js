import React from 'react';

// The Header component accepts a prop called `onDarkModeClick` which is a callback function
function Header({ onDarkModeClick }) {
  return (
    <header>
      <h1>Shopping List</h1>
      {/* The button triggers the `onDarkModeClick` callback when clicked */}
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}

export default Header;
