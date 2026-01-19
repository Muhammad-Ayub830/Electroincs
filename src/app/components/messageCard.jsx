import React from 'react'
import { FaSalesforce } from 'react-icons/fa6'

const MessageCard = () => {
  return (
    <div className='border border-gray-300 p-5 text-center rounded-md'>
      <FaSalesforce className='block m-auto text-7xl mb-2 text-[#e9ae0d]'/>
      <p className='text-3xl font-bold  '>58.4K</p>
      <p className='text-gray-800'>Our Annual Sales</p>
    </div>
  )
}

export default MessageCard
