'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
const ProductStage = () => {
    const {isclose,setClose} = useContext(NavContext)
  return (
    <div>
   <Header isclose={isclose} setClose={setClose}/>
      <Navbar isclose={isclose} setClose={setClose}/>
    </div>
  )
}

export default ProductStage
