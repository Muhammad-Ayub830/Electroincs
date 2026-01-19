'use client'
import { Inter, Outfit } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const font = Outfit({
  subsets: ['latin']
})
const MainTitle = ({ title }) => {
  return (
    <div className={` ${font.className} text-3xl font-bold mx-[5%]  my-10 mb-5 m text-gray-700`}>
      {title}
    </div>
  )
}

export default MainTitle
