import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

// Sample data to pass to ShoppingList
const items = [
  { id: 1, name: 'Yogurt', category: 'Dairy' },
  { id: 2, name: 'Pomegranate', category: 'Produce' },
  { id: 3, name: 'Lettuce', category: 'Produce' },
  { id: 4, name: 'String Cheese', category: 'Dairy' },
  { id: 5, name: 'Cookies', category: 'Dessert' },
];

function App() {
  // State to track if dark mode is enabled or not
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Determine the class name based on dark mode state
  const appClassName = darkMode ? 'dark' : 'light';

  return (
    <div className={appClassName}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
