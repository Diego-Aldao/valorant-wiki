import React from "react";
import agente1 from "../../assets/ReynaSectionAgentes.png";
import agente2 from "../../assets/RageSectionAgentes.png";
import Image from "next/image";

const ImagenesSectionAgentes = () => {
  return (
    <div className="hidden  md:flex md:min-w-[352px] md:w-1/2 relative items-center justify-center min-h-[300px] h-full overflow-visible">
      <Image
        src={agente1}
        alt="asd"
        width={352}
        height={600}
        className="absolute -top-48  xl:left-80 z-[2] [transform:rotateY(180deg)]"
      />
      <Image
        src={agente2}
        alt="asd"
        width={352}
        height={600}
        className="absolute hidden xl:block -top-48 left-0 z-[2]"
      />
    </div>
  );
};

export default ImagenesSectionAgentes;
