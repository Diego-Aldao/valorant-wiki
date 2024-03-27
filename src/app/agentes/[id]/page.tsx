"use client";
import CardAgente from "@/src/components/PageAgentes/CardAgente";
import React from "react";
import { RespuestaAPIAgentes } from "@/src/types/Agentes";
import useFetch from "@/src/hooks/useFetch";
import MainButton from "@/src/components/Buttons/MainButton";
import Habilidades from "@/src/components/PageAgentes/AgentesID/Habilidades";
import CustomSectionID from "@/src/containers/paginas-secundarias/custom-section-id";
import DecoracionRol from "@/src/components/PageAgentes/AgentesID/DecoracionRol";
import MainInfo from "@/src/components/PageAgentes/AgentesID/MainInfo";
import { LS_AGENTES, URL_FETCH_AGENTES } from "@/src/constants";
import { Icon } from "@iconify/react";
import { useParams } from "next/navigation";
import filtrarAgentes from "@/src/services/FiltrarAgentes";

export default function PaginaAgentesID() {
  const { data: dataAgentes } = useFetch<RespuestaAPIAgentes>(
    URL_FETCH_AGENTES,
    LS_AGENTES
  );
  const { id } = useParams();
  const currentAgente = filtrarAgentes(id, dataAgentes?.data);

  return (
    <CustomSectionID
      titulo={currentAgente?.displayName}
      customClassesTitulo="md:hidden"
      customClassesSection="md:flex-row-reverse md:gap-2 max-w-7xl 2xl:px-0 mx-auto !min-h-[100vh]"
    >
      {currentAgente && (
        <>
          <DecoracionRol rol={currentAgente.role.displayName} />
          <CardAgente
            imagenAgente={currentAgente.fullPortrait}
            nombreAgente={currentAgente.displayName}
            imagenBackground={currentAgente.background}
            cardStyles="!w-fit mx-auto md:mx-0 h-full z-[3] md:relative md:-right-6 lg:-right-24"
            backgroundStyles=" md:border-terciary-black md:w-[250px] lg:w-[300px]"
            agentStyles="h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]"
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
        outsideStyles="md:border-main-red md:after:bg-main-black md:before:bg-main-black mt-auto xl:before:bg-main-white mx-auto md:mx-0 min-w-[250px] md:!min-w-[200px] lg:!min-w-[250px] md:absolute md:bottom-10 md:left-[calc(50%-100px)] lg:left-[calc(50%-125px)] z-[5] "
        insideStyles="md:bg-main-red after:bg-main-red md:after:bg-main-black  text-xs text-main-white"
        nombre="ver todos los agentes"
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
