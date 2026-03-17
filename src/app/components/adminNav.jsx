'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { NavContext } from './context/context'
import { FiLogOut } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { MdLogout } from 'react-icons/md'
import { RiLogoutBoxFill } from 'react-icons/ri'
import axios from 'axios'
import backendUrl from '../backendurl'
import { useRouter } from 'next/navigation'
import { SlMenu } from "react-icons/sl";


const AdminNav = () => {
    const {setAdmin} = useContext(NavContext)
    const router = useRouter()
    const [ismenu,setMenu]  = useState(false)
    // logout 
    const logout = async ()=>{
      try {
         const res =await axios.get(`${backendUrl}logout`,{
        withCredentials : true
      })
      console.log( res.data.message)
      router.push("/admin/login")
      } catch (error) {
        console.log(error)
      }
     
    }
  return (
    <div className={` bg-white rounded flex items-center justify-between p-5  md:px-10 shadow mb-8 `}>
      <Link onClick={()=>setAdmin(false)} href={'/'}> <div className="logo">
            <img src={'/logo3.png'} className='w-[100px]' alt="" />
        </div></Link> 
      <ul className='hidden md:flex items-center gap-10 text-[18px] '>
        <Link href={'/admin/all-products'} ><li>All Products</li></Link>
        <Link href={'/admin'} ><li>Add Product</li></Link>
        <Link href={'/admin/orders'} ><li>Orders</li></Link>
        <li onClick={()=>logout()} className='cursor-pointer hover:text-[red] duration-300 font-semibold' ><FiLogOut/></li>
        
      
      </ul>
      {/* menu icon */}
      <SlMenu className='block md:hidden' onClick={()=>setMenu(a=>!a)} />


      {/* small screen nav */}
      <div className={`h-full w-64 bg-white p-5
      transition-transform duration-500 ${ismenu ? 'translate-x-0' : '-translate-x-full'}
         shadow absolute top-0 left-0`}>
         <ul className='flex  flex-col gap-5 text-[18px] '>
        <Link href={'/admin/all-products'} ><li>All Products</li></Link>
        <Link href={'/admin'} ><li>Add Product</li></Link>
        <Link href={'/admin/orders'} ><li>Orders</li></Link>
        <li onClick={()=>logout()} className='cursor-pointer hover:text-[red] duration-300 flex items-center gap-2' ><FiLogOut/> Logout</li>
        
      
      </ul>
      </div>
    </div>
  )
}

export default AdminNav
