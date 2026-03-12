'use client'
import React, { useContext } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import CartComponents from '../components/cartcomponent'

const page = () => {
    const {isclose,setClose} = useContext(NavContext)
  return (
    <div>
       
      <CartComponents />
    </div>
  )
}

export default page
