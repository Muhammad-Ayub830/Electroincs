'use client'
import React, { useContext, useEffect } from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import { NavContext } from '../components/context/context'
import Image from 'next/image'
import { Inter, Outfit } from 'next/font/google'
import MessageCard from '../components/messageCard'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import PersonCard from '../components/card'
import Footer from '../components/footer'
const font = Inter({
  subsets: ['latin']
})
const page = () => {
  const { isclose, setClose, product } = useContext(NavContext)

  return (
    <div className={`${font.className}`}>
      <Header isclose={isclose} setClose={setClose} />
      <Navbar isclose={isclose} setClose={setClose} />
      {/* <div className="about-hero mx-[2%] lg:mx-[5%] mt-10  flex flex-col-reverse lg:flex-row gap-x-20">
        <div className="text-content  flex-1">
          <div className="heading text-6xl mt-20 font-bold mb-10 text-black">
           <span className='text-[#e9ae0d]'> Our</span> Story
          </div>
          <p className='mb-10 text-[#59595A] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium eveniet repellendus 
            possimus iusto? Eum perspiciatis, excepturi aspernatur 
            possimus iusto? Eum perspiciatis, excepturi aspernatur 
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!</p>
          <p  className='mb-10 text-[#59595A]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laudantium eveniet repellendus 
            possim
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!
            molestiae ratione vitae hic! Architecto iure autem possimus dolorum quas amet accusantium!</p>
        </div>
        <div className="graphics bg-white rounded-2xl lg:ml-auto flex-1 flex items-center justify-center">
          <Image src={'/favicon.png'} width={400} height={0}  />
        </div>
      </div> */}
      {/* cards...... */}
      <section class="achievements  mx-[2%] lg:mx-[5%]  mt-30">
        <div class="title mb-12">
          <div class="heading">
            <h1>
              <span class="specific">Why</span>Choose Us
            </h1>
          </div>
          <div class="description">
            <p>
              Our commitment to excellence has led us to achieve significant milestones
              along our journey. Here are some of our notable achievements
            </p>
          </div>
        </div>

        <div class="detail_in_cards">
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">LED SPARE PARTS LEADER</h5>
            </div>
            <div className="caption text-center p-3">
              <p>
                We are not just a lighting brand, we are a leading manufacturer of LED Light Spare Parts. Because we provide the LED Light Spare parts ourselves, we ensure every component meets the highest industry standards.
              </p>
            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">YOUR TRUSTED WHOLESALE PARTNER</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

                As a primary wholesaler, we offer professional-grade lighting and electrical solutions in bulk, providing unmatched value and reliability to businesses across the country.
              </p>
            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">ENERGY-EFFICIENT & COST-EFFECTIVE</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

Our LED technology is designed for maximum light output with minimal power consumption, helping you stay bright while keeping your bills low.              </p>
            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">LONG-LASTING PERFORMANCE</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

Reliability is our legacy. With advanced heat management and quality-tested manufacturing, our products are built to last for years.             </p>
            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">COMPLETE POWER ECOSYSTEM</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

Our expertise doesn’t stop at lighting. We provide a complete range of energy solutions Including HAQ Electrical Cables, HAQ Solar Inverters, and Original Italy Rods.            </p>
            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">MODERN DESIGN</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

Our LED Bulbs, COB Spotlights, Downlights, and ICE Panels are designed with modern aesthetics to elevate the look of any interior or exterior setting.      </p>
            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">WEATHER-RESISTANT & DURABLE</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

Our products are built for the real world.
From residential rooms to industrial sites, our Flood Lights and outdoor products are designed to be weather-resistant and durable, providing clear, glare-free light in any environment.
</p>            </div>
          </div>
          <div className="card   p-5  shadoww">
            <div className="label lg:my-4">
              <h5 className="mb-0  text-center text-lg font-semibold text-(--orange-color) ">TRUSTED HERITAGE SINCE 2000</h5>
            </div>
            <div className="caption text-center p-3">
              <p>

With decades of experience in the electrical industry, we have the technical expertise to support our customers with products that are both eco-friendly and high-performing.
</p>            </div>
          </div>


        
        </div>
      </section>

      {/* <!-- achievements section ends --/> */}

      {/* <section class="Our_Goals  mx-[2%] lg:mx-[5%] ">
        <div class="title mb-12">
          <div class="heading">
            <h1>
              <span class="specific">Our </span>Goals
            </h1>
          </div>
          <div class="description">
            <p class="text-base">
              At SkillBridge, our goal is to empower individuals from all backgrounds to
              thrive in the world of design and development. We believe that education
              should be accessible and transformative, enabling learners to pursue
              their passions and make a meaningful impact.

            </p>
          </div>
        </div>

        <div class="detail_in_cards pt-3">
          <div class="card  border-0">
            <div class="icon">
              <img src="/goal1.png" alt="" />
            </div>
            <div class="label my-4">
              <h5 class="mb-0">Provide Practical Skills</h5>
            </div>
            <div class="caption">
              <p>
                We focus on delivering practical skills that are relevant to the current
                industry demands. Our courses are designed to equip learners with the
                knowledge and tools needed to excel in their chosen field.
              </p>
            </div>
          </div>

          <div class="card  border-0">
            <div class="icon">
              <img src="/goal2.png" alt="" />
            </div>
            <div class="label my-4">
              <h5 class="mb-0">Foster Creative Problem-Solving</h5>
            </div>
            <div class="caption">
              <p>
                We encourage creative thinking and problem-solving abilities, allowing
                our students to tackle real-world challenges with confidence and
                innovation.
              </p>
            </div>
          </div>

          <div class="card  border-0">
            <div class="icon">
              <img src="/goal3.png" alt="" />
            </div>
            <div class="label my-4">
              <h5 class="mb-0">Promote Collaboration and Community</h5>
            </div>
            <div class="caption">
              <p>
                We believe in the power of collaboration and peer learning. Our platform
                fosters a supportive and inclusive community where learners can connect,
                share insights, and grow together.
              </p>
            </div>
          </div>

          <div class="card  border-0">
            <div class="icon">
              <img src="/card4.png" alt="" />
            </div>
            <div class="label my-4">
              <h5 class="mb-0">Stay Ahead of the Curve</h5>
            </div>
            <div class="caption">
              <p>
                The digital landscape is constantl evolving, and we strive to stay at
                the forefront of industry trends. We regularly update our course content
                to ensure our students receive the latest knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="grid my-20 grid-cols-[repeat(auto-fit,minmax(270px,1fr))] mx-[5%] gap-7.5 ">

        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />







      </div>


    </div>
  )
}

export default page
