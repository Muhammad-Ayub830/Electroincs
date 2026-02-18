import { Inter } from 'next/font/google'
import React, { useContext, useEffect, useState } from 'react'
import { NavContext } from './context/context'
import Link from 'next/link'
import { products } from '@/data'
import { FaClosedCaptioning, FaCross } from 'react-icons/fa6'
import { FaCut } from 'react-icons/fa'
import { RiCloseFill, RiDeleteBackLine, RiDeleteBin2Line, RiDeleteBin3Fill } from 'react-icons/ri'
import { FiDelete } from 'react-icons/fi'
const font = Inter({
    subsets: ['latin'],
    weight: ["400"]
})
const CartComponents = () => {
    const { cart ,cartTotal,shippingfee,deleteCartItem } = useContext(NavContext)
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        let tempdata = [];
        for (const items in cart) {
            for (const item in cart[items]) {


                tempdata.push({
                    id: items,
                    length: cart[items][item]
                })
            }

        }
        console.log(tempdata)
        setCartItems(tempdata)

    }, [cart])
    return (
        <div className={` ${font.className} mt-15 mx-[1%] lg:mx-[5%]`}>
            {/* table of cart items */}
            <table className='w-full'>
                <div className='cartItem mb-5 bg-white hidden  p-5 px-10 rounded lg:grid grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]   text-left font-medium   '>
                    <th className=''>Product</th>
                    <th className=' text-center hidden lg:block'>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-right'>Subtotal</th>
                </div>
                {
                    cartItems.map((item, index) => {
                        let element = products.find(itemm => itemm.id == item.id);
                        return (
                        <div className='cartItem  mb-5 bg-white   p-3 px-10 rounded lg:grid grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] text-left font-medium  '>
                                <td className='  w-full block  lg:flex items-center gap-5'>
                               <Link href={`/Stage/${item.id}`} > 
                                       <img src={element.images[0]} className='lg:w-[50px] w-full' /> </Link>

                                  <span className='lg:inline-block flex justify-between items-center '>{element.title} <RiDeleteBin2Line onClick={()=>deleteCartItem(item.id)} className='lg:hidden text-red-500 cursor-pointer' /> </span> 
                                      <RiCloseFill onClick={()=>deleteCartItem(item.id) }
                                       className='min-w-20 lg:inline-block hidden text-red-500 cursor-pointer '/> </td>
                                <td className='text-center lg:leading-15 leading-10  hidden lg:block'>{element.price}</td>
                                <td className='text-center lg:leading-15 leading-10 lg:inline-block flex justify-between'> <span>Quantity:</span> {item.length}</td>
                                <td className='text-right lg:leading-15 leading-10 lg:block flex justify-between'> <span className='lg:hidden '>Price:</span>  ${element.price * item.length}</td>
                            </div>
                        )
                    })
                }

            </table>
            {/* return to shop btn  */}
            <Link href={'/'}>
                <button className='px-15 py-3 cursor-pointer cartBorder text-sm bg-white rounded'>Return To Shop</button>
            </Link>
            {/* cartTotal */}
            <div className="summary flex flex-col gap-10 lg:flex-row items-start justify-between mt-20">
                <div className="couponCode flex gap-3 items-center">
                    <input type="text" placeholder='Coupon Code' className='px-5 w-[200px] lg:min-w-[300px] py-3 cartBorder text-sm bg-white rounded' />
                    <button className='bg-[#e9ae0d] text-sm px-5 lg:px-10 text-white py-3 rounded '>Apply Coupon</button>
                </div>
                <div className="pricing bg-white p-8 text-black cartBorder rounded lg:w-[400px] w-full">
                    <h3 className='font-semibold mb-2 text-lg'>Cart Total</h3>
                    <div className="tr flex justify-between  py-2 border-b border-gray-400">
                        <div className="name">SubTotal:</div>
                        <div className="price">${cartTotal()}</div>
                    </div>
                    <div className="tr flex justify-between  py-2 border-b border-gray-400">
                        <div className="name">Shipping:</div>
                        <div className="price">{shippingfee<1? 'Free' : shippingfee}</div>
                    </div>
                    <div className="tr flex justify-between  py-2">
                        <div className="name">Total: </div>
                        <div className="price">${cartTotal()+shippingfee}</div>
                    </div>
           <Link href={'/placeOrder'} >
           <button className='bg-[#e9ae0d] cursor-pointer text-sm px-8 m-auto mt-5 text-white py-3 rounded block '>Process to Checkout</button>
           </Link>         

                </div>
            </div>
        </div>
    )
}

export default CartComponents
