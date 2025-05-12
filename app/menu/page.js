"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";

const Menu = () => {
  const categories = [
    {
      title: "Yemekler",
      icon: "/images/menu.png",
      path: "/menu/yemek",
    },
    {
      title: "İçecek",
      icon: "/images/drinks.png",
      path: "/menu/icecek",
    },
    {
      title: "Nargile",
      icon: "/images/hookah.png",
      path: "/menu/nargile",
    },
    {
      title: "Ekstralar",
      icon: "/images/ekstralar.png",
      path: "/menu/ekstralar",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Background Image Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src="/images/kaktus-background.webp"
          alt="Menu Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Categories Section */}
      <div className="relative h-[60vh] md:h-[50vh] w-full">
        <Image
          src="/images/marble-bg.webp"
          alt="Marble Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative max-w-6xl mx-auto h-full flex items-center justify-center px-4 py-8 md:py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.a
                  href={category.path}
                  className="flex items-center justify-center p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full aspect-square max-w-[200px] border-2 border-transparent hover:border-kaktus-green"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={`${category.icon}`}
                    alt={category.title}
                    width={48}
                    height={48}
                    className="w-16 h-16 md:w-24 md:h-24 object-contain transition-transform duration-200 group-hover:scale-110 filter-[invert(32%)_sepia(50%)_saturate(1000%)_hue-rotate(120deg)_brightness(30%)_contrast(100%)]"
                  />
                </motion.a>
                <span className="text-base md:text-xl font-medium text-gray-800 mt-3 md:mt-4">
                  {category.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Menu;
