import React from 'react'
import MainTitle from './mainTitle'
import ItemCard from './itemcard'
import Image from 'next/image'

const NewRelease = () => {
  return (
    <div className=" my-20">
      <MainTitle title={'New Release'} />
       <div className='grid px-[5%] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 w-full '>
            <ItemCard src={'/TW41004_01-removebg-preview (1).png'} />
            <ItemCard src={'/t.png'} />
            <ItemCard src={'/w.png'} />
            <ItemCard src={'/10041624.png'} />
        </div>
    </div>
  )
}

export default NewRelease
