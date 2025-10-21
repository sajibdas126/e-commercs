import Payment from "../../../assets/payment.png";
import Shipping from "../../../assets/shipping.png";
import Return from "../../../assets/return.png";
import Gift from "../../../assets/gift.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export const Services = () => {
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
    <div className="w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4">
      {/* cart-1 */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={Shipping} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Worldwide Shipping</h1>
        <p className="text-[17px text-gray-500]">
          Fast and Secure Worldwide Shipping
        </p>
      </div>
      {/* cart end */}
      {/* cart-2 */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={Payment} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Secure Payment</h1>
        <p className="text-[17px text-gray-500]">
          Safe and Secure Online Payment
        </p>
      </div>
      {/* cart end */}
      {/* cart-3 */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={Return} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Return/Refund</h1>
        <p className="text-[17px text-gray-500]">
          Easy Return and Refund Policy
        </p>
      </div>
      {/* cart end */}
      {/* cart-4*/}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={Gift} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold">Best Gift Voucher</h1>
        <p className="text-[17px text-gray-500]">
          Surprise Loved Ones With Vouchers
        </p>
      </div>
      {/* cart end */}
    </div>
  );
};
