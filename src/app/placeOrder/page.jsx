'use client'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header'
import { NavContext } from '../components/context/context'
import Navbar from '../components/navbar'
import MainTitle from '../components/mainTitle'
import { FaPaypal } from 'react-icons/fa'
import { Outfit } from 'next/font/google'
 const font = Outfit({
      weight:["400"],
      subsets:["latin"]
    })
const page = () => {
    const {isclose,setClose,product,cart,cartTotal,shippingfee} = useContext(NavContext)
    const [items,setItems] = useState([])
    // rendering items
   
    const renderItems = ()=>{
      let dummyarry = [];
      for (const obj in cart) {
        
      const   foundObj = product.find(a=>a.id == obj)

        if(foundObj){
          for(const a in cart[obj]){
            dummyarry.push(
              {
                name:foundObj.title,
                id : foundObj.id,
                price: foundObj.price * cart[obj][a],
                url : foundObj.images?.[0]
              }
            )
          }
        }
        
      }

    setItems(dummyarry)
    }
    useEffect(()=>{
      renderItems()
      console.log(items)
    },[cart])

  return (
    <div>
        <Header isclose={isclose} setClose={setClose} />
        <Navbar isclose={isclose} setClose={setClose} />
        <br />
        <MainTitle title={'Billing Details'}  />
      <div className={` ${font.className} page grid lg:grid-cols-2 grid-cols-1 gap-40 px-[1%] lg:px-[5%] items-start "`}>
        <form action="" className='  '>
          <div className="input mb-6 ">
            <label htmlFor="" className='block text-gray-400 mb-1'>First Name</label>
            <input type="text" className='bg-white rounded  outline-[#e9ae0d] p-2 cartItem w-full lg:w-[400px]' />
          </div>
          <div className="input mb-6 ">
            <label htmlFor="" className='block text-gray-400 mb-1'>Company Name</label>
          </div>
          <div className="input mb-6 ">
            <input type="text" className='bg-white rounded outline-[#e9ae0d]  p-2 cartItem  w-full lg:w-[400px]' />
            <label htmlFor="" className='block text-gray-400 mb-1'>Street Name</label>
          </div>
          <div className="input mb-6">
            <input type="text" className='bg-white rounded  outline-[#e9ae0d]  p-2 cartItem  w-full lg:w-[400px]' />
            <label htmlFor="" className='block text-gray-400 mb-1'>Apartment, Floor etc.</label>
          </div>
          <div className="input mb-6">
            <input type="text" required className='bg-white rounded outline-[#e9ae0d]  p-2 cartItem  w-full lg:w-[400px]' />
            <label htmlFor="" className='block text-gray-400 mb-1'>Town, City</label>
            <input type="text" required className='bg-white rounded outline-[#e9ae0d]  p-2 cartItem  w-full lg:w-[400px]' />
          </div>
          <div className="input mb-6">
            <label htmlFor="" className='block text-gray-400 mb-1' >Phone Number</label>
            <input type="text" required className='bg-white rounded outline-[#e9ae0d]  p-2 cartItem  w-full lg:w-[400px]' />
          </div>
          <div className="input mb-6">
            <label htmlFor="" className='block text-gray-400 mb-1'>Email Address</label>
            <input type="text"  className='bg-white rounded outline-[#e9ae0d] p-2 cartItem  w-full lg:w-[400px]' />
          </div>
        </form>
        <div className="payment-detail bg-white p-5 lg:mt-5 rounded cartItem font-semibold "> 
         {
          items.map((a,index)=>{
          return   <div className="item flex items-center justify-between mb-4">
            <div className="img flex items-center justify-center gap-5">
              <img src={a.url} className='w-[50px]' />
              <p>{a.name}</p>
            </div>
            <div className="price">
              ${a.price}
            </div>
          </div>
          })
         }
         
         
          {/* 00 */}
           <div className="item mt-10  flex items-center justify-between pb-3 border-b border-gray-400">
            <div className="img ">
             
              <p>Subtotal:</p>
            </div>
            <div className="price">
              ${cartTotal()}
            </div>
          </div>
           <div className="item mt-5  flex items-center justify-between pb-3 border-b border-gray-400">
            <div className="img ">
             
              <p>Shipping:</p>
            </div>
            <div className="price">
              {shippingfee} 
            </div>
          </div>
           <div className="item mt-5  flex items-center justify-between pb-3 ">
            <div className="img ">
             
              <p>Total:</p>
            </div>
            <div className="price">
              ${ cartTotal() + shippingfee}
            </div>
          </div>
           <div className="item mt-5  lg:flex items-center justify-between pb-3 ">
            <div className="img ">
             
              <input type="radio" name="pay" id="pay-b" /> <label htmlFor="pay-b" className='ml-2 cursor-pointer text-lg'>Bank</label>
            </div>
            <div className="flex pt-2 mt-4 lg:mt-0 cursor-pointer ">
          <img src="/payment-1.png" alt=""/>
          <img src="/payment-2.png" alt=""/>
          <img src="/payment-3.png" alt=""/>
          <img src="/payment-4.png" alt=""/>
          <img src="/payment-5.png" alt=""/>
        </div>
          </div>
           <div className="item mt-5  flex items-center justify-between pb-3 ">
            <div className="img ">
             
              <input type="radio" name="pay" id="pay" /> <label htmlFor="pay" className='ml-2 cursor-pointer text-lg'>Cash on delivery</label>
            </div>
           
          </div>
                     <button className='bg-[#e9ae0d] w-full cursor-pointer  px-8 m-auto mt-5 text-white py-3 rounded block '>Place Order</button>

        </div>
      </div>
    </div>
  )
}

export default page
