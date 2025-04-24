"use client";

import Image from "next/image";
import Slider from "react-slick";
import { NextArrow2, PrevArrow2 } from "./customArrow2";
import TextAnimation from "./TextAnimation";

const CarouselTextRight = ({ src, text, text1, text2 }) => {
  const settings2 = {
    dots: true, // Dots'u aktif ettik
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow2 />,
    prevArrow: <PrevArrow2 />,
    customPaging: function (i) {
      return <div className="image-dot"></div>;
    },
    dotsClass: "image-dots image-thumb"
  };

  return (
    <section className="flex justify-center items-center mt-24">
      <div className="mr-8 px-40">
        <h2 className="text-4xl text-kaktus-green-dark font-extrabold mb-16">
          {text}
        </h2>
        <div className="text-[20px] text-[#51555b] space-y-4">
          <div>
            <TextAnimation
              text1={text1}
            />
          </div>
          <div>
            {text2}
          </div>
        </div>
      </div>

      <div className="relative h-fit mr-10">
        <div className="absolute w-[620px] h-[620px] bg-kaktus-green rounded-md"></div>

        {/* Image Carousel */}
        <div className="w-[620px]">
          <Slider
            {...settings2}
            className="absolute -top-10 right-10 overflow-hidden flex items-center justify-center rounded-md"
          >
            <div>
              <Image
                src={`${src ? src : "/images/image-1.png"}`}
                width={620}
                height={620}
                alt="Görsel 1"
                className="object-cover w-[620px] h-[620px]"
              />
            </div>
            <div>
              <Image
                src={`${src ? src : "/images/image-1.png"}`}
                width={620}
                height={620}
                alt="Görsel 2"
                className="object-cover w-[620px] h-[620px]"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CarouselTextRight;
