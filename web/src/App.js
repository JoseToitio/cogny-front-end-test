import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import BuyItem from "./pages/BuyItem";
import ShopCart from "./pages/ShopCart";
import {ProductsProvider} from "./context/productsContext"

function App() {
  return (
    <ProductsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<BuyItem />} />
        <Route path="/ShopCart" element={<ShopCart />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
