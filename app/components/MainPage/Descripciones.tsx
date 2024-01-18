import React from "react";

interface Props {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  customClases?: string;
  button: React.ReactNode;
}

const Descripciones = ({
  titulo,
  subtitulo,
  descripcion,
  customClases,
  button,
}: Props) => {
  return (
    <div
      className={`relative after:absolute after:w-[280px] after:max-w-[130%] after:h-[1px]  after:top-0 after:left-0 descripciones flex flex-col mx-auto md:m-0 gap-2 max-w-[400px] lg:max-w-[450px] w-full ${customClases}`}
    >
      <h2 className="uppercase text-inherit text-5xl md:text-6xl lg:text-7xl md:left-2 scale-x-110 left-1 relative w-fit pt-2  tracking-wide mb-4 font-bebas">
        {titulo}
      </h2>
      <span className="font-semibold uppercase text-sm lg:text-lg text-inherit">
        {subtitulo}
      </span>
      <p className="text-sm font-medium max-w-[350px] lg:text-base text-inherit">
        {descripcion}
      </p>
      {button}
    </div>
  );
};

export default Descripciones;
