import { Arma } from "../types/Armas";

export default function filtrarArmas (armas: Arma[] | undefined, id: string | string[]) {
    if (!armas || !id) return;
    let idFiltrado: string;
    if (typeof id === "string") {
      idFiltrado = id.split("%20").join(" ");
    }
    const armaFiltrada = armas.filter(
      (arma) => arma.displayName.toLowerCase() === idFiltrado
    );

    return armaFiltrada[0]
}
