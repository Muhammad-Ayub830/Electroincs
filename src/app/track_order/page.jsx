'use client'
import axios from 'axios'
import { Outfit } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import backendUrl from '../backendurl'
const outfit = Outfit({
    weight: ["400"],
    subsets: ["latin"]
})

const page = () => {
    const [orders,setOrders] = useState([])
     const router = useRouter()
    const auth = async () => {
        try {
            const res = await axios.get(`${backendUrl}verify-customer`, {
                withCredentials: true
            })
            // console.log(res)
        } catch (error) {
            console.log(error)
            // router.push("/admin/login")
        }
    }
    
     const fetchorders = async () => {
        try {
            const res = await axios.get(`${backendUrl}get-my-orders`, { withCredentials: true })
            setOrders(res.data.data)
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
            auth()
            fetchorders()
        }, [])
  return (
     <div className={`px-[5%] pt-[5%]   ${outfit.className} text-2xl `}>
           
            <h1 className={` mb-10`}>Received Orders</h1>
            <div className="orders bg-white mb-10 shadow rounded-tl-2xl rounded-tr-2xl rounded-lg ">
                <div className=" bg-gray-200 p-5 rounded-tl-2xl rounded-tr-2xl  grid grid-cols-5 text-[17px] text-[#312f2f] font-semibold">
                    <div className="name">Name</div>
                    <div className="name">City</div>
                    <div className="name">Price</div>
                    <div className="name">Phone</div>
                    <div className="name">Status</div>
                </div>
                {
                    orders?.map((order, index) => (
                        <div key={index} className="header p-5  grid grid-cols-5  text-[17px] text-[#575353]">
                            <div className="name">{order.customerName}</div>
                            <div className="name">{order.city}</div>
                            <div className="name">{order.totalPrice}</div>
                            <div className="name">{order.phone}</div>
                            <div className={`
                            ${order.orderStatus == 'DELIVERED' ? 'text-green-800 bg-green-200 w-fit rounded py-1 px-2' : '' }
                            ${order.orderStatus == 'PENDING' ? 'text-[#a1a11a] bg-yellow-200 w-fit rounded py-1 px-2' : '' }
                            `}>{order.orderStatus}</div>
                        </div>
                    )
                    )}

            </div>

        </div>
  )
}

export default page
