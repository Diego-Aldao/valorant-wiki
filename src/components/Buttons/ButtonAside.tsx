"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonAside({ isOpen, setIsOpen }: Props) {
  return (
    <div
      className="mt-auto py-2 px-5 self-end flex items-center justify-center gap-4 rounded-full border-2 transition-colors border-secondary-black cursor-pointer hover:border-main-white"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Icon
        icon="line-md:arrow-open-right"
        className={`transition-transform h-4 w-4 rotate-[180deg]`}
      />
      <span className="uppercase text-xs font-semibold">cerrar</span>
    </div>
  );
}
