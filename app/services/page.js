

import CarouselTextLeft from "@/components/CarouselTextLeft";

import ImageSlider from "@/components/ImageSlider";
import TextAnimation from "@/components/TextAnimation";

import React from "react";
import Header from "@/components/Header";
import CarouselTextRight from "@/components/CarouselTextRight";

const services = () => {
  const firstSectionText = {
    text: "Kaktüs Cafe olarak, misafirlerimize her zevke hitap eden çeşitli hizmetler sunuyoruz. Çocuk oyun alanımız, küçük misafirlerimize güvenli ve eğlenceli vakitler sunarken; okey, kâğıt oyunları ve tabu gibi aktivitelerle dostlarınızla keyifli anlar yaşayabilirsiniz. Özenle hazırlanan kahvaltı seçeneklerimiz güne lezzetli bir başlangıç yapmanızı sağlarken, nargile keyfiyle günün yorgunluğunu atabilirsiniz. Her yaştan misafirimize uygun, samimi ve sosyal bir ortam sunarak, zamanın nasıl geçtiğini unutturuyoruz."
  };

  const carouselTextLeftText = {
    src: "/images/kaktus-dikey.png",
    src1: "/images/kaktus-dikey-iki.png",
    text1: "Minik misafirlerimize özel, eğlence dolu bir dünya! Renkli oyuncaklar, güvenli alanlar ve bol kahkahayla çocuklar keyifli vakit geçirirken, siz de sevdiklerinizle günün tadını çıkarabilirsiniz."
  };
  const carouselTextRightText = {
    src: "/images/kaktus-dikey.png",
    src1: "/images/kaktus-dikey-iki.png",
    text1: "Eğlenceli anların adresi! Tabu, sevdiklerinizle birlikte neşeli zamanlar geçirmenizi sağlayan klasik bir oyun. Hem eğlenceli hem de zeka geliştirici bu oyunu, Kaktüs Cafe’de arkadaşlarınızla veya ailenizle oynayabilirsiniz."
  };
  const carouselTextLeftText1 = {
    src: "/images/kaktus-dikey.png",
    src1: "/images/kaktus-dikey-iki.png",
    text1: "Okey keyfini bir adım öteye taşıyoruz! Otomatik okey masalarımızda, hız ve pratiklik bir arada. Her seviyeden oyuncuya hitap eden bu masalarda, eğlenceli bir okey deneyimi yaşarken zamanın nasıl geçtiğini anlamayacaksınız."
  };
  const carouselTextRightText1 = {
    src: "/images/kaktus-dikey.png",
    src1: "/images/kaktus-dikey-iki.png",
    text1: "Klasik kağıt oyunlarının keyfini Kaktüs Cafe’de çıkarın! Pişti, batak ve daha pek çok oyun seçeneğiyle arkadaşlarınızla eğlenceli ve rekabet dolu anlar geçirebilirsiniz. Her yaşa hitap eden oyunlarımızla, sevdiklerinizle unutulmaz vakitler sizi bekliyor."
  };
  const carouselTextLeftText2 = {
    src: "/images/kaktus-dikey.png",
    src1: "/images/kaktus-dikey-iki.png",
    text1: "Günlük stresinize veda edin, nargile keyfini Kaktüs Cafe’de yaşayın! Farklı aromalarla zenginleşen nargile seçeneklerimizle, rahatlatıcı bir atmosferde sevdiklerinizle keyifli anlar geçirebilirsiniz."
  };
  const carouselTextRightText2 = {
    src: "/images/kaktus-dikey.png",
    src1: "/images/kaktus-dikey-iki.png",
    text1: "Güne lezzetli bir başlangıç yapın! Kaktüs Cafe’de özenle hazırlanmış kahvaltı seçeneklerimizle, taze ve doyurucu bir kahvaltı deneyimi sizi bekliyor. Sevdiklerinizle birlikte, keyifli bir kahvaltının tadını çıkarın."
  };
 
 

  

  return (
    <div>
      <Header />
      <ImageSlider
        text={"KEYİF, LEZZET VE EĞLENCEYİ BİR ARAYA GETİREN BİR DENEYİM SUNUYORUZ."}
        className={"w-full h-screen relative overflow-hidden"}
      />
      <section className="text-lg sm:text-xl md:text-2xl container mx-auto py-12 sm:py-16 md:py-24 text-kaktus-green">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-center items-center">
          <span className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
            <TextAnimation
              className={"text-center tracking-wide leading-relaxed"}
              text={firstSectionText.text}
            />
          </span>
        </div>
      </section>
      <CarouselTextLeft 
        src={carouselTextLeftText.src}
        text1={carouselTextLeftText.text1}
      />
      <CarouselTextRight 
        src={carouselTextRightText.src}
        text1={carouselTextRightText.text1}
      />
      <CarouselTextLeft 
        src={carouselTextLeftText1.src}
        text1={carouselTextLeftText1.text1}
      />
      <CarouselTextRight 
        src={carouselTextRightText1.src}
        text1={carouselTextRightText1.text1}
      />
      <CarouselTextLeft 
        src={carouselTextLeftText2.src}
        text1={carouselTextLeftText2.text1}
      />
      <CarouselTextRight 
        src={carouselTextRightText2.src}
        text1={carouselTextRightText2.text1}
      />



    

      
    </div>
  );
};

export default services;
