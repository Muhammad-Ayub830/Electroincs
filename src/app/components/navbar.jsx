import { Inter } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GoChevronDown, GoChevronRight, GoChevronUp } from "react-icons/go";

import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'
const font = Inter({
  subsets: ['latin']
})
const Navbar = ({ isclose, setClose }) => {
  const [f_drop, set_f_drop] = useState(false)
  const [s_drop, set_s_drop] = useState(false)
  const [t_drop, set_t_drop] = useState(false)
  const [main_drop, set_main_drop] = useState(false)

  return (
    <div className={`${font.className} ${isclose ? "open" : "close"} nav-bar z-10  duration-500  p-5 px-[5%] shadow bg-(--orange-color) text-white  `}>
      <ul className='main-ul h-fit'>
        <Link href={'/'} className='px-[10px]' onClick={()=>setClose(false)}> <li >Home</li> </Link>
         <li>
          <p  onClick={() => set_main_drop(prev => !prev)} className={`px-[10px] ${main_drop? 'text-(--selected-link)' : ''} flex items-center justify-between gap-3 `}>Product Categories ▾</p>
        
        <ul className={` grid-cols-4 gap-5 min-w-[1000px] bg-(--orange-shade)   ${main_drop ? 'xl:grid hidden' : 'hidden '} p-8  shadow shadow-2xl xl:absolute xl:top-20 hover:scale-105 duration-300 relative rounded bg-(--orange-color) z-20`}>
          
      <div className="group-1 ml-3">
        <h3 >Haq LED Lights</h3>
        <div className="link">
          <p>Haq LED Bulbs</p>
          <p>Haq Downlights</p>
          <p>Haq Panel Lights</p>
          <p>Haq Cob SpotLights</p>
        </div>
      </div>
      <div className="group-2">
        <h3>Haq LED Spare Parts</h3>
        <div className="link">
         <Link href={'/about'}> <p>Ac LED Light Spare Parts</p>  </Link>
         <Link href={'/about'}> <p>Dc LED Light Spare Parts</p>  </Link>
         <Link href={'/about'}> <p>LED Light Spare Parts </p>  </Link>
        </div>
      </div>
      <div className="group-3">
        <h3>Haq Rods</h3>
        <div className="link">
         <Link href={'/about'}> <p>Haq Original Italy Rods</p>  </Link>
         <Link href={'/about'}> <p>Haq Original Thermostate</p>  </Link>
         
        </div>
      </div>
      <div className="group-4">
        <div className="link">
         <Link href={'/about'}> <p>Haq Cables</p>  </Link>
         </div>
        <div className="link">
         <Link href={'/about'}> <p>Haq Irons</p>  </Link>
         </div>
        <div className="link">
         <Link href={'/about'}> <p>Haq Solar Inverters</p>  </Link>
         </div>
      </div>
           
          
        </ul >
        {/* small nav */}
          <ul className={`${main_drop ? 'xl:hidden block' : 'hidden '}  xl:absolute relative xl:p-3 p-0  mt-2 w-full xl:w-100 rounded  z-20  `}>
            <li className='relative'>

              <p  onClick={() => set_f_drop(prev => !prev)} className={`px-[10px] ${f_drop? 'text-(--selected-link)' : ''} flex items-center justify-between gap-3`}>Haq LED Lights <GoChevronDown size={23} className={`${f_drop ? ' xl:rotate-90  rotate-180' : 'xl:rotate-270 rotate-0'} transition duration-300 `} /></p>
              <ul className={` ${f_drop ? 'block' : 'hidden'} f-drop `} >
           <Link href={'/haq-led'} onClick={()=>setClose(false)}>      <li className='px-[10px]'>
           Haq LED Bulbs

            </li></Link>
           <Link href={'/haq-down'} onClick={()=>setClose(false)}>      <li>
            Haq Downlights

            </li></Link>
           <Link href={'/haq-panel'} onClick={()=>setClose(false)}>      <li>
            Haq Panel Lights

            </li></Link>
           <Link href={'/haq-cob'} onClick={()=>setClose(false)}>      <li>
            Haq Cob Spotlights

            </li></Link>
           <Link href={'/haq-flood-light'} onClick={()=>setClose(false)}>      <li>
            Haq Flood Lights

            </li> </Link>
              </ul>
            </li> 
            <li className='relative'>
                            <p onClick={() => set_s_drop(prev => !prev)} className={`px-[10px] ${s_drop? 'text-(--selected-link)' : ''} flex items-center justify-between gap-3`}> Haq LED Lights' Spare Parts <GoChevronDown size={23}  className={`${s_drop ? ' xl:rotate-90  rotate-180' : 'xl:rotate-270 rotate-0'} transition duration-300  `} /></p>
 <ul className={` ${s_drop ? 'block' : 'hidden'} s-drop `}>
       <Link href={'/haq-ac-sp'} onClick={()=>setClose(false)}>      <li>AC LED Light Spare Parts</li></Link>
       <Link href={'/haq-dc-sp'} onClick={()=>setClose(false)}>      <li>DC LED Light Spare Parts</li></Link>
       <Link href={'/haq-led-sp'} onClick={()=>setClose(false)}>      <li> LED Light Spare Parts</li> </Link>
         </ul>
             
              </li> 
            <Link  href={'/HaqCables'} onClick={()=>setClose(false)}> <li >Haq Cables</li> </Link>
            <Link href={'/HaqIrons'} onClick={()=>setClose(false)}> <li>Haq Irons</li> </Link>
             <li onClick={() => set_t_drop(prev => !prev)}>
                    <p className={` ${t_drop? 'text-(--selected-link)' : ''} flex items-center justify-between gap-3`}> Haq Rods <GoChevronDown size={23} className={`${t_drop ? ' xl:rotate-90  rotate-180' : 'xl:rotate-270 rotate-0'} transition duration-300 `} /></p>
 <ul className={` ${t_drop ? 'block' : 'hidden'} f-drop `}>
     <Link href={'/HaqIrons'} onClick={()=>setClose(false)}>         <li>Haq Original Italy Rods</li> </Link>
     <Link href={'/HaqIrons'} onClick={()=>setClose(false)}>        <li>Haq Original Thermostate</li> </Link>
          </ul>
              </li>
            <Link href={'/HaqSolarInverters'} onClick={()=>setClose(false)}> <li>Haq Solar Inverters</li> </Link>
          </ul>
        </li> 
        <Link className='px-[10px]' href={'/about'} onClick={()=>setClose(false)}> <li>Why Choose Us</li> </Link>
        <Link className='px-[10px]' href={'/contact'} onClick={()=>setClose(false)}> <li>Contact Us</li> </Link>
      </ul>
    </div>

    
  )
}

export default Navbar
