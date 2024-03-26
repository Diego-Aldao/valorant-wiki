"use client";
import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setMenuMobileVisible: Dispatch<SetStateAction<boolean>>;
}

const ButtonMenuMobile = ({ setMenuMobileVisible }: Props) => {
  return (
    <div
      className="boton-menu-mobile md:hidden pointer-events-auto flex items-center justify-center "
      onClick={() => {
        setMenuMobileVisible((prevState) => !prevState);
      }}
    >
      <Icon icon="jam:menu" className="h-12 w-12" />
    </div>
  );
};

export default ButtonMenuMobile;
