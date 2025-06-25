import React, { createContext, useContext, useEffect, useState } from "react";

const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <ProductosContext.Provider value={{ productos, loading }}>
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {
  return useContext(ProductosContext);
}