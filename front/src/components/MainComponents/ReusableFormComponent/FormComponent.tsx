"use client";
import React from "react";
import { Form, Formik } from "formik";
import { IDataConstructorInput, IFormikConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";
import ButtonForm from "./ButtonForm/ButtonForm";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handelerSubmit,
  butonsForm,
  dataContructor,
}) => {
  const fieldsForm: IDataConstructorInput[] = dataContructor;

  return (
    <>
      <Formik initialValues={iniValues} validationSchema={valiSchema} onSubmit={handelerSubmit}>
        <Form className="flex flex-col items-center p-5 w-fit md:w-[600px] m-5 bg-gray-300 rounded-md">
          <div className="flex flex-col flex-wrap gap-2 md:flex-row justify-evenly">
            {fieldsForm.length > 0 &&
              fieldsForm.map((fileld, i) => {
                return (
                  <ImputForm
                    key={i}
                    LabelText={fileld.LabelText}
                    FieldName={fileld.FieldName}
                    FieldType={fileld.FieldType}
                    FieldPH={fileld.FieldPH}
                  />
                );
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
