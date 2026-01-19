'use client'
import React, { useContext } from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import { NavContext } from '../components/context/context'
import Image from 'next/image'
import { Inter, Outfit } from 'next/font/google'
import MessageCard from '../components/messageCard'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
 const font = Inter({
    subsets:['latin']
  })
const page = () => {
  const {isclose,setClose} = useContext(NavContext)
 
  return (
    <div className={`${font.className}`}>
      <Header isclose={isclose} setClose={setClose} />
      <Navbar isclose={isclose} setClose={setClose} />
      <div className="about-hero mx-[5%] mt-10 p-5 flex flex-col-reverse lg:flex-row gap-x-20">
        <div className="text-content  flex-1">
          <div className="heading text-6xl mt-20 font-bold mb-10 text-black">
           <span className='text-orange-500'> Our</span> Story
          </div>
          <p className='mb-10  font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium eveniet repellendus 
            possimus iusto? Eum perspiciatis, excepturi aspernatur 
            possimus iusto? Eum perspiciatis, excepturi aspernatur 
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!</p>
          <p  className='mb-10  font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium eveniet repellendus 
            possim
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!</p>
        </div>
        <div className="graphics bg-white rounded-2xl ml-auto flex-1 flex items-center justify-center">
          <Image src={'/logo.png'} width={400} height={0}  />
        </div>
      </div>
      {/* cards...... */}
      <div className="grid mt-20 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-[5%] gap-3">
      <MessageCard  />
      <MessageCard/>
      <MessageCard/>
      <MessageCard/>
      </div>
      <div className="grid my-20 grid-cols-[repeat(auto-fit,minmax(370px,1fr))] mx-[5%] gap-7.5 ">
     <div className="person">
        <div className="image pt-5 px-10 bg-gray-300 text-center">
          <Image src={'/found.png'} width={236} height={0} className='m-auto h-[391px]' />
        </div>
        <p className='text-2xl mt-4'>Found and CEO</p>
        <p className='text-md text-gray-700 mb-2'>Haji Gul kHan</p>
        <div className="icons flex gap-3">
          <FaTwitter/><FaInstagram/><FaLinkedin/>
        </div>
      </div>
     <div className="person">
        <div className="image pt-5 px-10 bg-gray-300 text-center">
          <Image src={'/productdesigner.png'} width={236} height={0} className='m-auto h-[391px]' />
        </div>
        <p className='text-2xl mt-4'>Found and CEO</p>
        <p className='text-md text-gray-700 mb-2'>Haji Gul kHan</p>
        <div className="icons flex gap-3">
          <FaTwitter/><FaInstagram/><FaLinkedin/>
        </div>
      </div>
     <div className="person">
        <div className="image pt-5 px-10 bg-gray-300 text-center">
          <Image src={'/managingdirector.png'} width={236} height={0} className='m-auto h-[391px]' />
        </div>
        <p className='text-2xl mt-4'>Found and CEO</p>
        <p className='text-md text-gray-700 mb-2'>Haji Gul kHan</p>
        <div className="icons flex gap-3">
          <FaTwitter/><FaInstagram/><FaLinkedin/>
        </div>
      </div>

      </div>

      
    </div>
  )
}

export default page
