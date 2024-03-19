import React, { useState } from "react";
import { Arma } from "../types/Armas";
import ordenarArmas from "../services/SortWeapons";

export default function useFilterArmas() {
  const [currentFiltro, setCurrentFiltro] = useState<string>("todas las armas");

  const handleFiltro = (
    categoria: string,
    armas: Arma[],
    setCurrentArmas: React.Dispatch<React.SetStateAction<Arma[] | undefined>>,
    nombre: string
  ) => {
    let armasFiltradas;
    if (categoria === "all") {
      armasFiltradas = armas.sort(ordenarArmas);
    } else {
      const armasPorCategoria = armas.filter(
        (arma) => arma.category === categoria
      );
      armasFiltradas = armasPorCategoria.sort(ordenarArmas);
    }
    setCurrentArmas(armasFiltradas);
    setCurrentFiltro(nombre);
  };

  return { currentFiltro, handleFiltro };
}
