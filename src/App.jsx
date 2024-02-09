// App.js

import React from 'react';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Menu from './Component/Menu';
import Reservation from './Component/Reservation';
import Contact from './Component/Contact';
import Cart from './Component/cart';

const App = () => {
  return (
   <BrowserRouter>
       <Header/>
    <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
