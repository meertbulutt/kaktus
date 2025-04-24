"use client";

import Image from "next/image";
import Button from "./Button";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

const ImageCarousel = ({src,text,text1,text2}) => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-16 mt-24 px-3 md:px-6">
      {/* SOL TARAF */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2>
          <TextAnimation
            className={`text-2xl sm:text-3xl md:text-4xl text-kaktus-green-dark font-extrabold mb-4 lg:mb-16`}
            text={text}
          />
        </h2>

        <div className="mb-2 md:mb-4">
          <TextAnimation
            className={"text-[20px]"}
            text1={text1}
          />
        </div>

        <div className="text-[20px] text-[#51555b] mb-1 md:mb-8">
          <TextAnimation
            className={"text-[20px]"}
            text2={text2}
          />
        </div>

        <Button buttonText={"Menüyü İnceleyin"}/>
      </motion.div>

      {/* SAĞ TARAF */}
      <div className="w-[99%] h-[65vh] relative lg:w-2/3 lg:h-[620px]">
       <ImageSlider src={src} className={"container mx-auto relative w-full h-[600px] overflow-hidden"}/>
      </div>
    </section>
  );
};

export default ImageCarousel;
