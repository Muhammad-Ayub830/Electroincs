
'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import ItemCard from '../components/itemcard'
import MainTitle from '../components/mainTitle'
import Link from 'next/link'
const HaqLedLights = () => {
    const {isclose,setClose,product} = useContext(NavContext)
  return (
    <div>
   <Header isclose={isclose} setClose={setClose}/>
      <Navbar isclose={isclose} setClose={setClose}/>
      <MainTitle title={'Haq Led Lights'} />
       <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
         {
          product.map((item, index) => {
            if (item.category == "Bulbs") {
              return <Link key={item.id} href={`/Stage/${item.id}`}>
                  <div className="" key={index}>
                      <ItemCard
                      id={item.id}
                      src={item.images[0]}
                      title={item.title}
                      discount={item.discountPercentage}
                      price={item.price}
                      originalPrice={item.originalPrice}
                    />
                  </div>
                    
                  
                </Link>
                
            }
          })
        }
       </div>
    </div>
  )
}

export default HaqLedLights