"use client";

import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, nombre: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();

  const getData = async (url: string, nombre: string) => {
    setLoading(true);
    const dataLS = localStorage.getItem(nombre);
    if (dataLS) {
      setData(JSON.parse(dataLS));
      setLoading(false);
    } else {
      try {
        const respuesta = await fetch(url);
        const dataFetch = await respuesta.json();
        setData(dataFetch);
        localStorage.setItem(nombre, JSON.stringify(dataFetch));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getData(url, nombre);
  }, [url, nombre]);

  return { data, loading };
}
