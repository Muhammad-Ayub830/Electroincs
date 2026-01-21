import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaMarkdown, FaMonero, FaSalesforce } from 'react-icons/fa6'
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const MessageCard = () => {
  return (
    <div className=' img-card  bg-white p-5 text-center rounded-md'>
      <RiMoneyDollarCircleLine className='block m-auto text-7xl mb-2 text-[#e9ae0d]'/>
      <p className='text-3xl font-bold  '><span className='text-orange-500'>58.4</span>K</p>
      <p className='text-gray-800'>Our Annual Sales</p>
    </div>
    
  )
}

export default MessageCard
