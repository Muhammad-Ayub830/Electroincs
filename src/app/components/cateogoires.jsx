import React, { useContext, useEffect } from 'react'
import MainTitle from './mainTitle'
import Image from 'next/image'
import { NavContext } from './context/context'
import Reveal from './Reveal'

const Categories = () => {
  const { category, setCategory } = useContext(NavContext)

  useEffect(() => {
    console.log(category)
  }, [category])

  const categories = [
    {
      name: 'Cables',
      label: 'Cables',
      image: '/PowerFlex 1.5mm Copper Cable.png',
    },
    {
      name: 'Bulbs',
      label: 'Lights',
      image: '/led.png',
    },
    {
      name: 'Spare_Parts',
      label: 'Spare Parts',
      image: '/EcoGlow 12W LED Driver.png',
    },
    {
      name: 'Inverters',
      label: 'Inverters',
      image: '/SunVolt 1.5kVA Off-Grid Solar Inverter.png',
    },
    {
      name: 'Irons',
      label: 'Irons',
      image: '/w.png',
    },
  ]

  return (
    <Reveal>
      <div>
        <MainTitle title={'Categories'} />

        <div className="scroll-bar-category flex gap-6 overflow-x-auto px-[5%] py-8">

          {categories.map((item) => {
            const isSelected = category === item.name

            return (
              <div
                key={item.name}
                onClick={() =>
                  setCategory(isSelected ? 'All' : item.name)
                }
                className={`
                  shrink-0
                  cursor-pointer
                  transition-all
                  duration-300
                  rounded-3xl
                  p-6
                  min-w-[190px]
                  border-2
                  shadow-sm
                  hover:-translate-y-2
                  hover:shadow-xl
                  ${
                    isSelected
                      ? 'bg-[var(--orange-color)] border-[var(--orange-color)] scale-105'
                      : 'bg-white border-gray-200'
                  }
                `}
              >
                <div className="flex justify-center">
                  <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center shadow-md">
                    <Image
                      src={item.image}
                      width={90}
                      height={90}
                      alt={item.label}
                      className="object-contain"
                    />
                  </div>
                </div>

                <p
                  className={`
                    mt-5
                    text-center
                    text-lg
                    font-semibold
                    tracking-wide
                    transition-colors
                    ${
                      isSelected
                        ? 'text-white'
                        : 'text-gray-700'
                    }
                  `}
                >
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

export default Categories