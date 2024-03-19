"use client";
import Estadisticas from "@/src/components/PageArmas/ArmasId/Estadisticas";
import ItemStat from "@/src/components/PageArmas/ArmasId/ItemStat";
import Skins from "@/src/components/PageArmas/ArmasId/Skins/Skins";
import Valor from "@/src/components/PageArmas/ArmasId/Valor";
import { LS_ARMAS, URL_FETCH_ARMAS } from "@/src/constants";
import CustomSectionID from "@/src/containers/paginas-secundarias/custom-section-id";
import useFetch from "@/src/hooks/useFetch";
import filtrarArmas from "@/src/services/FiltrarArmas";
import { RespuestaAPIArma } from "@/src/types/Armas";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function PageArmasID() {
  const { id } = useParams();
  const { data: armas } = useFetch<RespuestaAPIArma>(URL_FETCH_ARMAS, LS_ARMAS);
  const currentArma = filtrarArmas(armas?.data, id);

  const arrayStats = [
    {
      id: 1,
      nombre: "velocidad de disparo",
      stat: currentArma?.weaponStats?.fireRate,
    },
    {
      id: 2,
      nombre: "balas por cargador",
      stat: currentArma?.weaponStats?.magazineSize,
    },
    {
      id: 3,
      nombre: "tiempo de recarga",
      stat: currentArma?.weaponStats?.reloadTimeSeconds,
    },
    {
      id: 4,
      nombre: "tiempo para equipar",
      stat: currentArma?.weaponStats?.equipTimeSeconds,
    },
  ];

  return (
    <CustomSectionID
      titulo={currentArma?.displayName}
      customClassesTitulo="w-full md:text-main-black"
      customClassesSection="md:gap-20 after:w-full after:-left-80 lg:after:-left-96"
    >
      {currentArma && (
        <div className="contenedor relative w-full flex flex-col">
          <div className="imagen w-full h-[150px] sm:h-[180px] lg:h-[240px] max-w-[800px] mx-auto">
            <Image
              src={currentArma.displayIcon}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain [filter:drop-shadow(10px_10px_0_#8c818a)]"
            />
          </div>

          <Valor precio={currentArma.shopData?.cost} />

          {currentArma.weaponStats && (
            <Estadisticas>
              {arrayStats.map((item) => (
                <ItemStat key={item.id} stat={item.stat} nombre={item.nombre} />
              ))}
            </Estadisticas>
          )}
          <Skins skins={currentArma.skins} />
        </div>
      )}
    </CustomSectionID>
  );
}
