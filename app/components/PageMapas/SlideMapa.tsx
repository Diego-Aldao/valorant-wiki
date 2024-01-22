import { Mapa } from "@/app/types/Mapas";
import Image from "next/image";
import React from "react";

import { useSwiperSlide } from "swiper/react";

interface Props {
  dataMapa: Mapa;
}

export default function SlideMapa({ dataMapa }: Props) {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={`${
        swiperSlide.isActive ? "opacity-100" : "opacity-30"
      } card flex flex-col relative pt-10 mb-10 transition-opacity`}
    >
      <h2 className="text-7xl [text-shadow:1px_1px_5px_#302732] xl:text-8xl font-bebas absolute top-0 left-10">
        {dataMapa.displayName}
      </h2>
      <div className="w-full rounded-lg overflow-hidden min-h-[486px]">
        <Image
          src={dataMapa.splash}
          alt="mapa"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
        />
      </div>
      <p className="absolute min-h-24 right-14 rounded-tr-none -bottom-[40px] rounded-lg bg-main-black p-4 max-w-[450px] text-sm xl:text-base xl:p-5 ">
        {dataMapa.narrativeDescription}
      </p>
      <div className="absolute left-48 -bottom-[40px] rounded-lg overflow-hidden max-h-[180px] max-w-[100px] hidden xl:block border-2 border-main-black shadow-md shadow-main-black">
        <Image
          src={dataMapa.listViewIconTall || dataMapa.listViewIcon}
          alt="mapa"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover object-[0px,0%]"
        />
      </div>
    </div>
  );
}
