'use client';

import { createContext, useEffect, useState } from "react";
import { products } from "@/data";

export const NavContext = createContext(null);

const ContextFile = ({ children }) => {
  const [product, setProducts] = useState([]);
  const [isclose, setClose] = useState(false);
  const [category, setCategory] = useState('All');
  const [favorite,setfavorite] = useState({})
  // favorite
const addtoFavorite = (id)=>{
  let obj = {...favorite};
  if(obj[id]){
   delete obj[id] ; 
  }else{
    obj[id] = true
  }
  setfavorite(obj)
  console.log(favorite)
}
// favorite count 
const favoriteCount = ()=>{
  if(Object.keys(favorite).length >9)
  return 9
else
  return Object.keys(favorite).length;
}
// execution...
  useEffect(() => {
   
    favoriteCount()
  }, [favorite]);
useEffect(()=>{
 setProducts(products);
},[])
  return (
    <NavContext.Provider
      value={{ isclose, setClose, product, category, setCategory , addtoFavorite ,favorite,favoriteCount}}
    >
      {children}
    </NavContext.Provider>
  );
};

export default ContextFile;
