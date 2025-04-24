"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SlideAnimation = ({text}) => {
  return useEffect(() => {
      AOS.init({
        duration: 1000, // Animasyon süresi
        once: false, // Animasyon sadece bir kez yapılacak
      });
    }, []);
  
    return (
      <div className="h-[200vh]">
        <p>lorem</p>
        <div
          data-aos="fade-up" // AOS animasyon tipi
          className="p-5 bg-gray-300 m-5 rounded-md"
        >
          <h2 className="text-3xl font-bold">
            {text}
          </h2>
        </div>
      </div>
    );;
};

export default SlideAnimation;
