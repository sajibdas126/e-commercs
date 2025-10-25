import React, { useEffect } from "react";

import insta1 from "../../../assets/insta-1.jpg";
import insta2 from "../../../assets/insta-2.jpg";
import insta3 from "../../../assets/insta-3.jpg";
import insta4 from "../../../assets/insta-4.jpg";
import insta5 from "../../../assets/insta-5.jpg";
import insta6 from "../../../assets/insta-6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Insta = () => {
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
      className="w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col
  justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-[#502ec3] text-xl font-semibold capitalize "
      >
        Our instagram shop
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center capitalize "
      >
        Follow on instagram
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8"
      >
        <img src={insta1} className="rounded-lg " alt="" />
        <img src={insta2} className="rounded-lg " alt="" />
        <img src={insta3} className="rounded-lg " alt="" />
        <img src={insta4} className="rounded-lg " alt="" />
        <img src={insta5} className="rounded-lg " alt="" />
        <img src={insta6} className="rounded-lg " alt="" />
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="self-center bg-[#502ec3] hover:bg-[#f5a60d] text-white hover:text-black font-semibold px-10 py-3 rounded-lg mt-10 transition duration-300"
      >
        #ELECTRASHOP
      </button>
    </div>
  );
};
