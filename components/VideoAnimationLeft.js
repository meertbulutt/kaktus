"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import TextAnimation from "./TextAnimation";
import Button from "./Button";

const VideoAnimationLeft = ({ src, text, text1, text2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const videoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      if (videoRef.current) {
        videoRef.current.play().catch((e) => {
          console.warn("Video play hatası:", e);
        });
      }
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="flex justify-center items-center flex-col lg:flex-row my-32"
    >
      {/* SOLDAKİ VİDEO KISMI */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="relative w-full lg:w-[540px] lg:h-[540px] xl:w-[620px] xl:h-[620px] 2xl:mr-10"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="lg:absolute top-0 left-0 h-full bg-kaktus-green z-0 rounded-md"
        />

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            inView
              ? {
                  width: "100%",
                  opacity: 1,
                }
              : {}
          }
          transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
          className="flex justify-center items-center w-full h-full lg:w-[540px] lg:h-[540px] xl:w-[620px] xl:h-[620px] mb-4 md:mb-0 lg:absolute md:top-[-40px] md:left-[40px] overflow-hidden rounded-md shadow-lg z-10"
        >
          <video
            ref={videoRef}
            src={`${src ? src : "/videos/kaktus-hamburger.mp4"}`}
            muted
            loop
            playsInline
            className="w-full h-[300] md:h-[500px] lg:w-[540px] lg:h-[540px] xl:w-[620px] xl:h-[620px] object-cover rounded-md"
          ></video>
        </motion.div>
      </motion.div>

      {/* SAĞDAKİ YAZI KISMI */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="mx-0 lg:ml-8 px-0 mt-4 lg:mt-0 lg:pl-8 max-w-2xl lg:w-1/2"
      >
        <h2>
          <TextAnimation
            className={
              "text-3xl md:text-4xl text-kaktus-green-dark font-extrabold mb-4 lg:mb-5 xl:mb-10"
            }
            text={text}
          />
        </h2>

        <div className="text-[20px] text-[#51555b] mb-2 lg:mb-4">
          <TextAnimation
            text1={text1}
          />
        </div>

        <div className="text-[20px] text-[#51555b] md:mb-4 lg:mb-10">
          <TextAnimation
            text2={text2}
          />
        </div>

        <Button buttonText={"Menüyü inceleyin"} />
      </motion.div>
    </section>
  );
};

export default VideoAnimationLeft;
