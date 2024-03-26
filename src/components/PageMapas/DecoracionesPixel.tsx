import React from "react";

export default function DecoracionesPixel() {
  return (
    <>
      {/*BOTTOM LEFT */}
      <div className="absolute bottom-10 z-[2] left-0 w-14 h-14 bg-main-black"></div>
      <div className="absolute bottom-24 z-[2] left-0 w-14 h-14 bg-main-black opacity-90"></div>
      <div className="absolute bottom-[152px] z-[2] left-0 w-14 h-14 bg-main-black opacity-30"></div>
      <div className="absolute bottom-10 z-[2] left-14 w-14 h-14 bg-main-black"></div>
      <div className="absolute bottom-24 z-[2] left-14 w-14 h-14 bg-main-black opacity-30"></div>
      <div className="absolute bottom-[152px] z-[2] left-14 w-14 h-14 bg-main-black opacity-20"></div>
      {/*TOP LEFT */}
      <div className="absolute top-24 z-[2] left-0 w-14 h-14 bg-main-black opacity-60"></div>
      <div className="absolute top-[152px] z-[2] left-0 w-14 h-14 bg-main-black opacity-50"></div>
      {/*BOTTOM RIGHT */}
      <div className="absolute bottom-10 z-[2] right-0 xl:right-52 2xl:right-[221px] w-14 h-14 bg-main-black opacity-80"></div>
      <div className="absolute bottom-24 z-[2] right-0 xl:right-52 2xl:right-[221px] w-14 h-14 bg-main-black opacity-60"></div>
      <div className="hidden xl:block absolute bottom-[152px] z-[2] right-0 xl:right-52 2xl:right-[221px] w-14 h-14 bg-main-black opacity-30"></div>
      {/*TOP RIGHT */}
      <div className="absolute top-10 z-[2] right-0 xl:right-52 2xl:right-[221px] w-14 h-14 bg-main-black "></div>
      <div className="absolute top-24 z-[2] right-0 xl:right-52 2xl:right-[221px] w-14 h-14 bg-main-black opacity-80"></div>
      <div className="absolute top-[152px] z-[2] right-0 xl:right-52 2xl:right-[221px] w-14 h-14 bg-main-black opacity-50"></div>
      <div className="absolute top-10 right-14 xl:right-[264px] 2xl:right-[277px] z-[2] w-14 h-14 bg-main-black opacity-80"></div>
    </>
  );
}
