import React from 'react';
import { Vegetables } from './Component/Vegetables';
import { Wishlist } from './Component/Wishlist';
import './App.css';

function App() {
  return (
    <div  className='App'>
    <Wishlist/>
    <Vegetables/>
    </div>
  );
}

export default App;
