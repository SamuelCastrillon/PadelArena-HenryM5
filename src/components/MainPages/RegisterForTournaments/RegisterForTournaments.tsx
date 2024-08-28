"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React, { useContext, useEffect, useState } from "react";
import {
  butonsRegisterTournamentForm,
  getDataToContructFormRegisterTournament,
  registerTournamentSchema,
} from "./RegisterForTournamentsData";
import { IDataConstructor } from "@/components/MainComponents/ReusableFormComponent/FormInterface";
import { AuthContext } from "@/context/GlobalContext";

interface IRegisterForTournaments {
  id: string;
}

interface IDataToForm {
  inputsRegisterTournamentFormValues: IDataConstructor[];
  registerTournementInitialValues: any;
}
const handlerPayment = (values: any) => {
  console.log(values);
};

const RegisterForTournaments: React.FC<IRegisterForTournaments> = ({ id }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [dataToForm, setDataToForm] = useState<null | IDataToForm>(null);

  useEffect(() => {
    async function dataConstructor() {
      try {
        const getData = await getDataToContructFormRegisterTournament();
        setDataToForm(getData);
      } catch (error) {
        console.error(error);
      }
    }
    dataConstructor();
  }, []);

  return (
    dataToForm && (
      <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
        <h1 className="text-3xl font-bold text-white">REGISTRO DE TORNEOS</h1>
        <FormComponent
          iniValues={dataToForm?.registerTournementInitialValues}
          valiSchema={registerTournamentSchema}
          handelerSubmit={handlerPayment}
          dataContructor={dataToForm?.inputsRegisterTournamentFormValues}
          butonsForm={butonsRegisterTournamentForm}
        />
      </section>
    )

    // <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
    //   <h1 className="text-3xl font-bold text-white">CARGANDO...</h1>
    // </section>
  );
};
export default RegisterForTournaments;
