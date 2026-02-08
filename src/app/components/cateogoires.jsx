import React, { useContext, useEffect } from 'react'
import MainTitle from './mainTitle'
import Image from 'next/image'
import { NavContext } from './context/context'
import Reveal from './Reveal'

const Categories = () => {
  const { category, setCategory } = useContext(NavContext)
  useEffect(() => {
    console.log(category)
  }, [category])
  return (
<Reveal>
  <div className=''>
      <MainTitle title={'Categories'} />
      <div className="scroll-bar-category w-full flex items-center overflow-x-scroll gap-2 scroll-smooth mx-[5%] my-10 ">



        <div className={`item rounded-full p-3 shrink-0   `} onClick={() =>setCategory(prev => (prev === 'All' ? 'Cables' : 'All'))}>
          <div className="img    w-50 h-50  ">
            <Image src={'/PowerFlex 1.5mm Copper Cable.png'} width={100} height={100} className={`${category=='Cables'? 'selected-box' : 'box'} bg-white  duration-200  w-[100%] h-[100%] rounded-full '`} alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Cables</p>
        </div>
        {/* cable */}
        <div className={`item rounded-full p-3 shrink-0   `} onClick={() =>setCategory(prev => (prev === 'All' ? 'Bulbs' : 'All'))}>
          <div className="img    w-50 h-50  ">
            <Image src={'/led.png'} width={100} height={100} className={`${category=='Bulbs'? 'selected-box' : 'box'} bg-white  duration-200  w-[100%] h-[100%] rounded-full '`} alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Lights</p>
        </div>
        {/* Bulb */}
        <div className={`item rounded-full p-3 shrink-0   `} onClick={() =>setCategory(prev => (prev === 'All' ? 'Spare_Parts' : 'All'))}>
          <div className="img    w-50 h-50  ">
            <Image src={'/EcoGlow 12W LED Driver.png'} width={100} height={100} className={`${category=='Spare_Parts'? 'selected-box' : 'box'} bg-white  duration-200  w-[100%] h-[100%] rounded-full '`} alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Spare Parts</p>
        </div>
        {/* Spare Parts */}
        <div className={`item rounded-full p-3 shrink-0   `} onClick={() =>setCategory(prev => (prev === 'All' ? 'Inverters' : 'All'))}>
          <div className="img    w-50 h-50  ">
            <Image src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} width={100} height={100} className={`${category=='Inverters'? 'selected-box' : 'box'} bg-white  duration-200  w-[100%] h-[100%] rounded-full '`} alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Inverters</p>
        </div>
        {/* Inverters */}
        <div className={`item rounded-full p-3 shrink-0   `} onClick={() =>setCategory(prev => (prev === 'All' ? 'Irons' : 'All'))}>
          <div className="img    w-50 h-50  ">
            <Image src={'/w.png'} width={100} height={100} className={`${category=='Irons'? 'selected-box' : 'box'} bg-white  duration-200  w-[100%] h-[100%] rounded-full '`} alt='' />
          </div>
          <p className='font-bold text-md text-center tracking-wide text-gray-700 mt-3'>Irons</p>
        </div>
        {/* Irons */}

        

      </div>
    </div>
</Reveal>
    
  )
}

export default Categories
