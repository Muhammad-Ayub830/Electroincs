'use client'
import backendUrl from '@/app/backendurl'
import AdminNav from '@/app/components/adminNav'
import ItemCard from '@/app/components/itemcard'
import axios from 'axios'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa6'
const outfit = Outfit({
    weight : ["400"],
    subsets : ["latin"]
})
const page = () => {
    const [products,setProducts] = useState([])
     // deleting a product
    const deleteProduct = (idd)=>{
      console.log("hu")
        axios.delete(`${backendUrl}delete-product/${idd}`)
    }

    // fetching products
    useEffect(()=>{
        axios.get(`${backendUrl}get-products`).then(res=>setProducts(res.data)).catch(error=>console.log(error))
    },[deleteProduct])

   
  return (
    <div className={`px-[5%] pt-[5%]   ${outfit.className} text-2xl `}>
          <AdminNav />
                          <h1 className={`text-center mb-5`}>Your Products</h1>

    <div className='grid  grid-cols-[repeat(auto-fit,minmax(220px,220px))] gap-7 w-full '>
        
        {
          products.map((item, index) => {
           
              return (
 <div key={item._id}  className="
     
      
      bg-white
      rounded-xl
      p-4
      shadow-sm
      hover:shadow-md
      transition
      relative
    ">
    
       <FaTrash onClick={()=>deleteProduct(item._id)} className="text-[#ff0000da] cursor-pointer text-md ml-auto" /> 
   
  
      
   
      {/* Image */}
    {/* <Link  href={`/Stage/${id}`} > */}
    <div className="w-full h-[160px] flex items-center justify-center mb-4">
      
        <Image
          src={item.images?.[0]} // replace with your image
          alt="Sony Headphones"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      
    {/* </Link>   */}

      {/* Title */}
      <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
        {item.title}
      </p>

      {/* Save Badge */}
      <span className="
        inline-block
        mt-2
        text-xs
        font-semibold
        text-orange-600
        bg-orange-50
        px-2
        py-1
        rounded-md
        ml-0
      ">
        Save {item.discount}
      </span>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900">${item.price}</span>
        <span className="text-sm text-gray-400 line-through">${item.price}</span>
      </div>
    </div>
)
                
            
          })
        }


      </div>
    </div>
  
  )
}

export default page
