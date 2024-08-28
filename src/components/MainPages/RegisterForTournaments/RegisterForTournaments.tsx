"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React, { useEffect, useState } from "react";
import {
  butonsRegisterTournamentForm,
  getDataToContructFormRegisterTournament,
  registerTournamentSchema,
  registerTournementInitialValues,
} from "./RegisterForTournamentsData";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";

interface IRegisterForTournaments {
  id: string;
}
const handlerPayment = (values: any) => {
  console.log(values);
};

const RegisterForTournaments: React.FC<IRegisterForTournaments> = ({ id }) => {
  const [usersCategories, setUsersCategories] = useState<IDataConstructor[] | []>([]);

  useEffect(() => {
    async function dataConstructor() {
      try {
        const dataToForm = await getDataToContructFormRegisterTournament();
        setUsersCategories(dataToForm);
      } catch (error) {
        console.error(error);
      }
    }
    dataConstructor();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
      <FormComponent
        iniValues={registerTournementInitialValues}
        valiSchema={registerTournamentSchema}
        handelerSubmit={handlerPayment}
        dataContructor={usersCategories}
        butonsForm={butonsRegisterTournamentForm}
      />
    </section>
  );
};

export default RegisterForTournaments;
