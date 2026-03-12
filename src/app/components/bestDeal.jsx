import React, { useContext, useEffect } from 'react'

import ItemCard from './itemcard'
import MainTitle from './mainTitle'
import { NavContext } from './context/context'
import Link from 'next/link'

const BestDeal = () => {
    const {category,product} = useContext(NavContext)
    useEffect(()=>{
        console.log(product)
    //   console.log(object)  
      console.log(Array.isArray(product))
    },[product])
    return (<div className=" my-20">
<MainTitle title={'Todays Best Deals'} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full'>
    
            {
                product ? product.slice(0,10).map((item,index)=>{
                    if(item.isBestDeal)return (
<ItemCard
        id={item.id}
        src={item.images[0]}
        title={item.title}
        discount={item.discountPercentage}
        price={item.price}
        originalPrice={item.originalPrice}
      />
)

                }) : <p>loading.....</p> 
                
            }

        </div>
    </div>

    )
}

export default BestDeal
