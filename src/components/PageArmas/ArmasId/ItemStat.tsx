interface Props {
  nombre: string;
  stat: number | undefined;
}

export default function ItemStat({ stat, nombre }: Props) {
  return (
    <div className="max-w-[120px] md:max-w-[150px] lg:max-w-[200px] w-full stat flex flex-col gap-1">
      <span className="md:[text-shadow:_-1px_-1px_0_#ece8e1,_1px_-1px_0_#ece8e1,_-1px_1px_0_#ece8e1,_1px_1px_0_#ece8e1] md:text-main-black uppercase text-center font-unbounded font-semibold text-3xl md:text-4xl lg:text-5xl ">
        {stat}
      </span>
      <span className="md:[text-shadow:_-1px_-1px_0_#ece8e1,_1px_-1px_0_#ece8e1,_-1px_1px_0_#ece8e1,_1px_1px_0_#ece8e1] md:text-main-black text-center text-[10px] md:text-xs lg:text-base uppercase font-bold">
        {nombre}
      </span>
    </div>
  );
}
