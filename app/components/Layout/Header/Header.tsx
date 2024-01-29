"use client";
import { useParams } from "next/navigation";
import ButtonMenuMobile from "../../Buttons/ButtonMenuMobile";
import Logo from "../../Logo";
import NavDesktop from "./NavDesktop";
import useYScroll from "@/app/hooks/useYScroll";

const Header = () => {
  const scrollY = useYScroll();
  const { id } = useParams();

  return (
    <header
      className={`top-0 z-30 w-full left-0 ${
        scrollY >= 700 ? "fixed md:left-20 md:w-[calc(100%-80px)]" : "absolute"
      }`}
    >
      <div
        className={`px-4 md:pr-8 lg:pl-6 lg:pr-10 h-12 md:h-16 lg:h-20 flex justify-between items-center max-w-[1200px] gap-4 mx-auto w-full ${
          !id && "bg-main-black"
        }`}
      >
        <Logo customClasses="h-full w-12 md:hidden" />
        <NavDesktop />
        <ButtonMenuMobile />
        <span className="boton-jugar hidden md:flex items-center justify-center font-bold rounded-lg h-fit px-4 py-2 bg-main-red uppercase text-main-black">
          juega ahora
        </span>
      </div>
    </header>
  );
};

export default Header;
