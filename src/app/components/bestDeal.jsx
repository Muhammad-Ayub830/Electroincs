import React, { useContext, useEffect } from 'react'
import ItemCard from './itemcard'
import MainTitle from './mainTitle'
import { NavContext } from './context/context'
import Link from 'next/link'

const BestDeal = () => {
    const { category, products } = useContext(NavContext)

    useEffect(() => {
        console.log(Array.isArray(products))
    }, [products])

    return (
        <div className="my-20">
            <MainTitle title={'Todays Best Deals'} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full'>

                {products?.length > 0 ? (
                   products
  .filter(item => category === 'All' || item.category === category)
  .slice(0, 6)
                        .map((item) => {
                            if (item.isBestDeal)
                                return (
                                    <ItemCard
                                        key={item.id}
                                        id={item.id}
                                        src={item.images[0]}
                                        title={item.name}
                                        discount={item.discount}
                                        price={item.price}
                                        originalPrice={item.originalPrice}
                                        tags={item.tags}
                                    />
                                )
                        })
                ) : (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="animate-pulse   "
                        >
                            <div className="h-48 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
                            <div className="h-6 bg-gray-300 rounded mt-4 w-1/3"></div>
                        </div>
                    ))
                )}

            </div>
        </div>
    )
}

export default BestDeal