import { ErrorMessage, Field } from "formik";
import React from "react";
import { IDataConstructor } from "../FormInterface";

const ImputForm: React.FC<IDataConstructor> = ({ LabelText, FieldType, FieldName, FieldPH }) => {
  return (
    <div className="flex flex-col h-[100px] w-[240px] gap-1">
      <label className="text-lg font-bold text-customBlue">{LabelText}</label>
      <Field
        type={FieldType}
        name={FieldName}
        placeholder={FieldPH}
        className="p-1 text-gray-800 rounded"></Field>
      <span className="font-bold text-red-600">
        <ErrorMessage name={FieldName} />
      </span>
    </div>
  );
};

export default ImputForm;
