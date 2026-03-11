'use client'
import backendUrl from '@/app/backendurl'
import AdminNav from '@/app/components/adminNav'
import ItemCard from '@/app/components/itemcard'
import axios from 'axios'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa6'
const outfit = Outfit({
    weight : ["400"],
    subsets : ["latin"]
})
const page = () => {
    const [products,setProducts] = useState([])
    // verification
    
            const router = useRouter()
        const auth = async()=>{
            try {
                const res = await axios.get(`${backendUrl}verify`,{
                withCredentials : true
            }).then(a=>console.log(a.data.message))
            } catch (error) {
                router.push("/admin/login")
            }
            
        }
        useEffect(()=>{
            auth()
        },[])
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
                          <h1 className={`text-center mb-5`}>Received Orders</h1>

    
    </div>
  
  )
}

export default page
