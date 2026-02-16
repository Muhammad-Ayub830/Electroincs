'use client'
import Image from "next/image"

import { CiHeart as Heart } from "react-icons/ci";
import React, { useContext } from 'react'
import { NavContext } from "./context/context";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

const ItemCard = ({src,title,discount,price,originalPrice,id}) => {
  const {addtoCart} = useContext(NavContext)
  return (
     <div  className="
     
      
      bg-white
      rounded-xl
      p-4
      shadow-sm
      hover:shadow-md
      transition
      relative
    ">
      {/* Image */}
    <Link  href={`/Stage/${id}`} >
    <div className="w-full h-[160px] flex items-center justify-center mb-4">
        <Image
          src={src} // replace with your image
          alt="Sony Headphones"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      
    </Link>  

      {/* Title */}
      <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
        {title}
      </p>

      {/* Save Badge */}
      <span className="
        inline-block
        mt-2
        text-xs
        font-semibold
        text-orange-600
        bg-orange-50
        px-2
        py-1
        rounded-md
        ml-0
      ">
        Save {discount}
      </span>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900">${originalPrice}</span>
        <span className="text-sm text-gray-400 line-through">${price}</span>
      </div>
    </div>
  )
}

export default ItemCard
