import React from "react";
import { IDataConstructor } from "../../FormInterface";
import { Field } from "formik";

const ChecBoxForm: React.FC<IDataConstructor> = ({ LabelText, FieldType, FieldName }) => {
  return (
    <div className="flex flex-col gap-1 sm:flex-row w-fit h-fit">
      <label className="font-bold text-blue-800">{LabelText}</label>
      <Field name={FieldName} type={FieldType}></Field>
    </div>
  );
};
export default ChecBoxForm;
