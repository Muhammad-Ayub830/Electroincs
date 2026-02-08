'use client'
import { Inter, Preahvihear, Sour_Gummy } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import Btn from './btn'
import Reveal from './Reveal'
const font = Preahvihear({
  subsets: ['latin'],
  weight: '400'
})

const fontt = Inter({
  subsets: ['latin']

})
const Hero = () => {
  return (
    <div className={`${fontt.className} py-20 hero bg-gray-50 px-[5%] flex items-center justify-center  h-120`}>
      {/* flex-col xl:flex-row xl:gap-0 gap-30  */}
        <div className="left-side-hero ">
                  {/* <Image src={'/freepik__the-style-is-candid-image-photography-with-natural__92007.png'} width={1800} height={300} className='' /> */}

        <Reveal>
          <h1 className={`md:text-6xl text-white text-4xl mt-10 md:text-left text-center  `}>
         <span className='text-[#e9ae0d] font-bold'>Welcome </span>  To Haq Electronics
        </h1>
        </Reveal>
       
        
      </div>
    

    </div>
  )
}

export default Hero
