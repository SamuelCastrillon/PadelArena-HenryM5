"use client";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import { Bars3Icon } from "@heroicons/react/20/solid";

import React from "react";

const NavBarComponent: React.FC = () => {
  const [dropDawn, setDropDown] = React.useState(false);
  function handleDropDown() {
    setDropDown(!dropDawn);
  }
  return (
    <nav className="flex flex-col gap-2 md:flex-row md:gap-4 mt-8 h-fit py-5 sm:py-0 sm:h-[64px] w-screen md:w-[95%] bg-[#808080b7] justify-center bg-opacity-80 items-center rounded-2xl font-bold ">
      <img src="logoApp.png" alt="Logo" className="w-auto h-[60px] sm:h-[85%]" />
      <ActionButton className="block sm:hidden" onClick={handleDropDown}>
        <Bars3Icon className="h-10 font-bold" />
      </ActionButton>
      <hr className="w-[90%] h-[2px] border-none bg-white sm:hidden" />
      <div
        className={`flex-col items-center ${
          dropDawn ? "flex" : "hidden"
        } gap-4 sm:flex-row sm:flex`}>
        <NavigateButton
          href="/"
          className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
          INICIO
        </NavigateButton>
        <NavigateButton
          href="/tournaments"
          className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
          TORNEOS
        </NavigateButton>
        <NavigateButton
          href="#"
          className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg">
          NOTICIAS
        </NavigateButton>
        <div className="flex flex-col items-center h-full gap-4 sm:flex-row">
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
      </div>
    </nav>
  );
};

export default NavBarComponent;
