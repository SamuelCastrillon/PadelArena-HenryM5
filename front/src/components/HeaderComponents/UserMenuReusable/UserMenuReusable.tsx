"use client";
import React from "react";
import MenuDropDaw from "./MenuDropDaw/MenuDropDaw";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { IMenuReusableData } from "./UserMenuReusableInterfaces";

const UserMenuReusable: React.FC<IMenuReusableData> = () => {
  const [menuStatus, setMenuStatus] = React.useState(false);

  return (
    <div className=" flex justify-center gap-5 h-fit">
      <button type="button" className="rounded-[50%]" onClick={() => setMenuStatus(!menuStatus)}>
        <UserCircleIcon className="w-[40px] h-auto" />
      </button>
      <MenuDropDaw menuStatus={menuStatus} />
    </div>
  );
};

export default UserMenuReusable;
