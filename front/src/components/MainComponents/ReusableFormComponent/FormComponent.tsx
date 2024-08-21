"use client";
import React from "react";
import { Form, Formik } from "formik";
import { IFormikConstructor, IDataConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";
import ButtonForm from "./ButtonForm/ButtonForm";
import TextArea from "./TextArea/TextArea";
import CheckboxContainer from "./CheckBoxContainer/CheckboxContainer";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handelerSubmit,
  butonsForm,
  dataContructor,
}) => {
  const fieldsForm: IDataConstructor[] = dataContructor;

  return (
    <>
      <Formik initialValues={iniValues} validationSchema={valiSchema} onSubmit={handelerSubmit}>
        <Form className="flex flex-col items-center p-5 w-fit md:w-[600px] m-5 bg-gray-300 rounded-md">
          <div className="flex flex-col flex-wrap items-center gap-2 md:flex-row md:justify-evenly">
            {fieldsForm.length > 0 &&
              fieldsForm.map((field, i) => {
                //? if else to check the type of the input
                switch (field.FieldType) {
                  case "checkboxContainer":
                    return (
                      <CheckboxContainer
                        key={i}
                        LabelText={field.LabelText}
                        FieldType={field.FieldType}
                        FieldName={field.FieldName}
                        containerCheckBox={field.containerCheckBox}
                      />
                    );
                  case "textarea":
                    return (
                      <TextArea
                        key={i}
                        LabelText={field.LabelText}
                        FieldName={field.FieldName}
                        FieldType={field.FieldType}
                        FieldPH={field.FieldPH}
                      />
                    );

                  default:
                    return (
                      <ImputForm
                        key={i}
                        LabelText={field.LabelText}
                        FieldName={field.FieldName}
                        FieldType={field.FieldType}
                        FieldPH={field.FieldPH}
                      />
                    );
                }
              })}
          </div>

          {butonsForm.map((data, i) => {
            return <ButtonForm key={i} name={data.name} type={data.type} />;
          })}
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
