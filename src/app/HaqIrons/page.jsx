
'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import MainTitle from '../components/mainTitle'
import ItemCard from '../components/itemcard'
const HaqIrons = () => {
    const {isclose,setClose} = useContext(NavContext)
  return (
    <div className=' relative'>
      <Header isclose={isclose} setClose={setClose} />
      <Navbar isclose={isclose} setClose={setClose} />
      <MainTitle title={'Haq Irons'} />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
        <ItemCard src={'/w.png'} />
       
      </div>
      
    </div>
  )
}

export default HaqIrons