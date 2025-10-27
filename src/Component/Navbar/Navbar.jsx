import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaBars,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaXmark, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Products", path: "products" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full px-4 lg:px-16 py-2 bg-amber-500 lg:flex hidden justify-between items-center gap-6">
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaPhoneVolume className="text-[18px]" />
          <span>+91 890 929 0192</span>
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <FaMapMarkerAlt className="text-[18px]" />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </h1>
        <h1 className="text-sm font-semibold flex items-center gap-2">
          <MdEmail className="text-[18px]" />
          <span>electrashop@company.com</span>
        </h1>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-gray-100 flex justify-between items-center lg:px-16 px-6 py-5 sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-[#502ec3] font-bold lg:text-[30px] text-3xl underline italic">
          Electra Shop
        </h1>

        {/* Desktop Menu */}
        <ul className="lg:flex hidden justify-center items-center gap-10">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              smooth={true}
              duration={500}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-[#502ec3] hover:text-white"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Icons (Desktop) */}
        <div className="lg:flex hidden justify-center items-center gap-6 text-black">
          <FaSearch className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
          <IoPerson className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
          <FaHeart className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
          <FaShoppingCart className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 flex flex-col items-center gap-6 py-6 animate-fadeInDown">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="text-black text-base font-semibold uppercase hover:text-[#502ec3] cursor-pointer"
            >
              {link}
            </Link>
          ))}
          <div className="flex justify-center items-center gap-6 text-black">
            <FaSearch className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
            <IoPerson className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
            <FaHeart className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
            <FaShoppingCart className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[#502ec3]" />
          </div>
        </div>
      )}
    </>
  );
};
