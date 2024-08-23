"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsCreateTournamentForm,
  createTournamentInitialValues,
  createTournamentSchema,
  inputsCreateTournamentFormValues,
} from "./CreateTournamentData";
import { preFormattingData } from "./PreFormattingData";
import { ICreateTournamentFormData } from "@/interfaces/RequestInterfaces";
import HandlerNewTournament from "@/Server/HandlerFormsFuctions/HandlerCreateTournament";

async function handlerSubmit(values: ICreateTournamentFormData) {
  const dataFormattedToSend = preFormattingData(values);
  if (dataFormattedToSend) {
    const response = await HandlerNewTournament(dataFormattedToSend);
    console.log(response);
  }
}

const CreateTournamentView: React.FC = () => {
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
