import React from 'react'

import ItemCard from './itemcard'
import MainTitle from './mainTitle'

const BestDeal = () => {
    return (<div className="px-[5%] my-10">
<MainTitle title={'Todays Best Deals'} />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10 w-full '>
            <ItemCard src={'/supply-watt-bright-edison-light.jpg'} />
            <ItemCard src={'/0b201f02-15d0-41f7-a291-dab2d5fc5cd5.jpg'} />
            <ItemCard src={'/w.png'} />
            <ItemCard src={'/10041624.png'} />

        </div>
    </div>

    )
}

export default BestDeal
