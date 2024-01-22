"use client";

import ordenarArmas from "@/app/services/SortWeapons";
import { Arma } from "@/app/types/Armas";
import React, { useState } from "react";
import { listadoFiltro } from "@/app/constants";

interface Props {
  setCurrentArmas: React.Dispatch<React.SetStateAction<Arma[] | undefined>>;
  data: Arma[];
}

export default function Filtro({ setCurrentArmas, data }: Props) {
  const [currentFiltro, setCurrentFiltro] = useState<string>("todas las armas");
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleFiltro = (categoria: string, nombre: string) => {
    let armasFiltradas;
    if (categoria === "all") {
      armasFiltradas = data.sort(ordenarArmas);
    } else {
      const armasPorCategoria = data.filter(
        (arma) => arma.category === categoria
      );
      armasFiltradas = armasPorCategoria.sort(ordenarArmas);
    }
    setCurrentArmas(armasFiltradas);
    setCurrentFiltro(nombre);
  };

  return (
    <div
      onClick={() => {
        setDropdownVisible(!dropdownVisible);
      }}
      className="filtros cursor-pointer border-[1px] rounded-sm border-secondary-black py-4 ml-auto md:m-0 flex gap-3 items-center justify-center h-fit w-[210px] lg:w-[230px] xl:w-[250px] xl:py-5 relative"
    >
      <span className="uppercase text-sm lg:text-base">{currentFiltro}</span>
      <div className="icono bg-main-red h-3 w-3"></div>
      <div
        className={`${
          dropdownVisible
            ? "opacity-100 visible top-[52px] lg:top-[56px] xl:top-[64px]"
            : "opacity-0 invisible top-[72px]"
        } w-[calc(100%+2px)] bg-main-black max-h-[200px] border-[1px] border-secondary-black overflow-y-scroll absolute transition-all -left-[1px] z-10 flex flex-col`}
      >
        {listadoFiltro.map((filtro) => (
          <span
            onClick={() => {
              handleFiltro(filtro.categoria, filtro.nombre);
            }}
            className="p-2 py-4  text-secondary-white hover:text-main-white hover:bg-terciary-black font-medium transition-colors uppercase"
            key={filtro?.id}
          >
            {filtro.nombre}
          </span>
        ))}
      </div>
    </div>
  );
}
