"use client";
import Image from "next/image";
import React from "react";
import arma from "../../assets/armaInicio.png";
import { Icon } from "@iconify/react";

export default function ImagenSectionArmas() {
  return (
    <div className="hidden relative md:flex min-w-[400px] w-1/2 justify-center ">
      <Image
        src={arma}
        alt="imagen arma"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover [transform:rotateY(180deg)_rotateZ(25deg)] [filter:drop-shadow(10px_10px_0px_#fe4655)] relative z-10"
      />
      <div className="estadisticas w-full h-full absolute right-0 flex flex-col gap-3 justify-center items-end top-3">
        <span className="h-8 w-[37%] mr-10 bg-main-red flex items-center pr-2 justify-end rounded-sm">
          <Icon icon="ic:outline-info" className="h-6 w-6" />
        </span>
        <span className="h-8 w-[50%] mr-5 bg-main-red flex items-center pr-2 justify-end rounded-sm">
          <Icon icon="ion:stats-chart-sharp" className="h-6 w-6" />
        </span>
        <span className="h-8 w-2/3 bg-main-red flex items-center pr-2 justify-end rounded-sm">
          <Icon icon="mdi:target" className="h-6 w-6" />
        </span>
      </div>
    </div>
  );
}
