"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Biggerbass = () => {
  const containerRef = useRef(null);

  // Scroll pozisyonunu takip et
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale dönüşümü
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <div className="w-full h-[35vh] md:h-screen md:mb-24 2xl:my-64">
      <div ref={containerRef} className="">
        {/* Video wrapper'ı scale ediyoruz */}
        <motion.div
          className="w-full md: h-full flex items-center justify-center"
          style={{ scale }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <video
            className="max-w-full max-h-full object-contain"
            src="/videos/buyuyen-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Biggerbass;
