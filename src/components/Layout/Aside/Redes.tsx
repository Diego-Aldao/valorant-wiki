"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { listadoRedes } from "@/src/constants";

interface Props {
  listStyles?: string;
  itemStyles?: string;
  textStyles?: string;
}

export default function Redes({ listStyles, itemStyles, textStyles }: Props) {
  return (
    <ul className={`flex flex-col w-full ${listStyles}`}>
      {listadoRedes.map(({ icono, nombre, id }) => (
        <li key={id}>
          <a
            href={`https://${nombre}.com`}
            target="_blank"
            className={`flex gap-4 w-40 py-2 group  ${itemStyles}`}
          >
            <Icon
              icon={`line-md:${icono}`}
              className="w-5 h-5 group-hover:text-main-red transition-colors"
            />
            <span
              className={`text-sm font-medium group-hover:text-main-red transition-colors ${textStyles}`}
            >
              {nombre}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
