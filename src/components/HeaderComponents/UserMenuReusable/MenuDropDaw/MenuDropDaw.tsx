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

const MenuDropDaw: React.FC<IMenuReusableStatus> = ({ menuStatus, handlerLogOut }) => {
  return (
    <div
      className={`absolute top-[60px] sm:top-[68px] -right-[20px] sm:-right-4 ${
        menuStatus ? "block" : "hidden"
      } z-50`}>
      <menu className="flex flex-col w-screen sm:w-[360px] h-auto backdrop-filter-glass text-slate bg-slate border-glass border-2 shadow-glass rounded-2xl p-8 sfRegular">
        <MenuButton text="Crear Torneo" routeNavigate="/dashboard/admin/tournaments/create">
          <PlusCircleIcon className="h-10" />
        </MenuButton>
        <MenuButton
          text="Gestion de Torneos"
          routeNavigate="/dashboard/admin/tournaments/management">
          <Cog6ToothIcon className="h-10 " />
        </MenuButton>
        <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-limeBlue-gradient" />
        <MenuButton text="Gestion de Usuarios" routeNavigate="#">
          <UsersIcon className="h-10" />
        </MenuButton>
        <MenuButton text="Historial de Pagos" routeNavigate="#">
          <DocumentCurrencyDollarIcon className="h-10" />
        </MenuButton>
        <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-gradient-to-l from-lime to-customBlue" />
        <MenuButton text="Cerrar Sesión" routeNavigate="#" onClick={handlerLogOut}>
          <ArrowLeftStartOnRectangleIcon className="h-10" />
        </MenuButton>
      </menu>
    </div>
  );
};

export default MenuDropDaw;
