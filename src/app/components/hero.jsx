'use client'
import { Inter, Preahvihear, Sour_Gummy } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Btn from './btn'
const font = Preahvihear({
  subsets: ['latin'],
  weight: '400'
})

const fontt = Inter({
  subsets: ['latin']

})
const Hero = () => {
  return (
    <div className={`${fontt.className} py-20 hero bg-gray-50 px-[5%] flex items-center justify-between flex-col xl:flex-row xl:gap-0 gap-30 `}>
        <div className="left-side-hero ">
                  {/* <Image src={'/freepik__the-style-is-candid-image-photography-with-natural__92007.png'} width={1800} height={300} className='' /> */}

        <h1 className={` ${font.className} md:text-5xl text-white text-4xl mt-10 md:text-left text-center  `}>
         <span className='text-orange-400 font-bold'>Brand</span>  New Electric Assests
        </h1>
        <h2 className={`${fontt.className} md:text-3xl text-2xl  tracking-widest font-semibold mt-10 text-white md:text-left text-center`}>Light Every Corner</h2>
        <p className='text-gray-200 xl:w-2/3 mt-5 font-semibold md:text-left text-center'>A renowned business networks of electri equipment throughout pakistan.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consec
          tetur animi quasi, cupiditate commodi tempore </p>
          <p className='md:text-left text-center'><Btn/></p>
        
      </div>
      <div className="right-side-hero relative ">
  

            <Image src={`/4662.png`} alt='iamge'  width={120} height={60} className='absolute -top-20 -left-20' />
            <Image src={`/EcoGlow Smart LED Bulb 12W.png`} alt='iamge'   width={600} height={600} className='absolute -top-20'/>
            <Image src={`/Vector.png`}  alt='iamge'  width={600} height={600}  className="w-75 md:w-150 h-auto"/>
                      <Image src={`/led.png`} alt='iamge'   width={120} height={60} className='absolute -bottom-18 right-0 transform rotate-90' />

      </div>

    </div>
  )
}

export default Hero
