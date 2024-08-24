"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsCreateTournamentForm,
  createTournamentInitialValues,
  createTournamentSchema,
  getDataToContructFormCreateTournaments,
} from "./CreateTournamentData";
import { preFormattingData } from "./PreFormattingData";
import { ICreateTournamentFormData } from "@/interfaces/RequestInterfaces";
import HandlerNewTournament from "@/Server/HandlerFormsFuctions/HandlerCreateTournament";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";

async function handlerSubmit(values: ICreateTournamentFormData) {
  console.log(values);

  const dataFormattedToSend = preFormattingData(values);
  if (dataFormattedToSend) {
    // const response = await HandlerNewTournament(dataFormattedToSend);
    // console.log(response);
    // console.log(dataFormattedToSend);
  }
}

const CreateTournamentView = ({ dataContructor }: { dataContructor: IDataConstructor[] }) => {
  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit">
      <FormComponent
        iniValues={createTournamentInitialValues}
        valiSchema={createTournamentSchema}
        handelerSubmit={handlerSubmit}
        dataContructor={dataContructor}
        butonsForm={butonsCreateTournamentForm}
      />
    </section>
  );
};

export default CreateTournamentView;
