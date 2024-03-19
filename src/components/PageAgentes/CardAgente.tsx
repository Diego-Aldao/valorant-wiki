import React from "react";
import Image from "next/image";
import DecoracionNombres from "./DecoracionNombres";
import Link from "next/link";

interface Props {
  imagenAgente: string;
  imagenBackground?: string;
  nombreAgente: string;
  outsideStyles?: string;
  insideStyles?: string;
  children?: React.ReactNode;
  esLink?: boolean;
}

export default function CardAgente({
  imagenAgente,
  imagenBackground,
  nombreAgente,
  outsideStyles,
  insideStyles,
  children,
  esLink,
}: Props) {
  return (
    <div
      className={`transition w-full flex flex-col gap-10 items-center justify-center  ${outsideStyles}`}
    >
      <Link
        href={esLink ? `agentes/${nombreAgente.toLowerCase()}` : ""}
        className="card h-full w-full flex items-center justify-center relative"
      >
        <div className="relative w-full h-full z-[2]">
          <Image
            src={imagenAgente}
            alt={`agente ${nombreAgente}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover z-[2] relative bottom-5 scale-110 [filter:drop-shadow(5px_5px_0px_#ece8e1)]"
            priority={false}
          />
        </div>
        <div
          className={`absolute bg-gradient-to-t from-main-black via-main-black to-main-red border-[10px] border-main-white overflow-hidden ${insideStyles}`}
        >
          {imagenBackground ? (
            <Image
              src={imagenBackground}
              alt={`background del agente ${nombreAgente}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain scale-[1.5] object-[0%,40px] mix-blend-overlay"
            />
          ) : (
            <DecoracionNombres nombre={nombreAgente} cantidad={8} />
          )}
        </div>
      </Link>
      {children}
    </div>
  );
}
