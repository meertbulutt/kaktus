"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VideoSlider = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay hatası:", err);
      });
    }
  }, []);  
  return (
    <main className="w-full relative overflow-hidden">
      <div className="w-full h-screen relative">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dpcemurle/video/upload/v1746105297/s5yeqvofehjhfpjgwonw.mp4" // dış video URL'si buraya
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
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
      <script src="https://player.vimeo.com/api/player.js"></script>

      {/* <Slider {...settings}>
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
          
          </div>
        ))}
      </Slider> */}
    </main>
  );
};

export default VideoSlider;
