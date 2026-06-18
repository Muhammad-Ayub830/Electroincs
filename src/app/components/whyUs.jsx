'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 60, suffix: '+', label: 'Products Varieties' },
    { value: 1000, suffix: '+', label: 'Trusted Dealers' },
    { value: 24, suffix: '/7', label: 'Customer Support' },
  ]

  return (
    <section ref={ref} className="py-5 px-[4%]">

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="px-4 py-2 rounded-full  text-[var(--orange-color)] text-sm font-semibold border-b border-(--orange-color)]">
          Why Choose HAQ Electronics
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Powering Pakistan With
          <span className="block text-[var(--orange-color)]">
            Reliable Electrical Solutions
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Since 2000, HAQ Electronics has been delivering premium LED lighting,
          spare parts, electrical cables, solar inverters, and energy-efficient
          solutions trusted across Pakistan.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
              text-center
              border
              border-gray-100
              hover:shadow-lg
              transition-all
            "
          >
            <h3 className="text-4xl font-bold text-[var(--orange-color)]">
              {inView && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                />
              )}
              {item.suffix}
            </h3>

            <p className="text-gray-600 mt-2">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default WhyUs