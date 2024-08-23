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
import HandlerLogIn from "@/Server/HandlerFormsFuctions/HandlerLogIn";
import { useCookies } from "react-cookie";
import { IUserLoginReq, IUserLoginRes } from "@/interfaces/RequestInterfaces";
import { saveCurrentUser } from "@/helpers/localDataManagment";

const LogInView: React.FC = () => {
  const [cookies, setCookie] = useCookies(["userSignIn"]);

  async function SaveData(data: IUserLoginReq) {
    const response: IUserLoginRes = await HandlerLogIn(data);

    if (response?.token) {
      console.log(response);
      saveCurrentUser(response.userExist);
      setCookie("userSignIn", response.token);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <FormComponent
        iniValues={logInInitialValues}
        valiSchema={logInSchema}
        handelerSubmit={SaveData}
        butonsForm={butonsLogInForm}
        dataContructor={inputsLogIngFormValues}
      />

      {/* Navigate Button to create an account */}
      <div className="flex items-center gap-8">
        <span className="text-white">Necesitas una cuenta?</span>
        <NavigateButton
          href="/register"
          className="rounded-md bg-customBlue w-full h-fit py-[5px] px-[10px] text-white hover:shadow-lg">
          Crear Cuenta
        </NavigateButton>
      </div>
    </section>
  );
};

export default LogInView;
