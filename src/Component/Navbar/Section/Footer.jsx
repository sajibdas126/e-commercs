import React, { useEffect } from "react";
import client1 from "../../../assets/client1.png";
import client2 from "../../../assets/client2.png";
import client3 from "../../../assets/client3.png";
import client4 from "../../../assets/client4.png";
import client5 from "../../../assets/client5.png";
import client6 from "../../../assets/client6.png";
import google from "../../../assets/google.jpg";
import apple from "../../../assets/apple.jpg";
import pay1 from "../../../assets/pay-1.jpg";
import pay2 from "../../../assets/pay-2.jpg";
import pay3 from "../../../assets/pay-3.jpg";
import pay4 from "../../../assets/pay-4.jpg";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out", // এখানে 'easing' বানান ঠিক করলাম
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center "
    >
      {/* 1st box start hero */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-[#502ec3] lg:px-20 px-5 py-8 grid grid-cols-2 lg:grid-cols-6 justify-center items-center gap-10"
      >
        <img
          src={client1}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer"
        />
        <img
          src={client2}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer"
        />
        <img
          src={client3}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer"
        />
        <img
          src={client4}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer"
        />
        <img
          src={client5}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer"
        />
        <img
          src={client6}
          alt=""
          className="w-[130px] opacity-70 cursor-pointer"
        />
      </div>
      {/* 1st box End hero */}
      {/* 2nd box start hero */}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-5 grid-cols-1 justify-between items-start lg:gap-3 gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" flex flex-col justify-center items-start gap-10 grow "
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl font-bold text-[#502ec3] underline italic ">
              Electra Shop
            </h1>
            <h1 className="text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              aperiam facilis atque ullam pariatur.Nemo eligendi officiis
              exercitationem officia reprehenderit.
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-black text-xl font-semibold capitalize">
              Downlodad your app
            </h1>
            <div className="flex justify-center items-center gap-4">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className="text-black text-xl font-semibold capitalize">
            Useful Links
          </h1>
          <h1>
            <ul className="mt-8 flex flex-col justify-center items-start gap-2">
              <li className="text-gray-500 hover:text-black ">Home</li>
              <li className="text-gray-500 hover:text-black ">About</li>
              <li className="text-gray-500 hover:text-black ">Services</li>
              <li className="text-gray-500 hover:text-black ">Blogs</li>
              <li className="text-gray-500 hover:text-black ">Contact</li>
            </ul>
          </h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className="text-black text-xl font-semibold capitalize">
            Information
          </h1>
          <h1>
            <ul className="mt-8 flex flex-col justify-center items-start gap-2">
              <li className="text-gray-500 hover:text-black ">Return Policy</li>
              <li className="text-gray-500 hover:text-black ">
                Privacy Policy
              </li>
              <li className="text-gray-500 hover:text-black ">Refund Policy</li>
              <li className="text-gray-500 hover:text-black ">Agreement</li>
              <li className="text-gray-500 hover:text-black ">We Our Brand</li>
            </ul>
          </h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className="text-black text-xl font-semibold capitalize">
            Top Category
          </h1>
          <h1>
            <ul className="mt-8 flex flex-col justify-center items-start gap-2">
              <li className="text-gray-500 hover:text-black ">
                Wireless headphone
              </li>
              <li className="text-gray-500 hover:text-black ">
                Bluetooth speakers
              </li>
              <li className="text-gray-500 hover:text-black ">
                Portable devices
              </li>
              <li className="text-gray-500 hover:text-black ">
                Monio live camera
              </li>
              <li className="text-gray-500 hover:text-black ">
                Movie projector T6
              </li>
            </ul>
          </h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className="text-black text-xl font-semibold capitalize">
            Contact Info
          </h1>
          <h1>
            <ul className="mt-8 flex flex-col justify-center items-start gap-2">
              <li className="text-gray-500 hover:text-black ">
                Phone: +1 234 567 890
              </li>
              <li className="text-gray-500 hover:text-black ">
                Email: info@domain.com
              </li>
              <li className="text-gray-500 hover:text-black ">
                401 Broadway, 24th floor,
              </li>
              <li className="text-gray-500 hover:text-black ">
                orchard view, london, UK
              </li>
            </ul>
          </h1>
        </div>
      </div>
      {/* 2nd box End hero */}

      {/* 3rd box start hero */}
      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
          {/* Payment Images */}
          <div className="w-full lg:w-[30%] flex justify-center items-center gap-4 flex-wrap">
            <img src={pay1} alt="payment" className="w-10 rounded-lg" />
            <img src={pay2} alt="payment" className="w-10 rounded-lg" />
            <img src={pay3} alt="payment" className="w-10 rounded-lg" />
            <img src={pay4} alt="payment" className="w-10 rounded-lg" />
          </div>

          {/* Newsletter Section */}
          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4">
            <h1 className="text-black font-semibold text-2xl">
              Subscribe Newsletter
            </h1>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your valid email"
                className="lg:w-auto w-full px-6 py-3 rounded-l-lg border border-gray-300 outline-none"
              />
              <button className="bg-[#502ec3] lg:w-auto w-full text-white hover:bg-[#f5a60d] hover:text-black px-6 py-3 rounded-r-lg font-semibold">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:w-[20%] w-full">
            <p className="text-gray-500 text-[14px] lg:text-end text-center">
              © 2024 Power by Debug Entity
            </p>
          </div>
        </div>
      </div>
      {/* 3rd box End hero */}
       
       {/* scrol top button */}
       <div id="icon-box" className="bg-[#502ec3] text-white p-3 rounded-full hover:bg-amber-500 hover:text-black
       cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className="w-[35px] h-[35px]"/>
        </Link>
       </div>
    </div>
  );
};
