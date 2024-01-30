import { useEffect, useState } from "react";

import { Agente } from "../types/Agentes";
import { useParams } from "next/navigation";

export default function useFilterAgentes(agentes: Agente[] | undefined) {
  const [currentAgente, setCurrentAgente] = useState<Agente>();
  const { id } = useParams();

  useEffect(() => {
    if (!id || !agentes) return;
    const dataAgentesFiltrada = agentes.filter(
      (agente) => agente.displayName.toLowerCase() === id
    );
    setCurrentAgente(dataAgentesFiltrada[0]);
  }, [id, agentes]);

  return { currentAgente };
}
