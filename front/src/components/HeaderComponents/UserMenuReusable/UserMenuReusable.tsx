"use client";
import React, { useEffect } from "react";
import MenuDropDaw from "./MenuDropDaw/MenuDropDaw";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { IMenuReusableData } from "./UserMenuReusableInterfaces";
import { usePathname } from "next/navigation";

const UserMenuReusable: React.FC<IMenuReusableData> = () => {
  const [menuStatus, setMenuStatus] = React.useState(false);
  const navigate = usePathname();

  useEffect(() => {
    setMenuStatus(false);
  }, [navigate]);

  return (
    <div className=" flex justify-center gap-5 h-fit">
      <button type="button" className="rounded-[50%]" onClick={() => setMenuStatus(!menuStatus)}>
        <UserCircleIcon className={`w-[40px] h-auto ${menuStatus ? "text-lime" : "text-white"}`} />
      </button>
      <MenuDropDaw menuStatus={menuStatus} />
    </div>
  );
};

export default UserMenuReusable;
