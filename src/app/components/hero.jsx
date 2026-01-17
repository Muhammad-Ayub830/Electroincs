'use client'
import { Inter, Preahvihear, Sour_Gummy } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const font = Preahvihear({
  subsets: ['latin'],
  weight: '400'
})

const fontt = Inter({
  subsets: ['latin']

})
const Hero = () => {
  return (
    <div className={`${fontt.className} py-20 bg-gray-50 px-[5%] flex items-center justify-between flex-col xl:flex-row xl:gap-0 gap-25 `}>
      <div className="left-side-hero">
        <h1 className={` ${font.className} text-5xl mt-10  `}>
         <span className='text-orange-400 font-bold'>Brand</span>  New Electric Assests
        </h1>
        <h2 className={`${fontt.className} text-3xl tracking-widest font-semibold mt-10 text-black`}>Light Every Corner</h2>
        <p className='text-gray-400 xl:w-2/3 mt-5 font-semibold'>A renowned business networks of electri equipment throughout pakistan.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consec
          tetur animi quasi, cupiditate commodi tempore </p>
        <button className="bg-orange-500 mt-10 cursor-pointer shadow-2xl hover:bg-orange-700 text-white  py-4  px-10 rounded">
          Shop Now
        </button>
      </div>
      <div className="right-side-hero relative ">
  

            <Image src={`/4662.png`}  width={120} height={60} className='absolute -top-20 -left-20' />
            <Image src={`/10041624.png`}  width={600} height={600} className='absolute -top-20'/>
            <Image src={`/Vector.png`}  width={600} height={600}/>
                      <Image src={`/led.png`}  width={120} height={60} className='absolute -bottom-18 right-0 transform rotate-90' />

      </div>

    </div>
  )
}

export default Hero
