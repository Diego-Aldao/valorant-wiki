import Image from "next/image";
import { Ability } from "../../../types/Agentes";
import React, { useState } from "react";
import { listadoSlots } from "@/src/constants";

interface Props {
  habilidades: Ability[];
}

export default function Habilidades({ habilidades }: Props) {
  const [currentHabilidad, setCurrentHabilidad] = useState<Ability>(
    habilidades[0]
  );

  return (
    <div className="habilidades flex flex-col gap-5">
      <div className="iconos flex gap-4 justify-center md:justify-start mt-5">
        {habilidades.map((habilidad) => (
          <React.Fragment key={habilidad.slot}>
            {habilidad.displayIcon && (
              <span
                onClick={() => {
                  setCurrentHabilidad(habilidad);
                }}
                className={`p-2 cursor-pointer border-secondary-black border-[1px] rounded-sm transition-colors ${
                  currentHabilidad === habilidad
                    ? "md:bg-main-black bg-main-white"
                    : "bg-transparent"
                }`}
              >
                <Image
                  src={habilidad.displayIcon || ""}
                  alt={habilidad.displayName}
                  height={35}
                  width={35}
                  className={`transition-opacity ${
                    currentHabilidad === habilidad
                      ? "opacity-100 invert md:invert-0"
                      : "md:invert opacity-40"
                  }`}
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="desc-habilidad flex flex-col gap-2">
        <span className="uppercase font-bold text-lg text-center md:text-left md:text-main-black">
          {listadoSlots[currentHabilidad.slot]} - {currentHabilidad.displayName}
        </span>
        <p className="leading-6 text-sm w-full text-center md:text-left md:text-main-black font-medium">
          {currentHabilidad?.description}
        </p>
      </div>
    </div>
  );
}
