"use client";
import ButtonMenuMobile from "../../Buttons/ButtonMenuMobile";
import Logo from "../../Logo";
import NavDesktop from "./NavDesktop";
import useYScroll from "@/src/hooks/useYScroll";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useState } from "react";

const Header = () => {
  const scrollY = useYScroll();
  const [menuMobileVisible, setMenuMobileVisible] = useState<boolean>(true);

  return (
    <>
      <header
        className={`top-0 pointer-events-none z-30 w-full px-4 md:px-8 lg:px-10 pt-4 transition-opacity ${
          scrollY >= 200 && "opacity-0"
        } ${
          scrollY >= 700
            ? "fixed bg-gradient-to-b from-[#302732] to-transparent h-48 opacity-100"
            : "absolute"
        } `}
      >
        <div className="flex justify-between items-center gap-4 md:gap-8 lg:gap-12 w-full">
          <Logo customClasses="[backdrop-filter:blur(15px)] rounded-xl px-1" />
          <ButtonMenuMobile setMenuMobileVisible={setMenuMobileVisible} />
          <NavDesktop />

          <span className="boton-jugar ml-auto w-fit hidden md:flex items-center justify-center font-bold rounded-lg h-fit px-4 py-2 bg-main-red uppercase text-main-white">
            juega ahora
          </span>
        </div>
      </header>
      <MenuMobile
        menuMobileVisible={menuMobileVisible}
        setMenuMobileVisible={setMenuMobileVisible}
      />
    </>
  );
};

export default Header;
