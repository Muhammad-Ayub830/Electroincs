'use client'
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { FaFacebook, FaLocationDot, FaMapLocation, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { NavContext } from "./context/context";

const font = Outfit({
  weight: ["400"],
  subsets: ["latin"]
});

const Footer = () => {
    const {setAdmin} = useContext(NavContext)
  return (
    <section className={`footer_section relative    ${font.className}`}>

      <div className=" px-[3%] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-5 md:py-12">
            <img src="oh.png" alt="" className='absolute w-110  top-0 right-0 -z-1' />

        {/* Logo & Contact */}
        <div className="logo_one font-semibold">
          <div className="icon w-full mb-4">
            <Image
              src="/logo3.png"
              alt="Skillbridge Logo"
              width={220}
              height={50}
            />
          </div>

          <a
            href="mailto:hello@skillbridge.com"
            className="mb-2 flex items-center"
          >
            <i className="fa-solid fa-envelope mr-2"></i>
            contact@haq.com
          </a>

          <a
            href="tel:+9191813232309"
            className="mb-2 flex items-center"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            03195343463
          </a>

          <span className="flex items-center capitalize">
            <i className="fa-solid fa-location-dot mr-2 capitalize"></i>
     <Link href={'https://maps.app.goo.gl/siZ5MCFNoShDQZ52A?g_st=iw'} >      shop# gj-08, deans commercial centre, cinema road, <br /> chowk yadgar, peshawar <FaLocationDot className="ml-2 inline-block" /></Link> 
          </span>
        </div>

        {/* Links Section */}
        <div className="link_section flex flex-col md:flex-row gap-10">

          {/* Home & About */}
          <div className="opps flex font-semibold">
            <div className="HOme_stack">
              <h2 className="text-lg mb-2 ">Home</h2>
              <p className="mb-1">Experites</p>
              <p className="mb-1">Maintainance Policy</p>
              <p className="mb-1">Our Testimonials</p>
              <p className="mb-1">Our FAQ</p>
            </div>

            <div className="AboutStack">
              <h2 className="text-lg mb-2">About Us</h2>
          <Link onClick={()=>setAdmin(true)} href={'/admin'} >   <p className="mb-1">Admin</p> </Link>
              <p className="mb-1">Achievements</p>
              <p className="mb-1">Our Goals</p>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="Profile_info_stack">
            <h2 className="text-lg mb-2 font-semibold">Social Profiles</h2>

            <div className="paths flex gap-2">
              <div className="please rounded">
              <Link href={'https://www.facebook.com/haq.6363'}>
                <FaFacebook className="cursor-pointer" />
              </Link>
              </div>  
              <div className="please rounded">
                <FaTwitter className="cursor-pointer" />
              </div>
              <div className="please rounded">
             <Link href={'https://api.whatsapp.com/send/?phone=%2B923112111163&text=I+am+interested&type=phone_number&app_absent=0'}>
             <FaWhatsapp className="cursor-pointer" />
             </Link>   
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full mt-6 text-gray-200" />

      <div className="copyright bg-(--orange-color) flex lg:flex-row flex-col items-center justify-between py-3 px-[5%]">
        <p className="text-white  order-2 lg:order-0 lg:text-md text-sm ">
          Haq.com © 2000-2023, All Rights Reserved
        </p>

        <div className="flex pt-2 ">
          <img src="/payment-1.png" alt=""/>
          <img src="/payment-2.png" alt=""/>
          <img src="/payment-3.png" alt=""/>
          <img src="/payment-4.png" alt=""/>
          <img src="/payment-5.png" alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Footer;
