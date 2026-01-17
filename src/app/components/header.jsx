import React from 'react'
import {Inter} from 'next/font/google';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";

import { FiMenu } from "react-icons/fi";
const fontt = Inter({
    subsets : ['latin']

})
const Header = () => {
  return (
    <div className={`${fontt.className} flex items-center justify-between  py-8  Header px-[5%]`}>
      <div className="left-logo-and-toggle-icon flex items-center justify-start">
        
            <div className="icon">
                <FiMenu  className='text-2xl hidden'/>
            </div>
       
             <p className='logo text-4xl font-bold tracking-wider text-orange-500'>HAQ <span className='text-gray-950'>Electronics</span> </p>
        </div>
        
      
      <div className="right-search-and-buttons flex items-center justify-between ">
            <div className="serchbar px-5 p-2 rounded border-gray-400 w-120 border mr-10 flex items-center justify-between ">
                <input type="search" name="searc" id="search" placeholder='Search...' className={`outline-0 cursor-pointer w-full p-1`} />
                
                <HiMiniMagnifyingGlass className='text-2xl' />
            </div>
            <div className="icons flex items-center justify-between gap-x-5">
                <div className="icon">
                    <FaRegUser/>
                </div>
                <div className="icon">
                    <FaCartPlus/>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Header
