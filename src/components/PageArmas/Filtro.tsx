"use client";
import { Arma } from "@/src/types/Armas";
import React, { useState } from "react";
import { listadoFiltro } from "@/src/constants";
import { Icon } from "@iconify/react";
import useFilterArmas from "@/src/hooks/useFilterArmas";

interface Props {
  setCurrentArmas: React.Dispatch<React.SetStateAction<Arma[] | undefined>>;
  data: Arma[];
}

export default function Filtro({ setCurrentArmas, data }: Props) {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const { currentFiltro, handleFiltro } = useFilterArmas();

  return (
    <div
      onClick={() => {
        setDropdownVisible(!dropdownVisible);
      }}
      className="filtros cursor-pointer border-[1px] rounded-sm border-secondary-black py-4 ml-auto md:m-0 flex gap-3 items-center justify-center h-fit w-[210px] lg:w-[230px] xl:w-[250px] xl:py-5 relative"
    >
      <span className="uppercase text-sm lg:text-base font-medium">
        {currentFiltro}
      </span>
      <Icon
        icon="solar:alt-arrow-down-broken"
        className={`h-6 w-6 transition-transform ${
          dropdownVisible ? "rotate-180" : "rotate-0"
        }`}
      />
      <div
        className={`${
          dropdownVisible
            ? "opacity-100 visible top-[56px] xl:top-[64px]"
            : "opacity-0 invisible top-[72px]"
        } w-[calc(100%+2px)] bg-main-black max-h-[200px] border-[1px] border-secondary-black overflow-y-scroll absolute transition-all -left-[1px] z-10 flex flex-col`}
      >
        {listadoFiltro.map((filtro) => (
          <span
            onClick={() => {
              handleFiltro(
                filtro.categoria,
                data,
                setCurrentArmas,
                filtro.nombre
              );
            }}
            className="p-2 py-4 text-sm text-secondary-white hover:text-main-white hover:bg-terciary-black font-medium transition-colors uppercase"
            key={filtro.id}
          >
            {filtro.nombre}
          </span>
        ))}
      </div>
    </div>
  );
}
