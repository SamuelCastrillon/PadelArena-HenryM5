"use client";


import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

import React from "react";

const HomeReception: React.FC = () => {
  return (
    <>

    <div className="global-container flex justify-start items-center min-h-screen w-full">
        <div className="text-container m-[30px] p-4 flex flex-col justify-start items-start">
          <div className="tittles text-[#BEF164] font-bold font-radhiumz">
          <h1 className="text-[30px] bg-red-500">TORNEOS</h1>
          <h1 className="text-[30px]">EN UN SOLO</h1>
          <h1 className="text-[30px]">LUGAR</h1>
          </div>
          <p>Todos tus torneos organizados de la mejor manera.<br />
          Padel simplificado como nunca viste.</p>
          <NavigateButton href="/tournaments" className="mt-4 rounded-md bg-[#BEF164] min-w-[150px] px-4 py-2 text-white">
          ver torneos disponibles
          </NavigateButton>
        </div>
    </div>

    </>
  );
};

export default HomeReception;