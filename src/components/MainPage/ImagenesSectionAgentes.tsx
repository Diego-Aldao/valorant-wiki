import React from "react";
import agente1 from "../../assets/ReynaSectionAgentes.png";
import agente2 from "../../assets/RageSectionAgentes.png";
import Image from "next/image";

const ImagenesSectionAgentes = () => {
  return (
    <div className="hidden md:flex md:min-w-[352px] md:w-1/2 relative min-h-[300px] h-full overflow-visible">
      <Image
        src={agente1}
        alt="asd"
        width={352}
        height={600}
        className="absolute -top-48 lg:-top-36 left-0 lg:left-32 xl:left-64 z-[2] [transform:rotateY(180deg)]"
      />
      <Image
        src={agente2}
        alt="asd"
        width={352}
        height={600}
        className="absolute hidden lg:block -top-36 -left-24 lg:-left-20 xl:-left-2 z-[2]"
      />
    </div>
  );
};

export default ImagenesSectionAgentes;
