"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";

const Menu = () => {
  const categories = [
    {
      title: "Menü",
      icon: "menu.svg",
      path: "/menu/yemek"
    },
    {
      title: "İçecek",
      icon: "drinks.svg",
      path: "/menu/icecek"
    },
    {
      title: "Nargile",
      icon: "hookah.svg",
      path: "/menu/nargile"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Background Image Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/menu.jpg"
          alt="Menu Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Categories Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/marble-bg.png"
          alt="Marble Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative max-w-4xl mx-auto h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 md:gap-8 w-full">
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
                  className="flex items-center justify-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-24 h-24 md:w-40 md:h-40 border-2 border-transparent hover:border-kaktus-green"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={`/icons/${category.icon}`}
                    alt={category.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 md:w-20 md:h-20 object-contain transition-transform duration-200 group-hover:scale-110 filter-[invert(32%)_sepia(50%)_saturate(1000%)_hue-rotate(120deg)_brightness(30%)_contrast(100%)]"
                  />
                </motion.a>
                <span className="text-sm md:text-lg font-light text-gray-700 mt-2 md:mt-3">{category.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
