"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/GlobalContext";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { useRouter } from "next/navigation";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";

interface IPaymentDetail {
  preference_id: string;
  status: string;
  date_created: string;
  transaction_amount: number;
  tournament: {
    id: string;
    name: string;
    team?: {
      users: { id: string; name: string }[];
    }[];
  };
}

const PaymentHistoryPanel: React.FC<{ payments: IPaymentDetail[] }> = ({
  payments,
}) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const handleCompleteRegistration = (tournamentId: string) => {
    router.push(`/tournaments/register/${tournamentId}`);
  };

  const headers = ["ID", "Estado", "Fecha", "Monto", "Nombre", "Acciones"];

  return (
    <>
      <div className="mt-20 justify-start items-center flex-col flex">
        <h1 className="radhiumz text-3xl mx-4 md:mx-0 md:text-4xl text-center uppercase text-white">
          HISTORIAL DE PAGOS
          <hr className="h-2 w-full text-white" />
        </h1>
        <h2 className="sfRegular text-md md:text-xl text-white mt-8">
          <span className="uppercase radhiumz text-x m-2">
            {currentUser?.name}
          </span>{" "}
          Lleva el registro de tus cuentas
        </h2>
      </div>

      <div className="p-8 bg-blue-700/30 shadow-md shadow-lime py-2 md:py-6 my-14 w-[90%] mx-auto rounded-3xl">
        {/* Versión de escritorio */}
        <div className="hidden md:block">
          <CustomTable headers={headers}>
            {payments?.map((payment) => (
              <tr
                key={payment.preference_id}
                className="border-t-2 border-lime"
              >
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
                    <ActionButton
                      onClick={() =>
                        handleCompleteRegistration(payment.tournament.id)
                      }
                      className="bg-lime text-black radhiumz uppercase text-sm px-2 py-1 rounded hover:bg-blue-700 hover:text-white"
                    >
                      Completar Inscripción
                    </ActionButton>
                  )}
                </td>
              </tr>
            ))}
          </CustomTable>
        </div>

        {/* Versión móvil */}
        <div className="block md:hidden">
          <CustomTable headers={["ID", "Estado", "Nombre", "Acciones"]}>
            {payments?.map((payment) => (
              <tr
                key={payment.preference_id}
                className="border-t-2 border-lime"
              >
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
                <td className="px-4 py-2">{payment.tournament.name}</td>
                <td className="px-4 py-2">
                  {payment.tournament.team?.some(
                    (team) =>
                      team.users.length === 1 &&
                      team.users[0].id === currentUser?.id
                  ) && (
                    <ActionButton
                      onClick={() =>
                        handleCompleteRegistration(payment.tournament.id)
                      }
                      className="bg-lime text-black radhiumz uppercase text-sm px-2 py-1 rounded hover:bg-blue-700 hover:text-white"
                    >
                      Completar Inscripción
                    </ActionButton>
                  )}
                </td>
              </tr>
            ))}
          </CustomTable>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryPanel;
