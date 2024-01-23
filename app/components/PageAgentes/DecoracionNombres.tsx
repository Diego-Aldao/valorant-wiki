import React from "react";

interface Props {
  nombre: string;
  cantidad: number;
}

export default function DecoracionNombres({ nombre, cantidad }: Props) {
  let spansDeNombres = [];

  for (let i = 0; i < cantidad; i++) {
    spansDeNombres.push(
      <span
        className={`${
          i >= 1 ? "text-8xl" : "text-9xl"
        } uppercase relative mix-blend-soft-light font-bebas font-bold`}
      >
        {nombre}
      </span>
    );
  }

  return (
    <div className="deco-nombres w-full flex flex-col items-center h-full">
      {spansDeNombres}
    </div>
  );
}
