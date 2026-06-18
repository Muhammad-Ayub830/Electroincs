'use client'
import { Outfit } from 'next/font/google'
import './admin.css'
import { MdOutlineAddCircle } from "react-icons/md";

import React, { useEffect, useState } from 'react'
import backendUrl from '../backendurl';
import AdminNav from '../components/adminNav';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  ADMIN_CATEGORY_OPTIONS,
  CATEGORIES,
  getSubCategoriesForCategory,
} from '../productCategories';

const outfit = Outfit({
    weight: ["400"],
    subsets: ["latin"]
})
const page = () => {
        const router = useRouter()
   const [category,setCategory] = useState(CATEGORIES.LED_LIGHT)
    const auth = async()=>{
        try {
            const res = await axios.get(`${backendUrl}verify`,{
            withCredentials : true
        })
        console.log(res)
        } catch (error) {
            router.push("/admin/login")
        }
        
    }
    useEffect(()=>{
        
        auth()
    },[])

    const subCategories = getSubCategoriesForCategory(category)

    return (
        <div className={` px-[3%] md:px-[10%] pt-[5%]   ${outfit.className} text-2xl `}>
            <AdminNav />
            <form action={`${backendUrl}add-product`} method="POST" encType='multipart/form-data'  >
                <h1 className={`text-center mb-5`}>Add Product Information</h1>
                <h2 className={`text-xl mb-2`}>Product Images</h2>
                <input type='file' name='images' multiple className={`images text-[16px] shadow p-3 rounded bg-(--input-bg) `} required />
                <h2 className={`text-xl mt-5 mb-2`}>Product Title</h2>
                <input type='text' name='title' placeholder='product title....'
                    className={`images bg-(--input-bg)  text-[16px] w-full shadow p-3 rounded `} required />
                <h2 className={`text-xl mt-5 mb-2`}>Product Description</h2>
                <textarea name="description" placeholder='product descrition....'
                    className={`images bg-(--input-bg) text-[16px] min-h-[100px] w-full shadow p-3 rounded `}
                    id="" >

                </textarea>
                <div className="inputs mt-5 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
                    <input type='data' name='price' placeholder='Price' className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded `} />
                    <input type='data'  name='discount' placeholder='Discount In Percentage' className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded `} />
                    {subCategories.length > 0 && (
                      <select name="subCategory" required className="images bg-(--input-bg) text-[16px] shadow p-3 rounded">
                        {subCategories.map((sub) => (
                          <option key={sub.value} value={sub.value}>{sub.label}</option>
                        ))}
                      </select>
                    )}
                   
                    <select onChange={(e)=>setCategory(e.currentTarget.value)} name="category" id="" required className={`images bg-(--input-bg)   text-[16px]  shadow p-3 rounded `}>
                        {ADMIN_CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>
                <div className="inputs mt-5 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
                    <div  className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded flex items-center justify-between `}>
                        <p>Is New Arraval?</p> <input   type='checkbox' name='type' value={'isNewArrival'}  /> 
                    </div>
                    <div  className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded flex items-center justify-between `}>
                        <p>Is Featured?</p>  <input   type='checkbox' name='type' value={'isFeatured'}    />
                    </div>
                    <div  className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded flex items-center justify-between `}>
                        <p>Is Best Deal?</p>  <input  type='checkbox'  name='type' value={'isBestDeal'}  /> 
                    </div>
         
         
          

                </div>
                <h2  className={`text-xl mt-5 mb-2 flex items-center gap-2 cursor-pointer`}>Add Tags <MdOutlineAddCircle /></h2>
                  <div className="inputs mt-5 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
          <input type='text' name='tags' required placeholder='tag' className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded `} />
          <input type='text' name='tags' required placeholder='tag' className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded `} />
          {/* <input type='text' name='tags' required placeholder='tag' className={`images bg-(--input-bg)  text-[16px]  shadow p-3 rounded `} /> */}

                  </div>
                <button type='submit' className={` ml-auto  mb-10
                      hover:scale-110 duration-300 mt-5 mb-2 flex items-center
                       justify-center gap-2 cursor-pointer rounded w-full md:w-62 bg-(--orange-color) p-3`}> Upload <MdOutlineAddCircle /> </button>
            </form>
        </div>
    )
}

export default page
