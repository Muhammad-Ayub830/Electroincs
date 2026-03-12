import React, { useContext, useEffect } from 'react';
import ItemCard from './itemcard';
import MainTitle from './mainTitle';
import { NavContext } from './context/context';
import Link from 'next/link';

const OurProducts = () => {
  const { category, product } = useContext(NavContext);

  useEffect(() => {
    console.log(product);
    console.log(Array.isArray(product));
  }, [product]);

  // Filter products based on category safely
  
  return (
    <div className="my-20 fade-up fade-up-delay-4">
      <MainTitle title={'What We Deal With'} />

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full">
         {product.slice(0, 10).map((item,index) => {
          if(category === 'All' || item.category== category)
  return (
<ItemCard
        key={item._id}
        id={item._id}
        src={item.images[0]}
        title={item.name}
        discount={item.discountPercentage}
        price={item.price}
        originalPrice={item.originalPrice}
        tags={item.tags}
      />
)
    
        
   

})}

        </div>
     
    </div>
  );
};

export default OurProducts;
