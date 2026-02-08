'use client'
import { NavContext } from '@/app/components/context/context'
import Header from '@/app/components/header'
import ItemCard from '@/app/components/itemcard'
import MainTitle from '@/app/components/mainTitle'
import Navbar from '@/app/components/navbar'
import { products } from '@/data'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'

const page = ({ params }) => {
  const { setClose, isclose, product, } = useContext(NavContext)
  const { OnStage } = useParams()
  const [item, setItem] = useState(null)
  const [url,seturl] = useState('')
  // bringing targeted product
  const fetchProduct = async () => {

    let found = products.find(item => item.id === OnStage)
    setItem(found)
    seturl(()=>found.images[0])
    console.log(found.id)
  }
  useEffect(() => {
    fetchProduct()
    console.log(url)
  }, [products, OnStage])
  if (!item) {
    return <p>loading</p>
  } else {
    return (
      <div>
        <Header isclose={isclose} setClose={setClose} />
        <Navbar isclose={isclose} setClose={setClose} />
        <div className="bg-white fade-up fade-up-delay-2 rounded-2xl lg:mx-[5%] mx-[2%] overflow-hidden my-20 shadow-2xl shadow-gray-100 border border-gray-100 hover:shadow-3xl hover:shadow-gray-200 transition-all duration-300">
  <div className="lg:flex justify-between items-center lg:items-stretch">
    {/* Product Image Section */}
    <div className="product flex  items-center justify-center bg-gradient-to-br from-gray-50 to-white lg:bg-white lg:p-8 p-4 lg:w-1/2">
      <div className="relative group">
        <img 
          src={url} 
          alt={item.slug} 
          className="max-h-[500px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {item.discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg animate-pulse">
            -{item.discountPercentage}% OFF
          </div>
        )}
      </div>
    </div>
    
    {/* Product Details Section */}
    <div className="detail flex flex-col p-6 lg:p-10 lg:w-1/2">
      {/* Category Badge */}
     
      
      {/* Title */}
      <h1 className='title text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight text-[#e9ae0d]'>
        {item.title}
      </h1>
      
      {/* Rating */}
      <div className="rating flex items-center gap-2 mb-5 lg:mb-7">
        <div className="flex gap-0.5 text-[#FFD700] text-lg lg:text-xl">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="drop-shadow-sm" />
          ))}
        </div>
        <span className="text-gray-700 font-semibold ml-2 text-sm lg:text-base">
          {item.rating || '5.0'}
        </span>
        <span className="text-gray-400 text-sm lg:text-base">•</span>
        <span className="text-gray-400 font-medium text-sm lg:text-base">
          {item.reviewsCount} Reviews
        </span>
        {item.stock < 10 && item.stock > 0 && (
          <span className="ml-3 text-xs font-bold text-red-500 bg-red-50 py-1 px-2 rounded">
            Only {item.stock} left!
          </span>
        )}
      </div>
      
      {/* Price Section */}
      <div className="price mb-6 lg:mb-8">
        <div className="flex items-baseline gap-3 mb-2">
          <p className='text-4xl lg:text-5xl xl:text-6xl font-black text-[#e9ae0d]'>
            ${item.originalPrice}
          </p>
          {item.discountPercentage > 0 && (
            <>
              <p className='text-2xl lg:text-3xl text-gray-400 font-semibold line-through'>
                ${item.price}.00
              </p>
              <span className="bg-green-100 text-green-800 font-bold text-sm lg:text-base py-1 px-3 rounded-full">
                Save {item.discountPercentage}%
              </span>
            </>
          )}
        </div>
        {item.discountPercentage > 0 && (
          <p className="text-green-600 font-semibold text-sm">
            You save ${(item.price - item.originalPrice).toFixed(2)}
          </p>
        )}
      </div>
      
      {/* Description */}
      <p className='text-gray-600 mb-7 lg:mb-9 text-base lg:text-lg leading-relaxed font-medium'>
        {item.description}
      </p>
      
      {/* Color/Image Variants */}
      <div className="mb-7 lg:mb-9 order-first lg:order-0">
        <h3 className="font-bold text-gray-800 mb-3 lg:mb-4 text-lg">Available Colors</h3>
        <div className="images grid grid-cols-4 lg:grid-cols-6 gap-3">
          {item.images.map((img, index) => (
            <button 
              onClick={() => seturl(img)} 
              key={index}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${img === url ? 'ring-3 ring-[#e9ae0d] ring-offset-2' : 'ring-1 ring-gray-200'}`}
            >
              <img 
                src={img} 
                alt={`Variant ${index + 1}`} 
                className="w-full h-20 lg:h-24 object-cover bg-gray-100"
              />
              {img === url && (
                <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center">
                  <div className="w-3 h-3  rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tags */}
      <div className="mt-auto">
        <div className='flex flex-wrap gap-2'>
          <span className='inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-semibold text-xs py-2 px-3 rounded-lg'>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {item.category}
          </span>
          {item.tags.map((tag, index) => (
            <span 
              key={index} 
              className='bg-gray-100 text-gray-700 font-medium text-xs py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* CTA Buttons */}
      
    </div>
  </div>
</div>
        {/* related products */}
        <MainTitle title={'Related Products'} />
        <div className='grid px-[5%] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 w-full mt-5 '>

          {
            product ? product.slice(0, 10).map((itemm, index) => {
              if (itemm.category === item.category) {
                

                return <Link key={itemm.id} href={`/Stage/${itemm.id}`}>
                  <div className="" >
                    <ItemCard
                      id={itemm.id}
                      src={item.images[0]}
                      title={itemm.title}
                      discount={itemm.discountPercentage}
                      price={itemm.price}
                      originalPrice={itemm.originalPrice}
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
