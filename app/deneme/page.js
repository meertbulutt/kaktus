"use client";

import { useEffect, useRef } from "react";

const ExternalVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay hatası:", err);
      });
    }
  }, []);

  return (
    <div className="w-full mx-auto aspect-video rounded-md overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dpcemurle/video/upload/v1746105297/s5yeqvofehjhfpjgwonw.mp4" // dış video URL'si buraya
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    </div>
  );
};

export default ExternalVideo;
