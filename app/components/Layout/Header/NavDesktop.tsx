import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { listadoPages } from "@/app/constants";

const NavDesktop = () => {
  const { id } = useParams();
  let pathname = usePathname();

  let miPathname = pathname;

  if (pathname === "/") miPathname = "/inicio";

  return (
    <div className="hidden md:flex items-center gap-2">
      <ul className="flex font-jost gap-2 lg:gap-4">
        {listadoPages.map((page) => (
          <li key={page.id} className="px-4 py-2 ">
            <Link
              className={`${id && "md:text-main-black"} ${
                miPathname.includes(page.nombre) && "md:!text-main-red"
              } text-secondary-white capitalize tracking-wide text-sm lg:text-base  font-semibold`}
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
