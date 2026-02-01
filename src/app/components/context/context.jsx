'use client';

import { createContext, useEffect, useState } from "react";
import { products } from "@/data";

export const NavContext = createContext(null);

const ContextFile = ({ children }) => {
  const [product, setProducts] = useState([]);
  const [isclose, setClose] = useState(false);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <NavContext.Provider
      value={{ isclose, setClose, product, category, setCategory }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default ContextFile;
