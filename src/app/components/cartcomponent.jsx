'use client'

import { Inter } from 'next/font/google'
import React, { useContext, useEffect, useState } from 'react'
import { NavContext } from './context/context'
import Link from 'next/link'
import { RiCloseFill, RiDeleteBin2Line } from 'react-icons/ri'

const font = Inter({
  subsets: ['latin'],
  weight: ["400"]
})

const CartComponents = () => {

  const { cart, cartTotal, shippingfee, deleteCartItem, products } = useContext(NavContext)

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {

    const tempdata = []

    for (const id in cart) {
      tempdata.push({
        id,
        quantity: cart[id]
      })
    }

    setCartItems(tempdata)

  }, [cart])

  return (

    <div className={`${font.className} mt-15 mx-[1%] lg:mx-[5%]`}>

      {/* cart items */}

      {cartItems.map((item) => {

        const element = products.find(p => p._id === item.id)

        if (!element) return null

        return (

          <div
            key={item.id}
            className='cartItem items-center mb-5 bg-white p-3 px-10 rounded grid grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]'
          >

            <div className='w-full flex items-center gap-5'>

              <Link href={`/Stage/${item.id}`}>

                <img
                  src={element?.images?.[0]}
                  className='w-12.5 '
                />

              </Link>

              <span className='lg:inline-block flex justify-between items-center'>

                {element.name}

                <RiDeleteBin2Line
                  onClick={() => deleteCartItem(item.id)}
                  className='lg:hidden ml-2 text-red-500 cursor-pointer'
                />

              </span>

              <RiCloseFill
                onClick={() => deleteCartItem(item.id)}
                className='min-w-20 lg:inline-block hidden text-red-500 cursor-pointer'
              />

            </div>

            <div className='text-center '>
              ${element.price}
            </div>

            <div className='text-center hidden lg:block '>
              Quantity: {item.quantity}
            </div>

            <div className='text-right '>
              ${element.price * item.quantity}
            </div>

          </div>

        )
      })}

      {/* return button */}

      <Link href='/'>
        <button className='px-15 py-3 cursor-pointer cartBorder text-sm bg-white rounded'>
          Return To Shop
        </button>
      </Link>

      {/* summary */}

      <div className="summary flex flex-col gap-10 lg:flex-row items-start justify-between mt-20">

        <div className="couponCode flex gap-3 items-center">

          <input
            type="text"
            placeholder='Coupon Code'
            className='px-5 w-[200px] lg:min-w-[300px] py-3 cartBorder text-sm bg-white rounded'
          />

          <button className='bg-[#e9ae0d] active:scale-95 duration-300 text-sm px-5 lg:px-10 text-white py-3 rounded'>
            Apply Coupon
          </button>

        </div>

        <div className="pricing bg-white p-8 text-black cartBorder rounded lg:w-[400px] w-full">

          <h3 className='font-semibold mb-2 text-lg'>Cart Total</h3>

          <div className="flex justify-between py-2 border-b border-gray-400">
            <span>Subtotal:</span>
            <span>${cartTotal()}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-400">
            <span>Shipping:</span>
            <span>{shippingfee < 1 ? 'Free' : `$${shippingfee}`}</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Total:</span>
            <span>${cartTotal() + shippingfee}</span>
          </div>

          <Link href='/placeOrder'>
            <button className='bg-[#e9ae0d] active:scale-95 duration-300 cursor-pointer text-sm px-8 m-auto mt-5 text-white py-3 rounded block'>
              Proceed to Checkout
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default CartComponents