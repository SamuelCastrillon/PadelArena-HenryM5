import React from "react";
import { IButtonUserMenu } from "../../UserMenuReusableInterfaces";
import Link from "next/link";

const MenuButton: React.FC<IButtonUserMenu> = ({ children, text, routeNavigate, onClick }) => {
  function handlerClick() {
    console.log("click");

    if (onClick) {
      onClick();
    }
  }

  const rout = routeNavigate;
  return (
    <Link href={rout}>
      <button
        className="flex items-center gap-2 hover:bg-customBlue hover:text-white bg-lime text-black p-2 m-1 rounded-lg w-full"
        onClick={handlerClick}>
        {children}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default MenuButton;
