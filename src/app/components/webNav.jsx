'use client'

import { Outfit } from 'next/font/google'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaCartPlus, FaFacebookF } from 'react-icons/fa6'
import { FiMenu, FiX } from 'react-icons/fi'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import WhatsAppButton from './whatsappbtn'
import Bage from './Bage'
import { NavContext } from './context/context'
import { FaUserAlt } from "react-icons/fa"
import { GoChevronDown } from "react-icons/go"
import {
  CATEGORIES,
  NAV_MEGA_MENU,
  PRODUCT_PAGES,
} from '../productCategories'

const font = Outfit({ weight: ["400"], subsets: ["latin"] })

const expandStyle = (open, maxPx = 500) => ({
  maxHeight: open ? `${maxPx}px` : '0px',
  overflow: 'hidden',
  transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
})

const WebNav = () => {
  const { favoriteCount } = useContext(NavContext)

  const [sidebar, setSidebar] = useState(false)
  const [megaMenu, setMegaMenu] = useState(false)

  const [productCategory, setProductCategory] = useState(false)
  const [lightCategory, setLightCategory] = useState(false)
  const [rodsCategory, setRodsCategory] = useState(false)
  const [sparePartsCategory, setSparePartsCategory] = useState(false)

  const closeSidebar = () => {
    setSidebar(false)
    setProductCategory(false)
    setLightCategory(false)
    setRodsCategory(false)
    setSparePartsCategory(false)
  }

  return (
    <div className={font.className}>
      <WhatsAppButton />

      {/* ── HEADER ── */}
      <div className="lg:bg-white bg-[var(--orange-color)] sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-[4%] py-5 flex items-center justify-between gap-6">
          <Link href="/">
            <img src="/logo3.png" className="w-[150px] md:w-[220px]" alt="Haq Electronics" />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm w-full max-w-[650px]">
              <input type="search" placeholder="Search products..." className="w-full px-5 py-4 outline-none" />
              <button className="bg-[var(--orange-color)] hover:bg-[var(--orange-shade)] px-6 py-4 transition-colors">
                <HiMiniMagnifyingGlass className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/haq.6363" className="hidden md:flex w-11 h-11 rounded-full bg-gray-100 items-center justify-center hover:bg-[var(--orange-color)] transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="/track_order">
              <div className="hidden md:flex w-11 h-11 rounded-full bg-gray-100 items-center justify-center hover:bg-[var(--orange-color)] transition-colors">
                <FaUserAlt />
              </div>
            </Link>
            <Link href="/cart">
              <div className="relative w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--orange-color)] transition-colors">
                <FaCartPlus className="text-xl" />
                {favoriteCount() > 0 && <Bage num={favoriteCount()} />}
              </div>
            </Link>
            <button
              onClick={() => setSidebar(true)}
              className="xl:hidden w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--orange-color)] active:scale-95 transition-all"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden xl:block bg-[var(--orange-color)] py-5 text-white shadow-md">
          <div className="max-w-[1440px] mx-auto px-[4%]">
            <ul className="flex items-center gap-10 h-16 font-medium text-lg">
              <Link href="/">
                <li className="relative cursor-pointer hover:text-black transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  Home
                </li>
              </Link>

              <li
                className="relative h-full flex items-center"
                onMouseEnter={() => setMegaMenu(true)}
                onMouseLeave={() => setMegaMenu(false)}
              >
                <button className="flex items-center gap-2 hover:text-black transition-colors duration-200 h-full">
                  Products
                  <GoChevronDown className={`transition-transform duration-300 ${megaMenu ? 'rotate-180' : ''}`} />
                </button>

    {/* mega dropdown */}

                <div className={`absolute top-full left-0 w-[1100px] transition-all duration-300 ${megaMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <div className="bg-white rounded-3xl shadow-2xl p-8 mt-2 border border-gray-100">
                    <div className="grid grid-cols-4 gap-6">
                      {NAV_MEGA_MENU.map((cat) => (
                        <div key={cat.title} className="group bg-gray-50 rounded-2xl p-5 hover:bg-[var(--orange-color)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                          <h3 className="font-bold text-[var(--orange-shade)] group-hover:text-white mb-3">{cat.title}</h3>
                          {cat.items.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <p className="mb-2 text-gray-700 group-hover:text-white text-sm hover:underline">
                                {item.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <Link href="/about">
                <li className="relative cursor-pointer hover:text-black transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  Why Choose Us
                </li>
              </Link>
              <Link href="/contact">
                <li className="relative cursor-pointer hover:text-black transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BACKDROP ── */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-[99] bg-black transition-opacity duration-300 ${sidebar ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`fixed inset-y-0 left-0 z-[100] w-full transition-transform duration-500 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="bg-[var(--orange-color)] w-full h-full overflow-y-auto">

          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 mb-2">
            <img src="/logo3.png" className="w-28" alt="Haq Electronics" />
            <button
              onClick={closeSidebar}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 active:scale-90 transition-all duration-150"
            >
              <FiX className="text-2xl text-white" />
            </button>
          </div>

          {/* Nav items */}
          <div className="px-4 pb-6 flex flex-col gap-3">

            {/* Home */}
            <Link href="/" onClick={closeSidebar}>
              <div className="bg-white rounded-2xl px-5 py-4 font-medium text-gray-800 hover:bg-orange-50 active:scale-[0.98] transition-all duration-150 cursor-pointer">
                Home
              </div>
            </Link>

            {/* ── Level 1: Product Categories ── */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <button
                onClick={() => {
                  setProductCategory(p => !p)
                  if (productCategory) {
                    setLightCategory(false)
                    setRodsCategory(false)
                    setSparePartsCategory(false)
                  }
                }}
                className="w-full flex items-center justify-between px-5 py-4 font-medium text-gray-800 hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150"
              >
                <span className={productCategory ? 'text-[var(--orange-color)]' : ''}>Product Categories</span>
                <GoChevronDown className={`transition-transform duration-300 ${productCategory ? 'rotate-180 text-[var(--orange-color)]' : 'text-gray-400'}`} />
              </button>

              {/* ── Level 2 container ── */}
              <div style={expandStyle(productCategory, 800)}>
                <div className="bg-orange-50 border-t border-orange-100 px-3 py-2 flex flex-col gap-1">

                  {/* 2a: Haq LED Lights — expandable */}
                  <div className="bg-white rounded-xl overflow-hidden">
                    <button
                      onClick={() => setLightCategory(p => !p)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--orange-color)] hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150"
                    >
                      <span>Haq LED Lights</span>
                      <GoChevronDown className={`transition-transform duration-300 ${lightCategory ? 'rotate-180' : 'text-gray-400'}`} />
                    </button>

                    {/* Level 3: LED links */}
                    <div style={expandStyle(lightCategory, 220)}>
                      <div className="bg-orange-50 border-t border-orange-100 px-3 py-2 flex flex-col gap-1">
                        {PRODUCT_PAGES.filter((p) => p.category === CATEGORIES.LED_LIGHT).map((item) => (
  <Link key={item.href} href={item.href} onClick={closeSidebar}>
    <div className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-[var(--orange-color)] active:scale-[0.98] transition-all duration-150 cursor-pointer">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-color)] opacity-50 flex-shrink-0" />
      {item.title}
    </div>
  </Link>
))}
                      </div>
                    </div>
                  </div>

                  {/* 2b: Direct links */}
                  {PRODUCT_PAGES.filter((p) =>
                    [CATEGORIES.CABLE, CATEGORIES.IRON, CATEGORIES.INVERTER].includes(p.category)
                  ).map(({ title, href }) => (
                    <Link key={href} href={href} onClick={closeSidebar}>
                      <div className="bg-white rounded-xl px-4 py-3 text-sm font-semibold text-[var(--orange-color)] hover:bg-orange-100 active:scale-[0.98] transition-all duration-150 cursor-pointer">
                        {title}
                      </div>
                    </Link>
                  ))}

                  {/* 2c: Haq Rods — expandable */}
                  <div className="bg-white rounded-xl overflow-hidden">
                    <button
                      onClick={() => setRodsCategory(p => !p)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--orange-color)] hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150"
                    >
                      <span>Haq Rods</span>
                      <GoChevronDown className={`transition-transform duration-300 ${rodsCategory ? 'rotate-180' : 'text-gray-400'}`} />
                    </button>
                    <div style={expandStyle(rodsCategory, 130)}>
                      <div className="bg-orange-50 border-t border-orange-100 px-3 py-2 flex flex-col gap-1">
                        {PRODUCT_PAGES.filter((p) => p.category === CATEGORIES.ROD).map((item) => (
  <Link key={item.href} href={item.href} onClick={closeSidebar}>
    <div className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-[var(--orange-color)] active:scale-[0.98] transition-all duration-150 cursor-pointer">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-color)] opacity-50 flex-shrink-0" />
      {item.title}
    </div>
  </Link>
))}
                      </div>
                    </div>
                  </div>

                  {/* 2d: Haq LED Lights Spare Parts — expandable */}
                  <div className="bg-white rounded-xl overflow-hidden">
                    <button
                      onClick={() => setSparePartsCategory(p => !p)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--orange-color)] hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150"
                    >
                      <span>Haq LED Lights Spare Parts</span>
                      <GoChevronDown className={`transition-transform duration-300 ${sparePartsCategory ? 'rotate-180' : 'text-gray-400'}`} />
                    </button>
                    <div style={expandStyle(sparePartsCategory, 160)}>
                      <div className="bg-orange-50 border-t border-orange-100 px-3 py-2 flex flex-col gap-1">
                        {PRODUCT_PAGES.filter((p) => p.category === CATEGORIES.LED_LIGHT_SPARE_PART).map((item) => (
  <Link key={item.href} href={item.href} onClick={closeSidebar}>
    <div className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-100 hover:text-[var(--orange-color)] active:scale-[0.98] transition-all duration-150 cursor-pointer">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange-color)] opacity-50 flex-shrink-0" />
      {item.title}
    </div>
  </Link>
))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <Link href="/about" onClick={closeSidebar}>
              <div className="bg-white rounded-2xl px-5 py-4 font-medium text-gray-800 hover:bg-orange-50 active:scale-[0.98] transition-all duration-150 cursor-pointer">
                Why Choose Us
              </div>
            </Link>

            {/* Contact Us */}
            <Link href="/contact" onClick={closeSidebar}>
              <div className="bg-white rounded-2xl px-5 py-4 font-medium text-gray-800 hover:bg-orange-50 active:scale-[0.98] transition-all duration-150 cursor-pointer">
                Contact Us
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WebNav