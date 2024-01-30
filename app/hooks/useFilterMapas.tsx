import { useEffect, useState } from "react";
import { Mapa } from "../types/Mapas";

export default function useFilterMapas(mapas: Mapa[] | undefined) {
  const [currentMapas, setCurrentMapas] = useState<Mapa[]>();

  useEffect(() => {
    if (!mapas) return;
    const mapasFiltrados = mapas.filter((mapa) => mapa.narrativeDescription);
    setCurrentMapas(mapasFiltrados);
  }, [mapas]);

  return { currentMapas };
}
