"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Yemekler = () => {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const categoryName = pathname.split("/").pop();
    setSelectedCategory(categoryName);
  }, [pathname]);

  const foods = [
    { title: "Kahvaltı", path: "yemek/kahvalti", icon: "kahvaltilar-icon.svg" },
    { title: "Aperatifler", path: "yemek/aperatifler", icon: "aperatifler-icon.svg" },
    { title: "Wrapler", path: "yemek/wrap", icon: "mexican-icon.svg" },
    { title: "Tavuk Yemekleri", path: "yemek/tavuk-yemekleri", icon: "tavuk-yemekleri-icon.svg" },
    { title: "Makarnalar", path: "yemek/makarnalar", icon: "makarnalar-icon.svg" },
    { title: "Krepler", path: "yemek/krepler", icon: "krepler-icon.svg" },  
    { title: "Burgerler", path: "yemek/burgerler", icon: "burgerler-icon.svg" },
    { title: "Salatalar", path: "yemek/salatalar", icon: "salatalar-icon.svg" },
    { title: "Sağlıklı Kaseler", path: "yemek/saglikli-kaseler", icon: "saglikli-kaseler-icon.svg" },
    { title: "Ev Lezzetleri", path: "yemek/ev-lezzetleri", icon: "ev-lezzetleri-icon.svg" },
    { title: "Taş Fırın Lezzetleri", path: "yemek/tas-firin-lezzetleri", icon: "tas-firin-lezzetleri-icon.svg" },
    { title: "Pizzalar", path: "yemek/pizzalar", icon: "pizzalar-icon.svg" },
    { title: "Et Yemekleri", path: "yemek/et-yemekleri", icon: "et-yemekleri-icon.svg" },
    { title: "Tatlılar-Çerezler", path: "yemek/tatli-lezzetler", icon: "tatli-lezzetler-icon.svg" },
  ];

  return (
    <div 
      className="min-h-screen py-8 md:py-12 relative" 
      style={{
        backgroundImage: 'url("/images/marble-bg.png")',
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
              src="/images/logo.png"
              alt="Kaktus Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex justify-center items-center w-full mt-32 md:mt-40">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center w-full max-w-6xl mx-auto px-4">
            {foods.map((food, index) => (
              <motion.a
                key={food.path}
                href={food.path}
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
                    src={`/icons/yemekler-icon/${food.icon}`}
                    alt={food.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 md:w-20 md:h-20 object-contain transition-transform duration-200 group-hover:scale-110 filter-[invert(32%)_sepia(50%)_saturate(1000%)_hue-rotate(120deg)_brightness(30%)_contrast(100%)]"
                  />
                </motion.div>
                <span className="text-sm md:text-base font-light text-kaktus-green mt-3 text-center transition-all duration-200 group-hover:font-normal">
                  {food.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yemekler;
