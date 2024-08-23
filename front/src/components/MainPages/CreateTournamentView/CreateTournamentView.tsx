"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsCreateTournamentForm,
  createTournamentInitialValues,
  createTournamentSchema,
  inputsCreateTournamentFormValues,
} from "./CreateTournamentData";

function handlerSubmit(values: any) {
  console.log(values);
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
