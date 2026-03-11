'use client'
import React, { useContext } from 'react'
import { NavContext } from './context/context'
import Footer from './footer'
import { usePathname } from 'next/navigation'

const Clientlayout = () => {
    const path = usePathname()
    console.log(path)
  if(path !== '/admin' && path !== '/admin/all-products' && path !== '/admin/login' && path !== '/admin/orders' ){
    
    return <Footer />
  }
}

export default Clientlayout
