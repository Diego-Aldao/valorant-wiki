import Image from "next/image";
import React from "react";
import mapa from "../../assets/mapa.png";
export default function ImagenSectionMapas() {
  return (
    <div className="hidden md:block w-full h-[372px] lg:h-[472px] after:absolute after:bg-gradient-to-r after:from-main-black after:via-[rgba(0,0,0,0.6)] after:to-transparent after:w-full after:h-full after:top-0 after:left-0  absolute top-0 rounded-xl overflow-hidden left-0 -z-[1]">
      <Image
        src={mapa}
        alt="mapa"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
