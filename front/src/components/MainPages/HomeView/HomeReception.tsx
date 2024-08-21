
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import React from "react";
import Card from "@/components/GeneralComponents/CristalCard/CristalCard";
import { PlusIcon } from "@heroicons/react/20/solid";

const HomeReception: React.FC = () => {
  return (
    <>
    <div className="global-container flex justify-start items-center min-h-auto w-full">
        <div className="text-container p-8 m-8 flex flex-col justify-start items-start">
          <div className="tittles radhiumz text-white leading-none">
          <h1 className="text-[60px]">TORNEOS</h1>
          <h1 className="text-[40px]">en un solo</h1>
          <h1 className="text-[86px] text-lime">LUGAR</h1>
          </div>
          <div className="mt-8 text-white text-[20px] sfRegular"><p>Todos tus torneos organizados de la mejor manera.<br />
          Padel simplificado como nunca viste.</p>
          </div>
          <NavigateButton href="/tournaments" className="mt-10 p-8 rounded-md bg-[#BEF164] min-w-[150px] px-4 py-2 text-black radhiumz transition-transform transform hover:translate-y-[-2px] hover:shadow-lg">
          VER TORNEOS
          </NavigateButton>
        </div>
    </div>
    <div className="Cards-container p-8 ml-8 flex justify-start items-start gap-4 relative sm:w-[80%]">
  <Card href="/" className="transition-transform transform hover:translate-y-[-2px] hover:shadow-lg w-[370px] h-[160px] hover:bg-lime/80 rounded-lg overflow-hidden">
    <div className="flex gap-4 items-center">
      <img 
        src="https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2022/12/ganadores.jpg.webp" 
        alt="participantes" 
        className="object-cover w-[200px] h-[110px] rounded-lg"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="radhiumz text-4xl">+</h1>
        <h1 className="radhiumz text-4xl">200</h1>
        <p className="sfRegular">PARTICIPANTES</p>
      </div>
    </div>
  </Card>

  <Card href="/" className="transition-transform transform hover:translate-y-[-2px] hover:shadow-lg w-[370px] h-[160px] hover:bg-lime/80 rounded-lg overflow-hidden">
    <div className="flex gap-4 items-center">
      <img 
        src="https://padelmagazine.fr/wp-content/uploads/2022/03/Victoire-Reus-Open-WPT-2022-Salazar-Triay.jpg" 
        alt="torneos" 
        className="object-cover w-[200px] h-[110px] rounded-lg"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="radhiumz text-4xl">+</h1>
        <h1 className="radhiumz text-4xl">34</h1>
        <p className="sfRegular">TORNEOS</p>
      </div>
    </div>
  </Card>

  <Card href="/" className="transition-transform transform hover:translate-y-[-2px] hover:shadow-lg w-[370px] h-[160px] hover:bg-lime/80 rounded-lg overflow-hidden">
    <div className="flex gap-4 items-center">
      <img 
        src="https://www.padeladdict.com/wp-content/uploads/2022/08/reparto-premios-pruebas-world-padel-tour-foto-interior.jpg" 
        alt="premios" 
        className="object-cover w-[200px] h-[110px] rounded-lg"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="radhiumz text-4xl">+</h1>
        <h1 className="radhiumz text-4xl">1000</h1>
        <p className="sfRegular">PREMIOS</p>
      </div>
    </div>
  </Card>
</div>


    </>
  );
};

export default HomeReception;