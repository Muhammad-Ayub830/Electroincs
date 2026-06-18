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
import {
  FaLightbulb,
  FaHandshake,
  FaBolt,
  FaShieldAlt,
  FaPlug,
  FaPalette,
  FaCloudSun,
  FaAward,
} from 'react-icons/fa'


const font = Inter({
  subsets: ['latin']
})
const page = () => {
  const { isclose, setClose, product } = useContext(NavContext)
  const features = [
    {
      title: 'LED SPARE PARTS LEADER',
      icon: <FaLightbulb />,
      description:
        'We are not just a lighting brand, we are a leading manufacturer of LED Light Spare Parts. Because we provide the LED Light Spare parts ourselves, we ensure every component meets the highest industry standards.',
    },
    {
      title: 'YOUR TRUSTED WHOLESALE PARTNER',
      icon: <FaHandshake />,
      description:
        'As a primary wholesaler, we offer professional-grade lighting and electrical solutions in bulk, providing unmatched value and reliability to businesses across the country.',
    },
    {
      title: 'ENERGY-EFFICIENT & COST-EFFECTIVE',
      icon: <FaBolt />,
      description:
        'Our LED technology is designed for maximum light output with minimal power consumption, helping you stay bright while keeping your bills low.',
    },
    {
      title: 'LONG-LASTING PERFORMANCE',
      icon: <FaShieldAlt />,
      description:
        'Reliability is our legacy. With advanced heat management and quality-tested manufacturing, our products are built to last for years.',
    },
    {
      title: 'COMPLETE POWER ECOSYSTEM',
      icon: <FaPlug />,
      description:
        'Our expertise doesn’t stop at lighting. We provide a complete range of energy solutions including HAQ Electrical Cables, HAQ Solar Inverters, and Original Italy Rods.',
    },
    {
      title: 'MODERN DESIGN',
      icon: <FaPalette />,
      description:
        'Our LED Bulbs, COB Spotlights, Downlights, and ICE Panels are designed with modern aesthetics to elevate the look of any interior or exterior setting.',
    },
    {
      title: 'WEATHER-RESISTANT & DURABLE',
      icon: <FaCloudSun />,
      description:
        'From residential rooms to industrial sites, our Flood Lights and outdoor products are designed to be weather-resistant and durable, providing clear, glare-free light in any environment.',
    },
    {
      title: 'TRUSTED HERITAGE SINCE 2000',
      icon: <FaAward />,
      description:
        'With decades of experience in the electrical industry, we have the technical expertise to support our customers with products that are both eco-friendly and high-performing.',
    },
  ]
  return (
    <div className={`${font.className}`}>



      {/* cards...... */}




      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white">
        {/* Background Effects */}


        <div className="relative z-10 mx-[4%] lg:mx-[6%]">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="px-4 py-2 rounded-full bg-orange-100 text-[var(--orange-color)] text-sm font-semibold border border-orange-200">        Why Industry Leaders Trust HAQ
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">        Lighting Innovation
              <span className="block text-(--orange-color)">
                Built For Performance
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">        For more than two decades we have delivered high-quality LED lighting,
              electrical products, and energy solutions trusted by wholesalers,
              contractors, businesses, and homeowners nationwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-(--orange-color)">
                25+
              </h2>
              <p className="text-gray-500 mt-2">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-(--orange-color)">
                1000+
              </h2>
              <p className="text-gray-500 mt-2">
                Products
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-(--orange-color)">
                500+
              </h2>
              <p className="text-gray-500  mt-2">
                Dealers
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-(--orange-color)">
                24/7
              </h2>
              <p className="text-gray-500 mt-2">
                Customer Support
              </p>
            </div>

          </div>

          {/* Cards */}
    
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

  {features.map((item, index) => (
    <div
      key={index}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-gray-100
        p-8
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        h-full
      "
      style={{
        borderColor: 'rgba(0,0,0,0.05)',
      }}
    >

      {/* Brand Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          pointer-events-none
        "
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--orange-color) 12%, white), transparent)',
        }}
      />

      {/* Number */}
      <span className="absolute top-6 right-6 text-5xl font-black text-gray-100">
        {(index + 1).toString().padStart(2, '0')}
      </span>

      {/* Icon */}
      <div
        className="
          relative
          w-20
          h-20
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
          text-[var(--orange-color)]
          mb-6
          shadow-md
          group-hover:scale-110
          group-hover:shadow-xl
          transition-all
          duration-500
        "
        style={{
          background:
            'linear-gradient(135deg, color-mix(in srgb, var(--orange-color) 18%, white), white)',
          border:
            '1px solid color-mix(in srgb, var(--orange-color) 25%, white)',
        }}
      >

        {/* Hover Glow Behind Icon */}
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            blur-xl
            opacity-0
            group-hover:opacity-30
            transition-all
            duration-500
          "
          style={{
            background: 'var(--orange-color)',
          }}
        />

        <span className="relative z-10">
          {item.icon}
        </span>

      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-gray-900 mb-4">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative text-gray-600 leading-7 text-sm">
        {item.description}
      </p>

    </div>
  ))}

</div>


        </div>

      </section>










    </div>
  )
}

export default page
