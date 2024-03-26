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
    <section className="w-full xl:after:absolute relative after:w-[50%] after:h-full after:right-0 after:top-0 after:bg-main-black bg-main-black xl:bg-main-white ">
      <div
        className={`px-4 z-[2] md:px-8 min-h-[100vh] lg:h-[calc(100vh-24px)] lg:px-10 pt-32 lg:pt-[120px] flex flex-col gap-10 overflow-hidden lg:min-h-[820px] md:items-start md:after:absolute after:w-[65%] after:-right-64 after:bg-main-black after:skew-x-[-25deg] after:h-[calc(100%+1px)] xl:after:w-[55%] after:-bottom-[1px]  md:bg-main-white relative ${customClassesSection} pb-10`}
      >
        <header className={customClassesTitulo}>
          <h1 className="uppercase text-4xl sm:text-5xl break-words md:text-5xl font-bold text-main-white md:text-main-black md:text-left text-center relative lg:text-7xl xl:text-[84px] leading-[1] font-unbounded md:[text-shadow:_-1px_-1px_0_#ece8e1,_1px_-1px_0_#ece8e1,_-1px_1px_0_#ece8e1,_1px_1px_0_#ece8e1]">
            {titulo}
          </h1>
        </header>
        {children}
      </div>
    </section>
  );
}
