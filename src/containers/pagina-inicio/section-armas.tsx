import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionArmas({ children }: Props) {
  return (
    <section className="py-10 pt-20 relative md:py-16 md:pt-[120px] md:mt-0 px-4 md:px-8 lg:px-10 bg-main-white overflow-hidden">
      <div className="border-top-right-1 absolute left-20 top-0 bg-main-black w-[100%] skew-x-[45deg]  h-10 md:h-5 z-20"></div>
      <div className="border-top-right-2 absolute left-[110px] top-5 bg-main-black w-[55%] skew-x-[45deg]  h-10 z-20 hidden md:block after:absolute after:bg-main-black after:-right-12 after:top-0 after:w-[200px] after:h-full after:skew-x-[-65deg]"></div>
      <div className="border-top-left-1 absolute left-52 top-[59px] bg-main-black w-[220px] skew-x-[45deg] rounded-t-sm h-5 z-20 hidden lg:block after:absolute after:-right-6 after:top-0 after:w-[100px] after:h-full after:bg-main-black after:skew-x-[-65deg]"></div>
      <div className="contenido-armas w-full max-w-7xl mx-auto flex md:gap-4 lg:gap-0 lg:justify-between items-center">
        {children}
      </div>
    </section>
  );
}
