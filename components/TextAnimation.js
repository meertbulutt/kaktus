"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, memo } from "react";

const TextAnimation = memo(({ text, text1, text2, className }) => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ 
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px"
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({ y: 0, opacity: 1 });
    }
  }, [inView1, controls1]);

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <motion.div
        ref={ref1}
        className={className ? `${className}` : "text-base sm:text-lg md:text-xl lg:text-2xl text-kaktus-green antialiased"}
        initial="hidden"
        animate={controls1}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {text && <span className="block">{text}</span>}
        {text1 && <span className="block">{text1}</span>}
        {text2 && <span className="block">{text2}</span>}
      </motion.div>
    </div>
  );
});

TextAnimation.displayName = 'TextAnimation';

export default TextAnimation;
