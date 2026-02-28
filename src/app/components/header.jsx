'use client'
import React, { useContext, useEffect } from 'react'
import { Inter } from 'next/font/google';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

import { FaFacebook, FaFacebookF, FaMagnifyingGlass, FaRegUser, FaSquareWhatsapp, FaUser, FaWhatsapp } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";


import { FiMenu } from "react-icons/fi";
import { NavContext } from './context/context';
import Image from 'next/image';
import { FaWhatsappSquare } from 'react-icons/fa';
import { RiWhatsappFill, RiWhatsappLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import Link from 'next/link';
const fontt = Inter({
    subsets: ['latin']

})
const Header = ({ isclose, setClose }) => {
    const { favoriteCount } = useContext(NavContext)

    return (
        <div className={`${fontt.className} flex items-center justify-between  py-8  Header px-[5%] bg-(--orange-color) lg:bg-white`}>
            <div className="left-logo-and-toggle-icon flex items-center justify-start">



                <p className='logo text-4xl font-bold tracking-wider w-[130px] md:w-[200px]   text-white lg:text-(--orange-color)'>
                    <Link href={'/'} ><Image src={'/logo3.png'} width={200} height={0} /></Link>
                </p>
                {/* HAQ <span className='text-gray-950'>Electronics</span> */}
            </div>


            <div className="right-search-and-buttons flex items-center justify-between ">
                <div className="serchbar px-5 p-2 rounded border-gray-400 xl:w-120 w-75  border mr-10 hidden lg:flex items-center justify-between  ">
                    <input type="search" name="searc" id="search" placeholder='Search...' className={`outline-0 cursor-pointer w-full p-1`} />

                    <HiMiniMagnifyingGlass className='text-2xl' />
                </div>
                <div className="flex items-center justify-between gap-4 mr-10 lg:mr-0">
                    <Link href={'https://www.facebook.com/haq.6363'}>
                        <FaFacebookF className='text-gray-950 size-5 '   />

                    </Link>
                    <Link href={'https://api.whatsapp.com/send/?phone=%2B923112111163&text=I+am+interested&type=phone_number&app_absent=0'}>
                        <FaWhatsapp className='text-green-500 size-5'  />

                    </Link>
                    <div className="cart relative cursor-pointer ">
                    <Link href={'/cart'} ><FaCartPlus className='size-5' /></Link>   
                        {
                            favoriteCount() > 0 ? <div className="count rounded-full text-black font-bold absolute  -top-3 left-3 bg-orange-400 w-6 h-6 text-center leading-6 text-sm ">
                                {
                                    favoriteCount()
                                }+

                            </div> : ''
                        }

                    </div>

                </div>

                <FiMenu onClick={() => setClose((prev) => !prev)} className='text-4xl lg:ml-8 text-black xl:hidden cursor-pointer' />
            </div>
        </div>
    )
}

export default Header
