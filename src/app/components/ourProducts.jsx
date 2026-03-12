import React, { useContext, useEffect } from 'react';
import ItemCard from './itemcard';
import MainTitle from './mainTitle';
import { NavContext } from './context/context';
import Link from 'next/link';

const OurProducts = () => {

  const { category, products } = useContext(NavContext);

  useEffect(() => {
    console.log(products);
    console.log(Array.isArray(products));
  }, [products]);

  return (
    <div className="my-20 fade-up fade-up-delay-4">

      <MainTitle title={'What We Deal With'} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-7 w-full">

        {products
          .slice(0,10)
          .filter(item => category === 'All' || item.category === category)
          .map(item => (

            <ItemCard
              key={item._id}
              id={item._id}
              src={item?.images?.[0]}
              title={item.name}
              discount={item.discount}
              price={item.price}
              originalPrice={item.originalPrice}
              tags={item.tags}
            />

          ))}

      </div>

    </div>
  );
};

export default OurProducts;