'use client'
import React from 'react'
import Btn from './btn'
import { Inter } from 'next/font/google'
import Image from 'next/image'
const font = Inter({
  subsets: ["latin"]
})
const Offer = () => {

  return (
    <div className={`rounded-2xl relative flex items-center justify-between flex-col gap-15 lg:flex-row bg-orange-800 p-5 py-10 md:p-10 my-20 mx-[5%] ${font.className}`}>
      <Image src={`/NicePng_led-bulbs-png_2601007.png`} alt='image' width={280} height={100} />

      <div className="">
        <h1 className="text-center text-md md:text-2xl font-bold text-amber-100 mb-6 tracking-widest">Limited offer for speaker</h1>
        <h1 className="text-center text-2xl md:text-3xl xl:text-3xl font-bold text-white">Get Extra Only 10$ Only Speakers</h1>
        <p className="text-center"><Btn /></p>
      </div>

      <Image src={`/NicePng_bulb-png_896941.png`} alt='image' width={220} height={100} />

    </div>
  )
}

export default Offer
