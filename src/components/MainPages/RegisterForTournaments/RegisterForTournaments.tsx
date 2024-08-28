import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React from "react";
import {
  butonsRegisterTournamentForm,
  inputsRegisterTournamentFormValues,
  registerTournamentSchema,
  registerTournementInitialValues,
} from "./RegisterForTournamentsData";

const handlerPayment = (values: any) => {
  console.log(values);
};

const RegisterForTournaments = ({ id }: { id: string }) => {
  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
      <FormComponent
        iniValues={registerTournementInitialValues}
        valiSchema={registerTournamentSchema}
        handelerSubmit={handlerPayment}
        dataContructor={inputsRegisterTournamentFormValues}
        butonsForm={butonsRegisterTournamentForm}
      />
    </section>
  );
};

export default RegisterForTournaments;
