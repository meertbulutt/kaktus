"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const BiggerBassPhoto = ({src}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen my-12 sm:my-16 md:my-20 lg:my-24">
      <div ref={containerRef} className="h-auto">
        <motion.div
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen relative"
          style={{ scale }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={`${src ? src : "/images/galery-bg.jpg"}`}
            alt="Scroll Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BiggerBassPhoto;
