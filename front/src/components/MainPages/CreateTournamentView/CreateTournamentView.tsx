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

function handlerSubmit(values: ICreateTournamentFormData) {
  const dataFormattedToSend = preFormattingData(values);

  console.log(values);
  console.log(dataFormattedToSend);
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
