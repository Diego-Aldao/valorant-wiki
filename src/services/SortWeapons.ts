import { Arma } from "../types/Armas";

export default function ordenarArmas(a: Arma, b: Arma) {
  if (a.displayName === "Classic") return -1;
  if (!a.shopData?.cost || !b.shopData?.cost) return 0;
  return a.shopData.cost - b.shopData.cost;
}
