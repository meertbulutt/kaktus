"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RevealImage({ src, alt, className }) {
  return (
    <div className={`relative overflow-hidden w-fit inline-block ${className}`}>
      {/* Green overlay animation */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-green-500 z-20"
      />

      {/* Image animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Image src={src} alt={alt} width={500} height={300} className="w-full h-auto object-cover" />
      </motion.div>
    </div>
  );
}
