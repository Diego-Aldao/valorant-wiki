"use client";
import CardAgente from "@/app/components/PageAgentes/CardAgente";
import React from "react";
import { RespuestaAPIAgentes } from "@/app/types/Agentes";
import useFetch from "@/app/hooks/useFetch";
import MainButton from "@/app/components/Buttons/MainButton";
import Habilidades from "@/app/components/PageAgentes/AgentesID/Habilidades";
import CustomSectionID from "@/app/containers/paginas-secundarias/custom-section-id";
import DecoracionRol from "@/app/components/PageAgentes/AgentesID/DecoracionRol";
import MainInfo from "@/app/components/PageAgentes/AgentesID/MainInfo";
import { LS_AGENTES, URL_FETCH_AGENTES } from "@/app/constants";
import useFilterAgentes from "@/app/hooks/useFilterAgentes";
import { Icon } from "@iconify/react";

export default function PaginaAgentesID() {
  const { data: dataAgentes } = useFetch<RespuestaAPIAgentes>(
    URL_FETCH_AGENTES,
    LS_AGENTES
  );

  const { currentAgente } = useFilterAgentes(dataAgentes?.data);

  return (
    <CustomSectionID
      titulo={currentAgente?.displayName}
      customClassesTitulo="md:hidden"
    >
      {currentAgente && (
        <>
          <DecoracionRol rol={currentAgente.role.displayName} />
          <CardAgente
            imagenAgente={currentAgente.fullPortrait}
            nombreAgente={currentAgente.displayName}
            imagenBackground={currentAgente.background}
            outsideStyles="h-[450px] lg:h-[650px] max-w-[350px] mx-auto md:m-0 lg:max-w-[450px] lg:scale-[1.15] lg:absolute lg:top-10 lg:right-0 z-[2] xl:right-16 md:mt-16 lg:mt-20"
            insideStyles="w-[200px] h-[400px] lg:w-[250px] lg:h-[500px] md:border-main-black"
          />
          <MainInfo
            titulo={currentAgente.displayName}
            descripcion={currentAgente.description}
          >
            <Habilidades habilidades={currentAgente.abilities} />
          </MainInfo>
        </>
      )}
      <MainButton
        outsideStyles="md:border-main-red md:after:bg-main-black md:before:bg-main-white mx-auto md:mr-10 lg:mr-0 mt-auto md:!min-w-[200px] lg:!min-w-[250px] md:absolute md:bottom-10 md:left-[calc(50%-100px)] lg:left-[calc(50%-125px)] z-[5]"
        insideStyles="md:bg-main-red after:bg-main-red md:after:bg-main-black text-xs lg:text-sm text-main-white"
        nombre="volver a la lista"
        link="agentes"
        leftChildren={
          <Icon
            icon="solar:alt-arrow-left-broken"
            className="w-4 h-4 text-main-white"
          />
        }
      />
    </CustomSectionID>
  );
}
