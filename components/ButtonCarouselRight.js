"use client"

import Image from "next/image"
import Slider from "react-slick"
import { NextArrow2, PrevArrow2 } from "./customArrow2";
import Button from "./Button";
import TextAnimation from "./TextAnimation";

const ButtonCarouselRight = ({src,src2,text,text1,text2}) => {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow2 />,
    prevArrow: <PrevArrow2 />,
  };

  return (
    <section className="px-3 flex flex-col-reverse lg:flex-row lg:px-o justify-center items-center xl:mt-24">
        <div className="mr-8 px-3 2xl:px-40">
          <div>
           <TextAnimation className={`text-3xl xl:text-4xl text-kaktus-green-dark font-extrabold mb-4 lg:mb-16`} text={text}/>
          </div>
          <div className="text-[20px] text-[#51555b] mb-4">
           <TextAnimation text1={text1}/>
          </div>
          <div className="text-[20px] text-[#51555b]">
            <TextAnimation text2={text2}/>
          </div>
          <Button buttonText="Menüyü İnceleyin"/>
        </div>

        <div className="w-auto relative xl:mr-10 mt-24 2xl:mt-0">
          <div className="absolute w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620] bg-kaktus-green rounded-md"></div>

          {/* Image Carousel */}
          <div className="mb-4 lg:mb-0 w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620]">
            <Slider
              {...settings2}
              className="absolute -top-5 right-5 md:-top-10 md:right-10 overflow-hidden flex items-center justify-center rounded-md"
            >
              <div>
                <Image
                 src={`${src ? src : "/images/image-1.png"}`}
                  width={620}
                  height={620}
                  alt="Görsel 1"
                  className="object-cover w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620]"
                />
              </div>
              <div>
                <Image
                 src={`${src2 ? src2 : "/images/lahmacun.jpg"}`}
                  width={620}
                  height={620}
                  alt="Görsel 2"
                  className="object-cover w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
  )
}

export default ButtonCarouselRight