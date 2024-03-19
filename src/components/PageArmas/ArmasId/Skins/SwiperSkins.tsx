import React from "react";
import { Swiper } from "swiper/react";
import { Grid, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/scrollbar";

interface Props {
  children: React.ReactNode;
}

export default function SwiperSkins({ children }: Props) {
  return (
    <Swiper
      scrollbar={{
        hide: false,
        draggable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1280: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      }}
      spaceBetween={30}
      className="w-full !pb-5"
      grid={{
        rows: 2,
        fill: "row",
      }}
      modules={[Grid, Scrollbar]}
    >
      {children}
    </Swiper>
  );
}
