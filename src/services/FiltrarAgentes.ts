import { Agente } from "../types/Agentes";

export default function filtrarAgentes(
  id: string | string[],
  agentes: Agente[] | undefined
) {
  if (!agentes) return;
  const currentAgente = agentes.filter(
    (agente) => agente.displayName.toLowerCase() === id
  );

  return currentAgente[0];
}
