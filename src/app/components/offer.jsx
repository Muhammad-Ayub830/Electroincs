'use client'
import React from 'react'
import Btn from './btn'
import { Inter, Outfit } from 'next/font/google'
import Image from 'next/image'

const font = Inter({ subsets: ['latin'] })

const Offer = () => {
  return (
    <section
      className={` offer fade-up fade-up-delay-4
        relative mx-[5%] my-24
        rounded-xl
        bg-[#ffffff]
        px-6 py-10 md:px-12 md:py-14  shadow overflow-hidden
        ${font.className}
      `}
    >
      {/* thin modern border */}
      <div className="absolute inset-0 rounded-xl border border-white/8 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left image */}
        <Image
          src="/NicePng_led-bulbs-png_2601007.png"
          alt="Modern lighting"
          width={260}
          height={140}
          className="object-contain"
        />

        {/* Content */}
        <div className="text-center max-w-lg">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#e9ae0d]">
            Limited Offer
          </p>

          <h2 className="mb-4 text-2xl md:text-4xl font-semibold text-black leading-snug">
            Extra $10 Off  
            <span className="block text-[#e9ae0d]">
              Premium Lights
            </span>
          </h2>

          <p className="mb-2 text-sm md:text-base text-gray-400">
            Clean design. Powerful sound.  
            Built for modern spaces.
          </p>

          <Btn />
        </div>

        {/* Right image */}
        <Image
          src="/NicePng_bulb-png_896941.png"
          alt="Modern bulb"
          width={220}
          height={140}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default Offer
