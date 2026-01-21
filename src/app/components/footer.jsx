import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer_section bg-white pb-10 lg:px-[5%]">
      <div className="wrapper container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 p-5 md:p-12">

        {/* Logo & Contact */}
        <div className="logo_one">
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
            +91 91813 23 2309
          </a>

          <span className="flex items-center">
            <i className="fa-solid fa-location-dot mr-2"></i>
            Somewhere in the World
          </span>
        </div>

        {/* Links Section */}
        <div className="link_section flex flex-col md:flex-row gap-10">

          {/* Home & About */}
          <div className="opps flex">
            <div className="HOme_stack">
              <h2 className="text-lg mb-2 text-black">Home</h2>
              <p className="mb-1">Experites</p>
              <p className="mb-1">Maintainance Policy</p>
              <p className="mb-1">Our Testimonials</p>
              <p className="mb-1">Our FAQ</p>
            </div>

            <div className="AboutStack">
              <h2 className="text-lg mb-2">About Us</h2>
              <p className="mb-1">Company</p>
              <p className="mb-1">Achievements</p>
              <p className="mb-1">Our Goals</p>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="Profile_info_stack">
            <h2 className="text-lg mb-2">Social Profiles</h2>

            <div className="paths flex gap-2">
             <div className="please  rounded">
              <FaFacebook className="  cursor-pointer" />
              </div>  
              <div className="please  rounded">
              <FaTwitter className=" cursor-pointer" />

              </div>
              <div className="please rounded">
              <FaWhatsapp className=" cursor-pointer" />

              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full my-6" />

      <div class="copyright container mx-auto md:flex items-center justify-between">
  <p class="text-gray-500 font-bold text-center">
    Haq.com © 2000-2023, All Rights Reserved
  </p>

  <div class="tags flex gap-2 justify-center md:justify-end mt-4 md:mt-0">
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
