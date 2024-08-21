"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsLogInForm,
  inputsLogIngFormValues,
  logInInitialValues,
  logInSchema,
} from "./LognInData";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

function handlerSubmit(data: any) {
  console.log(data);
}
const LogInView: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <FormComponent
        iniValues={logInInitialValues}
        valiSchema={logInSchema}
        handelerSubmit={handlerSubmit}
        butonsForm={butonsLogInForm}
        dataContructor={inputsLogIngFormValues}
      />

      {/* Navigate Button to create an account */}
      <div className="flex items-center gap-8  border-2 border-violet-600">
        <strong>Need an account?</strong>
        <NavigateButton
          href="/register"
          className="rounded-md bg-customBlue w-full h-fit py-[5px] px-[10px] text-white hover:shadow-lg"
        >
          Create a new account
        </NavigateButton>
      </div>
    </section>
  );
};

export default LogInView;
