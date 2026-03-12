'use client'

import React, { useContext } from 'react'
import { NavContext } from '../components/context/context'
import MainTitle from '../components/mainTitle'
import ItemCard from '../components/itemcard'
import Link from 'next/link'

const HaqCables = () => {

  const { products } = useContext(NavContext)

  const cableProducts = products.filter(
    item => item.category === "Cables"
  )

  return (

    <div className='relative'>

      <MainTitle title={'Haq Cables'} />

      <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 mx-[5%]'>

        {cableProducts.map(item => (

          <Link key={item._id} href={`/Stage/${item._id}`}>

            <ItemCard
              id={item._id}
              src={item?.images?.[0]}
              title={item.name}
              discount={item.discount}
              price={item.price}
              originalPrice={item.originalPrice}
              tags={item.tags}
            />

          </Link>

        ))}

      </div>

    </div>

  )
}

export default HaqCables