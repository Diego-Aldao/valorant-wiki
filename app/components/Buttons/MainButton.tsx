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
      className={`${outsideStyles} bg-transparent rounded-sm border-[1px] min-w-[200px] max-w-[220px] md:min-w-[250px] md:max-w-[250px] p-[6px]`}
    >
      <span
        className={` ${insideStyles} px-4 rounded-sm block uppercase py-2 tracking-wider font-bold text-sm`}
      >
        {link ? (
          <Link href={`/${link}`} className="text-inherit">
            {nombre}
          </Link>
        ) : (
          <>
            {nombre} {children}
          </>
        )}
      </span>
    </button>
  );
};

export default MainButton;
