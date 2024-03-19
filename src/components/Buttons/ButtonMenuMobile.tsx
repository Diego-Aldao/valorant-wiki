"use client";
import { Icon } from "@iconify/react";

const ButtonMenuMobile = () => {
  return (
    <div className="boton-menu-mobile h-full w-12 md:hidden flex items-center justify-center">
      <Icon icon="jam:menu" className="h-12 w-12" />
    </div>
  );
};

export default ButtonMenuMobile;
