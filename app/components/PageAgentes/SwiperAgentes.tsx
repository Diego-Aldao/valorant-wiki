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
      breakpoints={{
        1024: {
          spaceBetween: -100,
          slidesPerView: 3,
        },
        1240: {
          spaceBetween: -300,
          slidesPerView: 3,
        },
      }}
      className="w-full ml-auto !mr-0 mb-20 !hidden md:!block"
      centeredSlides={true}
    >
      {children}
    </Swiper>
  );
}
