import MainButton from "@/app/components/Buttons/MainButton";
import Descripciones from "@/app/components/MainPage/Descripciones";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionMapas({ children }: Props) {
  return (
    <section className="relative py-10 md:py-16 px-4 md:px-8 lg:px-10 flex md:gap-2 lg:gap-6 items-center md:h-[500px] lg:h-[600px]">
      {children}
    </section>
  );
}
