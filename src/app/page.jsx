'use client'
import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Offer from "./components/offer";
import { useContext } from "react";
import { NavContext } from "./components/context/context";

export default function Home() {
  const {isclose,setClose} = useContext(NavContext)
  return (
    <div className="mx-auto max-w-360 relative">
      <Header isclose={isclose} setClose={setClose} />
      <Navbar isclose={isclose} setClose={setClose} />
      <Hero/>
      <Offer/>
    </div>
  );
}
