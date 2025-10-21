import Banner1 from "../../../assets/banner1.jpg";
import Banner2 from "../../../assets/banner2.jpg";
import Banner3 from "../../../assets/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const Types = () => {
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
    <div className=" w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 justify-center items-start gap-10">
      {/* cart start-1 */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end
        gap-6 bg-cover bg-center p-10 rounded-lg "
        style={{ backgroundImage: `url(${Banner1})` }}
      >
        <h1 className="text-[#f5a60d] border rounded-lg border-[#f5a60d] px-6 py-2 text-lg">
          60% Off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold ">
          Wireless <br /> Devices
        </h1>
        <button className="bg-[#f5a60d] px-6 py-3 rounded-xl text-black font-semibold">
          SHOP NOW
        </button>
      </div>
      {/* cart end */}
      {/* cart start-2 */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end
        gap-6 bg-cover bg-center p-10 rounded-lg "
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <h1 className="text-[#f5a60d] border rounded-lg border-[#f5a60d] px-6 py-2 text-lg">
          60% Off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold ">
          Wired <br /> Earbuds
        </h1>
        <button className="bg-[#f5a60d] px-6 py-3 rounded-xl text-black font-semibold">
          SHOP NOW
        </button>
      </div>
      {/* cart end */}
      {/* cart start-3 */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-end
        gap-6 bg-cover bg-center p-10 rounded-lg "
        style={{ backgroundImage: `url(${Banner3})` }}
      >
        <h1 className="text-[#f5a60d] border rounded-lg border-[#f5a60d] px-6 py-2 text-lg">
          60% Off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold ">
          Smart <br /> 
          Watches
        </h1>
        <button className="bg-[#f5a60d] px-6 py-3 rounded-xl text-black font-semibold">
          SHOP NOW
        </button>
      </div>
      {/* cart end */}
    </div>
  );
};
