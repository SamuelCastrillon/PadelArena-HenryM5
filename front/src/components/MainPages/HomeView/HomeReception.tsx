
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import React from "react";
import Card from "@/components/GeneralComponents/CristalCard/CristalCard";

const HomeReception: React.FC = () => {
  return (
    <>
    <div className="global-container flex justify-start items-center min-h-screen w-full">
        <div className="text-container p-8 m-8 flex flex-col justify-start items-start">
          <div className="tittles radhiumz">
          <h1>TORNEOS</h1>
          <h1>EN UN SOLO</h1>
          <h1>LUGAR</h1>
          </div>
          <div className="mt-8"><p>Todos tus torneos organizados de la mejor manera.<br />
          Padel simplificado como nunca viste.</p>
          </div>
          <NavigateButton href="/tournaments" className="mt-8 p-8 rounded-md bg-[#BEF164] min-w-[150px] px-4 py-2 text-black radhiumz">
          VER TORNEOS
          </NavigateButton>
        </div>
    </div>
        <div className="Card-container p-8 m-8 flex justify-start items-start gap-2 ">
        <Card href="/"><h1>+ 200 PARTICIPANTES</h1><img src="logoApp.png" alt="Logo" className="w-auto h-[60px] sm:h-[85%]" /></Card>
        <Card href="/"><h1>+ 34 TORNEOS</h1><img className="" src= ""/></Card>
        <Card href="/"><h1>+ 1000 PREMIOS</h1><img className="" src= ""/></Card>
        </div>


    </>
  );
};

export default HomeReception;