import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Estadisticas({ children }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-center mt-12 sm:mt-16 lg:mt-20 ">
      {children}
    </div>
  );
}
