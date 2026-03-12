
'use client'
import React, { useContext, useEffect } from 'react'
import { NavContext } from '../components/context/context'
import MainTitle from '../components/mainTitle'
import ItemCard from '../components/itemcard'
import Link from 'next/link'
const HaqSolarInverters = () => {
    const {isclose,setClose,products} = useContext(NavContext)
  return (
    <div>
   
      <MainTitle title={'Haq Solar Inverters'} />
             <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10  mx-[5%]'>
               {
          products.map((item, index) => {
            if (item.category == "Inverters") {
              return <Link key={item._id} href={`/Stage/${item._id}`}>
                  <div className="" >
                      <ItemCard
                      id={item._id}
                      src={item.images[0]}
                      title={item.name}
                      discount={item.discount}
                      price={item.price}
                      originalPrice={item.originalPrice}
                      tags={item.tags}
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