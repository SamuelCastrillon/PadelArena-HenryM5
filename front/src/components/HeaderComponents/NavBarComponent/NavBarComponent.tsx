import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

import React from "react";

const NavBarComponent: React.FC = () => {
  return (
    <nav className="flex gap-8 mt-8 h-[64px] w-[90%] bg-[#808080b7] justify-center bg-opacity-80 items-center rounded-2xl font-bold ">
      <img src="logoApp.png" alt="Logo" className="w-auto h-[80%]" />
      <NavigateButton
        href="/"
        className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
        INICIO
      </NavigateButton>
      <NavigateButton
        href="#"
        className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
        TORNEOS
      </NavigateButton>
      <NavigateButton
        href="#"
        className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
        NOTICIAS
      </NavigateButton>
      <div className="flex items-center h-full gap-4">
        <NavigateButton
          href="/login"
          className="px-5 py-2 text-black rounded-lg h-fit w-fit bg-lime-300 hover:mb-[2px] hover:shadow-lg">
          INGRESAR
        </NavigateButton>
        <NavigateButton
          href="/register"
          className="px-5 py-2 bg-blue-700 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
          CREAR CUENTA
        </NavigateButton>
      </div>
    </nav>
  );
};

export default NavBarComponent;
