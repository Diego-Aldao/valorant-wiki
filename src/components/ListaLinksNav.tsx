"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { ItemLista } from "../types/Globals";

interface Props {
  lista: ItemLista[];
  nombreLista: string;
  setMenuMobileVisible?: Dispatch<SetStateAction<boolean>>;
  customLiClasses?: string;
  customSpanClasses?: string;
  customUlClasses?: string;
  customIconClasses?: string;
}

export default function ListaLinksNav({
  lista,
  nombreLista,
  setMenuMobileVisible,
  customLiClasses,
  customSpanClasses,
  customUlClasses,
  customIconClasses,
}: Props) {
  const [listaVisible, setListaVisible] = useState<boolean>(false);
  return (
    <li className={`capitalize font-medium py-2 ${customLiClasses}`}>
      <span
        className={`flex items-center justify-between ${customSpanClasses}`}
        onClick={() => {
          setListaVisible(!listaVisible);
        }}
      >
        {nombreLista}
        <Icon
          icon="solar:alt-arrow-down-broken"
          className={`text-main-red h-6 w-6 transition-transform ${
            listaVisible ? "rotate-180" : "rotate-0"
          } ${customIconClasses}`}
        />
      </span>
      <ul
        className={`bg-terciary-black transition-all w-full flex flex-col gap-2 overflow-y-scroll ${
          listaVisible
            ? " mt-4 opacity-100 visible [transform:translate3d(0px,0px,0px)] h-[165px]"
            : "opacity-0 invisible [transform:translate3d(0px,40px,0px)] h-0 mt-0"
        } ${customUlClasses}`}
      >
        <li
          className="group hover:bg-main-black transition-colors"
          onClick={() => {
            setListaVisible((prevState) => !prevState);
            if (!setMenuMobileVisible) return;
            setMenuMobileVisible((prevState) => !prevState);
          }}
        >
          <Link
            href={`/${nombreLista}`}
            className="w-full py-2 px-4 pl-5 block group-hover:text-main-white text-secondary-white transition-color"
          >
            ver todos
          </Link>
        </li>
        {lista.map((itemLista) => (
          <li
            className="group hover:bg-main-black transition-colors"
            key={itemLista.id}
            onClick={() => {
              setListaVisible((prevState) => !prevState);
              if (!setMenuMobileVisible) return;
              setMenuMobileVisible((prevState) => !prevState);
            }}
          >
            <Link
              href={`/${nombreLista}/${itemLista.nombre}`}
              className="w-full py-2 px-4 pl-5 block group-hover:text-main-white text-secondary-white transition-color"
            >
              {itemLista.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
