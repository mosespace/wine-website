"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

//1) Creating the context
export const productContext = createContext();

export function Context({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsResponse = await fetch("/api/products");
        const productsData = await productsResponse.json();
        setProducts(productsData);

        const categoriesResponse = await fetch("/api/categories");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.log("An error occurred while fetching data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <productContext.Provider value={{ products, categories }}>
      {children}
    </productContext.Provider>
  );
}

export function useApi() {
  const context = useContext(productContext);
  return context;
}
