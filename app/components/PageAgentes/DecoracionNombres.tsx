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
        key={i}
        className={`${
          i >= 1 ? "text-5xl" : "text-6xl"
        } uppercase relative mix-blend-soft-light font-unbounded leading-[1.4] font-bold`}
      >
        {nombre}
      </span>
    );
  }

  return (
    <div className="deco-nombres w-full flex flex-col items-center h-full mix-blend-overlay">
      {spansDeNombres}
    </div>
  );
}
