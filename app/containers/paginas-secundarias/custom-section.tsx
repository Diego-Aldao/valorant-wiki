import React from "react";

interface Props {
  children: React.ReactNode;
  titulo: string;
}

export default function CustomSection({ children, titulo }: Props) {
  return (
    <section className="px-4 md:px-8 lg:px-10 mt-12 md:mt-16 lg:mt-20 ">
      <header className="py-10 md:mb-10">
        <h1 className="uppercase text-3xl md:text-7xl font-bold md:tracking-tighter md:text-terciary-black text-secondary-black relative lg:text-8xl font-unbounded">
          {titulo}
          <span className="hidden md:block absolute bottom-0 left-0 text-4xl tracking-wide text-secondary-black lg:text-5xl">
            {titulo}
          </span>
        </h1>
      </header>
      {children}
    </section>
  );
}
