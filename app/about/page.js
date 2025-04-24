import BiggerBassPhoto from "@/components/BiggerbassPhoto";
import ButtonCarouselRight from "@/components/ButtonCarouselRight";
import CarouselTextLeft from "@/components/CarouselTextLeft";
import ImageCarousel from "@/components/ImageCarousel";
import ImageSlider from "@/components/ImageSlider";
import TextAnimation from "@/components/TextAnimation";
import VideoAnimationLeft from "@/components/VideoAnimationLeft";
import React from "react";
import Header from "@/components/Header";

const about = () => {
  const firstSectionText = {
    text: "1984 yılında kurulan Kaktüs Cafe, misafirlerine muhteşem bir deneyim sunmayı hedeflemiş ve bu doğrultuda kendini sürekli geliştirmiştir. Geniş ve açık alan bahçesi ile doğanın içinde keyifli anlar geçirebilmenizi sağlar. Sevdikleriniz ile birlikten en güzel kahvaltılarımız, Oyun, nargile ve lezzetli yemek seçeneklerimizle, sosyal bir ortamda buluşmanın tadını çıkarın. Estetik ve doğal ortamımız, mekanımızı sıcak bir buluşma noktası haline getiriyor."
  };

  const carouselTextLeftText = {
    src: "/images/lahmacun.jpg",
    src1: "/images/lahmacun.jpg",
    text1: "Kaktüs Cafe olarak vizyonumuz, müşterilerimize sunduğumuz hizmette kaliteyi ön planda tutarak, muhteşem anılar biriktirmelerini sağlamaktır. Doğal ve samimi bir atmosferde, farklı lezzetler ve eğlenceli aktivitelerle dolu bir deneyim sunarak, kafe teknolojisine yenilik katmayı hedefliyoruz. Müşteri memnuniyetini en üst düzeyde tutarak, yerel düzeyde en iyi olan markamızı uluslararası düzeyde de aynı seviyeye getirmeyi amaçlıyoruz."
  };

  const videoAnimationLeftText = {
    src: "/videos/giris-kaktus.mp4",
    text: "Kaktüs Cafe'de Zaman Durur, Lezzet Başlar",
    text1: "Adana'nın lezzet haritasında özel bir yere sahip olan Kaktüs Cafe, sunduğu eşsiz deneyimi şimdi videomuzla gözler önüne seriyor. Özenle hazırlanmış menümüz, güler yüzlü ekibimiz ve her detayında huzur barındıran atmosferimizle Kaktüs Cafe, sadece bir mekan değil; yaşamın lezzetle buluştuğu bir durak.",
    text2: "Kahvaltıdan özel hamburgerlere, taze demleme çaydan nargile keyfine kadar uzanan bu yolculukta her anınız özenle tasarlandı. Videomuzda gördüğünüz her sahne, Kaktüs Cafe'de geçireceğiniz gerçek anların bir yansıması. Lezzetin, konforun ve keyifli sohbetlerin yeni adresine hoş geldiniz."
  };

  const buttonCarouselRightText = {
    src: "/images/giris-icecek.png",
    src2: "/images/giris-icecek-2.png",
    text: "Adana Sıcağında Serinlemenin En Lezzetli Yolu: Kaktüs Cafe Soğuk İçecekleri",
    text1: "Adana'nın kavurucu sıcağında ferahlatıcı bir mola arıyorsan, Kaktüs Cafe'nin özel soğuk içecek menüsü tam sana göre! Taze meyvelerle hazırlanan smoothie'lerden, buz gibi limonatalara ve aromalı soğuk kahvelere kadar her yudumda serinliği hissedeceksin.",
    text2: "Gün boyu enerjini taze tutacak, hem ferahlatan hem de damakta iz bırakan içecek çeşitlerimizle yaz-kış fark etmeden misafirlerimize keyifli bir deneyim sunuyoruz. Soğuk içecek deyince akla gelen ilk yer: Kaktüs Cafe Adana!"
  };

  const imageCarouselText = {
    src: "/images/lahmacun.jpg",
    text: "Tatlı Kaçamakların En Güzel Adresi: Kaktüs Cafe",
    text1: "Tatlı kriziniz mi tuttu? Kaktüs Cafe'nin özenle hazırlanan tatlıları, Adana'da tatlı denince akla gelen ilk durak olmayı başarıyor. Göz alıcı sunumlar, taptaze malzemeler ve her lokmada hissedilen ustalıkla, tatlılarımız sadece damağınızı değil ruhunuzu da şımartıyor.",
    text2: "Geleneksel Türk tatlılarından modern lezzetlere uzanan zengin menümüzde her zevke uygun bir seçenek var. İster bir fincan kahve eşliğinde dinlenmek için, ister dost sohbetlerini tatlandırmak için… Kaktüs Cafe'de tatlı yemek bir alışkanlık değil, bir ritüel."
  };

  return (
    <div>
      <Header />
      <ImageSlider
        text={"HAKKIMIZDA SÖYLENECEK İLK SÖZ,SINIRSIZLIK OLMALI"}
        className={"w-full h-screen relative overflow-hidden"}
      />
      <section className="text-2xl container mx-auto py-24 text-kaktus-green">
        <div className="px-42 flex flex-col justify-center items-center">
          <span className="w-[80%]">
            <TextAnimation
              className={"text-center tracking-wide"}
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

      {/* <ButtonCarouselRight
        src={buttonCarouselRightText.src}
        src2={buttonCarouselRightText.src2}
        text={buttonCarouselRightText.text}
        text1={buttonCarouselRightText.text1}
        text2={buttonCarouselRightText.text2}
      />

      <ImageCarousel 
        src={imageCarouselText.src}
        text={imageCarouselText.text}
        text1={imageCarouselText.text1}
        text2={imageCarouselText.text2}
      />*/}
    </div>
  );
};

export default about;
