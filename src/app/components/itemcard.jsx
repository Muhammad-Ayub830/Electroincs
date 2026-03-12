'use client'
import Image from "next/image"

import { CiHeart as Heart } from "react-icons/ci";
import React, { useContext, useEffect, useState } from 'react'
import { NavContext } from "./context/context";
import Link from "next/link";
import { FaCartShopping, FaDeleteLeft, FaHeart, FaTrash } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const ItemCard = ({ src, title, discount, price, id, deleteProduct, tags }) => {
  const { addtoCart } = useContext(NavContext)
  const path = usePathname()
const [originalPrice, setOriginalPrice] = useState(0);

useEffect(() => {
  if (price && discount) {
    setOriginalPrice(price / (1 - discount / 100));
  } else {
    setOriginalPrice(price);
  }
}, [price, discount]);
  return (
    <div
      key={id}
      className="relative rounded-xl bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
    >
      {/* Sale Badge */}
      {/* {product.sale && ( */}
      <span className="absolute left-4 top-4 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
        SALE
      </span>
      {/* )} */}

      {/* Image */}
      <img
        src={src}
        alt={title}
        className="mx-auto mb-6 h-40 w-full object-contain"
      />

      {/* Title */}
      <h3 className="mb-3 text-lg font-medium text-gray-700">
        {title}
      </h3>

      {/* Tags */}
      <div className="mb-4 flex justify-center gap-2">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="my-3 border-t border-t-gray-300"></div>

      {/* Price + Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
  <span className="text-xl font-semibold text-gray-800">
    ${price}
  </span>
  {discount > 0 && (
    <span className="text-sm text-gray-400 line-through">
      ${originalPrice.toFixed(2)}
    </span>
  )}
</div>

        <div className="flex gap-2">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FaHeart size={18} className={'text-gray-400'} />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <FaCartShopping size={18} className={'text-gray-400'} />
          </button>
        </div>
      </div>
    </div>
  )
}



export default ItemCard
