import React from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  children: React.ReactNode;
}

export default function SwiperMapas({ children }: Props) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="relative"
      loop={true}
      breakpoints={{ 1280: { slidesPerView: 1.2, spaceBetween: 50 } }}
    >
      {children}
    </Swiper>
  );
}
