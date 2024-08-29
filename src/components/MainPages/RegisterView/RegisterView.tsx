"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import {
  butonsRegisterForm,
  inputsFormValues,
  registerSchema,
  signInInitialValues,
} from "./RegisterData";
import HandlerRegister from "@/Server/HandlerFormsFuctions/HandlerRegister";
import { IUserRegisterReq } from "@/interfaces/RequestInterfaces";

import ButtonNextAuthSignIn from "@/components/MainComponents/NextAuthButtonSignIn/NextAuthButtonSignIn";
import useTournamentData from "@/hooks/fetchTournamentData";

const RegisterView = () => {
  const navigate = useRouter();
  const { categories, error } = useTournamentData();
  console.log(categories);

  async function RegisterHandeler(data: IUserRegisterReq) {
    const transformedData = {
      ...data,
      phone: String(data.phone),
    };

    console.log(transformedData.phone);

    try {
      const response = await HandlerRegister(transformedData);

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

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    name: category.name,
  }));
  console.log(categoryOptions);

  const updatedInputsFormValues = inputsFormValues.map((input) => {
    if (input.FieldType === "select" && input.FieldName === "category") {
      return {
        ...input,
        selectOptions: categoryOptions,
      };
    }
    return input;
  });

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
      <ButtonNextAuthSignIn className="bg-black text-white">
        Registrate con Google
      </ButtonNextAuthSignIn>
      <FormComponent
        iniValues={signInInitialValues}
        valiSchema={registerSchema}
        handelerSubmit={RegisterHandeler}
        dataContructor={updatedInputsFormValues}
        butonsForm={butonsRegisterForm}
      />
    </section>
  );
};

export default RegisterView;
