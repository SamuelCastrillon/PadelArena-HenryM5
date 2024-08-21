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
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-2">
      <FormComponent
        iniValues={createTournamentInitialValues}
        valiSchema={createTournamentSchema}
        handelerSubmit={handlerSubmit}
        dataContructor={inputsCreateTournamentFormValues}
        butonsForm={butonsCreateTournamentForm}
      />

      {/* Navigate Button to create an account */}
      {/* <div className="flex items-center gap-8 ">
        <strong>Need an account?</strong>
        <NavigateButton
          href="/register"
          className="rounded-md bg-customBlue w-full h-fit py-[5px] px-[10px] text-white hover:shadow-lg">
          Create a new account
        </NavigateButton>
      </div> */}
    </section>
  );
};

export default CreateTournamentView;
