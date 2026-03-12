'use client'

import React, { useContext, useEffect, useState } from 'react'
import { NavContext } from '../components/context/context'
import MainTitle from '../components/mainTitle'
import { Outfit } from 'next/font/google'

const font = Outfit({
  weight:["400"],
  subsets:["latin"]
})

const Page = () => {

  const { products, cart, cartTotal, shippingfee } = useContext(NavContext)

  const [items, setItems] = useState([])

  useEffect(() => {

    const temp = []

    for (const id in cart) {

      const found = products.find(p => p._id === id)

      if (!found) continue

      temp.push({
        id: found._id,
        name: found.name,
        price: found.price * cart[id],
        url: found?.images?.[0]
      })

    }

    setItems(temp)

  }, [cart, products])

  return (
    <div>

      <br />
      <MainTitle title={'Billing Details'} />

      <div className={`${font.className} grid lg:grid-cols-2 grid-cols-1  gap-40 px-[1%] lg:px-[5%]`}>

        {/* FORM */}

        <form>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>First Name</label>
            <input type="text" className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>Company Name</label>
            <input type="text" className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>Street Name</label>
            <input type="text" className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>Apartment, Floor etc.</label>
            <input type="text" className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>Town / City</label>
            <input type="text" required className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>Phone Number</label>
            <input type="text" required className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

          <div className="mb-6">
            <label className='block text-gray-400 mb-1'>Email Address</label>
            <input type="email" className='bg-white rounded outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>

        </form>

        {/* ORDER SUMMARY */}

        <div className="bg-white p-5 lg:mt-5 rounded cartItem font-semibold h-fit">

          {items.map(item => (

            <div key={item.id} className="flex items-center justify-between mb-4">

              <div className="flex items-center gap-5">
                <img src={item.url} className='w-[50px]' />
                <p>{item.name}</p>
              </div>

              <div>${item.price}</div>

            </div>

          ))}

          <div className="flex justify-between mt-10 pb-3 border-b border-gray-400">
            <span>Subtotal:</span>
            <span>${cartTotal()}</span>
          </div>

          <div className="flex justify-between mt-5 pb-3 border-b border-gray-400">
            <span>Shipping:</span>
            <span>{shippingfee < 1 ? "Free" : `$${shippingfee}`}</span>
          </div>

          <div className="flex justify-between mt-5">
            <span>Total:</span>
            <span>${cartTotal() + shippingfee}</span>
          </div>

          <div className="mt-5">
            <input type="radio" name="pay" id="pay" />
            <label htmlFor="pay" className='ml-2 cursor-pointer text-lg'>
              Cash on delivery
            </label>
          </div>

          <button className='bg-[#e9ae0d] w-full cursor-pointer px-8 mt-5 text-white py-3 rounded'>
            Place Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default Page