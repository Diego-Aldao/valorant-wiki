import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionAgentes = ({ children }: Props) => {
  return (
    <div className="pt-10 pb-20 mb-10 md:pb-16 md:pt-16 px-4 md:px-8 lg:px-10 2xl:px-0 bg-gradient-to-t from-main-red to-secondary-red relative w-full">
      <div
        id="agentes"
        className="to-scroll absolute -top-40 lg:-top-52 -z-20"
      ></div>
      <div className="border-top-left-2 absolute -left-10 -top-10 bg-secondary-red w-[50%] skew-x-[45deg] rounded-t-sm h-10"></div>
      <div className="border-top-left-1 absolute -left-8 -top-[80px] bg-secondary-red w-[50px] skew-x-[45deg] rounded-t-sm h-10 hidden md:block"></div>
      <div className="border-top-right-1 absolute -right-10 -top-20 bg-secondary-red w-[200px] skew-x-[-45deg] rounded-t-sm h-20 hidden lg:block"></div>
      <div className="contenido-agentes w-full max-w-7xl mx-auto flex md:gap-4 lg:gap-0 lg:justify-between items-center">
        {children}
      </div>
      <div className="border-bottom-left-1 absolute -left-14 -bottom-0 bg-main-black w-[200px] skew-x-[45deg] rounded-t-sm h-10"></div>
      <div className="border-bottom-right-2 absolute -right-20 -bottom-10 bg-main-red w-[70%] skew-x-[45deg] rounded-t-sm h-10 hidden lg:block"></div>
      <div className="border-bottom-right-2.1 absolute -right-10 -bottom-10 bg-main-black w-[200px] skew-x-[-45deg] rounded-t-sm h-10 hidden lg:block"></div>
    </div>
  );
};

export default SectionAgentes;
