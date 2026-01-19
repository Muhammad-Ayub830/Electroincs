import React from 'react'
import MainTitle from './mainTitle'
import Image from 'next/image'

const Categories = () => {
  return (
    
    <div className='mx-[5%] my-10'>
      <MainTitle title={'Categories'} />
       <div className="scroll-bar-category w-full flex items-center overflow-x-scroll gap-2 scroll-smooth ">

        {/* <div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-white shadow  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/TW40847_01-removebg-preview.png'} width={100} height={50} className='bg-gradient-to-br from-orange-300 to-gray-300 rounded-xl shadow  w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Twinkly Plus</p>
        </div>
        <div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-gradient-to-br from-orange-300 to-gray-300  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/TW40847_01-removebg-preview.png'} width={100} height={50} className='bg-white rounded-xl shadow shadow-2xl w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Twinkly Plus</p>
        </div> */}
        <div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-orange-400  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/TW40847_01-removebg-preview.png'} width={100} height={50} className='bg-white rounded-xl shadow shadow-2xl w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Cables</p>
        </div>
        <div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-orange-400  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/f.png'} width={100} height={50} className='bg-white rounded-xl shadow shadow-2xl w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Haq LED Lights</p>
        </div>
        <div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-orange-400  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/d.png'} width={100} height={50} className='bg-white rounded-xl shadow shadow-2xl w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Light Spear Parts</p>
        </div>
        <div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-orange-400  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/TW41004_A01-removebg-preview.png'} width={100} height={50} className='bg-white rounded-xl shadow shadow-2xl w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Haq Iron</p>
        </div>
        
<div className={`item rounded-full p-3 shrink-0   `}>
          <div className="img bg-orange-400  rounded-full w-[230px] h-[230px] flex items-center justify-center ">
            <Image src={'/TW40847_01-removebg-preview.png'} width={100} height={50} className='bg-white rounded-xl shadow shadow-2xl w-[250px] h-[150px]' alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Haq Solar Inverter</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
