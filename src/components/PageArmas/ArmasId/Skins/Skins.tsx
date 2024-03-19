import { Skin } from "@/src/types/Armas";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperSkins from "./SwiperSkins";
import FiltrarSkins from "@/src/services/FiltrarSkins";

interface Props {
  skins: Skin[];
}

export default function Skins({ skins }: Props) {
  const currentSkins = FiltrarSkins(skins);

  return (
    <section className="mt-10">
      <header>
        <h2 className="text-3xl uppercase font-unbounded py-10 md:text-main-black font-bold md:text-4xl lg:text-5xl">
          skins
        </h2>
      </header>
      <SwiperSkins>
        {currentSkins.map((skin) => (
          <SwiperSlide key={skin.uuid}>
            <div className="skin bg-terciary-black rounded-lg flex flex-col gap-5 md:gap-6 p-4 min-h-[118px] md:min-h-[128px] xl:min-h-[138px]">
              <span className="uppercase text-xs md:text-sm font-unbounded line-clamp-1">
                {skin.displayName}
              </span>
              <div className="max-w-[400px] mx-auto w-full">
                <Image
                  src={skin.displayIcon || ""}
                  alt=""
                  width={0}
                  height={0}
                  className="w-full h-full object-contain max-h-[120px]"
                  sizes="100vw"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperSkins>
    </section>
  );
}
