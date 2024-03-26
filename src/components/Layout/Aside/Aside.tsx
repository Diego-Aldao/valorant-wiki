"use client";

import React, { useState } from "react";
import Redes from "./Redes";
import ButtonAside from "../../Buttons/ButtonAside";
import Logo from "../../Logo";
import DecoracionAside from "./DecoracionAside";
import { Icon } from "@iconify/react";

const Aside = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="open hidden lg:flex gap-2 left-10 bottom-10 fixed z-30 w-fit py-2 px-4 rounded-full border-2 border-main-white backdrop-blur-md bg-main-black opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span className="uppercase text-xs font-semibold">redes</span>
        <Icon
          icon="line-md:arrow-open-right"
          className={`transition-transform h-4 w-4`}
        />
      </div>
      <aside
        className={`hidden w-full lg:flex min-h-[600px] h-[100vh] fixed z-40 top-0 left-0 bg-[#000000c0] transition-all ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`aside-main-content relative flex flex-col bg-main-black w-[400px] justify-start pt-4 px-8 transition-all  ${
            isOpen
              ? "left-0 opacity-100 visible"
              : "-left-12 opacity-0 invisible"
          }`}
        >
          <div
            className="logo-aside flex gap-2 items-center w-full justify-center"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <Logo customClasses="h-16 justify-center flex items-center w-fit h-fit" />
            <span className="uppercase font-medium text-xl pt-1 font-unbounded">
              valorant wiki
            </span>
          </div>
          <div className="contenido-aside w-full py-8 flex flex-col h-full items-start gap-8">
            <DecoracionAside customClases={"self-end"} />
            <Redes
              listStyles="mt-auto lg:mt-0 items-center text-secondary-black gap-3"
              itemStyles="px-4 "
              textStyles="uppercase"
            />
            <DecoracionAside isRotated={true} />
            <ButtonAside isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
