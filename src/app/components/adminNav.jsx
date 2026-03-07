'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { NavContext } from './context/context'

const AdminNav = () => {
    const {setAdmin} = useContext(NavContext)
  return (
    <div className={` bg-white rounded flex items- justify-between p-5 shadow mb-8 `}>
      <Link onClick={()=>setAdmin(false)} href={'/'}> <div className="logo">
            <img src={'/logo3.png'} className='w-[100px]' alt="" />
        </div></Link> 
      <ul className='flex items-center gap-5 text-[19px] '>
        <Link href={'/admin/all-products'} ><li>All Products</li></Link>
        <Link href={'/admin'} ><li>Add Product</li></Link>
        <Link href={'/'} ><li>Orders</li></Link>
      </ul>
    </div>
  )
}

export default AdminNav
