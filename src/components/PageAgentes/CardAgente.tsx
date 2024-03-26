import React from "react";
import Image from "next/image";
import DecoracionNombres from "./DecoracionNombres";
import Link from "next/link";

interface Props {
  imagenAgente: string;
  imagenBackground?: string;
  nombreAgente: string;
  cardStyles?: string;
  agentStyles?: string;
  backgroundStyles?: string;
  children?: React.ReactNode;
  esLink?: boolean;
}

function LinkCard({
  imagenAgente,
  nombreAgente,
  cardStyles,
  agentStyles,
  backgroundStyles,
  children,
}: Props) {
  return (
    <div
      className={`transition-[transform,opacity] w-full h-full flex flex-col gap-5 items-center justify-center ${cardStyles}`}
    >
      <span className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold relative z-10 font-unbounded uppercase ">
        {nombreAgente}
      </span>
      <Link
        href={`agentes/${nombreAgente.toLowerCase().replaceAll("/", "")}`}
        className="h-full w-full flex items-center justify-center relative"
      >
        <div className={`relative w-fit z-[2] ${agentStyles}`}>
          <Image
            src={imagenAgente}
            alt={`agente ${nombreAgente}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover z-[2] relative bottom-5 scale-110 [filter:drop-shadow(5px_5px_0px_#ece8e1)] pointer-events-none"
            priority={false}
          />
        </div>
        <div
          className={`absolute bg-gradient-to-t from-main-black h-[85%] via-main-black to-main-red border-[10px]  border-main-white overflow-hidden ${backgroundStyles}`}
        >
          <DecoracionNombres nombre={nombreAgente} cantidad={8} />
        </div>
      </Link>
      {children}
    </div>
  );
}

function IdCard({
  imagenAgente,
  nombreAgente,
  cardStyles,
  agentStyles,
  backgroundStyles,
  imagenBackground,
}: Props) {
  return (
    <div
      className={`transition w-full h-fit relative flex flex-col gap-5 items-center justify-center ${cardStyles}`}
    >
      <div className={`relative w-fit z-[2] ${agentStyles}`}>
        <Image
          src={imagenAgente}
          alt={`agente ${nombreAgente}`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover z-[2] relative bottom-5 scale-110 [filter:drop-shadow(5px_5px_0px_#ece8e1)] pointer-events-none"
          priority={false}
        />
      </div>
      <div
        className={`absolute bg-gradient-to-t from-main-black h-[85%] via-main-black min-w-[235px] to-main-red border-[10px]  border-main-white overflow-hidden ${backgroundStyles}`}
      >
        {imagenBackground && (
          <Image
            src={imagenBackground}
            alt={`background del agente ${nombreAgente}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover scale-[1.5] object-[50%,40px] mix-blend-overlay  "
          />
        )}
      </div>
    </div>
  );
}

export default function CardAgente({
  imagenAgente,
  imagenBackground,
  nombreAgente,
  cardStyles,
  agentStyles,
  backgroundStyles,
  children,
  esLink,
}: Props) {
  return (
    <>
      {esLink ? (
        <LinkCard
          imagenAgente={imagenAgente}
          nombreAgente={nombreAgente}
          cardStyles={cardStyles}
          backgroundStyles={backgroundStyles}
          agentStyles={agentStyles}
        >
          {children}
        </LinkCard>
      ) : (
        <IdCard
          imagenAgente={imagenAgente}
          nombreAgente={nombreAgente}
          cardStyles={cardStyles}
          agentStyles={agentStyles}
          backgroundStyles={backgroundStyles}
          imagenBackground={imagenBackground}
        />
      )}
    </>
  );
}
