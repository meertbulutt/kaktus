"use client";
import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./customArrows";
import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";

const HalfHeroSection = () => {
    const text = "Adana’nın en canlı noktalarından birinde konumlanan Kaktüs Cafe Garden, ulaşım kolaylığı, samimi atmosferi ve eşsiz lezzetleriyle sizleri bekliyor. Sevdiklerinizle keyifli anlar geçirmek ya da günün yorgunluğunu nefis bir kahve eşliğinde atmak için ideal bir durak olan Kaktüs Cafe Garden, şehirdeki lezzet arayışınıza unutulmaz bir yanıt veriyor."
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
    dotsClass: "slick-dots slick-thumb",
  };

  const videos = ["/videos/", "/videos/hero-video3.mp4"];

  return (
    <>
      <main className="w-full h-[70vh] relative overflow-hidden">
        <Slider {...settings}>
          {videos.map((videoSrc, index) => (
            <div key={index} className="w-full h-[70vh] relative">
              <video
                className="w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className="text-white text-3xl md:text-3xl text-center"
                >
                  YEŞİLİN İÇİNDE, TATLARIN EN GÜZELİ: KAKTÜS CAFE GARDEN...
                </motion.h1>
              </div>
            </div>
          ))}
        </Slider>
      </main>
      <section className="text-2xl lg:text-3xl container mx-auto text2xl lg:py-24 text-kaktus-green">
        <div className="p-8 lg:px-42 flex flex-col justify-center items-center">
          <span className="w-full lg:w-[80%]">
            <TextAnimation
              className={"text-center tracking-wider"}
              text={text}
            />
          </span>
        </div>
      </section>
    </>
  );
};

export default HalfHeroSection;
