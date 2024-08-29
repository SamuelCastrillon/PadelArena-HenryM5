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
import postPaymentToMP from "@/Server/PaymentByMP/PaymentByMP";
import { useRouter } from "next/navigation";

interface IRegisterForTournaments {
  params: any;
}

interface IDataToForm {
  inputsRegisterTournamentFormValues: IDataConstructor[];
  registerTournementInitialValues: any;
}

const RegisterForTournaments: React.FC<IRegisterForTournaments> = ({ params }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [dataToForm, setDataToForm] = useState<null | IDataToForm>(null);
  const navigate = useRouter();
  console.log(currentUser);
  console.log(params);

  const dataToPay = {
    title: "Padel Arena",
    quantity: 1,
    price: 12,
  };

  async function payToInscription() {
    try {
      const { redirectUrl } = await postPaymentToMP(dataToPay);
      if (!redirectUrl) {
        throw new Error("Error al realizar el pago");
      }
      navigate.push(redirectUrl);
    } catch (error) {
      console.error(error);
    }
  }

  const handlerPayment = (values: any) => {
    console.log(values);
    payToInscription();
  };

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