import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { listadoPopulares } from "@/src/constants";
import Redes from "../Redes";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-8 lg:px-10 pt-5 pb-1 border-t-2 border-terciary-black">
      <div className="contenido-footer flex flex-wrap max-w-7xl mx-auto gap-5">
        <div className="logo-footer flex gap-2 items-center w-full lg:w-fit lg:flex-1 self-start">
          <Logo />
          <span className="uppercase font-unbounded pt-1 text-xl lg:pt-0">
            valorant wiki
          </span>
        </div>
        <div className="mas popular flex flex-col gap-2 flex-1 min-w-[200px] lg:pt-5">
          <h2 className="uppercase text-secondary-black font-unbounded  font-semibold">
            mas popular
          </h2>
          <ul className="mas popular flex flex-col gap-1">
            {listadoPopulares.map((popular) => (
              <li className="capitalize font-medium py-2 flex" key={popular.id}>
                <Link
                  href={popular.link}
                  className="flex-1 hover:text-main-red transition-colors"
                >
                  {popular.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="redes flex flex-col gap-2 flex-1 min-w-[200px] lg:pt-5">
          <h2 className="uppercase text-secondary-black font-unbounded  font-semibold">
            redes
          </h2>
          <Redes
            textStyles="capitalize text-base"
            listStyles="gap-1"
            itemStyles="w-full"
          />
        </div>
        <div className="copy w-full flex flex-col items-center justify-center gap-1 mt-5">
          <p className="text-xs text-center text-secondary-white">
            Valorant Wiki es un sitio no oficial y no está respaldado por Riot
            Games de ninguna manera.
          </p>
          <p className="text-xs text-center text-secondary-white">
            Riot Games, Valorant y todas las propiedades asociadas son marcas
            comerciales o marcas comerciales registradas de Riot Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
