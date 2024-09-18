import React, { createContext, useContext, useState, useEffect } from "react";
import { getProductsFromFirestore, saveCartToFirestore } from "../utils/fireStoreFunctions";

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsList = await getProductsFromFirestore();
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);

      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id? {...item, quantity } : item
      )
    );
  }

  const resetCart = () => {
    setCartItems([]);
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      saveCartToFirestore(cartItems);
    }
  }, [cartItems]);

  return (
    <ProductsContext.Provider
      value={{ products, loading, addToCart, cartItems, resetCart, updateQuantity }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
