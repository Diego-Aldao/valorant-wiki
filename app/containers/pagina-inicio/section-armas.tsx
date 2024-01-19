import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionArmas({ children }: Props) {
  return (
    <section className="py-10 relative md:py-16 px-4 md:px-8 lg:px-10 flex md:gap-2 lg:gap-6 items-center bg-main-white mt-20">
      <div className="border-top-right-1 absolute -right-10 -top-[39px] bg-main-white w-[60%] skew-x-[-45deg] rounded-t-sm h-10 z-20"></div>
      <div className="border-top-left-1 absolute -left-10 -top-20 bg-main-white w-[120px] skew-x-[45deg] rounded-t-sm h-20 z-20 hidden md:block"></div>
      <div className="border-top-left-1 absolute left-52 top-0 bg-main-black w-[220px] skew-x-[45deg] rounded-t-sm h-5 z-20 hidden xl:block after:absolute after:-right-6 after:top-0 after:w-[100px] after:h-full after:bg-main-black after:skew-x-[-65deg]"></div>
      <div className="border-top-right-2 absolute -right-10 -top-20 bg-main-white w-[400px] skew-x-[-45deg] rounded-t-sm h-20 z-20 hidden lg:block"></div>
      {children}
    </section>
  );
}
