"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { categories } from "@/Products/Yemekler/menuCategories";
const Drinks = () => {
    const drinks = [
        { title: "Sıcak İçecekler", path: "/menu/icecek/sicak-icecekler", src: "/images/drinks/sicak-icecekler.jpg" },
        { title: "Soğuk Kahveler", path: "/menu/icecek/soguk-kahveler", src: "/images/drinks/soguk-kahveler.jpeg" },
        { title: "Frappeler", path: "/menu/icecek/frappeler", src: "/images/drinks/frappeler.jpg" },
        { title: "Frozen Çeşitleri", path: "/menu/icecek/frozen-cesitleri", src: "/images/drinks/frozen-cesitleri.jpg" },
        { title: "Soft İçecekler", path: "/menu/icecek/soft-icecekler", src: "/images/drinks/soft-icecekler.jpg" },
        { title: "Milkshake", path: "/menu/icecek/milkshake", src: "/images/drinks/milkshake.png" },
        { title: "Vitamin Bar", path: "/menu/icecek/vitamin-bar", src: "/images/drinks/vitamin-bar.jpg" },
        { title: "Redbull Çeşitleri", path: "/menu/icecek/redbull-cesitleri", src: "/images/drinks/redbull-cesitleri.jpg" },
        { title: "Kokteyller", path: "/menu/icecek/kokteyller", src: "/images/drinks/kokteyller.jpg" },
      ];
    
      return (
        <div className="relative min-h-screen bg-kaktus-green/60 flex flex-col items-center justify-center px-4 py-20 overflow-hidden shadow-2xl">
          {/* Arka plan görseli */}
          {/* <Image
            src="/images/menu-bg.jpg"
            alt="Menu Background"
            fill
            className="absolute inset-0 object-cover z-0"
          /> */}
    
          <div className="container mx-auto flex space-x-24 items-end">
                 <div className="flex flex-col flex-wrap gap-y-8 justify-center p-4 rounded-xl text-green-800 z-10">
                   {categories.map((category, index) => (
                     <motion.a
                       href={category.path}
                       key={category.title}
                       className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl cursor-pointer group"
                       initial={{ opacity: 0, y: 40 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.3 }}
                       whileHover={{ scale: 1.2 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       {/* Arka plan görseli */}
                       <Image
                         src={category.src}
                         alt={category.title}
                         fill
                         className="object-cover"
                       />
         
                       {/* Ortalanmış yazı */}
                       <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                         <span className="text-white text-xl font-semibold">
                           {category.title}
                         </span>
                       </div>
                     </motion.a>
                   ))}
                 </div>
         
                 <div>
                   <h1 className="text-5xl font-bold mb-12 text-white z-10">
                     İçecekler
                   </h1>
         
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 bg-kaktus-green/70 p-8 rounded-2xl shadow-2xl z-10">
                     {drinks.map((food, index) => (
                       <motion.a
                         href={food.path}
                         key={food.index}
                         className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl cursor-pointer group mx-auto"
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3 }}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         {/* Arka plan görseli */}
                         <Image
                           src={food.src}
                           alt={food.title}
                           fill
                           className="object-cover"
                         />
         
                         {/* Ortalanmış yazı */}
                         <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                           <span className="text-white text-base md:text-xl font-bold text-center tracking-wider px-2">
                             {food.title}
                           </span>
                         </div>
                       </motion.a>
                     ))}
                   </div>
                 </div>
               </div>
        </div>
      );
}

export default Drinks