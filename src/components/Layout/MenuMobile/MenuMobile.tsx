import React, { Dispatch, SetStateAction } from "react";
import Logo from "../../Logo";

import ListaMenuMobile from "./ListaMenuMobile";
import { Icon } from "@iconify/react";
import Redes from "../Aside/Redes";
import { listadoAgentes, listadoArmas } from "@/src/constants";
import Link from "next/link";

interface Props {
  menuMobileVisible: boolean;
  setMenuMobileVisible: Dispatch<SetStateAction<boolean>>;
}

export default function MenuMobile({
  menuMobileVisible,
  setMenuMobileVisible,
}: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full min-h-[100vh] flex flex-col transition-all bg-main-black z-40 md:hidden ${
        menuMobileVisible
          ? "opacity-100 visible [transform:translate3d(0px,0px,0px)]"
          : "opacity-0 invisible [transform:translate3d(100%,0px,0px)]"
      }`}
    >
      <header className="w-full flex justify-between p-4 items-center">
        <div className="logo-menu-mobile flex gap-2 items-center px-1">
          <Logo />
          <span className=" font-unbounded text-sm pt-1 uppercase">
            valorant wiki
          </span>
        </div>
        <div
          className="btn-cerrar"
          onClick={() => {
            setMenuMobileVisible((menuMobileVisible) => !menuMobileVisible);
          }}
        >
          <Icon icon="jam:close" className="h-12 w-12 text-secondary-white" />
        </div>
      </header>
      <div className="main-content px-4 mt-10 flex flex-col gap-10">
        <div className="navegacion flex flex-col gap-3">
          <h2 className="uppercase text-secondary-black font-unbounded text-xl font-semibold">
            navegacion
          </h2>
          <ul className="navegacion flex flex-col gap-2">
            <li
              className="capitalize font-medium py-2"
              onClick={() => {
                setMenuMobileVisible((prevState) => !prevState);
              }}
            >
              <Link href={"/"}>inicio</Link>
            </li>
            <ListaMenuMobile
              nombreLista="agentes"
              lista={listadoAgentes}
              setMenuMobileVisible={setMenuMobileVisible}
            />

            <li
              className="capitalize font-medium py-2"
              onClick={() => {
                setMenuMobileVisible((prevState) => !prevState);
              }}
            >
              <Link href={"/mapas"}>mapas</Link>
            </li>
            <ListaMenuMobile
              nombreLista="armas"
              lista={listadoArmas}
              setMenuMobileVisible={setMenuMobileVisible}
            />
          </ul>
        </div>
        <div className="redes flex flex-col gap-4">
          <h2 className="uppercase text-secondary-black font-unbounded text-xl font-semibold">
            redes
          </h2>
          <Redes
            listStyles="items-start gap-2"
            itemStyles="w-full text-main-white capitalize"
          />
        </div>
      </div>
      <span className="boton-jugar mx-auto mt-auto w-fit flex items-center justify-center font-bold rounded-sm h-fit px-4 py-2 bg-main-red uppercase text-main-white">
        juega ahora
      </span>
      <footer className="mt-10 flex items-center h-14 justify-center">
        <span>valorant wiki</span>
      </footer>
    </div>
  );
}
