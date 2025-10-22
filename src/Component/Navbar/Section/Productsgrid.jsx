import { MdOutlineRemoveRedEye, MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart, FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { products } from "../../../export";

// Safe RatingStars Component
const RatingStars = ({ rating }) => {
  // rating undefined/null হলে 0 নেবে, clamp 0–5
  const safeRating = Math.min(Math.max(rating || 0, 0), 5);
  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar === 1 && <FaStarHalfAlt key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

export const Productsgrid = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      {/* Section Title */}
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-[#502ec3] text-xl text-center font-semibold"
      >
        Browse Collection
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[38px] leading-[46px] text-center"
      >
        Trending Products
      </h1>

      {/* Product Grid */}
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-8 mt-10"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-center items-center gap-2 bg-white p-5 rounded-xl cursor-pointer relative shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-md w-full h-[220px] object-cover"
            />

            {/* Hover Icons */}
            <div className="absolute top-[20px] right-[20px] hidden group-hover:flex gap-3 transition duration-300">
              <div className="bg-[#502ec3] hover:bg-[#f5a60d] hover:text-black rounded-full p-3 text-white transition duration-300">
                <MdOutlineRemoveRedEye />
              </div>
              <div className="bg-[#502ec3] hover:bg-[#f5a60d] hover:text-black rounded-full p-3 text-white transition duration-300">
                <FaRegHeart />
              </div>
              <div className="bg-[#502ec3] hover:bg-[#f5a60d] hover:text-black rounded-full p-3 text-white transition duration-300">
                <MdAddShoppingCart />
              </div>
            </div>

            {/* Product Info */}
            <h1 className="text-gray-500 text-sm font-medium mt-4">
              {item.category}
            </h1>
            <h1 className="text-xl text-black font-semibold">{item.name}</h1>
            <h1 className="text-lg text-[#502ec3] font-semibold">
              {item.price}
            </h1>

            {/* Rating & Sale */}
            <div className="w-full mt-3">
              <hr className="text-gray-300" />
              <div className="flex justify-between items-center gap-6 mt-3">
                <RatingStars rating={item.rating} />
                <button className="bg-green-500 px-4 py-1 text-white rounded-md font-semibold text-[12px]">
                  SALE 14%
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="self-center bg-[#502ec3] hover:bg-[#f5a60d] text-white hover:text-black font-semibold px-10 py-3 rounded-lg mt-10 transition duration-300"
      >
        VIEW MORE
      </button>
    </div>
  );
};
