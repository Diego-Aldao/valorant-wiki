"use client";
import CustomSection from "../containers/paginas-secundarias/custom-section";
import useFetch from "../hooks/useFetch";
import { RespuestaAPIAgentes } from "../types/Agentes";
import GridMobile from "../components/PageAgentes/GridMobile";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import SwiperAgentes from "../components/PageAgentes/SwiperAgentes";
import CardAgente from "../components/PageAgentes/CardAgente";
import MainButton from "../components/Buttons/MainButton";
import { LS_AGENTES, URL_FETCH_AGENTES } from "../constants";

export default function PageAgentes() {
  const { data: dataAgentes } = useFetch<RespuestaAPIAgentes>(
    URL_FETCH_AGENTES,
    LS_AGENTES
  );

  return (
    <CustomSection titulo="agentes">
      {dataAgentes && <GridMobile dataAgentes={dataAgentes.data} />}
      <SwiperAgentes>
        {dataAgentes?.data.map((agente) => (
          <SwiperSlide key={agente.uuid}>
            {({ isActive, isNext, isPrev }) => (
              <CardAgente
                imagenAgente={agente.fullPortrait}
                nombreAgente={agente.displayName}
                esLink={true}
                outsideStyles={`h-[650px] mt-10 ${
                  isActive ? "grayscale-0 scale-100" : "grayscale scale-75"
                } ${!isActive && !isNext && !isPrev && "opacity-20"}`}
                insideStyles="w-[250px] h-[550px]"
              >
                <MainButton
                  outsideStyles={`mx-auto mt-5 transition-opacity border-main-red min-w-[180px] md:min-w-[200px] ${
                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  insideStyles="text-xs py-2 px-4 after:bg-main-red"
                  nombre={`ver info de ${agente.displayName}`}
                  link={`agentes/${agente.displayName.toLowerCase()}`}
                />
              </CardAgente>
            )}
          </SwiperSlide>
        ))}
      </SwiperAgentes>
    </CustomSection>
  );
}
