import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorites from './views/Favorites';
import ContextoProvider from './contex/MyContext';

const App = () => {


  return (
    <ContextoProvider >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </ContextoProvider >
  );
};

export default App;
