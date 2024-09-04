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
import { usePathname, useRouter } from "next/navigation";
import { log } from "console";

interface IRegisterForTournaments {
  allParams: any;
}

interface IDataToForm {
  inputsRegisterTournamentFormValues: IDataConstructor[];
  registerTournementInitialValues: any;
}

const RegisterForTournaments: React.FC<IRegisterForTournaments> = ({ allParams }) => {
  const { currentUser } = useContext(AuthContext);
  const [dataToForm, setDataToForm] = useState<null | IDataToForm>(null);
  const navigate = useRouter();
  const currentPath = usePathname();
  const tournamentId = allParams.params[0];

  const handlerPayment = (values: any) => {
    console.log(values);
    console.log(currentUser);
    console.log(currentPath);
    console.log(allParams);
  };

  useEffect(() => {
    async function dataConstructor() {
      try {
        if (!currentUser) {
          return;
        }
        const getData = await getDataToContructFormRegisterTournament(currentUser.category.id);
        setDataToForm(getData);
      } catch (error) {
        console.error(error);
      }
    }
    dataConstructor();
  }, [currentUser]);

  return dataToForm ? (
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
  ) : (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
      <h1 className="text-3xl font-bold text-white">CARGANDO...</h1>
    </section>
  );
};
export default RegisterForTournaments;
