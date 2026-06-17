'use client'

import React, { useContext } from 'react'
import { Inter } from 'next/font/google'
import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6"
import { FaCartPlus } from "react-icons/fa6"
import { FiMenu } from "react-icons/fi"
import { NavContext } from './context/context'
import Image from 'next/image'
import Link from 'next/link'

const fontt = Inter({
    subsets: ['latin']
})

const Header = ({ isclose, setClose }) => {
    const { favoriteCount } = useContext(NavContext)

    return (
        <header
            className={`${fontt.className} sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100`}
        >
            <div className="max-w-[1440px] mx-auto px-[5%] py-5 flex items-center justify-between gap-6">

                {/* Logo */}
                <div className="flex items-center shrink-0">
                    <Link href="/">
                        <Image
                            src="/logo3.png"
                            width={220}
                            height={60}
                            alt="Haq Electronics"
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Search */}
                <div className="hidden lg:flex flex-1 justify-center">

                    <div className="w-full max-w-[650px] flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">

                        <input
                            type="search"
                            placeholder="Search products..."
                            className="w-full px-5 py-4 outline-none text-gray-700"
                        />

                        <button
                            className="h-full px-6 bg-[var(--orange-color)] hover:bg-[var(--orange-shade)] transition-colors flex items-center justify-center"
                        >
                            <HiMiniMagnifyingGlass className="text-2xl text-black" />
                        </button>

                    </div>

                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">

                    <Link
                        href="https://www.facebook.com/haq.6363"
                        className="hidden md:flex w-11 h-11 rounded-full bg-gray-100 items-center justify-center hover:bg-[var(--orange-color)] transition-all duration-300 hover:scale-110"
                    >
                        <FaFacebookF className="text-gray-800" />
                    </Link>

                    <Link
                        href="https://api.whatsapp.com/send/?phone=%2B923112111163&text=I+am+interested&type=phone_number&app_absent=0"
                        className="hidden md:flex w-11 h-11 rounded-full bg-gray-100 items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <FaWhatsapp />
                    </Link>

                    {/* Cart */}
                    <Link href="/cart">
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-[var(--orange-color)] transition-all duration-300 hover:scale-110 cursor-pointer">

                            <FaCartPlus className="text-xl" />

                            {favoriteCount() > 0 && (
                                <div className="absolute -top-1 -right-1 min-w-[24px] h-[24px] px-1 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow">
                                    {favoriteCount()}
                                </div>
                            )}

                        </div>
                    </Link>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setClose(prev => !prev)}
                        className="xl:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[var(--orange-color)] hover:bg-[var(--orange-shade)] transition-all duration-300 shadow-md"
                    >
                        <FiMenu className="text-2xl text-black" />
                    </button>

                </div>

            </div>
        </header>
    )
}

export default Header