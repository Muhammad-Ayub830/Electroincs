import React, { useContext, useEffect } from 'react'

import ItemCard from './itemcard'
import MainTitle from './mainTitle'
import { NavContext } from './context/context'
import Link from 'next/link'

const BestDeal = () => {
    const {category,products} = useContext(NavContext)
    useEffect(()=>{
        
    //   console.log(object)  
      console.log(Array.isArray(products))
    },[products])
    return (<div className=" my-20">
<MainTitle title={'Todays Best Deals'} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full'>
    
            {
                products ? products.slice(0,10).map((item,index)=>{
                    if(item.isBestDeal)return (
<ItemCard
        id={item.id}
        src={item.images[0]}
        title={item.name}
        discount={item.discount}
        price={item.price}
        originalPrice={item.originalPrice}
        tags={item.tags}
      />
)

                }) : <p>loading.....</p> 
                
            }

        </div>
    </div>

    )
}

export default BestDeal
