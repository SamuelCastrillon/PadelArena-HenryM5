"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsSignInForm,
  inputsFormValues,
  registerSchema,
  signInInitialValues,
} from "./RegisterData";

function handlerSubmit(data: any) {
  console.log(data);
}

const RegisterView = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <FormComponent
        iniValues={signInInitialValues}
        valiSchema={registerSchema}
        handelerSubmit={handlerSubmit}
        dataContructor={inputsFormValues}
        butonsForm={butonsSignInForm}
      />
    </section>
  );
};

export default RegisterView;
