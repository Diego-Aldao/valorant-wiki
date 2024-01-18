import Link from "next/link";
import React from "react";

interface Props {
  outsideStyles: string;
  insideStyles: string;
  children?: React.ReactNode;
  nombre: string;
  link?: string;
}

const MainButton = ({
  outsideStyles,
  insideStyles,
  children,
  link,
  nombre,
}: Props) => {
  return (
    <button
      className={`${outsideStyles} after:bg-main-black after:w-4 after:absolute after:h-[1px] after:right-14 after:-top-[1px] before:bg-main-black before:w-4 before:absolute before:h-[1px] before:left-14 before:-bottom-[1px] hover:after:right-6 hover:before:left-6 after:transition-all before:transition-all relative bg-transparent rounded-sm border-[1px] min-w-[200px] max-w-[220px] md:min-w-[250px] md:max-w-[250px] p-[6px]`}
    >
      <span
        className={`${insideStyles} after:bg-main-black after:w-[50%] after:absolute after:h-full after:-left-full hover:after:-left-6  after:[transition-duration:0.2s] after:skew-x-[-45deg] after:z-[1] overflow-hidden w-full after:top-0 px-4 rounded-sm block uppercase py-2 tracking-wider font-bold text-sm relative`}
      >
        {link ? (
          <Link href={`/${link}`} className="text-inherit z-[2] relative">
            {nombre}
          </Link>
        ) : (
          <span className="z-[2] relative">
            {nombre} {children}
          </span>
        )}
      </span>
    </button>
  );
};

export default MainButton;
