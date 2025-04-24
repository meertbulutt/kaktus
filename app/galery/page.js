"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TextAnimation from "@/components/TextAnimation";
import ImageSlider from "@/components/ImageSlider";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const images = [
    "/images/nargile.jpg",
    "/images/nargile.jpg",
    "/images/nargile.jpg",
    "/images/nargile.jpg",
    "/images/nargile.jpg",
    "/images/nargile.jpg",
    "/images/nargile.jpg",
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      prev();
    }, 100);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      next();
    }, 100);
  };

  useEffect(() => {
    if (modalOpen) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          next();
        }, 100);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [modalOpen]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Header />
      <ImageSlider
        src={"/images/galery-bg.jpg"}
        text={"HAKKIMIZDA SÖYLENECEK İLK SÖZ,SINIRSIZLIK OLMALI"}
        className={"w-full h-screen relative overflow-hidden"}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <TextAnimation
            className={"text-center tracking-wider text-lg sm:text-xl md:text-2xl my-8 sm:my-12 text-kaktus-green"}
            text={
              "Kaktüs Cafe Garden; yalnızca lezzetleriyle değil, aynı zamanda yaşattığı anlarla da hafızalarda iz bırakıyor. Her karede bir tebessüm, her masada sıcak bir anı gizli…"
            }
            text1={
              "Özenle dekore edilmiş mekanımızda geçirdiğiniz en güzel anları, galeri bölümümüzde yeniden keşfedin. Sevdiklerinizle paylaştığınız gülümsemeler, canlı atmosfer ve leziz sofralar artık sadece hafızanızda değil, sayfamızda da yerini alıyor."
            }
          />
        </div>
      </div>

      <div className="w-full flex justify-center px-2 sm:px-4">
        <div className="w-[1200px] scale-[0.95] sm:scale-100">
          {Array.from({ length: Math.ceil(images.length / 2) }).map((_, rowIndex) => {
            const i = rowIndex * 2;
            const bigFirst = rowIndex % 2 === 0;

            return (
              <div key={i} className="flex gap-4 mb-4">
                {[0, 1].map((offset) => {
                  const index = i + offset;
                  if (!images[index]) return null;
                  const isBig = (offset === 0 && bigFirst) || (offset === 1 && !bigFirst);
                  const width = isBig ? "w-[60%]" : "w-[40%]";

                  return (
                    <motion.div
                      key={index}
                      className={`${width} aspect-[4/4] relative cursor-pointer overflow-hidden rounded-lg bg-black`}
                      onClick={() => openModal(index)}
                      variants={fadeInVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Image
                        src={images[index]}
                        alt={`Image ${index}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {modalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 px-5 py-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 text-white text-4xl z-50"
            >
              &#10094;
            </button>

            <div className="relative w-[90vw] h-[80vh] z-40 overflow-hidden">
              <Image
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Image ${currentIndex}`}
                fill
                className={`object-contain transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setFade(true)}
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-5 py-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 text-white text-4xl z-50"
            >
              &#10095;
            </button>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-50"
            >
              &#10005;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
