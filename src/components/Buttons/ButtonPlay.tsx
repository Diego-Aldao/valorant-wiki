interface Props {
  customClases?: string;
}
export default function ButtonPlay({ customClases }: Props) {
  return (
    <a
      href="https://playvalorant.com/es-mx/"
      target="_blank"
      className={`pointer-events-auto w-fit items-center justify-center font-semibold rounded-sm h-fit px-4 py-2 bg-main-red uppercase text-main-white ${customClases}`}
    >
      juega ahora
    </a>
  );
}
