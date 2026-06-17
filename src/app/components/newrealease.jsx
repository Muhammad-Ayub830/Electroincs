import React, { useContext } from 'react'
import MainTitle from './mainTitle'
import ItemCard from './itemcard'
import { NavContext } from './context/context'

const NewRelease = () => {
  const { products, category } = useContext(NavContext)

  return (
    <div className="my-20">
      <MainTitle title={'New Release'} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full">

        {products?.length > 0 ? (
          products
            .filter(item =>
              category === 'All' || item.category === category
            )
            .slice(0, 10)
            .map(item => {
              if (item.isNewArrival) {
                return (
                  <ItemCard
                    key={item._id}
                    id={item._id}
                    src={item.images[0]}
                    title={item.name}
                    discount={item.discount}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    tags={item.tags}
                  />
                )
              }
              return null
            })
        ) : (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="animate-pulse">
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

export default NewRelease