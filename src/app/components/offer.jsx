import React from 'react'
import Btn from './btn'
import { Inter } from 'next/font/google'
const Offer = () => {
  const font = Inter({
    subsets :["latin"]
  })
  return (
    <div className={`rounded-2xl bg-orange-800 p-10 my-20 mx-[5%] ${font.className}`}>
      <h1 className="text-center text-2xl font-bold text-white mb-10">limitedt offer for speaker</h1>
      <h1 className="text-center text-5xl font-bold text-white">Get Extra Only 10$ Only Speakers</h1>
     <p className="text-center"><Btn/></p> 
    </div>
  )
}

export default Offer
