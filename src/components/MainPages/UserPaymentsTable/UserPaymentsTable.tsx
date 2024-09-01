"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/GlobalContext";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";

interface IPaymentDetail {
  preference_id: string;
  status: string;
  date_created: string;
  transaction_amount: number;
  tournament: {
    name: string;
    team?: {
      users: { id: string; name: string }[]; // Ajusta según la estructura real del equipo
    }[];
  };
}

const PaymentHistoryPanel: React.FC<{ payments: IPaymentDetail[] }> = ({
  payments,
}) => {
  const { currentUser } = useContext(AuthContext);

  const handleEditPayment = (preference_id: string) => {
    console.log(`Editing payment with Preference ID: ${preference_id}`);
  };

  const handleCompleteRegistration = () => {
    console.log("Completing registration...");
    // Lógica para completar la inscripción
  };

  const headers = [
    "ID de Pago",
    "Estado",
    "Fecha de Creación",
    "Monto de Transacción",
    "Nombre del Torneo",
    "Acciones",
  ];

  return (
    <>
      <div className="mt-20 justify-start items-center flex-col flex">
        <h1 className="radhiumz text-3xl mx-4 md:mx-0 md:text-4xl text-center uppercase text-white">
          HISTORIAL DE PAGOS
          <hr className="h-2 w-full text-white"></hr>
        </h1>
        <h2 className="sfRegular text-md md:text-xl text-white mt-8">
          <span className="uppercase  radhiumz text-x m-2">
            {currentUser?.name}
          </span>{" "}
          Lleva el registro de tus cuentas
        </h2>
      </div>
      {/* Contenedor con fondo de papel */}
      <div className="p-8 shadow-md bg-white py-2 md:py-6 my-14 w-[90%] mx-auto rounded-3xl bg-[url('https://img.freepik.com/free-vector/flat-design-blue-lined-paper-background_23-2151126442.jpg?semt=ais_hybrid')] bg-contain bg-center">
        {/* Utiliza el componente CustomTable */}
        <CustomTable headers={headers}>
          {payments?.map((payment) => (
            <tr key={payment.preference_id} className="border-t">
              <td className="px-4 py-2">{payment.preference_id}</td>
              <td
                className={`px-4 py-2 ${
                  payment.status === "completed"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {payment.status}
              </td>
              <td className="px-4 py-2">{payment.date_created}</td>
              <td className="px-4 py-2">
                ${payment.transaction_amount.toFixed(2)}
              </td>
              <td className="px-4 py-2">{payment.tournament.name}</td>
              <td className="px-4 py-2">
                {payment.tournament.team?.some(
                  (team) =>
                    team.users.length === 1 &&
                    team.users[0].id === currentUser?.id
                ) && (
                  <button
                    onClick={handleCompleteRegistration}
                    className="bg-lime text-black radhiumz uppercase text-sm px-2 py-1 rounded hover:bg-green-600"
                  >
                    Completar Inscripcion
                  </button>
                )}
              </td>
            </tr>
          ))}
        </CustomTable>
      </div>
    </>
  );
};

export default PaymentHistoryPanel;
