import React from "react";
import { ErrorMessage, Field } from "formik";
import { IDataConstructor } from "../FormInterface";

const TextArea: React.FC<IDataConstructor> = ({ LabelText, FieldType, FieldName, FieldPH }) => {
  return (
    <div className="flex flex-col h-[100px] w-full gap-1">
      <label className="text-lg font-bold text-customBlue">{LabelText}</label>
      <Field
        name={FieldName}
        type={FieldType}
        as="textarea"
        placeholder={FieldPH}
        className="p-1 text-gray-800 rounded"></Field>
      <span className="font-bold text-red-600">
        <ErrorMessage name={FieldName} />
      </span>
    </div>
  );
};

export default TextArea;
