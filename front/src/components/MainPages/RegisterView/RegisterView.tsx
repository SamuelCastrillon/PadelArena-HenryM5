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
import { IUserRegisterReq } from "@/interfaces/RequestInterfaces";
import { useRouter } from "next/navigation";

const RegisterView = () => {
  const navigate = useRouter();
  async function RegisterHandeler(data: IUserRegisterReq) {
    await HandlerRegister(data);
    navigate.push("/login");
  }
  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
      <FormComponent
        iniValues={signInInitialValues}
        valiSchema={registerSchema}
        handelerSubmit={RegisterHandeler}
        dataContructor={inputsFormValues}
        butonsForm={butonsRegisterForm}
      />
    </section>
  );
};

export default RegisterView;
