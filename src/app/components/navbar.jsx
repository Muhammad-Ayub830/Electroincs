import { Inter } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'
const font = Inter({
    subsets:['latin']
})
const Navbar = ({isclose,setClose}) => {
  const [isdrop,setdrop] = useState(false)



  return (
    <div className={`${font.className} ${isclose? "open" : "close" } nav-bar  duration-500  p-5 px-[5%] shadow bg-orange-400 text-white  `}>
      <ul className='flex ul1 items-center justify-start gap-10 list-none'>
        <li><Link href={`/`}  className=' hover:text-black duration-200 ' onClick={()=>setClose(false)}>Home </Link></li>
        <li  className='relative'> <button onClick={()=>setdrop((prev)=>!prev)} className='hover:text-black duration-200  flex items-center gap-3 '>Product Categories<IoIosArrowDown/></button>
            <ul       className={`${isdrop ? "block" : "hidden" } absolute top-5  left-0 p-3 bg-orange-400 w-50 rounded-sm`}>
              <li className='py-3 flex items-center justify-between w-full px-2 hover:text-black duration-200 hover:text-lg'><Link href={`/`} onClick={()=>setClose(false)}>Haq LED Lights</Link> <IoIosArrowForward className='font-bold' /> </li>
              <li className='py-3 flex items-center justify-between w-full px-2 hover:text-black duration-200 hover:text-lg'><Link href={`/`} onClick={()=>setClose(false)}>Haq LED Lights Spare Parts</Link> <IoIosArrowForward className='font-bold' /> </li>
              <li className='py-3  flex items-center justify-between w-full px-2 hover:text-black duration-200 hover:text-lg '><Link href={`/`} onClick={()=>setClose(false)}>Haq Cables</Link> <IoIosArrowForward className='font-bold' /> </li>
              <li className='py-3  flex items-center justify-between w-full px-2 hover:text-black duration-200 hover:text-lg '><Link href={`/`} onClick={()=>setClose(false)}>Haq Irons</Link> <IoIosArrowForward className='font-bold' /> </li>
              <li className='py-3  flex items-center justify-between w-full px-2 hover:text-black hover:text-lg duration-200 '><Link href={`/`} onClick={()=>setClose(false)}>Haq Solar Inverters</Link> <IoIosArrowForward className='font-bold' /> </li>
            </ul>
        </li>
        <li className=' hover:text-black duration-200 '><Link href={`/`} onClick={()=>setClose(false)}>Why Choose Us</Link></li>
        <li className=' hover:text-black duration-200 '><Link href={`/`} onClick={()=>setClose(false)}>About Us</Link></li>
        <li className=' hover:text-black duration-200 ' ><Link href={`/`} onClick={()=>setClose(false)}>Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
