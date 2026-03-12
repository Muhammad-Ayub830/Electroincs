
'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import ItemCard from '../components/itemcard'
import MainTitle from '../components/mainTitle'
import Link from 'next/link'
const HaqLedLights = () => {
    const {isclose,setClose,products} = useContext(NavContext)
  return (
    <div>
 
      <MainTitle title={'Haq Led Lights'} />
       <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
         {
          products.map((item, index) => {
            if (item.category == "LED_LIGHT") {
              return <Link key={item._id} href={`/Stage/${item._id}`}>
                  <div className="" key={index}>
                      <ItemCard
                      id={item._id}
                      src={item.images[0]}
                      title={item.name}
                      discount={item.discount}
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