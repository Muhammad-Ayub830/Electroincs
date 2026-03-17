'use client'
import AdminNav from '@/app/components/adminNav'
import { Outfit } from 'next/font/google'
import React, { useRef, useState } from 'react'
import '../admin.css'
import backendUrl from '@/app/backendurl'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const font = Outfit({
    subsets  : ["latin"],
    weight: ["400"]
})
const page = () => {
    const router = useRouter()
    const [loading,setloading] = useState(false)

    // sending data 
    const name = useRef()
    const password = useRef()
     const sendData  = async ()=>{
        setloading(true)
        const data = {
            username : name.current.value,
            password : password.current.value
        }
            try {
                const res = await axios.post(`${backendUrl}login`,data,{
                withCredentials : true
            })
           console.log(res.data)
            router.push(res.data.redirect)
            
            }catch (error) {
                name.current.value = "";
            password.current.value = "";
                console.log(error)
            } finally{
                setloading(false)
            }
            
            
     }
    return (
        <div className={` ${font.className} p-[5%] `}>
            
            <form onSubmit={(e)=>e.preventDefault()} className='rounded shadow w-full bg-[white] max-w-[450px] mx-auto p-8 '>
         <Link href={'/'} className='m-auto mb-6 block flex items-center justify-center' >
         <img src="/logo3.png" alt="logo" className='w-[180px]  ' />
         </Link>       
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
                 <Link href={'/signUp'}   ><label  className='block py-2 text-sm text-[#444] hover:text-blue-700 duration-300'>Don't have account?</label></Link>     

                </div>
               
            <button onClick={()=>sendData()}
            className={`w-full mt-5 mb-5  text-white text-[20px]
             cursor-pointer duration-300  text-center p-3 rounded bg-(--orange-color) ${loading ? 'bg-(--orange-shade)' : '' } duration-300`}
          
          > { loading ? 'Logging In' : 'Login' }</button>
            </form>

        </div>
    )
}

export default page
