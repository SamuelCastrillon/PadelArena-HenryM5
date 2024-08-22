import React from "react";
import { IButtonUserMenu } from "../../UserMenuReusableInterfaces";
import Link from "next/link";

const MenuButton: React.FC<IButtonUserMenu> = ({ children, text, routeNavigate }) => {
  return (
    <Link href={routeNavigate ? routeNavigate : "#"}>
      <button className="flex items-center gap-2 hover:bg-customBlue p-2 rounded-lg w-full">
        {children}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default MenuButton;
