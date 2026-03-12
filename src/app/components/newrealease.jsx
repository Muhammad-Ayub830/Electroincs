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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full '>
        {
          product.slice(0, 10).map((item, index) => {
            if (item.isNewArrival) 
              return (
<ItemCard
        key={item._id}
        id={item._id}
        src={item.images[0]}
        title={item.title}
        discount={item.discountPercentage}
        price={item.price}
        originalPrice={item.originalPrice}
      />
)
                
            
          })
        }


      </div>
    </div>
  )
}

export default NewRelease
