
'use client'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import MainTitle from '../components/mainTitle'
import ItemCard from '../components/itemcard'
import Link from 'next/link'
const HaqSolarInverters = () => {
    const {isclose,setClose,product} = useContext(NavContext)
  return (
    <div>
   <Header isclose={isclose} setClose={setClose}/>
      <Navbar isclose={isclose} setClose={setClose}/>
      <MainTitle title={'Haq Solar Inverters'} />
             <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
               {
          product.map((item, index) => {
            if (item.category == "Inverters") {
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

export default HaqSolarInverters