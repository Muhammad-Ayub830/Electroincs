import React, { useContext } from 'react'
import MainTitle from './mainTitle'
import ItemCard from './itemcard'
import Image from 'next/image'
import { NavContext } from './context/context'
import Link from 'next/link'

const NewRelease = () => {
  const { product } = useContext(NavContext)
  return (
    <div className=" my-20">
      <MainTitle title={'New Release'} />
      <div className='grid px-[5%] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 w-full '>
        {
          product.slice(0, 10).map((item, index) => {
            if (item.isNewArrival) {
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

export default NewRelease
