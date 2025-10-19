import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../../../assets/headset.jpg";
import earbuds from "../../../assets/earbuds.jpg";
import dslr from "../../../assets/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
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
    <div
      id="hero"
      className="w-full flex justify-center items-center lg:h-[700px] h-[600px] overflow-hidden"
    >
      <Slider className="w-full" {...settings}>
        {/* Slide 1 */}
        <div>
          <div
            className="w-full h-[600px] lg:h-[700px] bg-cover bg-center flex justify-center items-center text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            DSLR Camera
          </div>
        </div>

        {/* Slide 2 */}
        <div>
          <div
            className="w-full h-[600px] lg:h-[700px] bg-cover bg-center flex justify-center items-center text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${headset})` }}
          >
            Headset
          </div>
        </div>

        {/* Slide 3 */}
        <div>
          <div
            className="w-full h-[600px] lg:h-[700px] bg-cover bg-center flex justify-center items-center text-white text-3xl font-bold"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <h1
              data-aos="Zoom-in"
              data-aos-delay="50"
              className="text-themyello border rounded-lg border-themeyellow px-6 py-2  text-xl"
            >
              Get upto Discounts 80% off
            </h1>
            <h1
              data-aos="Zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase"
            >
              DSLR 360 <br /> Camera
            </h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};
