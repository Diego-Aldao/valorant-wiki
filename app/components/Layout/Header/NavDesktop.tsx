import Link from "next/link";
import React from "react";

const listadoPages = [
  {
    id: 1,
    nombre: "inicio",
  },
  {
    id: 2,
    nombre: "agentes",
  },
  {
    id: 3,
    nombre: "mapas",
  },
  {
    id: 4,
    nombre: "armas",
  },
];

const NavDesktop = () => {
  return (
    <div className="hidden md:flex items-center gap-2">
      <ul className="flex font-jost gap-2 lg:gap-4">
        {listadoPages.map((page) => (
          <li
            key={page.id}
            className="px-4 py-2 capitalize tracking-wide text-sm lg:text-base  font-medium"
          >
            <Link
              className="text-secondary-white"
              href={`/${page.nombre !== "inicio" ? page.nombre : ""}`}
            >
              {page.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDesktop;
