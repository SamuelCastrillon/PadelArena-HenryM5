import React from "react";
import { IButtonUserMenu } from "../../UserMenuReusableInterfaces";

const MenuButton: React.FC<IButtonUserMenu> = ({ children, text }) => {
  return (
    <button className="flex items-center gap-2 hover:bg-customBlue p-2 rounded-lg">
      {children}
      <span>{text}</span>
    </button>
  );
};

export default MenuButton;
