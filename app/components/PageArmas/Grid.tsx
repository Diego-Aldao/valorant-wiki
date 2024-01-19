import { Arma } from "@/app/types/Armas";
import Image from "next/image";
import React from "react";
import MainButton from "../Buttons/MainButton";

interface Props {
  armas: Arma[];
}

const Grid = ({ armas }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 mt-20">
      {armas.map((arma) => (
        <div
          key={arma.uuid}
          className="item-grid p-6 md:p-8 lg:p-10  w-full flex flex-col gap-6 lg:gap-10 md:gap-7 border-[1px] border-secondary-black after:absolute after:w-[80%] after:h-full after:top-0 after:-left-[120%] after:transition-all group hover:after:-left-64 after:bg-main-red relative after:skew-x-[-45deg] overflow-hidden after:-z-[1]"
        >
          <h3 className="uppercase font-bebas text-[40px] leading-10 lg:text-6xl">
            {arma.displayName}
          </h3>
          <div className="imagen h-[30vw] sm:h-[15vw] lg:h-[150px] transition-transform group-hover:scale-105">
            <Image
              src={arma.displayIcon}
              alt={arma.displayName}
              width={512}
              height={124}
              className="w-full h-full object-contain [filter:drop-shadow(10px_10px_0px_#3c323e)] group-hover:[filter:drop-shadow(15px_15px_0_#3c323e)] transition-all"
            />
          </div>
          <MainButton
            outsideStyles="justify-self-end self-end md:max-w-[150px] min-w-[150px] md:min-w-[150px] lg:min-w-[200px] lg:max-w-[200px] border-main-red "
            insideStyles="text-xs capitalize lg:text-sm after:bg-main-red group-hover:after:-left-6"
            nombre="ver detalle"
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;