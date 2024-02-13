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
      className="mt-auto flex items-center justify-center"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <Icon
        icon="line-md:arrow-open-right"
        className={`transition-transform h-6 w-6 ${
          isOpen ? "rotate-[180deg]" : "rotate-0"
        }`}
      />
    </div>
  );
}
