"use client";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import { Bars3Icon } from "@heroicons/react/20/solid";

import React, { useContext, useEffect } from "react";
import UserMenuReusable from "../UserMenuReusable/UserMenuReusable";
import { AuthContext } from "@/context/GlobalContext";
import { usePathname } from "next/navigation";

const NavBarComponent: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [dropDawn, setDropDown] = React.useState(false);
  const navigate = usePathname();

  function handleDropDown() {
    setDropDown(!dropDawn);
  }

  useEffect(() => {
    setDropDown(false);
  }, [navigate]);

  return (
    <nav className="flex flex-col w-[95%] gap-2 md:flex-row md:gap-4 mt-8 h-fit px-5 sm:py-0 md:h-[64px] md:w-[95%] backdrop-filter backdrop-blur-lg bg-white/30  border-white/30 justify-between items-center rounded-2xl  text-white radhiumz ">
      <img src="logoApp.png" alt="Logo" className="w-auto h-[60px] md:h-[85%]" />
      <ActionButton className="block md:hidden" onClick={handleDropDown}>
        <Bars3Icon className="h-10 font-bold" />
      </ActionButton>
      <hr className="w-[90%] h-[2px] border-none bg-white sm:hidden" />
      <div
        className={`flex-col w-full h-[270px] sm:h-fit items-center ${
          dropDawn ? "flex" : "hidden"
        } gap-4 md:flex-row md:flex`}>
        <div className="flex flex-col sm:flex-row w-full justify-center items-center h-full">
          <NavigateButton
            href="/"
            className="px-5 py-2 rounded-lg h-fit w-fit hover:mb-[2px] hover:shadow-lg ">
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
        </div>
        <hr className="w-[90%] h-[2px] border-none bg-white  hidden sm:flex md:hidden" />
        <div className="flex flex-col items-center w-full h-[125px] sm:h-fit md:w-fit md:h-full gap-4 sm:flex-row justify-center p-2">
          {!currentUser ? (
            <>
              <NavigateButton
                href="/login"
                className="px-5 py-2 rounded-lg text-black bg-lime h-fit w-fit bg-lime-300 hover:mb-[2px] hover:shadow-lg">
                INGRESAR
              </NavigateButton>
              <NavigateButton
                href="/register"
                className="px-5 py-2 bg-blue-700  rounded-lg h-[40px] w-[200px]  hover:mb-[2px] hover:shadow-lg">
                CREAR CUENTA
              </NavigateButton>
            </>
          ) : (
            <UserMenuReusable />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
