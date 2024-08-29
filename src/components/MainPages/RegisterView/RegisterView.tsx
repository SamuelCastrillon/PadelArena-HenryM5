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
  const { categories, loading, error } = useTournamentData();
  console.log(categories);

  async function RegisterHandeler(data: IUserRegisterReq) {
    try {
      const response = await HandlerRegister(data);
      if (response.data) {
        Swal.fire({
          title: "Registro exitoso",
          text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate.push("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "Error al registrarse",
        text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }

  if (loading)
    return <div className="p-4 text-lg text-center">Cargando...</div>;
  if (error)
    return <div className="p-4 text-lg text-center text-red-600">{error}</div>;

  // Transforma las categorías en un formato adecuado para el select
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    name: category.name,
  }));
  console.log(categoryOptions);

  // Actualiza `inputsFormValues` con las opciones de selección
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
        dataContructor={updatedInputsFormValues} // Utiliza los valores actualizados
        butonsForm={butonsRegisterForm}
      />
    </section>
  );
};

export default RegisterView;
