import { Skin } from "../types/Armas";

export default function FiltrarSkins(skins: Skin[]) {
    const skinsFiltradas = skins.filter(
        (skin) =>
          skin.displayIcon &&
          !skin.displayName.includes("aleatorio") &&
          !skin.displayName.includes("estándar")
      );
      return skinsFiltradas
}