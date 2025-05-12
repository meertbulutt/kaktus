"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Drinks = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const drinks = [
    { title: "Sıcak İçecekler", path: "menu/icecek/sicak-icecekler", icon: "/images/sicak-icecekler-icon.png" },
    { title: "Soğuk Kahveler", path: "menu/icecek/soguk-kahveler", icon: "/images/soguk-kahveler-icon.png" },
    { title: "Frappeler", path: "menu/icecek/frappeler", icon: "/images/frappeler-icon.png" },
    { title: "Frozen Çeşitleri", path: "menu/icecek/frozen-cesitleri", icon: "/images/frozen-cesitleri-icon.png" },
    { title: "Soft İçecekler", path: "menu/icecek/soft-icecekler", icon: "/images/soft-icecekler-icon.png" },
    { title: "Milkshake", path: "menu/icecek/milkshake", icon: "/images/milkshake-icon.png" },
    { title: "Vitamin Bar", path: "menu/icecek/vitamin-bar", icon: "/images/vitamin-bar-icon.png" },
    { title: "Redbull Çeşitleri", path: "menu/icecek/redbull-cesitleri", icon: "/images/redbull-cesitleri-icon.png" }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className="min-h-screen py-8 md:py-12 relative" 
      style={{
        backgroundImage: 'url("/images/marble-bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-0 md:px-4">
        <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <Link 
            href="/menu" 
            className="fixed top-4 sm:top-6 md:top-8 lg:top-12 left-4 sm:left-6 md:left-8 lg:left-12 z-50 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-kaktus-green transition-transform duration-200 group-hover:scale-110" />
          </Link>
        </div>

        <div className="absolute top-4 right-0 md:right-4 z-10">
          <Link href="/" className="relative w-48 md:w-64 h-24 md:h-32 block">
            <Image
              src="/images/logo.webp"
              alt="Kaktus Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex justify-center items-center w-full mt-32 md:mt-40">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center w-full max-w-6xl mx-auto px-4">
            {drinks.map((drink, index) => (
              <motion.a
                key={drink.path}
                href={`/${drink.path}`}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-24 h-24 md:w-32 md:h-32 border-2 border-transparent hover:border-kaktus-green"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={`${drink.icon}`}
                    alt={drink.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 md:w-20 md:h-20 object-contain transition-transform duration-200 group-hover:scale-110 filter-[invert(32%)_sepia(50%)_saturate(1000%)_hue-rotate(120deg)_brightness(30%)_contrast(100%)]"
                  />
                </motion.div>
                <span className="text-sm md:text-base font-light text-kaktus-green mt-3 text-center transition-all duration-200 group-hover:font-normal">
                  {drink.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
