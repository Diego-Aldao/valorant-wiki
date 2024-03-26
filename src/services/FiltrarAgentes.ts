import { Agente } from "../types/Agentes";

export default function filtrarAgentes(
  id: string | string[],
  agentes: Agente[] | undefined
) {
  if (!agentes) return;
  const currentAgente = agentes.filter(
    (agente) => agente.displayName.toLowerCase().replaceAll("/", "") === id
  );

  return currentAgente[0];
}
