import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionMapas({ children }: Props) {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-10 md:h-[500px] lg:h-[600px]">
      <div className="relative contenido-agentes w-full h-full max-w-7xl mx-auto flex md:gap-2 lg:gap-6 items-center">
        {children}
      </div>
    </section>
  );
}
