"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import { butonsCreateTournamentForm, createTournamentSchema } from "./CreateTournamentData";
import { preFormattingData } from "./PreFormattingData";
import { ICreateTournamentFormData } from "@/interfaces/RequestInterfaces";
import HandlerNewTournament from "@/Server/HandlerFormsFuctions/HandlerCreateTournament";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { IFormTournametInitiaalValues } from "./CreateTournamentFormInterfaces";

async function handlerSubmit(values: ICreateTournamentFormData) {
  const dataFormattedToSend = preFormattingData(values);
  if (dataFormattedToSend) {
    // const response = await HandlerNewTournament(dataFormattedToSend);
    // console.log(response);
    console.log(dataFormattedToSend);
  }
}

interface IDataAndValuesConstructor {
  formDataContructor: {
    inputsCreateTournamentFormValues: IDataConstructor[];
    createTournamentInitialValues: IFormTournametInitiaalValues;
  };
}
const CreateTournamentView: React.FC<IDataAndValuesConstructor> = ({ formDataContructor }) => {
  const { inputsCreateTournamentFormValues, createTournamentInitialValues } = formDataContructor;
  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
      <FormComponent
        iniValues={createTournamentInitialValues}
        valiSchema={createTournamentSchema}
        handelerSubmit={handlerSubmit}
        dataContructor={inputsCreateTournamentFormValues}
        butonsForm={butonsCreateTournamentForm}
      />
    </section>
  );
};

export default CreateTournamentView;
