'use client'

import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  FaFacebook,
  FaLocationDot,
  FaWhatsapp,
  FaEnvelope,
  FaPhone
} from "react-icons/fa6";
import { NavContext } from "./context/context";

const font = Outfit({
  weight: ["400"],
  subsets: ["latin"]
});

const Footer = () => {
  const { setAdmin } = useContext(NavContext);

  return (
    <footer
      className={`relative overflow-hidden bg-white border-t border-gray-200 mt-20 ${font.className}`}
    >
      <img
        src="/oh.png"
        alt=""
        className="absolute right-0 top-0 w-96 opacity-10 pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-[5%] py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Contact */}
          <div>
            <Image
              src="/logo3.png"
              alt="Haq Electronics"
              width={220}
              height={60}
              className="mb-6"
            />

            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for electrical equipment, cables,
              lighting solutions, spare parts and solar products.
            </p>

            <div className="space-y-4">

              <a
                href="mailto:contacts@haq1.com"
                className="flex items-center gap-3 text-gray-700 hover:text-[var(--orange-color)] transition-colors"
              >
                <FaEnvelope />
                <span>contacts@haq1.com</span>
              </a>

              <a
                href="tel:+923195343463"
                className="flex items-center gap-3 text-gray-700 hover:text-[var(--orange-color)] transition-colors"
              >
                <FaPhone />
                <span>0319 5343463</span>
              </a>

              <Link
                href="https://maps.app.goo.gl/siZ5MCFNoShDQZ52A?g_st=iw"
                className="flex items-start gap-3 text-gray-700 hover:text-[var(--orange-color)] transition-colors"
              >
                <FaLocationDot className="mt-1 shrink-0" />
                <span>
                  Shop #GF-08, Deans Commercial Centre,
                  Cinema Road, Chowk Yadgar,
                  Peshawar.
                </span>
              </Link>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Quick Links
            </h3>

            <div className="space-y-3 text-gray-600">

              <p className="hover:text-[var(--orange-color)] cursor-pointer transition-colors">
                Expertise
              </p>

              <p className="hover:text-[var(--orange-color)] cursor-pointer transition-colors">
                Maintenance Policy
              </p>

              <p className="hover:text-[var(--orange-color)] cursor-pointer transition-colors">
                Testimonials
              </p>

              <p className="hover:text-[var(--orange-color)] cursor-pointer transition-colors">
                FAQ
              </p>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Company
            </h3>

            <div className="space-y-3 text-gray-600">

              <Link
                href="/admin"
                onClick={() => setAdmin(true)}
                className="block hover:text-[var(--orange-color)] transition-colors"
              >
                Admin
              </Link>

              <p className="hover:text-[var(--orange-color)] cursor-pointer transition-colors">
                Achievements
              </p>

              <p className="hover:text-[var(--orange-color)] cursor-pointer transition-colors">
                Our Goals
              </p>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              Follow Us
            </h3>

            <p className="text-gray-600 mb-5">
              Stay connected with us on social media.
            </p>

            <div className="flex gap-4">

              <Link
                href="https://www.facebook.com/haq.6363"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--orange-color)] hover:text-white transition-all duration-300"
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=%2B923195343463&text=I+am+interested&type=phone_number&app_absent=0"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--orange-color)] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}

      <div className="bg-[var(--orange-color)]">

        <div className="max-w-[1400px] mx-auto px-[5%] py-4 flex flex-col lg:flex-row items-center justify-between gap-4">

          <p className="text-white text-sm text-center lg:text-left">
            © 2026 Haq Electronics. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">

            <img src="/payment-1.png" alt="" className="h-8" />
            <img src="/payment-2.png" alt="" className="h-8" />
            <img src="/payment-3.png" alt="" className="h-8" />
            <img src="/payment-4.png" alt="" className="h-8" />
            <img src="/payment-5.png" alt="" className="h-8" />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;