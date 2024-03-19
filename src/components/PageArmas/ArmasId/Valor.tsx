import { Icon } from "@iconify/react";

interface Props {
  precio: number | undefined;
}

export default function Valor({ precio }: Props) {
  return (
    <span className="flex gap-2 uppercase font-semibold font-unbounded text-xs items-center justify-center mt-5 sm:mt-0 sm:justify-start sm:w-fit md:text-main-black md:text-base lg:text-xl relative sm:top-5 sm:left-10 lg:left-28">
      valor:{" "}
      {precio && precio >= 1 ? (
        <span className="flex gap-1 items-center text-main-red">
          <Icon icon="oui:currency" className="w-4 h-4" /> {precio}
        </span>
      ) : (
        <span className="flex gap-1 items-center text-main-red">gratis</span>
      )}
    </span>
  );
}
