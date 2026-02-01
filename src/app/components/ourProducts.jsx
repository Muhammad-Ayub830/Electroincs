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
    <div className="my-20">
      <MainTitle title={'What We Deal With'} />

      
        <div className="grid px-[5%] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-7 w-full">
         {product.slice(0, 10).map((item,index) => {
          if(category === 'All' || item.category== category)
  return <Link key={item.id} href={`/Stage/${item.id}`} >
    <div className="">
        <ItemCard
        id={item.id}
        src={item.images[0]}
        title={item.title}
        discount={item.discountPercentage}
        price={item.price}
        originalPrice={item.originalPrice}
      />
    </div>
  </Link>
})}

        </div>
     
    </div>
  );
};

export default OurProducts;
