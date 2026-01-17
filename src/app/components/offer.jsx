import React from 'react'
import Btn from './btn'
import { Inter } from 'next/font/google'
 const font = Inter({
    subsets :["latin"]
  })
const Offer = () => {
 
  return (
    <div className={`rounded-2xl bg-orange-800 p-5 py-10 md:p-10 my-20 mx-[5%] ${font.className}`}>
      <h1 className="text-center text-md md:text-2xl font-bold text-white mb-10 tracking-widest">Limited offer for speaker</h1>
      <h1 className="text-center text-2xl md:text-3xl xl:text-5xl font-bold text-white">Get Extra Only 10$ Only Speakers</h1>
     <p className="text-center"><Btn/></p> 
    </div>
  )
}

export default Offer
