import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import test1 from "../../../assets/test-1.jpg";
import test2 from "../../../assets/test-2.jpg";
import test3 from "../../../assets/test-3.jpg";
import test4 from "../../../assets/test-4.jpg";
import test5 from "../../../assets/test-5.jpg";

export const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // একবারে ১টা ছবি দেখাও
    slidesToScroll: 1,
    arrows: false, // এখানে সঠিক key
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviewdata = [
    {
      img: test1,
      name: "albert twinson",
      post: "store owner",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: test2,
      name: "alex grind",
      post: "electrician",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: test3,
      name: "drew anderson",
      post: "android developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: test4,
      name: "alex brown",
      post: "web developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
    {
      img: test5,
      name: "james bond",
      post: "army officer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt fuga ducimus nostrum distinctio tempora soluta rem laborum dicta optio quas",
    },
  ];

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
      id="testimonials"
      className="w-full lg:px-20 px-5 py-[80px]  bg-gray-100 flex
    flex-col justify-center items-center gap-4 "
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-[#502ec3] text-xl font-semibold capitalize"
      >
        1300+ Customer reviews
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[30px] lg:text-[42px] leading-[50px] text-center capitalize"
      >
        Our customer love
      </h1>

      <div data-aos="zoom-in" data-aos-delay="200" className="w-full mt-10">
        <Slider className="w-full" {...settings}>
          {reviewdata.map((item, index) => (
            <div>
              <div
                key={index}
                className="w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-full w-[100px] m-auto"
                />
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-[#f5a60d]" />
                  <FaStar className="text-[#f5a60d]" />
                  <FaStar className="text-[#f5a60d]" />
                  <FaStar className="text-[#f5a60d]" />
                  <FaStar className="text-[#f5a60d]" />
                </div>
                <p className="text-center text-gray-500 text-lg ">
                  {item.para}
                </p>
                <div className="flex justify-center items-center gap-5">
                  <FaQuoteLeft className="text-[#502ec3] size-16" />
                  <div className="w-full flex flex-col justify-center items-start">
                    <h1 className="text-black text-xl capitalize font-semibold ">
                      {item.name}
                    </h1>
                    <h1 className="text-gray-500 capitalize">{item.post}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
