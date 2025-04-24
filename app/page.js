"use client";
import React from "react";
import Header from "@/components/Header";
import VideoSlider from "@/components/VideoSlider";
import CarouselTextLeft from "@/components/CarouselTextLeft";
import ImageCarousel from "@/components/ImageCarousel";
import ButtonCarouselLeft from "@/components/ButtonCarouselLeft";
import ButtonCarouselRight from "@/components/ButtonCarouselRight";
import VideoAnimationLeft from "@/components/VideoAnimationLeft";
import VideoAnimationRight from "@/components/VideoAnimationRight";
import Biggerbass from "@/components/Biggerbass";
import TextAnimation from "@/components/TextAnimation";

export default function Home() {
  const firstSectionText = 
    {
      text: "Adana'nın en özel köşesinde, lezzet ve huzurun buluştuğu Kaktüs Cafe'de kendinizi bambaşka bir dünyada hissedin. Özenle hazırlanmış yemekler, eşsiz bir nargile deneyimi ve canlı bir atmosferiyle Adana'da fark yaratan bir kafe sizi bekliyor.",
      text1: "Modern tasarımı, ferah iç mekânı ve sıcacık atmosferiyle Kaktüs Cafe, Adana'da lezzet ve keyfi bir araya getiriyor. Sabah kahvaltısından akşam yemeğine kadar her öğünde özenle hazırlanmış menüsüyle damağınızı şenlendiriyor. Günün stresini atmak, nargilenizi yudumlayarak dostlarınızla keyifli vakit geçirmek için Kaktüs Cafe sizleri bekliyor. Lezzetin ve huzurun adresi, Adana'nın kalbinde!",
    }
    const videoAnimationLeftText = 
    {
      src: "/videos/giris-kaktus.mp4",
      text: "Kaktüs Cafe'de Zaman Durur, Lezzet Başlar",
      text1: "Adana'nın lezzet haritasında özel bir yere sahip olan Kaktüs Cafe, sunduğu eşsiz deneyimi şimdi videomuzla gözler önüne seriyor. Özenle hazırlanmış menümüz, güler yüzlü ekibimiz ve her detayında huzur barındıran atmosferimizle Kaktüs Cafe, sadece bir mekan değil; yaşamın lezzetle buluştuğu bir durak.", 
      text2: "Kahvaltıdan özel hamburgerlere, taze demleme çaydan nargile keyfine kadar uzanan bu yolculukta her anınız özenle tasarlandı. Videomuzda gördüğünüz her sahne, Kaktüs Cafe'de geçireceğiniz gerçek anların bir yansıması. Lezzetin, konforun ve keyifli sohbetlerin yeni adresine hoş geldiniz.",
    }
    const carouselTextLeftText = 
    {
      src: "/images/foods/kahvalti/granola.png",
      src1: "/images/foods/kahvalti/serpme-kahvalti.png",
      text: "Güne Efsane Bir Kahvaltıyla Başlayın",
      text1: "Kaktüs Cafe'de kahvaltı, sadece bir öğün değil; güne keyifle başlamanın en lezzetli yolu. Adana'nın merkezinde serpme kahvaltıdan tostlara, menemen ve yumurta çeşitlerinden taptaze çayımıza kadar her şey özenle hazırlanıyor. Ailece ya da dostlarla yapılacak kahvaltılar için huzurlu bir ortam, sıcak sunum ve lezzetin birleştiği adres: Kaktüs Cafe.",
    }
    const imageCarouselText = 
    {
      src: "/images/foods/tatli-lezzetler/dondurmali-brownie.png",
      text: "Tatlı Kaçamakların En Güzel Adresi: Kaktüs Cafe",
      text1: "Tatlı kriziniz mi tuttu? Kaktüs Cafe'nin özenle hazırlanan tatlıları, Adana'da tatlı denince akla gelen ilk durak olmayı başarıyor. Göz alıcı sunumlar, taptaze malzemeler ve her lokmada hissedilen ustalıkla, tatlılarımız sadece damağınızı değil ruhunuzu da şımartıyor.",
      text2: "Geleneksel Türk tatlılarından modern lezzetlere uzanan zengin menümüzde her zevke uygun bir seçenek var. İster bir fincan kahve eşliğinde dinlenmek için, ister dost sohbetlerini tatlandırmak için… Kaktüs Cafe'de tatlı yemek bir alışkanlık değil, bir ritüel.",
    }
    const buttonCarouselLeftText = 
    { src: "/images/pizza-giris.jpg",
      src2: "/images/foods/pizzalar/tiftik-etli-pizza.png",
      text: "Adana'da Gerçek Pizza Keyfi: Kaktüs Cafe'de Başlar.",
      text1: "İtalyan lezzetini Adana'ya taşıyan Kaktüs Cafe pizzaları, incecik hamuru, bol malzemesi ve taş fırın lezzetiyle tam anlamıyla efsane! Taptaze sebzeler, özel soslar ve her lokmada uzayan peynirle bu pizza deneyimi, bildiklerinizi unutturacak.",
      text2: "Klasiklerden gurme lezzetlere uzanan geniş pizza menümüz, hem gözünüze hem damağınıza hitap ediyor. İster arkadaşlarla keyifli bir akşam, ister tek başına bir ziyafet… Kaktüs Cafe'nin pizzaları her zaman doğru tercih!",
    }
    const buttonCarouselRightText = 
    {
      src: "/images/giris-icecek.png",
      src2: "/images/giris-icecek-2.png",
      text: "Adana Sıcağında Serinlemenin En Lezzetli Yolu: Kaktüs Cafe Soğuk İçecekleri",
      text1: "Adana'nın kavurucu sıcağında ferahlatıcı bir mola arıyorsan, Kaktüs Cafe'nin özel soğuk içecek menüsü tam sana göre! Taze meyvelerle hazırlanan smoothie'lerden, buz gibi limonatalara ve aromalı soğuk kahvelere kadar her yudumda serinliği hissedeceksin.",
      text2: "Gün boyu enerjini taze tutacak, hem ferahlatan hem de damakta iz bırakan içecek çeşitlerimizle yaz-kış fark etmeden misafirlerimize keyifli bir deneyim sunuyoruz. Soğuk içecek deyince akla gelen ilk yer: Kaktüs Cafe Adana!",
    }
    const videoAnimationRightText = 
    {
      src: "/videos/drone.mp4",
      text: "Kaktüs Cafe'de Her An Bir Deneyim: Lezzet, Tarz ve Keyif Bir Arada",
      text1: "Kaktüs Cafe Adana, sadece bir kafe değil; her detayında kalite ve özgünlük hissedilen özel bir yaşam alanı. Güler yüzlü hizmet anlayışımız, şık tasarımımız ve birbirinden lezzetli menülerimizle kendinizi evinizde gibi hissedeceksiniz.",
      text2: "Videomuzda göreceğiniz her kare, Kaktüs Cafe'nin sıcak atmosferini, özenle hazırlanan tabaklarını ve konforlu ortamını yansıtıyor. Adana'da keyifli vakit geçirmek isteyen herkesin buluşma noktası olan Kaktüs Cafe'de sizi de ağırlamaktan mutluluk duyarız.",
    }
    
  return (
    <main>
      <Header />
      <div className="bg-[#ffffff]">
        <VideoSlider />
       
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
           {/* First Section */}
          <section className="py-8 md:py-16 lg:py-24 text-kaktus-green">
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <span className="w-full">
                <TextAnimation text={firstSectionText.text} />
              </span>
              <span>
                <TextAnimation text1={firstSectionText.text1} />
              </span>
            </div>
          </section>
          
          <VideoAnimationLeft 
            src={videoAnimationLeftText.src} 
            text={videoAnimationLeftText.text} 
            text1={videoAnimationLeftText.text1} 
            text2={videoAnimationLeftText.text2} 
          />
        </main>

        <Biggerbass />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <CarouselTextLeft 
              src={carouselTextLeftText.src} 
              src1={carouselTextLeftText.src1} 
              text={carouselTextLeftText.text} 
              text1={carouselTextLeftText.text1} 
              text2={carouselTextLeftText.text2} 
            />

            <ImageCarousel 
              src={imageCarouselText.src} 
              text={imageCarouselText.text} 
              text1={imageCarouselText.text1} 
              text2={imageCarouselText.text2} 
            />

            <ButtonCarouselLeft 
              src={buttonCarouselLeftText.src} 
              src2={buttonCarouselLeftText.src2} 
              text={buttonCarouselLeftText.text} 
              text1={buttonCarouselLeftText.text1} 
              text2={buttonCarouselLeftText.text2} 
            />

            <ButtonCarouselRight 
              src={buttonCarouselRightText.src} 
              src2={buttonCarouselRightText.src2} 
              text={buttonCarouselRightText.text} 
              text1={buttonCarouselRightText.text1} 
              text2={buttonCarouselRightText.text2} 
            />

            <VideoAnimationRight 
              src={videoAnimationRightText.src} 
              text={videoAnimationRightText.text} 
              text1={videoAnimationRightText.text1} 
              text2={videoAnimationRightText.text2} 
            />
          </div>
        </main>
      </div>
    </main>
  );
}
