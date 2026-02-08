'use client'
import React, { useContext, useState } from 'react'
import Navbar from '../components/navbar'
import { NavContext } from '../components/context/context'
import Header from '../components/header'
import { Inter, Outfit } from 'next/font/google'
import Btn from '../components/btn'
 const font = Inter({
    subsets : ['latin'],
    weight : ['400']
  })
const page = () => {
  
  const {isclose,setClose} = useContext(NavContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className={`${font.className}`} >
      <Header isclose={isclose} setClose={setClose}/>
      <Navbar isclose={isclose} setClose={setClose}/>
      <div className={`  contact-heading  text-white lg:p-20 p-10 flex items-center justify-center flex-col gap-5 `}>
          <h3 className='text-2xl'>Corporate Lighting Solutions </h3>
          <h1 className='lg:text-6xl text-5xl '>Conatact <span className="text-[#e9ae0d]">Us</span></h1>
          <h4>Home / Contact Us</h4>
      </div>
      <div className="min-h-screen mt-10 bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        
        {/* Left Info Section */}
        <div className="bg-white p-8 md:w-1/2">
          <h2 className="text-[#e9ae0d] font-bold text-2xl mb-6">
            GET IN TOUCH: REACH OUT TO PAKLITE LED LIGHTING
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">For Complaints</h3>
            <p className="text-gray-700">+92-317-8880020</p>
            <hr className="my-2" />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">For Information:</h3>
            <p className="text-gray-700">+92-3111 444 805</p>
            <hr className="my-2" />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">PTCL</h3>
            <p className="text-gray-700">+92-55-4272890-3</p>
            <hr className="my-2" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Opening Hour:</h3>
            <p className="text-gray-700">Sat - Thurs: 9:00 am to 5:00 pm</p>
            <p className="text-gray-700">Friday Closed.</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-gray-50 p-8 md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 ">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ae0d]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 ">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ae0d]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 ">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ae0d]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 ">Your message (optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ae0d]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e9ae0d] text-white px-6 py-3 rounded focus:ring-[#e9ae0d] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* location */}
    <div className=" p-[1%] mt-10">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353468.0440813778!2d71.56547024999998!3d33.97729305000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Pakistan!5e1!3m2!1sen!2s!4v1770542908231!5m2!1sen!2s" 
     allowFullScreen loading="lazy" height={700} referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
    </div>
   
    </div>
  )
}

export default page
