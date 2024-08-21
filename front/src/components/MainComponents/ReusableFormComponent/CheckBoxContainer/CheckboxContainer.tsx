import React from "react";
import { IDataConstructor } from "../FormInterface";
import { ErrorMessage, Field } from "formik";
import ChecBoxForm from "./ChechBoxForm/ChecBoxForm";

const CheckboxContainer: React.FC<IDataConstructor> = ({
  LabelText,
  FieldType,
  containerCheckBox,
}) => {
  return (
    <div className="flex flex-col w-[240px] gap-2 h-fit">
      <label className="text-lg font-bold text-customBlue">{LabelText}</label>
      <div className="flex flex-wrap gap-2">
        {containerCheckBox?.map((checkBox, i) => {
          return <ChecBoxForm key={i} {...checkBox} />;
        })}
      </div>
    </div>
  );
};

export default CheckboxContainer;
