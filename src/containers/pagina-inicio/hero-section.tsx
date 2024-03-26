import Image from "next/image";
import React from "react";
import imagenBackground from "../../assets/MainBackground.jpeg";
import MainButton from "../../components/Buttons/MainButton";
import blackLogo from "../../assets/valorantLogoBlack.svg";

const HeroSection = () => {
  return (
    <div className="hero h-[calc(100vh_+_40px)] md:h-[calc(100vh_+_80px)] min-h-[700px] px-4 sm:px-0 relative max-h-[1200px]">
      <div className="background absolute top-0 left-0 -z-[1] w-full h-full  opacity-80 bg-terciary-black">
        <Image
          src={imagenBackground}
          alt="imagen background"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      <div className="contenido relative flex gap-2 flex-col pt-64 md:pt-72 lg:pt-0 lg:justify-center h-full w-full">
        <span className="text-center text-white max-w-[350px] sm:max-w-[520px] md:max-w-full mx-auto text-sm lg:text-base font-medium tracking-wide">
          Tu fuente definitiva de información detallada sobre el universo de
          Valorant.
        </span>
        <h1 className="uppercase text-4xl font-medium font-unbounded text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          valorant wiki
        </h1>
        <MainButton
          outsideStyles="border-secondary-white mt-10 mx-auto lg:min-w-[300px]"
          insideStyles="bg-main-red text-main-white md:text-lg"
          nombre="explorar"
          link="#agentes"
        >
          <Image
            src={blackLogo}
            alt="logo valorant negro"
            width={24}
            height={24}
          />
        </MainButton>
      </div>
    </div>
  );
};

export default HeroSection;
