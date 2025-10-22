"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

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
    <div className="swiper w-full h-[540px]">
      <div className="swiper-wrapper">
        <div className="swiper-slide w-full max-w-[437px] bg-red-400">Slide 1</div>
        <div className="swiper-slide w-full max-w-[437px] bg-green-400">Slide 2</div>
        <div className="swiper-slide w-full max-w-[437px] bg-blue-400">Slide 3</div>
        <div className="swiper-slide w-full max-w-[437px] bg-red-400">Slide 1</div>
        <div className="swiper-slide w-full max-w-[437px] bg-green-400">Slide 2</div>
        <div className="swiper-slide w-full max-w-[437px] bg-blue-400">Slide 3</div>
        <div className="swiper-slide w-full max-w-[437px] bg-green-400">Slide 2</div>
        <div className="swiper-slide w-full max-w-[437px] bg-blue-400">Slide 3</div>
      </div>
    </div>
  );
}
