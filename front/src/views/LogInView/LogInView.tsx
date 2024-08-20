"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  ButonsLogInForm,
  InputsLogIngFormValues,
  LogInInitialValues,
  LogInSchema,
} from "./LognInData";
import { InputsFormValues } from "../RegisterView/RegisterData";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

function handlerSubmit(data: any) {
  console.log(data);
}
const LogInView: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <FormComponent
        iniValues={LogInInitialValues}
        valiSchema={LogInSchema}
        handelerSubmit={handlerSubmit}
        butonsForm={ButonsLogInForm}
        dataContructor={InputsLogIngFormValues}
      />

      {/* Navigate Button to create an account */}
      <div className="flex items-center gap-5">
        <strong>Need an account?</strong>
        <NavigateButton
          href="/createAccount"
          className="rounded-md bg-lime-950 w-full h-fit py-[5px] px-[10px] text-sm/6 font-semibold text-white hover:bg-lime-800">
          Create a new account
        </NavigateButton>
      </div>
    </section>
  );
};

export default LogInView;
