import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from "../assets/MainLogo.svg";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-PrimaryColor text-black mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 pt-8 md:px-10">
        <div className="w-full md:w-1/4">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1 className=" font-medium text-xl  pb-4 pt-5 md:pt-0">Location</h1>
          <div className="flex flex-col gap-1">
            Arena Center, Air Albania Stadium,
            <span> Tirana, Albania</span>
          </div>
          <div className="mt-2">
            <Link to="/findus">
              <button className="bg-[#D9D9D9] text-black rounded-2xl px-3 py-1 hover:bg-gray-300">
                Directions
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <span>Email:contact@max.clinique.com</span>
            <span>Tel: +355 68 800 8083</span>
          </nav>
          <div className="flex mt-5 space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare
                size={30}
                className="hover:scale-110 cursor-pointer transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
