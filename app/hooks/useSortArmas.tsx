import { useEffect, useState } from "react";
import { Arma } from "../types/Armas";
import ordenarArmas from "../services/SortWeapons";

export default function useSortArmas(armas: Arma[] | undefined) {
  const [currentArmas, setCurrentArmas] = useState<Arma[]>();

  useEffect(() => {
    if (!armas) return;
    const armasOrdenadas = armas.sort(ordenarArmas);
    setCurrentArmas(armasOrdenadas);
  }, [armas]);

  return { currentArmas, setCurrentArmas };
}
