interface Props {
  isRotated?: boolean;
}

export default function DecoracionAside({ isRotated }: Props) {
  return (
    <div
      className={`alt hidden lg:flex gap-5 justify-center items-center ${
        isRotated ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <span className="uppercase text-xs [writing-mode:vertical-lr] text-secondary-black font-semibold tracking-wide">
        valorant wiki
      </span>
      <div
        className={`deco hidden lg:flex h-20 w-[2px] bg-secondary-black items-center justify-center relative after:absolute after:rotate-45 after:bg-secondary-black after:w-2 after:h-2 ${
          isRotated ? "after:top-0" : "after:bottom-0"
        }`}
      ></div>
    </div>
  );
}
