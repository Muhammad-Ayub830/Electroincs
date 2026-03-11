'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { NavContext } from './context/context'
import { FiLogOut } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { MdLogout } from 'react-icons/md'
import { RiLogoutBoxFill } from 'react-icons/ri'
import axios from 'axios'
import backendUrl from '../backendurl'
import { useRouter } from 'next/navigation'

const AdminNav = () => {
    const {setAdmin} = useContext(NavContext)
    const router = useRouter()
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
    <div className={` bg-white rounded flex items- justify-between p-5 shadow mb-8 `}>
      <Link onClick={()=>setAdmin(false)} href={'/'}> <div className="logo">
            <img src={'/logo3.png'} className='w-[100px]' alt="" />
        </div></Link> 
      <ul className='flex items-center gap-10 text-[18px] '>
        <Link href={'/admin/all-products'} ><li>All Products</li></Link>
        <Link href={'/admin'} ><li>Add Product</li></Link>
        <Link href={'/'} ><li>Orders</li></Link>
        <li onClick={()=>logout()} className='cursor-pointer hover:text-[red] duration-300 font-semibold' ><FiLogOut/></li>
      
      
      </ul>
    </div>
  )
}

export default AdminNav
