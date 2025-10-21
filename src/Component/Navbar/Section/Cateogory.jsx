import AOS from "aos";
import "aos/dist/aos.css";
import Cat1 from "../../../assets/cat1.jpg";
import Cat2 from "../../../assets/cat2.jpg";
import Cat3 from "../../../assets/cat3.jpg";
import Cat4 from "../../../assets/cat4.jpg";
import Cat5 from "../../../assets/cat5.jpg";
import React, { useEffect } from "react";
export const Cateogory = () => {
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
    <div className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center gap-20">
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-[#502ec3] text-xl font-semibold text-center ">
          Favoritems item
        </h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] text-center">
          Popular Category
        </h1>
        <button className="bg-[#502ec3] hover:bg-[#f5a60d] text-white hover:text-black px-8 py-3">
          VIEW ALL
        </button>
      </div>

      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
        {/* cart1 start */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={Cat1} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-[#502ec3] cursor-pointer lg:text-center">
            Portable Speakers
          </h1>
        </div>
        {/* cart end */}
        {/* cart2 start */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={Cat2} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-[#502ec3] cursor-pointer lg:text-center">
            Air Conditioners
          </h1>
        </div>
        {/* cart end */}

        {/* cart3 start */}
        <div
          data-aos="zoom-in"
          data-aos-dely="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={Cat3} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-[#502ec3] cursor-pointer lg:text-center">
            EV Charging cable
          </h1>
        </div>
        {/* cart end */}

        {/* cart4 start */}
        <div
          data-aos="zoom-in"
          data-aos-dely="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={Cat4} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-[#502ec3] cursor-pointer lg:text-center">
            DVD Player solot
          </h1>
        </div>
        {/* cart end */}

        {/* cart5 start */}
        <div
          data-aos="zoom-in"
          data-aos-dely="100"
          className="flex flex-col justify-center items-center gap-6"
        >
          <img src={Cat5} alt="" className="rounded-full cursor-pointer" />
          <h1 className="text-black text-xl font-semibold hover:text-[#502ec3] cursor-pointer lg:text-center">
            360 Camera
          </h1>
        </div>
        {/* cart end */}
      </div>
    </div>
  );
};
