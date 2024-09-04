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
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { log } from "console";
import SpinnerLoading from "@/components/GeneralComponents/SpinnerLoading/SpinnerLoading";
import { postCreateAndSuscribeNewTeam } from "@/Server/Tournament/Teams/postCreateAndSuscribeNewTeam";
import { IPostNewTeam } from "@/interfaces/RequestInterfaces";

interface IRegisterForTournaments {
  tournamentId: any;
}

interface IDataToForm {
  inputsRegisterTournamentFormValues: IDataConstructor[];
  registerTournementInitialValues: any;
}

interface IFormValues {
  name: string;
  teammate: string;
}

const RegisterForTournaments: React.FC<IRegisterForTournaments> = ({ tournamentId }) => {
  const { currentUser } = useContext(AuthContext);
  const [dataToForm, setDataToForm] = useState<null | IDataToForm>(null);
  const router = useRouter();
  const currentPath = usePathname();
  const tournament = tournamentId.tournamentId;

  //? QUERY PARAMS
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const handlerPayment = (values: IFormValues) => {
    if (!currentUser) {
      return;
    }

    const newTeam: IPostNewTeam = {
      name: values.name,
      players: [currentUser.id, values.teammate],
    };

    console.log(newTeam);
    console.log(currentPath);
    console.log(queryParams);
    console.log(tournament);

    postCreateAndSuscribeNewTeam(tournament, newTeam);
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
    <section className="flex flex-col items-center justify-center w-screen gap-2 py-10 min-h-fit">
      <h1 className="text-3xl font-bold text-white">REGISTRA TU EQUIPO</h1>
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
      {/* <h1 className="text-3xl font-bold text-white">CARGANDO...</h1> */}
      <SpinnerLoading />
    </section>
  );
};
export default RegisterForTournaments;
