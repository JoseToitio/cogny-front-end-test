import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import BuyItem from "./pages/BuyItem";
import ShopCart from "./pages/ShopCart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BuyItem />} />
        <Route path="/ShopCart" element={<ShopCart />} />
      </Routes>
    </>
  );
}

export default App;
