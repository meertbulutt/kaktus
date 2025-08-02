import BiggerBassPhoto from "@/components/BiggerbassPhoto";

import CarouselTextLeft from "@/components/CarouselTextLeft";

import ImageSlider from "@/components/ImageSlider";
import TextAnimation from "@/components/TextAnimation";
import VideoAnimationLeft from "@/components/VideoAnimationLeft";
import React from "react";
import Header from "@/components/Header";
import FixedContactButtons from "@/components/FixedContactButtons";

const about = () => {
  const firstSectionText = {
    text: "1984 yılında kurulan Kaktüs Cafe, misafirlerine muhteşem bir deneyim sunmayı hedeflemiş ve bu doğrultuda kendini sürekli geliştirmiştir. Geniş ve açık alan bahçesi ile doğanın içinde keyifli anlar geçirebilmenizi sağlar. Sevdikleriniz ile birlikten en güzel kahvaltılarımız, Oyun, nargile ve lezzetli yemek seçeneklerimizle, sosyal bir ortamda buluşmanın tadını çıkarın. Estetik ve doğal ortamımız, mekanımızı sıcak bir buluşma noktası haline getiriyor.",
  };

  const carouselTextLeftText = {
    src: "/images/kaktus-dikey.webp",
    src1: "/images/kaktus-dikey-iki.webp",
    text1:
      "Kaktüs Cafe olarak vizyonumuz, müşterilerimize sunduğumuz hizmette kaliteyi ön planda tutarak, muhteşem anılar biriktirmelerini sağlamaktır. Doğal ve samimi bir atmosferde, farklı lezzetler ve eğlenceli aktivitelerle dolu bir deneyim sunarak, kafe teknolojisine yenilik katmayı hedefliyoruz. Müşteri memnuniyetini en üst düzeyde tutarak, yerel düzeyde en iyi olan markamızı uluslararası düzeyde de aynı seviyeye getirmeyi amaçlıyoruz.",
  };

  const videoAnimationLeftText = {
    src: "/videos/giris-kaktus.mp4",
    text: "Kaktüs Cafe'de Zaman Durur, Lezzet Başlar",
    text1:
      "Adana'nın lezzet haritasında özel bir yere sahip olan Kaktüs Cafe, sunduğu eşsiz deneyimi şimdi videomuzla gözler önüne seriyor. Özenle hazırlanmış menümüz, güler yüzlü ekibimiz ve her detayında huzur barındıran atmosferimizle Kaktüs Cafe, sadece bir mekan değil; yaşamın lezzetle buluştuğu bir durak.",
    text2:
      "Kahvaltıdan özel hamburgerlere, taze demleme çaydan nargile keyfine kadar uzanan bu yolculukta her anınız özenle tasarlandı. Videomuzda gördüğünüz her sahne, Kaktüs Cafe'de geçireceğiniz gerçek anların bir yansıması. Lezzetin, konforun ve keyifli sohbetlerin yeni adresine hoş geldiniz.",
  };

 

  return (
    <div>
      <Header />
      <ImageSlider
        text={"HAKKIMIZDA SÖYLENECEK İLK SÖZ,SINIRSIZLIK OLMALI"}
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

      <BiggerBassPhoto />

      <VideoAnimationLeft
        src={videoAnimationLeftText.src}
        text={videoAnimationLeftText.text}
        text1={videoAnimationLeftText.text1}
        text2={videoAnimationLeftText.text2}
      />

      <FixedContactButtons/>

    </div>
  );
};

export default about;
