"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Image from "next/image";
import SlideImg1 from "@/public/mockup_img1.jpg";
import SlideImg2 from "@/public/mockup_img2.png";
import SlideImg3 from "@/public/mockup_img3.jpg";
import SlideImg4 from "@/public/mockup_img4.png";
import { SlideInterface } from "@/types/interfaces";

// SLIDES MOCKUP DATA
const slides: Array<SlideInterface> = [
  {
    title: "App MyLugano",
    bodyText: "Un ecosistema digitale per vivere al meglio la citta e sostenere l'economia locale.",
    img: SlideImg1,
    imgAlt: "Mockup image",
  },
  {
    title: "App MyLugano",
    bodyText: "Un ecosistema digitale per vivere al meglio la citta e sostenere l'economia locale.",
    img: SlideImg2,
    imgAlt: "Mockup image",
  },
  {
    title: "App MyLugano",
    bodyText: "Un ecosistema digitale per vivere al meglio la citta e sostenere l'economia locale.",
    img: SlideImg3,
    imgAlt: "Mockup image",
  },
  {
    title: "App MyLugano",
    bodyText: "Un ecosistema digitale per vivere al meglio la citta e sostenere l'economia locale.",
    img: SlideImg4,
    imgAlt: "Mockup image",
  },
  {
    title: "App MyLugano",
    bodyText: "Un ecosistema digitale per vivere al meglio la citta e sostenere l'economia locale.",
    img: SlideImg1,
    imgAlt: "Mockup image",
  },
  {
    title: "App MyLugano",
    bodyText: "Un ecosistema digitale per vivere al meglio la citta e sostenere l'economia locale.",
    img: SlideImg2,
    imgAlt: "Mockup image",
  },
];

/**
 * Main slider component that uses Swiper library.
 *
 * @returns {JSX.Element}
 */
export default function Slider() {
  // We use (swiperRef) to store the Swiper instance not to reference the DOM element
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper", {
      // Use FreeMode module and enable it
      modules: [FreeMode],
      freeMode: true,
      // Looping effect disabled
      loop: false,
      // Allow slides to fit naturally inside the container
      slidesPerView: "auto",
      spaceBetween: 0,
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="swiper w-full h-[394px] xl:h-[540px]">
      <div className="swiper-wrapper h-full">
        {slides &&
          slides.length > 0 &&
          slides.map((sEl, idx) => {
            return (
              <div
                key={`slide_el_${idx}`}
                className="swiper-slide relative w-full max-w-[319px] xl:max-w-[437px] h-full bg-red-400 overflow-hidden group"
              >
                <Image
                  className="object-cover transition-transform duration-250 group-hover:scale-110"
                  src={sEl.img}
                  alt={sEl.imgAlt}
                  // placeholder="blur"
                  quality={80}
                  fill
                />
                <div className="absolute z-1 top-0 left-0 w-full h-full">
                  <span className="p-[16px] text-h7 xl:text-h3">{idx + 1}</span>

                  <div className="absolute bottom-[-110px] right-0 w-[calc(100%-48px)] h-[180px] duration-250 bg-white transition-all group-hover:bottom-0">
                    <div className="h-full p-[16px]">
                      <h3 className="text-h10 xl:text-h4 text-black">{sEl.title || "title_undefined"}</h3>
                      <h6 className="mt-[8px] text-h5 text-black opacity-0 transition-all duration-250 group-hover:opacity-100">
                        {sEl.bodyText || "body_text_undefined"}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
