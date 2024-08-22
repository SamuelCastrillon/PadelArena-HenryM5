import React from "react";
import MenuButton from "./Menubutton/MenuButton";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  DocumentCurrencyDollarIcon,
  PlusCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { IMenuReusableStatus } from "../UserMenuReusableInterfaces";

const MenuDropDaw: React.FC<IMenuReusableStatus> = ({ menuStatus }) => {
  return (
    <div className={`absolute top-20 right-0 ${menuStatus ? "block" : "hidden"}`}>
      <menu className="flex flex-col   w-[360px] h-auto bg-glass backdrop-blur-glass backdrop-filter-glass bg-opacity-80 rounded-2xl p-8 sfRegular border-glass border-2">
        <MenuButton text="Crear Torneo">
          <PlusCircleIcon className="h-10" />
        </MenuButton>
        <MenuButton text="Gestion de Torneos">
          <Cog6ToothIcon className="h-10 " />
        </MenuButton>
        <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-white" />
        <MenuButton text="Gestion de Usuarios">
          <UsersIcon className="h-10" />
        </MenuButton>
        <MenuButton text="Historial de Pagos">
          <DocumentCurrencyDollarIcon className="h-10" />
        </MenuButton>
        <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-white" />
        <MenuButton text="Cerrar Sesión">
          <ArrowLeftStartOnRectangleIcon className="h-10" />
        </MenuButton>
      </menu>
    </div>
  );
};

export default MenuDropDaw;
