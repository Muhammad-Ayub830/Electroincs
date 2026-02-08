'use client';

import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Offer from "./components/offer";
import { useContext } from "react";
import { NavContext } from "./components/context/context";
import Categories from "./components/cateogoires";
import BestDeal from "./components/bestDeal";
import NewRelease from "./components/newrealease";
import { Alfa_Slab_One, Orbitron, Outfit } from "next/font/google";
import OurProducts from "./components/ourProducts";
import Reveal from "./components/Reveal";
const font = Orbitron({
  subsets:["latin"],
  weight:["400"]
})
export default function Home() {
  const {isclose,setClose} = useContext(NavContext)
  return (
//     <div className="mx-auto max-w-360 relative">
//       <Header isclose={isclose} setClose={setClose} />
//       <Navbar isclose={isclose} setClose={setClose} />
//       <Hero/>
//       <Reveal>
// <Offer/>
//  <Categories/>
//       <OurProducts/>
//       <BestDeal/>
//       <NewRelease/>
//       </Reveal>
      
     
//     </div>
    
    <div className="p-3 locker flex items-center justify-center w-[100%] h-[100vh]">
     <div className="">
      <p className={` ${font.className} text-center tracking-widest text-6xl text-[#e6c409] `}>Coming Soon!</p>
      <p className={`${font.className} tracking-widest text-lg text-center mt-5 font-semibold text-[#d6b80c]`}>Our website will be available soon. Stay tuned!</p>
      
     </div>
    </div>
  );
}
