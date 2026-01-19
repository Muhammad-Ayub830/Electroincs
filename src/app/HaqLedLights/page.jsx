
'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import ItemCard from '../components/itemcard'
import MainTitle from '../components/mainTitle'
const HaqLedLights = () => {
    const {isclose,setClose} = useContext(NavContext)
  return (
    <div>
   <Header isclose={isclose} setClose={setClose}/>
      <Navbar isclose={isclose} setClose={setClose}/>
      <MainTitle title={'Haq Led Lights'} />
       <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
        <ItemCard src={'/led.png'} />
       </div>
    </div>
  )
}

export default HaqLedLights