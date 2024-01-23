"use client";
import Image from "next/image";
import React from "react";
import arma from "../../assets/armaInicio.png";
import { Icon } from "@iconify/react";

export default function ImagenSectionArmas() {
  return (
    <div className="hidden relative md:flex min-w-[320px] justify-center md:w-1/2">
      <Image
        src={arma}
        width={512}
        height={148}
        alt="imagen del arma x de valorant"
        className="[transform:rotateZ(-45deg)_rotateY(180deg)_scale(1.2)] lg:[transform:rotateZ(-45deg)_rotateY(180deg)_scale(1)] [filter:drop-shadow(10px_10px_0_#fe4655)] relative z-[2]"
      />
      <div className="estadistica-1 absolute -top-2 w-[35%] lg:w-[30%] h-11 left-[50%] lg:left-[55%] z-[1] bg-main-red flex justify-end items-center pr-2">
        <Icon icon="ic:outline-info" className="h-7 w-7" />
      </div>
      <div className="estadistica-2 absolute top-14 w-[40%] lg:w-[40%] h-11 left-[50%] z-[1] bg-main-red flex justify-end items-center pr-2">
        <Icon icon="ion:stats-chart-sharp" className="h-7 w-7" />
      </div>
      <div className="estadistica-3 absolute top-[120px] w-[60%] lg:w-[60%] h-11 left-[35%] z-[1] bg-main-red flex justify-end items-center pr-2">
        <Icon icon="mdi:target" className="h-7 w-7" />
      </div>
    </div>
  );
}
