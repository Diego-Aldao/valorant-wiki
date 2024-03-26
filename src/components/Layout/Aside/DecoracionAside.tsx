interface Props {
  isRotated?: boolean;
  customClases?: string;
}

export default function DecoracionAside({ isRotated, customClases }: Props) {
  return (
    <div
      className={`alt hidden lg:flex gap-5 justify-center items-center ${
        isRotated ? "flex-col-reverse" : "flex-col"
      } ${customClases}`}
    >
      <span className="uppercase text-xs [writing-mode:vertical-lr] text-main-red font-semibold tracking-wide">
        valorant wiki
      </span>
      <div
        className={`deco hidden lg:flex h-20 w-[2px] bg-main-red items-center justify-center relative after:absolute after:rotate-45 after:bg-main-red after:w-2 after:h-2 ${
          isRotated ? "after:top-0" : "after:bottom-0"
        }`}
      ></div>
    </div>
  );
}
