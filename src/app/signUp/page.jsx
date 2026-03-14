'use client'
import AdminNav from '@/app/components/adminNav'
import { Outfit } from 'next/font/google'
import React, { useRef, useState } from 'react'
import "../admin/admin.css"
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
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
     const sendData  = async ()=>{
        const data = {
            username : name,
            password,
            email
        }
            try {
                const res = await axios.post(`${backendUrl}signUp`,data,{
                withCredentials : true
            })
           console.log(res.data)
            router.push(res.data.redirect)
            
            } catch (error) {
               console.log(error)
            }
            
            
     }
    return (
        <div className={` ${font.className} p-[5%] `}>
            
            <form onSubmit={(e)=>e.preventDefault()} className='rounded-lg shadow w-full bg-[white] max-w-[450px] mx-auto p-8 '>
                <img src="/logo3.png" alt="logo" className='w-[180px] m-auto mb-6' />
                <div className="input mb-3">
                    <label htmlFor="user" className='block py-2'>User Name</label>
                    <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)}
                    className='outline-(--orange-color) rounded p-2 input-input
                    w-full
                    
                    placeholder:text-gray-300 ' 
                     placeholder='Enter your Name' id="user" />
                </div>
                <div className="input mb-3">
                    <label htmlFor="user" className='block py-2'>Email</label>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                    className='outline-(--orange-color) rounded p-2 input-input
                    w-full
                    
                    placeholder:text-gray-300 ' 
                     placeholder='Enter your Email' id="user" />
                </div>
                <div className="input mb-5">
                    <label htmlFor="pass" className='block py-2'>Password</label>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                    className='outline-(--orange-color) rounded p-2 input-input
                    w-full
                    
                    placeholder:text-gray-300 ' 
                     placeholder='Enter your Password' id="pass" />
                                         <label onClick={()=>router.push("/admin/login")} className='block py-2 text-sm text-gray-400 hover:text-blue-600 duration-300 cursor-pointer '>have an account?</label>

                </div>
               
            <button onClick={()=>sendData()}
            className='w-full mt-5 mb-5  text-white text-[20px] cursor-pointer duration-300 hover:scale-105 text-center p-3 rounded bg-(--orange-color)'
            > Sign Up</button>
            </form>

        </div>
    )
}

export default page
