"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

type itemLista = {
  id: number;
  nombre: string;
};

interface Props {
  lista: itemLista[];
  nombreLista: string;
  setMenuMobileVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ListaMenuMobile({
  lista,
  nombreLista,
  setMenuMobileVisible,
}: Props) {
  const [listaVisible, setListaVisible] = useState<boolean>(false);
  return (
    <li className="capitalize font-medium py-2">
      <span
        className="flex items-center justify-between"
        onClick={() => {
          setListaVisible(!listaVisible);
        }}
      >
        {nombreLista}
        <Icon
          icon="solar:alt-arrow-down-broken"
          className={`text-main-red h-6 w-6 transition-transform ${
            listaVisible ? "rotate-180" : "rotate-0"
          }`}
        />
      </span>
      <ul
        className={`bg-terciary-black transition-all w-full pt-1 pl-5 px-4 flex flex-col gap-2  overflow-y-scroll ${
          listaVisible
            ? " mt-4 opacity-100 visible [transform:translate3d(0px,0px,0px)] h-[165px]"
            : "opacity-0 invisible [transform:translate3d(0px,40px,0px)] h-0 mt-0"
        }`}
      >
        <li
          className="py-2"
          onClick={() => {
            setMenuMobileVisible((prevState) => !prevState);
            setListaVisible((prevState) => !prevState);
          }}
        >
          <Link href={`/${nombreLista}`}>ver todo</Link>
        </li>
        {lista.map((itemLista) => (
          <li
            className="py-2"
            key={itemLista.id}
            onClick={() => {
              setMenuMobileVisible((prevState) => !prevState);
              setListaVisible((prevState) => !prevState);
            }}
          >
            <Link href={`/${nombreLista}/${itemLista.nombre}`}>
              {itemLista.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
