'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import { NavContext } from './context/context'
import MainTitle from './mainTitle'
import ItemCard from './itemcard'
import { filterProductsByCategory } from '../productCategories'

const ProductListingPage = ({ title, category, subCategory = null }) => {
  const { products } = useContext(NavContext)

  const filteredProducts = filterProductsByCategory(products, category, subCategory)

  return (
    <div>
      <MainTitle title={title} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 mx-[5%] pb-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
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
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-16 text-lg">
            No products available in this category yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductListingPage
