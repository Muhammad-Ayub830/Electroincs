'use client'
import AdminNav from '@/app/components/adminNav'
import { Outfit } from 'next/font/google'
import React, { useRef } from 'react'
import '../admin.css'
import backendUrl from '@/app/backendurl'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const font = Outfit({
    subsets  : ["latin"],
    weight: ["400"]
})
const page = () => {
    const router = useRouter()

    // sending data 
    const name = useRef()
    const password = useRef()
     const sendData  = async ()=>{
        const data = {
            username : name.current.value,
            password : password.current.value
        }
            try {
                const res = await axios.post(`${backendUrl}login`,data,{
                withCredentials : true
            })
           console.log(res.data.message)
            router.push("/admin")
            
            } catch (error) {
                name.current.value = "";
            password.current.value = "";
                console.log(error)
            }
            
            
     }
    return (
        <div className={` ${font.className} p-[5%] `}>
            
            <form onSubmit={(e)=>e.preventDefault()} className='rounded shadow w-full bg-[white] max-w-[450px] mx-auto p-8 '>
                <img src="/logo3.png" alt="logo" className='w-[180px] m-auto mb-6' />
                <div className="input mb-3">
                    <label htmlFor="user" className='block py-2'>User Name</label>
                    <input type="text" name="username" ref={name}
                    className='outline-(--orange-color) rounded p-2 input-input
                    w-full
                    
                    placeholder:text-gray-300 ' 
                     placeholder='Enter your Name' id="user" />
                </div>
                <div className="input mb-5">
                    <label htmlFor="pass" className='block py-2'>Password</label>
                    <input type="password" name="password" ref={password}
                    className='outline-(--orange-color) rounded p-2 input-input
                    w-full
                    
                    placeholder:text-gray-300 ' 
                     placeholder='Enter your Name' id="pass" />
                </div>
               
            <button onClick={()=>sendData()}
            className='w-full mt-5 mb-5  text-white text-[20px] cursor-pointer duration-300 hover:scale-105 text-center p-3 rounded bg-(--orange-color)'
            > Login</button>
            </form>

        </div>
    )
}

export default page
