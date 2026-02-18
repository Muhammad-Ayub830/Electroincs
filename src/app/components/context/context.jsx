'use client';

import { createContext, useEffect, useState } from "react";
import { products } from "@/data";

export const NavContext = createContext(null);

const ContextFile = ({ children }) => {
  const [product, setProducts] = useState([]);
  const [isclose, setClose] = useState(false);
  const [category, setCategory] = useState('All');
  const [favorite,setfavorite] = useState({})
  const [shippingfee,setShippingFee] = useState(0)
  const [cart,setCart] = useState(()=> typeof window != "undefined" ?
     localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : {} : {})
  // add to cart 
  const addtoCart = (id,quantity)=>{
    let cartdata  = structuredClone(cart);
    if(cartdata[id]){
      
        cartdata[id].quantity = quantity; 
     
    }else{
      cartdata[id] = {}
      cartdata[id].quantity = quantity;
    }
    
    setCart(cartdata)
    console.log(cartdata)
  }
  // deleteCartItem
  const deleteCartItem = (id)=>{
    const found = product.find(a =>a.id == id)
      if(found){
        const dummycart = structuredClone(cart)
          for (const item in dummycart) {
            if(found.id == item)    
            delete dummycart[item]
          }
          setCart(dummycart)
      }
  }
  // carttotal 
    const cartTotal = ()=>{
      let carttotalprice = 0;
      console.log(cart)
        for (const a in cart) {
          let element = product.find(z=>z.id == a)
         for (const b in cart[a]) {
                 carttotalprice += element.price * cart[a][b];
         } 
          
        }
        return carttotalprice;
    }
// favorite count 
const favoriteCount = ()=>{
  if(Object.keys(cart).length >9)
  return 9
else
  return Object.keys(cart).length;
}
// execution...
  useEffect(() => {
   
    favoriteCount()
  }, [favorite]);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
useEffect(()=>{
 setProducts(products);
},[])
  return (
    <NavContext.Provider
      value={{ isclose, setClose, product, category, setCategory  ,favoriteCount,
        addtoCart, cart,cartTotal ,shippingfee,deleteCartItem
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default ContextFile;
