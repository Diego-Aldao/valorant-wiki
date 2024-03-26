import { Arma } from "@/src/types/Armas";
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
          className="item-grid p-6 md:p-8 lg:p-10  w-full flex flex-col gap-6 lg:gap-10 md:gap-7 border-[1px] border-secondary-black after:absolute after:w-[80%] after:h-full after:top-0 after:-left-[135%] after:transition-all group hover:after:-left-44 lg:hover:after:-left-52 after:bg-main-red relative after:skew-x-[-45deg] overflow-hidden after:-z-[1]"
        >
          <h3 className="uppercase font-unbounded text-xl leading-10 lg:text-4xl tracking-tight font-bold">
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
            outsideStyles="justify-self-end self-end md:max-w-[150px] min-w-[160px] md:min-w-[150px] lg:min-w-[200px] lg:max-w-[200px] border-main-red group-hover:before:left-6 group-hover:after:right-6"
            insideStyles="text-xs capitalize lg:text-sm after:bg-main-red"
            nombre="ver detalle"
            link={`armas/${arma.displayName.toLowerCase()}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;
