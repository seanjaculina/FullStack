import React from 'react';
import './App.css';

// Component imports
import NavBar from './components/NavBar';
import ShoppingList from './components/ShoppingList';

const App = () => {
  return (
    <div>
      <NavBar />
      <ShoppingList />
    </div>
  );
};

export default App;
