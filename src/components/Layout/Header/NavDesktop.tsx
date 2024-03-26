import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { listadoPages } from "@/src/constants";

const NavDesktop = () => {
  const { id } = useParams();
  let pathname = usePathname();

  let miPathname = pathname;

  if (pathname === "/") miPathname = "/inicio";

  return (
    <div className="hidden md:flex items-center gap-2 justify-center pointer-events-auto">
      <ul className="flex font-jost gap-2 lg:gap-8 rounded-xl h-full">
        {listadoPages.map((page) => (
          <li
            key={page.id}
            className={`px-4 py-2 flex items-center justify-center [backdrop-filter:blur(15px)] rounded-md ${
              miPathname.includes(page.nombre) && "bg-main-red"
            } ${miPathname.includes(page.nombre) && id && "!bg-main-black"} `}
          >
            <Link
              className={`${id && "md:text-main-black"} ${
                miPathname.includes(page.nombre) && "md:text-main-white"
              } capitalize tracking-wide text-sm lg:text-base  font-semibold`}
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
