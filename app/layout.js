import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

// Fonts
import { Martel } from "next/font/google";
import { Work_Sans } from "next/font/google";

import Footer from "@/components/Footer";

const martel = Martel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-martel",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Kaktus Garden Cafe",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Kaktüs Garden Cafe | Adana'nın En İyi Mekanı</title>
        <meta
          name="description"
          content="Adana'nın en iyi nargile, en özel yemek ve en güzel cafe deneyimi Kaktüs Garden Cafe'de! Şimdi keşfet."
        />
        <meta
          name="keywords"
          content="Adana en iyi nargile, Adana en iyi mekan, Adana en iyi yemek, Adana en iyi cafe, Adana Kaktüs Cafe, Adana restaurant, Adana kahvaltı, Adana kafe, Adana brunch, Adana en lezzetli yemekler, Adana nargile cafe, Kaktüs Garden Cafe, Adana romantik mekanlar, Adana en güzel kahvaltı, Adana canlı müzik cafe, Adana hookah lounge, Adana aile cafesi, Adana arkadaşlarla gidilecek mekanlar, Adana şık restoranlar, Adana uygun fiyatlı yemek, Adana en iyi tatlıcı, Adana soğuk içecek mekanları, Adana açık hava cafe, Adana dinlenme mekanları, Adana nargile keyfi, Adana gençlerin mekanı, Adana instagramlık cafeler, Adana leziz hamburgerler, Adana serpme kahvaltı, Adana gurme mekanlar"
        />
        <meta name="author" content="Kaktüs Garden Cafe" />
        <meta
          property="og:title"
          content="Kaktüs Garden Cafe | Adana'nın En İyi Mekanı"
        />
        <meta
          property="og:description"
          content="Adana'da en iyi yemek ve nargile deneyimini Kaktüs Garden Cafe'de yaşayın."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaktusgardencafe.com/" />
        <meta property="og:image" content="/images/og-logo.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.kaktusgardencafe.com/" />
        <link rel="icon" href="/favicon.png" sizes="48x48" type="image/png" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
