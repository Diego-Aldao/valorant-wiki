"use client";
import React from "react";
import CustomSection from "../containers/paginas-secundarias/custom-section";
import useFetch from "../hooks/useFetch";
import { RespuestaAPIArma } from "../types/Armas";
import Grid from "../components/PageArmas/Grid";
import Filtro from "../components/PageArmas/Filtro";
import { LS_ARMAS, URL_FETCH_ARMAS } from "../constants";
import useSortArmas from "../hooks/useSortArmas";

export default function PageArmas() {
  const { data } = useFetch<RespuestaAPIArma>(URL_FETCH_ARMAS, LS_ARMAS);
  const { currentArmas, setCurrentArmas } = useSortArmas(data?.data);

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
