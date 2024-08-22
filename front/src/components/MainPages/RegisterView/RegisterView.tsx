"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsRegisterForm,
  inputsFormValues,
  registerSchema,
  signInInitialValues,
} from "./RegisterData";
import HandlerRegister from "@/Server/HandlerFormsFuctions/HandlerRegister";

const RegisterView = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <FormComponent
        iniValues={signInInitialValues}
        valiSchema={registerSchema}
        handelerSubmit={HandlerRegister}
        dataContructor={inputsFormValues}
        butonsForm={butonsRegisterForm}
      />
    </section>
  );
};

export default RegisterView;
