"use client";
import React, { useEffect, useState } from "react";
import CustomSection from "../containers/paginas-secundarias/custom-section";
import useFetch from "../hooks/useFetch";
import { Arma, RespuestaAPIArma } from "../types/Armas";
import Grid from "../components/PageArmas/Grid";
import ordenarArmas from "../services/SortWeapons";
import Filtro from "../components/PageArmas/Filtro";
import { LS_ARMAS, URL_FETCH_ARMAS } from "../constants";

export default function Page() {
  const { data, loading } = useFetch<RespuestaAPIArma>(
    URL_FETCH_ARMAS,
    LS_ARMAS
  );
  const [currentArmas, setCurrentArmas] = useState<Arma[]>();

  useEffect(() => {
    if (!data || loading) return;
    const armasOrdenadas = data?.data.sort(ordenarArmas);
    setCurrentArmas(armasOrdenadas);
  }, [data, loading]);

  return (
    <CustomSection titulo="arsenal">
      <div className="conteido-arsenal w-full">
        <header className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <h2 className="font-unbounded uppercase font-bold tracking-tighter text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            elige tu arma
          </h2>
          {data && (
            <Filtro setCurrentArmas={setCurrentArmas} data={data.data} />
          )}
        </header>
        {currentArmas && <Grid armas={currentArmas} />}
      </div>
    </CustomSection>
  );
}
