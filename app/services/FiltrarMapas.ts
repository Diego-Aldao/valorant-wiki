import { Mapa } from "../types/Mapas";

export default function filtrarMapas(mapas: Mapa[] | undefined){
    if (!mapas) return;
    const mapasFiltrados = mapas.filter((mapa) => mapa.narrativeDescription);
    return mapasFiltrados
}