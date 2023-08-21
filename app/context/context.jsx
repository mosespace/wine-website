"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

//1) Creating the context
export const productContext = createContext();

export function Context({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch("/api/products");
        const productsData = await productsResponse.json();
        setProducts(productsData);
        // setLoading(true);

        const categoriesResponse = await fetch("/api/categories");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.log("An error occurred while fetching data", error);
        // setLoading(false);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    }

    fetchData();
  }, []);

  // Initialize cart items from local storage on first load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  // Update local storage whenever cart items change
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cart));
  // }, [cart]);

  // const retreviedData = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(retreviedData);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

    if (!setCart) {
      return alert("There is nothing in the cart");
    }
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  return (
    <productContext.Provider
      value={{ products, loading, categories, cart, removeFromCart, addToCart }}
    >
      {children}
    </productContext.Provider>
  );
}

export function useApi() {
  const context = useContext(productContext);
  return context;
}
