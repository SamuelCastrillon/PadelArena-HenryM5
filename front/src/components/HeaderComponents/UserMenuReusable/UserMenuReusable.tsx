import React from "react";
import MenuDropDaw from "./MenuDropDaw/MenuDropDaw";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { IMenuReusableData } from "./UserMenuReusableInterfaces";

const UserMenuReusable: React.FC<IMenuReusableData> = () => {
  return (
    <menu className=" flex justify-center gap-5 h-fit">
      <button type="button" className="rounded-[50%]">
        <UserCircleIcon className="w-[40px] h-auto" />
      </button>
      <MenuDropDaw />
    </menu>
  );
};

export default UserMenuReusable;
