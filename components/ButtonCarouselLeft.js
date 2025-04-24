"use client"

import Image from "next/image"
import Slider from "react-slick"
import Button from "./Button";
import { NextArrowLeft, PrevArrowLeft } from "./customArrowLeft";
import TextAnimation from "./TextAnimation";

const ButtonCarouselLeft = ({text, text1, text2, src, src2}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowLeft />,
        prevArrow: <PrevArrowLeft />
    };
    
    return (
        <section className="px-3 flex flex-col-reverse lg:flex-row-reverse lg:px-o justify-center items-center xl:mt-24">
            <div className="mr-0 xl:mr-8 px-3 lg:pl-12 xl:pl-0 2xl:px-40">
                <div>
                    <TextAnimation className={`text-3xl xl:text-4xl text-kaktus-green-dark font-extrabold mb-4 lg:mb-16`} text={text || "Ruhunuz, sonsuz maviliğin bir parçası olacak."}/>
                </div>
                <div className="text-[20px] text-[#51555b] mb-4">
                    <TextAnimation text1={text1 || "Azure Ankara, Aktif Group tarafından Ankara'ya kazandırılan Metropolitan Hotel'in terasında, yapının özeniyle uyum içinde bir dokuyla gökyüzüne açılıyor."}/>
                </div>
                <div className="text-[20px] text-[#51555b]">
                    <TextAnimation text2={text2 || "Bakış açımızı değiştirdiğimizde her şeyin nasıl dönüşebildiğini,hayatın bizim durup ona baktığımız yere göre şekillendiğini anlatıyor. Buradan bakınca her şey doyumsuz bir güzelliğe erişiyor."}/>
                </div>
                <Button buttonText="Menüyü İnceleyin"/>
            </div>

            <div className="w-auto relative xl:mr-10 mt-24 2xl:mt-0">
                <div className="absolute w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620] bg-kaktus-green rounded-md"></div>

                <div className="mb-4 lg:mb-0 w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620]">
                    <Slider
                        {...settings}
                        className="absolute -top-5 left-5 md:-top-10 md:right-10 xl:-top-7 xl:right-12 2xl:-top-8 2xl:right-12 overflow-hidden flex items-center justify-center rounded-md"
                    >
                        <div>
                            <Image
                                src={`${src ? src : "/images/image-1.png"}`}
                                width={620}
                                height={620}
                                alt="Görsel 1"
                                className="object-cover w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620]"
                            />
                        </div>
                        <div>
                            <Image
                                src={`${src2 ? src2 : "/images/lahmacun.jpg"}`}
                                width={620}
                                height={620}
                                alt="Görsel 2"
                                className="object-cover w-[390px] h-[390px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] 2xl:w-[620] 2xl:h-[620]"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ButtonCarouselLeft;