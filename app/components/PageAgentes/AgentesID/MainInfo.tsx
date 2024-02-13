import React from "react";

interface Props {
  titulo: string;
  descripcion: string;
  children: React.ReactNode;
}

export default function MainInfo({ titulo, descripcion, children }: Props) {
  return (
    <div className="info h-full mx-auto md:ml-0 flex flex-col gap-5 md:min-w-[330px] w-full max-w-[400px] xl:max-w-[450px]">
      <h1 className="hidden md:block uppercase text-5xl font-black scale-y-[0.85] text-main-white relative tracking-tight lg:text-7xl leading-[1] xl:text-8xl md:text-main-black font-unbounded">
        {titulo}
      </h1>
      <p className="descripcion text-sm w-full leading-6 text-center md:text-left md:text-main-black font-medium">
        {descripcion}
      </p>
      {children}
    </div>
  );
}
