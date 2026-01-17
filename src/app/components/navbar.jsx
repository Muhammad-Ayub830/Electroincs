import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const font = Inter({
    subsets:['latin']
})
const Navbar = ({isclose,setClose}) => {
  return (
    <div className={`${font.className} ${isclose? "open" : "close" } nav-bar  duration-500  p-5 px-[5%] shadow bg-orange-400 text-white  `}>
      <ul className='flex items-center justify-start gap-10 list-none'>
        <li><Link href={`/`}>Top Deals</Link></li>
        <li><Link href={`/`}>Best Sellers</Link></li>
        <li><Link href={`/`}>Home</Link></li>
        <li><Link href={`/`}>Products</Link></li>
        <li><Link href={`/`}>About Us</Link></li>
        <li><Link href={`/`}>Product Categories</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
