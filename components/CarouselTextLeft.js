"use client";

import Image from "next/image";
import Slider from "react-slick";
import TextAnimation from "./TextAnimation";
import { NextArrowLeft, PrevArrowLeft } from "./customArrowLeft";

const CarouselTextLeft = ({ src,src1, text, text1 ,text2}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowLeft />,
    prevArrow: <PrevArrowLeft />,
  };

  return (
    <section className="flex p-3 2xl:px-4 flex-col 2xl:flex-row justify-center items-center">
      <div className="w-[100%] 2xl:relative 2xl:h-fit">
        <div className="hidden 2xl:block absolute 2xl:w-[620px] 2xl:h-[620px] bg-kaktus-green"></div>

        {/* Image Carousel */}
        <div className="w-full 2xl:w-[620]">
          <Slider
            {...settings}
            className="absolute 2xl:-top-10 2xl:left-10 overflow-hidden flex items-center justify-center"
          >
            <div>
              <Image
                src={src || "/images/lahmacun.png"}
                width={620}
                height={620}
                alt="Görsel 1"
                className="object-cover w-[100%] h-[340px] 2xl:w-[620px] 2xl:h-[620px]"
              />
            </div>
            <div>
              <Image
                src={src1 || "/images/lahmacun.jpg"}
                width={620}
                height={620}
                alt="Görsel 2"
                className="object-cover w-[100%] h-[340px] 2xl:w-[620px] 2xl:h-[620px]"
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="w-[100%] 2xl:w-ful flex flex-col">
        <h2>
          <TextAnimation
            className={"text-4xl text-kaktus-green-dark font-extrabold mb-12 xl:mb-16"}
            text={text}
          />
        </h2>
        <div>
          <div className="text-[20px] text-[#51555b] mb-4">
            <TextAnimation
              text1={text1}
            />
          </div>
          <div className="text-[20px] text-[#51555b]">
            <TextAnimation
              text2={text2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselTextLeft;
