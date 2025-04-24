"use client";

import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./customArrows";
import { motion } from "framer-motion";

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb"
  };

  const videos = ["/videos/hero-video3.mp4", "/videos/hero-video3.mp4"];

  return (
    <main className="w-full relative overflow-hidden">
      <Slider {...settings}>
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className="w-full h-[50vh] sm:h-[80vh] md:h-[90vh] lg:h-screen relative"
          >
            <video
              className="w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-w-[90%] sm:max-w-[80%]"
              >
                YEŞİLİN İÇİNDE, TATLARIN EN GÜZELİ: KAKTÜS CAFE GARDEN...
              </motion.h1>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default VideoSlider;
