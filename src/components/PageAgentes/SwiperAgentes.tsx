import React from "react";
import { Swiper } from "swiper/react";

interface Props {
  children: React.ReactNode;
}

export default function SwiperAgentes({ children }: Props) {
  return (
    <Swiper
      slidesPerView={2}
      loop={true}
      spaceBetween={-100}
      keyboard
      slideToClickedSlide={true}
      breakpoints={{
        1024: {
          spaceBetween: 0,
          slidesPerView: 3,
        },
        1240: {
          spaceBetween: -250,
          slidesPerView: 3,
        },
        1440: {
          spaceBetween: 0,
          slidesPerView: 4,
        },
        1536: {
          spaceBetween: -50,
          slidesPerView: 4,
        },
      }}
      className="w-full mb-10 !hidden md:!block min-h-[640px] lg:min-h-[695px] xl:min-h-[745px]"
      centeredSlides={true}
    >
      {children}
    </Swiper>
  );
}
