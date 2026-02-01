'use client'
import { NavContext } from '@/app/components/context/context'
import Header from '@/app/components/header'
import ItemCard from '@/app/components/itemcard'
import MainTitle from '@/app/components/mainTitle'
import Navbar from '@/app/components/navbar'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'

const page = ({ params }) => {
  const { setClose, isclose, product, } = useContext(NavContext)
  const { OnStage } = useParams()
  const [item, setItem] = useState(null)
  // bringing targeted product
  const fetchProduct = () => {

    let found = product.find(item => item.id === OnStage)
    setItem(found)
  }
  useEffect(() => {
    fetchProduct()

  }, [product, OnStage])
  if (!item) {
    return <p>loading</p>
  } else {
    return (
      <div>
        <Header isclose={isclose} setClose={setClose} />
        <Navbar isclose={isclose} setClose={setClose} />
        <div className="bg-white rounded-2xl lg:mx-[5%] mx-[2%] lg:p-5 p-2 my-20">
          <div className="lg:flex justify-between">
            <div className="product   flex items-center flex-1  justify-center">
              <img src={item.images[0]} alt={item.slug} />
            </div>
            <div className="detail flex-1 p-5 ">
              <h1 className='title text-5xl font-semibold mb-8'>
                {item.title}
              </h1>
              <div className="rating flex gap-1  text-[#e9ae0d] items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className='text-gray-400 font-semibold ml-2'>{item.reviewsCount} Reviews</p>
              </div>
              <div className="price  my-6 flex items-baseline">
                <p className='text-[50px] font-bold text-blue-800'>${item.originalPrice}</p> <p className='text-3xl text-gray-400 font-semibold ml-3 line-through'>${item.price}.00</p> <p className='text-3xl text-gray-400 font-semibold ml-3 '>Save {item.discountPercentage}%</p>
              </div>
              <p className='text-lg font-semibold text-gray-500'>
                {item.description}
              </p>
              <div className="images flex items-center gap-3 justify-start my-5 ">
                {
                  item.images.map((item, index) => (
                    <img src={item} alt={item} key={index} className=' w-50' />
                  ))
                }
              </div>
              <div className="hastags">
                <p className='font-semibold font-sans text-blue-600 flex gap-2'>#{item.category}
                  <p>#{item.subcategory}</p>
                  {item.tags.map((item, index) => (
                    <a href="" className='ml-1'>#{item} </a>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* related products */}
        <MainTitle title={'Related Products'} />
        <div className='grid px-[5%] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 w-full mt-5 '>

          {
            product ? product.slice(0, 10).map((itemm, index) => {
              if (itemm.category == item.category) {
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

            }) : <p>loading.....</p>

          }

        </div>
      </div>
    )
  }

}

export default page
