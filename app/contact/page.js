"use client";
import HalfHeroSection from "@/components/HalfHeroSection";
import Button from "../../components/Button.js";
import TextAnimation from "../../components/TextAnimation.js";
import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider.js";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const Contact = ({ src }) => {
  const router = useRouter();
  const templateId = "template_g3rcomf";
  const serviceId = "service_5yftfd3";
  const publicKey = "f-x7RCRn3OShKto96";
  const buttonCarouselRightText = {
    src: "/images/giris-icecek.png",
    src2: "/images/giris-icecek-2.png",
  };

  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div>
      <Header />
      <HalfHeroSection />
      <section className="flex flex-col md:flex-row md:mb-0 justify-center items-center md:gap-16 mt-12 md:mt-24 md:px-6 md:pr-16">
        {/* SOL TARAF */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2>
            <TextAnimation
              className={`text-4xl text-kaktus-green-dark font-extrabold mb-16`}
              text={"Kaktüs Adana"}
            />
          </h2>

          <div className="text-[20px] text-[#51555b] mb-4">
            <TextAnimation text={"Beyazevler mh. 80064 sk., 1/A, Beyazevler, 80064. Sk."} />
          </div>

          <div className="text-[20px] text-[#51555b] mb-8">
            <TextAnimation text={"No:1, 01170 Çukurova/Adana"} />
          </div>

          <div className="flex flex-col space-y-2 text-kaktus-green">
            <a href="tel:+905346413326">Tel: 0534 641 33 26</a>
            <a href="https://wa.me/05346413326" target="_blank">
              Whatsapp 0534 641 33 26
            </a>
            <a
              href="mailto:kaktüscafe@example.com"
              target="_blank"
              className="font-bold"
            >
              kaktuscafe@gmail.com
            </a>
          </div>

          <a
            target="_blank"
            href={
              "https://www.google.com/maps/dir//Beyazevler+mh.+80064+sk.,+1%2FA,+Beyazevler,+80064.+Sk.+No:1,+01170+%C3%87ukurova%2FAdana/@37.0279558,35.238807,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x15287d0c74a016b9:0x57f3e3435759735a!2m2!1d35.321208!2d37.0279843?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <Button buttonText="Yol Tarifi Al" />
          </a>
        </motion.div>

        {/* SAĞ TARAF */}
        <div className="relative mt-12 md:mt-0 w-full h-[300px] lg:w-[620px] lg:h-[600px] lg:ml-12">
          <ImageSlider
            className={
              "container mx-auto w-full h-[300px] md:h-full lg:h-[600px] overflow-hidden"
            }
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full justify-center items-center gap-16 mt-24 px-6">
        {/* SOL TARAF */}
        <div className="relative w-full flex justify-center items-center md:w-[620px] h-[450px] md:h-full">
          <ImageSlider
            className={
              "container mx-auto relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden mb-8"
            }
          />
        </div>
        {/* SAĞ TARAF */}
        <section className="max-w-xl mb-4 md:mb-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 md:space-y-8 text-kaktus-green-dark"
          >
            <div>
              <label className="block text-sm font-medium">
                Adınız Soyadınız:
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Telefon Numaranız:
              </label>
              <input
                type="text"
                name="phone"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">E-postanız:</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mesajınız:</label>
              <textarea
                name="message"
                required
                className="w-full p-2 border rounded"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="bg-kaktus-green text-white py-2 px-4 rounded hover:bg-kaktus-green"
            >
              Gönder
            </button>
            {success && (
              <p className="text-kaktus-green mt-2">
                Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime
                geçilecektir. Sağlıklı günler dileriz!
              </p>
            )}
          </form>
        </section>
      </section>
    </div>
  );
};

export default Contact;
