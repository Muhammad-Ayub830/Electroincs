'use client'
import React, { useContext, useEffect } from 'react'
import {Inter} from 'next/font/google';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { FaMagnifyingGlass, FaRegUser, FaWhatsapp } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";


import { FiMenu } from "react-icons/fi";
import { NavContext } from './context/context';
import Image from 'next/image';
const fontt = Inter({
    subsets : ['latin']

})
const Header = ({isclose,setClose}) => {
    useEffect(()=>{
        console.log(isclose)
    },[isclose])
  return (
    <div className={`${fontt.className} flex items-center justify-between  py-8  Header px-[5%] bg-[#e9ae0d] lg:bg-white`}>
      <div className="left-logo-and-toggle-icon flex items-center justify-start">
        
            <div className="icon">
                <FaWhatsapp  className='text-2xl hidden'/>
            </div>
       
             <p className='logo text-4xl font-bold tracking-wider text-white lg:text-[#e9ae0d]'><Image src={'/logo3.png'} width={200} height={0} /> </p>
             {/* HAQ <span className='text-gray-950'>Electronics</span> */}
        </div>
        
      
      <div className="right-search-and-buttons flex items-center justify-between ">
            <div className="serchbar px-5 p-2 rounded border-gray-400 xl:w-120 w-75  border mr-10 hidden lg:flex items-center justify-between  ">
                <input type="search" name="searc" id="search" placeholder='Search...' className={`outline-0 cursor-pointer w-full p-1`} />
                
                <HiMiniMagnifyingGlass className='text-2xl' />
            </div>
            <div className="icons  items-center justify-between gap-x-5  hidden lg:flex ">
                <div className="icon">
                    <FaRegUser/>
                </div>
                <div className="icon">
                    <FaCartPlus/>
                </div>
            </div>
            
            <FiMenu onClick={()=>setClose((prev)=>!prev)} className='text-4xl text-white lg:hidden cursor-pointer'/>
        </div>
    </div>
  )
}

export default Header
