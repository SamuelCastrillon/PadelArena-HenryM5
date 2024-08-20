import React from "react";
import { IButtonForm } from "../FormInterface";

const ButtonForm: React.FC<IButtonForm> = ({ name, type }) => {
  return (
    <div className="flex flex-col h-fit w-[240px]">
      <button
        className="rounded-md bg-lime-950 w-full h-fit py-[5px] px-[10px] text-sm/6 font-semibold text-white hover:bg-lime-800"
        type={type}>
        {name}
      </button>
    </div>
  );
};

export default ButtonForm;
