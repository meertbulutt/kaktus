"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaArrowUp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex flex-col w-full bg-kaktus-green text-white pt-10 py-8 px-6 md:px-12 space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl">
      
      {/* Sosyal Medya İkonları */}
      <div className="flex space-x-4 justify-center">
        <a href="">
        <FaFacebookSquare size={28} className="md:w-8 md:h-8" />
        </a>
        <a href="https://www.instagram.com/kaktusgardenplus/"><FiInstagram size={28} className="md:w-8 md:h-8" /></a>
      </div>

      {/* İletişim Bilgileri */}
      <div className="flex flex-col md:flex-row md:space-x-6 justify-center items-center text-center font-bold space-y-2 md:space-y-0">
        <span>Kaktüs Cafe Adana</span>
        <span>0 312 298 5454</span>
        <a
          href="https://wa.me/0545454445"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Whatsapp 0 545 545 45 45
        </a>
      </div>

      {/* E-posta */}
      <a
        href="mailto:kaktüscafe@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline text-center"
      >
        kaktuscafe@gmail.com
      </a>

      {/* Logo ve Çizgiler */}
      <div className="w-full flex flex-col justify-center items-center space-y-2 px-6 md:px-12">
        <div className="h-[1px] w-full bg-white"></div>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-center">
          KAKTUS GARDEN CAFE
        </p>
        <div className="h-[1px] w-full bg-white"></div>
      </div>

      {/* Alt Bilgi */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center text-[10px] sm:text-xs md:text-sm px-4 md:px-12 space-y-2 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-2">
          <Link href="#">Yasal Uyarı</Link>
          <Link href="#">Gizlilik Beyanı</Link>
          <Link href="#">Çerez Politikası</Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-2">
          <span>2025 © Kaktüs Cafe Adana</span>
          <span>Tüm haklar saklıdır.</span>
        </div>
      </div>

      {/* Yukarı Çık Butonu */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-white text-kaktus-green p-3 rounded-full shadow-lg hover:bg-[#e2ffe9]"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
