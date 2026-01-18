'use client'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const font = Inter({
  subsets: ['latin']
})
const MainTitle = ({ title }) => {
  return (
    <div className={` ${font.className} text-3xl font-bold  my-10`}>
      {title}
    </div>
  )
}

export default MainTitle
