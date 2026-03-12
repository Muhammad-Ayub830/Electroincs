'use client'
import { Outfit } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCartPlus, FaFacebook, FaFacebookF, FaWhatsapp } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import WhatsAppButton from './whatsappbtn'
const font = Outfit({
  weight: ["400"],
  subsets: ["latin"]
})
const WebNav = () => {
  const [productCategory, setProductCategory] = useState(false)
  const [lightCategory, setLightCategory] = useState(false)
  const [rodsCategory, setrodsCategory] = useState(false)
  const [sparepartscategory, setsparepartscategory] = useState(false)
  const [sidebar, setsidebar] = useState(false)
  return (
    <div>
      <WhatsAppButton />
      <div className={` ${font.className} bg-(--orange-color) md:bg-white md:pt-10 pt-7 pb-7 md:pb-0 `}>
        {/* header */}
        <div className="header mx-[3%]  flex items-center justify-between ">
          <img src="/logo3.png" className='md:w-[200px] w-[170px]' alt="" />
          <div className="right-search-and-buttons flex items-center justify-between ">
            <div className="serchbar px-5 p-2 rounded border-gray-400 xl:w-120 w-75  border mr-10 hidden lg:flex items-center justify-between  ">
              <input type="search" name="searc" id="search" placeholder='Search...' className={`outline-0 cursor-pointer w-full p-1`} />

              <HiMiniMagnifyingGlass className='text-2xl' />
            </div>
            <div className="flex items-center justify-between gap-4 mr-10 lg:mr-0">
              <Link href={'https://www.facebook.com/haq.6363'}>
                <FaFacebookF className='text-gray-950 size-6 ' />

              </Link>
              <Link href={'/cart'} ><FaCartPlus className='size-6' /></Link>
              {/* <Link href={'https://api.whatsapp.com/send/?phone=%2B923112111163&text=I+am+interested&type=phone_number&app_absent=0'}>
                <FaWhatsapp className='text-green-500 size-6' />

              </Link> */}
              {/* <div className="cart relative cursor-pointer ">
                <Link href={'/cart'} ><FaCartPlus className='size-6' /></Link>
                {/* {
                            favoriteCount() > 0 ? <div className="count rounded-full text-black font-bold absolute  -top-3 left-3 bg-orange-400 w-6 h-6 text-center leading-6 text-sm ">
                                {
                                    favoriteCount()
                                }+

                            </div> : ''
                        } */}

              {/* </div>  */}

            </div>

            <FiMenu onClick={() => setsidebar((prev) => !prev)} className='text-5xl lg:ml-8 text-black xl:hidden cursor-pointer' />

          </div>
        </div>
        {/* horizontal navbar */}
        <ul className='w-full px-[3%] text-[20px] hidden   mt-10 md:flex items-center gap-10 p-10 bg-(--orange-color) text-white'>
          <Link href={'/'} className='' ><li>Home</li></Link>
          <li className='relative cursor-pointer'> <span onClick={() => setProductCategory(a => !a)}>Product Categories ▾</span>
            <ul className={`${productCategory ? 'block' : 'hidden'} absolute rounded ul top-15 text-[18px] z-10 left-0`}>
              <li onClick={() => setLightCategory(a => !a)} className='relative cursor-pointer'>Haq LED Lights <span className='rotate-45'>▾</span>
                <ul className={`${lightCategory ? 'block' : 'hidden'} absolute rounded ul top-2 text-[18px] z-10 left-68`}>
                  <Link href={'/HaqLedLights'} className='' onClick={() => setProductCategory(false)}><li>Haq LED Bulbs</li></Link>
                  <Link href={'/HaqLedLights'} className='' onClick={() => setProductCategory(false)} ><li>Haq  Downlights</li></Link>
                  <Link href={'/HaqLedLights'} className='' onClick={() => setProductCategory(false)} ><li>Haq Panel Lights</li></Link>
                  <Link href={'/HaqLedLights'} className='' onClick={() => setProductCategory(false)} ><li>Haq Cob SpotLights</li></Link>
                </ul>
              </li>
              <Link href={'/HaqCables'} className=''  onClick={() => setProductCategory(false)}><li>Haq  Cables</li></Link>
              <Link href={'/Haq Irons'} className=''  onClick={() => setProductCategory(false)}><li>Haq Irons</li></Link>
              <Link href={'/HaqSolarInverters'} className='' onClick={() => setProductCategory(false)} ><li>Haq Solar Inverters</li></Link>
              <li onClick={() => setrodsCategory(a => !a)} className='relative cursor-pointer'>Haq Rods <span className='rotate-45'>▾</span>
                <ul className={`${rodsCategory ? 'block' : 'hidden'} absolute rounded ul top-2 text-[18px] z-10 left-68`}>
                  <Link href={'/HaqRods'} onClick={() => setProductCategory(false)}> <li>Haq Original Italy Rods</li>  </Link>
                  <Link href={'/HaqRods'} onClick={() => setProductCategory(false)}> <li>Haq Original Thermostate</li>  </Link>
                </ul>
              </li>
              <li onClick={() => setsparepartscategory(a => !a)} className='relative cursor-pointer'>Haq LED Lights Spare Parts <span className='rotate-45'>▾</span>
                <ul className={`${sparepartscategory ? 'block' : 'hidden'} absolute rounded ul top-2 text-[18px] z-10 left-68`}>
                  <Link href={'/HaqLedLightsSpareParts'} onClick={() => setProductCategory(false)}> <li>Ac LED Light Spare Parts</li>  </Link>
                  <Link href={'/HaqLedLightsSpareParts'} onClick={() => setProductCategory(false)}> <li>Dc LED Light Spare Parts</li>  </Link>
                  <Link href={'/HaqLedLightsSpareParts'} onClick={() => setProductCategory(false)}> <li>LED Light Spare Parts </li>  </Link>
                </ul>


              </li>

            </ul>
          </li>
          <Link href={'/about'} className='' ><li>Why Choose Us</li></Link>
          <Link href={'/contact'} className='' ><li>Contact Us</li></Link>
          {/* <Link href={'/'} className='' ><li>Home</li></Link> */}
        </ul>
        {/* vertical navbar  */}
        <div className={`${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 absolute top-0 left-0 h-full w-full shadow-md z-50 bg-(--orange-color)`}>
          <img src="logo3.png" className='w-30 ml-3 mt-3' alt="" />
          <ul className='w-full vertical-ul p-3  bg-(--orange-color) text-white'>
            <Link href={'/'} className='' onClick={() => setsidebar(false)}  ><li>Home</li></Link>
            <li className={`${productCategory ? 'remove-b-b ' : ''} `} > <span onClick={() => setProductCategory(a => !a) } className={`${productCategory ? 'text-[#9e880d] ' : ''} cursor-pointer     `}>Product Categories ▾</span>
              <ul className={`${productCategory ? 'block ' : 'hidden'}      `}>
                <li  className={`${lightCategory ? 'remove-b-b' : ''} `}  > <span  onClick={() => setLightCategory(a => !a)} className={`${lightCategory ? 'text-[#9e880d]' : ''} cursor-pointer     `}>Haq LED Lights▾</span>
                  <ul className={`${lightCategory ? 'block' : 'hidden'}       `}>
                    <Link href={'/HaqLedLights'} className='' onClick={() => setsidebar(false)} ><li className=''>Haq LED Bulbs</li></Link>
                    <Link href={'/HaqLedLights'} className=''  onClick={() => setsidebar(false)} ><li>Haq  Downlights</li></Link>
                    <Link href={'/HaqLedLights'} className='' onClick={() => setsidebar(false)}  ><li>Haq Panel Lights</li></Link>
                    <Link href={'/HaqLedLights'} className=''  onClick={() => setsidebar(false)} ><li>Haq Cob SpotLights</li></Link>
                  </ul>
                </li>
                <Link href={'/HaqCables'} className='' onClick={() => setsidebar(false)}  ><li>Haq  Cables</li></Link>
                <Link href={'/HaqIrons'} className=''  onClick={() => setsidebar(false)} ><li>Haq Irons</li></Link>
                <Link href={'/HaqSolarInverters'} className='' onClick={() => setsidebar(false)}  ><li>Haq Solar Inverters</li></Link>
                <li className={`${rodsCategory ? 'remove-b-b' : ''} relative cursor-pointer `} onClick={() => setrodsCategory(a => !a)} > <span className={`${rodsCategory ? 'text-[#9e880d]' : ''} cursor-pointer `}>Haq Rods▾</span>
                  <ul className={`${rodsCategory ? 'block' : 'hidden'}  `}>
                    <Link href={'/'} onClick={() => setsidebar(false)} > <li>Haq Original Italy Rods</li>  </Link>
                    <Link href={'/'}> onClick={() => setsidebar(false)}  <li>Haq Original Thermostate</li>  </Link>
                  </ul>
                </li>
                <li className={`${sparepartscategory ? 'remove-b-b' : ''} relative cursor-pointer `} onClick={() => setsparepartscategory(a => !a)}><span className={`${sparepartscategory ? 'text-[#9e880d]' : ''} cursor-pointer `}>Haq LED Lights Spare Parts ▾</span>
                  <ul className={`${sparepartscategory ? 'block' : 'hidden'}  `}>
                    <Link href={'/HaqLedLightsSpareParts'} onClick={() => setsidebar(false)} > <li>Ac LED Light Spare Parts</li>  </Link>
                    <Link href={'/HaqLedLightsSpareParts'} onClick={() => setsidebar(false)} > <li>Dc LED Light Spare Parts</li>  </Link>
                    <Link href={'/HaqLedLightsSpareParts'} onClick={() => setsidebar(false)} > <li>LED Light Spare Parts </li>  </Link>
                  </ul>


                </li>

              </ul>
            </li>
            <Link href={'/about'} className='' ><li>Why Choose Us</li></Link>
            <Link href={'/contact'} className='' ><li className={`${sparepartscategory ? 'remove-b-b' : ''}`}>Contact Us</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WebNav
