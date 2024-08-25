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
import Swal from "sweetalert2";

const RegisterView = () => {
  const navigate = useRouter();
  async function RegisterHandeler(data: IUserRegisterReq) {
    try {
      const response = await HandlerRegister(data);

      Swal.fire({
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      navigate.push("/login");
    } catch (error) {
      Swal.fire({
        title: "Error al registrarse",
        text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
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
