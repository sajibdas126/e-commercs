import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import deal from "../../../assets/deal-bg.jpg";

export const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // একবারে ১টা ছবি দেখাও
    slidesToScroll: 1,
    arrows: false, // এখানে সঠিক key
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out", // এখানে 'easing' বানান ঠিক করলাম
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 py-[80px]">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3"
        style={{ backgroundImage: `url(${deal})` }}
      >
        <h1 className="text-[#f5a60d] text-xl font-semibold">
          Every day shopping
        </h1>
        <h1 className="text-white font-bold text-[42px] leading-[50px] text-center">
          Deal of the Day
        </h1>
        {/* Shop now button */}
        <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="self-center bg-[#f5a60d] hover:bg-white text-white hover:text-black font-semibold px-10 py-3 rounded-lg mt-10 transition duration-300"
      >
        SHOPE NOW
      </button>
      </div>
    </div>
  );
};
