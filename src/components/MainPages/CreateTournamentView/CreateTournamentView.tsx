"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsCreateTournamentForm,
  createTournamentSchema,
} from "./CreateTournamentData";
import { preFormattingData } from "./PreFormattingData";
import { ICreateTournamentFormData } from "@/interfaces/RequestInterfaces";
import HandlerNewTournament from "@/Server/HandlerFormsFuctions/HandlerCreateTournament";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { IFormTournametInitiaalValues } from "./CreateTournamentFormInterfaces";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

async function handlerSubmit(
  values: ICreateTournamentFormData,
  router: ReturnType<typeof useRouter>
) {
  try {
    const dataFormattedToSend = preFormattingData(values);

    if (dataFormattedToSend) {
      const response = await HandlerNewTournament(dataFormattedToSend);
      console.log(response);
      Swal.fire({
        title: "Torneo creado con éxito.",
        width: 400,
        padding: "3em",
      });
      router.push("/dashboard/admin/tournaments/management");
    }
  } catch (error: any) {
    Swal.fire({
      title:
        "Error al crear torneo. Por favor verifica que completaste todos los campos correctamente.",
      width: 400,
      padding: "3em",
    });

    console.error(error);
  }
}

interface IDataAndValuesConstructor {
  formDataContructor: {
    inputsCreateTournamentFormValues: IDataConstructor[];
    createTournamentInitialValues: IFormTournametInitiaalValues;
  };
}

const CreateTournamentView: React.FC<IDataAndValuesConstructor> = ({
  formDataContructor,
}) => {
  const { inputsCreateTournamentFormValues, createTournamentInitialValues } =
    formDataContructor;

  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
      <FormComponent
        iniValues={createTournamentInitialValues}
        valiSchema={createTournamentSchema}
        handelerSubmit={(values: ICreateTournamentFormData) =>
          handlerSubmit(values, router)
        }
        dataContructor={inputsCreateTournamentFormValues}
        butonsForm={butonsCreateTournamentForm}
      />
    </section>
  );
};

export default CreateTournamentView;
