"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Biggerbass = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  // Scroll pozisyonunu takip et
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale dönüşümü
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1.2, 1.2, 0.8]
  );

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen mb-16 sm:mb-20 md:mb-24 lg:mb-32">
      <div ref={containerRef} className="h-full w-full overflow-hidden">
        {/* Video wrapper'ı scale ediyoruz */}
        <motion.div
          className="w-full h-full flex items-center justify-center"
          style={{ scale }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <video
            ref={videoRef}
            src="https://kaktus2.b-cdn.net/yatay-kahvalti.mp4" // dış video URL'si buraya
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Biggerbass;
