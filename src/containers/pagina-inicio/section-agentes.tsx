import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectionAgentes = ({ children }: Props) => {
  return (
    <div className="py-10 mb-10 md:py-16 lg:mb-20 px-4 md:px-8 lg:px-10 flex md:gap-2 lg:gap-6 items-center bg-gradient-to-t from-main-red to-secondary-red relative w-full">
      <div className="border-top-left-2 absolute -left-10 -top-10 bg-secondary-red w-[50%] skew-x-[45deg] rounded-t-sm h-10"></div>
      <div className="border-top-left-1 absolute -left-8 -top-[80px] bg-secondary-red w-[50px] skew-x-[45deg] rounded-t-sm h-10 hidden md:block"></div>
      <div className="border-top-right-1 absolute -right-10 -top-20 bg-secondary-red w-[200px] skew-x-[-45deg] rounded-t-sm h-20 hidden lg:block"></div>
      {children}

      <div className="border-bottom-right-1 absolute -right-10 -bottom-10 bg-main-red w-[70%] skew-x-[45deg] rounded-t-sm h-10"></div>
      <div className="border-bottom-right-2 absolute -right-20 -bottom-20 bg-main-red w-[70%] skew-x-[45deg] rounded-t-sm h-10 hidden lg:block"></div>
      <div className="border-bottom-right-2.1 absolute -right-10 -bottom-20 bg-main-black w-[200px] skew-x-[-45deg] rounded-t-sm h-10 hidden lg:block"></div>
    </div>
  );
};

export default SectionAgentes;
