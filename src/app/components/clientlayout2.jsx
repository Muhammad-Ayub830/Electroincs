'use client'
import React, { useContext } from 'react'
import { NavContext } from './context/context'
import Footer from './footer'
import { usePathname } from 'next/navigation'
import WebNav from './webNav'


const Clientlayout2 = () => {
    const path = usePathname()
    // console.log(path)
  if(path !== '/admin' && path !== '/admin/all-products' && path !== '/admin/login' && path !== '/admin/orders' ){
    
    return <WebNav />
  }
}

export default Clientlayout2
