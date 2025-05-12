"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById("videoElement");
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // video görünüyorsa bir şey yap
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
        Hakkımızda
      </Link>
      <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>
        Menü
      </Link>
      <Link href="/galery" onClick={() => setIsMobileMenuOpen(false)}>
        Galeri
      </Link>
      <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
        Hizmetlerimiz
      </Link>
      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
        İletişim
      </Link>
    </>
  );

  return (
    <>
      {/* İlk Navbar (transparan) */}
      <div
        className={`z-50 fixed w-full top-0 left-0 right-0 transition-all duration-1000 ease ${
          isScrolled
            ? "opacity-0 transform -translate-y-full"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center mt-2 px-4">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              width={140}
              height={140}
              alt="Kaktus-Logo"
              className="w-28 md:w-36 stroke-green-700"
              priority
            />
          </Link>

          {/* Masaüstü menü */}
          <div className="hidden md:flex space-x-12 text-xl mr-4 text-white font-extrabold tracking-wider">
            {navLinks}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-2"
          >
            <Menu size={30} />
          </button>
        </nav>
      </div>

      {/* Scroll sonrası Navbar (beyaz arkaplanlı) */}
      <div
        className={`z-50 fixed w-full top-0 left-0 right-0 transition-all duration-1000 ease ${
          !isScrolled
            ? "opacity-0 transform -translate-y-full"
            : "opacity-100 transform translate-y-0 bg-white shadow-md"
        }`}
      >
        <nav className="container h-36 mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              width={120}
              height={120}
              alt="Kaktus-Logo"
              priority
            />
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex space-x-12 font-sans text-xl mr-4 text-kaktus-green font-extrabold tracking-wider">
            {navLinks}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-kaktus-green p-2"
          >
            <Menu size={30} />
          </button>
        </nav>
      </div>

      {/* Mobil Menü (Sağdan gelen panel) */}
      <div
        className={`fixed top-0 right-0 h-[70%] w-full md:w-2/3 bg-kaktus-green text-white z-[1100] transform transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-8">
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-4">
            <X size={30} />
          </button>
        </div>
        <div className="flex flex-col items-start px-12 space-y-12 text-3xl font-bold mt-10">
          {navLinks}
        </div>
      </div>
    </>
  );
};

export default Header;
