import React from "react";
interface Props {
  children: React.ReactNode;
  titulo: string | undefined | string[];
  customClassesTitulo?: string;
  customClassesSection?: string;
}

export default function CustomSectionID({
  children,
  titulo,
  customClassesTitulo,
  customClassesSection,
}: Props) {
  return (
    <section
      className={`px-4 md:px-8 h-full lg:px-10 mt-12 md:mt-0 md:pt-20 lg:pt-[120px] py-10 flex flex-col gap-10  overflow-hidden lg:min-h-[820px] md:items-start after:absolute after:-left-44 after:top-0 after:w-[95%] lg:after:w-[80%] lg:after:-left-48 after:skew-x-[-25deg] after:h-full after:bg-main-white after:-z-[2] after:hidden after:md:block relative min-h-[calc(100vh-88px)] ${customClassesSection}`}
    >
      <header className={customClassesTitulo}>
        <h1 className="uppercase text-4xl sm:text-5xl break-words md:text-5xl font-bold text-main-white md:text-main-black md:text-left text-center relative lg:text-7xl xl:text-[84px] leading-[1] font-unbounded md:[text-shadow:_-1px_-1px_0_#ece8e1,_1px_-1px_0_#ece8e1,_-1px_1px_0_#ece8e1,_1px_1px_0_#ece8e1]">
          {titulo}
        </h1>
      </header>
      {children}
    </section>
  );
}
