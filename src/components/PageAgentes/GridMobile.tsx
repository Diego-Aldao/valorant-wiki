import React from "react";
import { type Agente } from "@/src/types/Agentes";
import MainButton from "../Buttons/MainButton";
import CardAgente from "./CardAgente";

interface Props {
  dataAgentes?: Agente[];
}

export default function GridMobile({ dataAgentes }: Props) {
  return (
    <div className="grid-mobile md:hidden grid grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-4 gap-y-16 min-h-[100vh]">
      {dataAgentes?.map((agente) => (
        <React.Fragment key={agente.uuid}>
          <CardAgente
            nombreAgente={agente.displayName}
            imagenAgente={agente.fullPortrait}
            backgroundStyles="w-[250px] h-[550px]"
            agentStyles="w-[320px] h-[450px] sm:h-[450px] sm:w-full"
            esLink={true}
          >
            <MainButton
              outsideStyles="mx-auto mt-5 border-main-red min-w-[180px]"
              insideStyles="text-xs py-1 px-2 after:bg-main-red"
              nombre={`ver info de ${agente.displayName}`}
              link={`agentes/${agente.displayName.toLowerCase()}`}
            />
          </CardAgente>
        </React.Fragment>
      ))}
    </div>
  );
}
