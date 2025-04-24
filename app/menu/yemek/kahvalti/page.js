"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products } from "../../../../Products/Yemekler/kahvaltıProducts/index";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function Kahvalti() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      setSelectedProduct(null);
    }
  };

  return (
    <div 
      className="min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 relative" 
      style={{
        backgroundImage: 'url("/images/marble-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          {/* Back Button */}
          <Link 
            href="/menu/yemek" 
            className="fixed top-4 sm:top-6 md:top-8 lg:top-12 left-4 sm:left-6 md:left-8 lg:left-12 z-50 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-kaktus-green transition-transform duration-200 group-hover:scale-110" />
          </Link>

          {/* Logo */}
          <div className="relative w-40 sm:w-56 md:w-72 lg:w-80 h-20 sm:h-28 md:h-36 lg:h-40">
            <Image
              src="/images/logo.png"
              alt="Kaktus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-5 lg:gap-6 px-1 sm:px-4 md:px-6 lg:px-8">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-32 sm:h-40 md:h-48 lg:h-60"
                />
                <div className="p-2 sm:p-3 md:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold line-clamp-1">{product.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-600 font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProduct && (
            <div
              id="modal-backdrop"
              onClick={handleBackdropClick}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-3 md:p-4"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                    priority
                    quality={100}
                  />
                  <button
                    className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex-1 overflow-y-auto">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
                      {selectedProduct.price}
                    </p>
                  </div>
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
