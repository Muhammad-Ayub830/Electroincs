import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Offer from "./components/offer";

export default function Home() {
  return (
    <div className="mx-auto max-w-360">
      <Header />
      <Navbar/>
      <Hero/>
      <Offer/>
    </div>
  );
}
