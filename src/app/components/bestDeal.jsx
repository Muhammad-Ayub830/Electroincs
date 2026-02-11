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
        <div className='grid px-[5%] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 w-full mt-5 '>
    
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
