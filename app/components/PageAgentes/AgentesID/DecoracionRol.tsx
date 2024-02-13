interface Props {
  rol: string;
}

export default function DecoracionRol({ rol }: Props) {
  return (
    <span className="absolute opacity-40 [writing-mode:vertical-rl] rotate-180 -z-[1] left-0 text-main-black md:text-main-white uppercase font-bold text-6xl md:text-5xl lg:text-6xl bottom-0 shadow-main-black [text-shadow:_-1px_-1px_0_#b9b0b8,_1px_-1px_0_#b9b0b8,_-1px_1px_0_#b9b0b8,_1px_1px_0_#b9b0b8] font-unbounded">
      {rol}
    </span>
  );
}
