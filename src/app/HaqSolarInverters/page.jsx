
'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import MainTitle from '../components/mainTitle'
import ItemCard from '../components/itemcard'
const HaqSolarInverters = () => {
    const {isclose,setClose} = useContext(NavContext)
  return (
    <div>
   <Header isclose={isclose} setClose={setClose}/>
      <Navbar isclose={isclose} setClose={setClose}/>
      <MainTitle title={'Haq Solar Inverters'} />
             <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
              <ItemCard src={'/SunVolt 1.5kVA Off-Grid Solar Inverter.png'} />
             </div>

    </div>
  )
}

export default HaqSolarInverters