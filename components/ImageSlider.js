"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageSlider = ({ className, text ,src}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${
        className
          ? className
          : "container mx-auto relative w-[95%] lg:w-[99%] h-[600px] my-32 overflow-hidden"
      }`}
    >
      {/* DOLAN YEŞİL BACKGROUND */}
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full bg-kaktus-green z-0 rounded-md"
      />

      {/* GÖRSEL */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
              }
            : {}
        }
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-10 rounded-md overflow-hidden shadow-lg"
      >
        <Image
          src={`${src ? src : "/images/galery-bg.jpg"}`}
          alt="Scroll Image"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* ORTADAKİ ANİMASYONLU YAZI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-30"
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-white text-3xl md:text-3xl text-center"
        >
          {text}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
