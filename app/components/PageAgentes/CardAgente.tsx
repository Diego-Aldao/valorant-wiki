import React from "react";
import Image from "next/image";
import DecoracionNombres from "./DecoracionNombres";

interface Props {
  imagenAgente: string;
  imagenBackground?: string;
  nombreAgente: string;
  outsideStyles?: string;
  insideStyles?: string;
  children: React.ReactNode;
}

export default function CardAgente({
  imagenAgente,
  imagenBackground,
  nombreAgente,
  outsideStyles,
  insideStyles,
  children,
}: Props) {
  return (
    <div className="contenedor w-full flex flex-col gap-10 items-center justify-center">
      <div
        className={`w-full  transition relative flex items-center justify-center bg-transparent rounded-lg ${outsideStyles}`}
      >
        <Image
          src={imagenAgente}
          alt={`agente ${nombreAgente}`}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-full object-cover z-[2] relative bottom-5 scale-110 [filter:drop-shadow(5px_5px_0px_white)]"
        />
        <div
          className={`imgbg absolute bg-main-red border-[10px] border-main-white overflow-hidden ${insideStyles}`}
        >
          {imagenBackground ? (
            <Image
              src={imagenBackground}
              alt={`background del agente ${nombreAgente}`}
              height={0}
              width={0}
              sizes="100vw"
              className="w-full h-full object-cover scale-125 mix-blend-soft-light"
            />
          ) : (
            <DecoracionNombres nombre={nombreAgente} cantidad={6} />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
