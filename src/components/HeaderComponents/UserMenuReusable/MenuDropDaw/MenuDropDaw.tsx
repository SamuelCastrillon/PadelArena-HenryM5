import React from "react";
import MenuButton from "./Menubutton/MenuButton";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  DocumentCurrencyDollarIcon,
  PlusCircleIcon,
  UsersIcon,
  InformationCircleIcon,
  CheckBadgeIcon,
  UserCircleIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { IMenuReusableStatus } from "../UserMenuReusableInterfaces";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

const MenuDropDaw: React.FC<IMenuReusableStatus> = ({
  menuStatus,
  handlerLogOut,
  currentUser,
}) => {
  return (
    <div
      className={`absolute top-[60px] sm:top-[68px] -right-[20px]  sm:sm:right-0 ${
        menuStatus ? "block" : "hidden"
      } z-50`}
    >
      <menu className="flex flex-col w-screen sm:w-[360px] h-auto backdrop-filter-glass text-slate bg-slate border-glass border-2 shadow-glass rounded-2xl p-8 sfRegular">
        {currentUser ? (
          currentUser.role === "admin" ? (
            <AdminMenu handlerLogOut={handlerLogOut} />
          ) : currentUser.role === "jugador" ? (
            <UserMenu handlerLogOut={handlerLogOut} />
          ) : (
            <PublicButtons />
          )
        ) : (
          <PublicButtons />
        )}
      </menu>
    </div>
  );
};

export default MenuDropDaw;

export const PublicButtons = () => {
  return (
    <>
      <NavigateButton
        href="/login"
        className="w-full p-2 m-1 text-black rounded-lg bg-lime h-fit bg-lime-300 hover:bg-customBlue hover:text-white"
      >
        INGRESAR
      </NavigateButton>
      <NavigateButton
        href="/register"
        className="p-2 bg-gray-300 m-1 text-black rounded-lg h-[40px] w-full hover:text-white  hover:bg-customBlue"
      >
        CREAR CUENTA
      </NavigateButton>
    </>
  );
};

const AdminMenu = ({ handlerLogOut }: { handlerLogOut: () => void }) => {
  return (
    <>
      <MenuButton
        text="Crear Torneo"
        routeNavigate="/dashboard/admin/tournaments/create"
      >
        <PlusCircleIcon className="h-10" />
      </MenuButton>
      <MenuButton
        text="Gestion de Torneos"
        routeNavigate="/dashboard/admin/tournaments/management"
      >
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
      <MenuButton
        text="Cerrar Sesión"
        routeNavigate="#"
        onClick={handlerLogOut}
      >
        <ArrowLeftStartOnRectangleIcon className="h-10" />
      </MenuButton>
    </>
  );
};

const UserMenu = ({ handlerLogOut }: { handlerLogOut: () => void }) => {
  return (
    <>
      <MenuButton text="Perfil" routeNavigate="/dashboard/user/profile">
        <UserCircleIcon className="h-10" />
      </MenuButton>
      <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-limeBlue-gradient" />
      <MenuButton
        text="Estadisticas"
        routeNavigate="/dashboard/user/stadistics"
      >
        <ChartBarIcon className="h-10" />
      </MenuButton>
      <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-limeBlue-gradient" />
      <MenuButton
        text="Mis Torneos"
        routeNavigate="/dashboard/user/tournaments"
      >
        <CheckBadgeIcon className="h-10" />
      </MenuButton>
      <hr className="w-full h-[1px] mt-2 mb-2 border-none bg-limeBlue-gradient" />
      <MenuButton
        text="Cerrar Sesión"
        routeNavigate="#"
        onClick={handlerLogOut}
      >
        <ArrowLeftStartOnRectangleIcon className="h-10" />
      </MenuButton>
    </>
  );
};
