import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import GroceryItems from "./components/GroceryItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<GroceryItems />} exact></Route>
        <Route path="/cart" element={<CartContainer />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
