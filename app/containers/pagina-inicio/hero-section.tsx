import Image from "next/image";
import React from "react";
import imagenBackground from "../../assets/MainBackground.jpeg";
import MainButton from "../../components/Buttons/MainButton";
import blackLogo from "../../assets/valorantLogoBlack.svg";

const HeroSection = () => {
  return (
    <div className="hero h-[calc(100vh_-_8px)] md:h-[calc(100vh_+_16px)] lg:h-[100vh] min-h-[700px] px-4 md:px-8 lg:px-10 relative max-h-[900px]">
      <div className="background absolute top-0 left-0 -z-[1] w-full h-full mix-blend-soft-light opacity-80">
        <Image
          src={imagenBackground}
          alt="imagen bacgkround"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="contenido relative md:-top-12 lg:-top-20 flex gap-1 flex-col pt-32 md:pt-0 md:justify-center h-full w-full">
        <span className="text-center text-white max-w-[300px] sm:max-w-[450px] md:max-w-full mx-auto text-sm lg:text-base font-medium tracking-wide">
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
