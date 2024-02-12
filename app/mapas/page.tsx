"use client";
import Image from "next/image";
import CustomSection from "../containers/paginas-secundarias/custom-section";
import useFetch from "../hooks/useFetch";
import { ResponseAPIMapas } from "../types/Mapas";
import React from "react";
import { SwiperSlide } from "swiper/react";
import SlideMapa from "../components/PageMapas/SlideMapa";
import DecoracionesPixel from "../components/PageMapas/DecoracionesPixel";
import SwiperMapas from "../components/PageMapas/SwiperMapas";

// Import Swiper styles
import "swiper/css";
import { LS_MAPAS, URL_FETCH_MAPAS } from "../constants";
import filtrarMapas from "../services/FiltrarMapas";

export default function Page() {
  const { data: mapas } = useFetch<ResponseAPIMapas>(URL_FETCH_MAPAS, LS_MAPAS);
  const currentMapas = filtrarMapas(mapas?.data);

  return (
    <CustomSection titulo="mapas">
      <>
        {currentMapas && (
          <>
            <div className="grid mt-10 grid-cols-[repeat(auto-fill,minmax(240px,_1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,_1fr))] gap-y-12 gap-x-4 w-full lg:hidden">
              {currentMapas.map((mapa) => (
                <div key={mapa.uuid} className="w-full flex flex-col gap-4">
                  <h2 className="text-3xl tracking-tighter font-semibold uppercase font-unbounded">
                    {mapa.displayName}
                  </h2>
                  <div className=" relative w-full mx-auto  max-w-full overflow-hidden">
                    <div className="w-full max-h-[500px] md:max-h-[550px] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-main-black after:to-transparent after:via-[#302732c4] md:after:via-[#3027329c] rounded-lg overflow-hidden">
                      <Image
                        src={mapa.listViewIconTall || mapa.listViewIcon}
                        alt="mapa"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-cover object-[0px,0%]"
                      />
                    </div>
                    <p className="text-sm leading-6  p-2 text-main-white absolute bottom-0 left-0">
                      {mapa.narrativeDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block relative mb-20">
              <DecoracionesPixel />
              <SwiperMapas>
                {currentMapas.map((mapa) => (
                  <SwiperSlide key={mapa.uuid}>
                    <SlideMapa dataMapa={mapa} />
                  </SwiperSlide>
                ))}
              </SwiperMapas>
            </div>
          </>
        )}
      </>
    </CustomSection>
  );
}
