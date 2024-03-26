import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { listadoPages, listadoAgentes, listadoArmas } from "@/src/constants";
import ListaMenuMobile from "../MenuMobile/ListaMenuMobile";

const NavDesktop = () => {
  const { id } = useParams();
  let pathname = usePathname();

  let miPathname = pathname;

  if (pathname === "/") miPathname = "/inicio";

  return (
    <div className="hidden md:flex items-center gap-2 justify-center pointer-events-auto">
      <ul className="flex font-jost gap-2 lg:gap-8 rounded-xl h-full">
        {listadoPages.map((page) =>
          page.nombre === "agentes" || page.nombre === "armas" ? (
            <React.Fragment key={page.id}>
              <ListaMenuMobile
                nombreLista={page.nombre}
                lista={
                  page.nombre === "agentes" ? listadoAgentes : listadoArmas
                }
                customLiClasses={`px-4 flex flex-col items-center justify-center [backdrop-filter:blur(15px)] rounded-sm cursor-pointer ${
                  miPathname.includes(page.nombre) && "bg-main-red"
                } ${
                  miPathname.includes(page.nombre) && id && "!bg-main-black"
                }`}
                customSpanClasses={`tracking-wide text-sm lg:text-base font-semibold gap-2 ${
                  id && "md:text-main-black"
                } ${miPathname.includes(page.nombre) && "md:text-main-white"}`}
                customIconClasses={`${id && "md:text-main-red"} ${
                  miPathname.includes(page.nombre) && "md:text-main-white"
                }`}
                customUlClasses="absolute top-7 left-0 w-[150px] lg:w-[200px] rounded-sm overflow-hidden"
              />
            </React.Fragment>
          ) : (
            <li
              key={page.id}
              className={`px-4 py-2 flex items-center justify-center [backdrop-filter:blur(15px)] rounded-md ${
                miPathname.includes(page.nombre) && "bg-main-red"
              } ${miPathname.includes(page.nombre) && id && "!bg-main-black"}`}
            >
              <Link
                className={`capitalize tracking-wide text-sm lg:text-base font-semibold ${
                  id && "md:text-main-black"
                } ${miPathname.includes(page.nombre) && "md:text-main-white"}`}
                href={`/${page.nombre !== "inicio" ? page.nombre : ""}`}
              >
                {page.nombre}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NavDesktop;
