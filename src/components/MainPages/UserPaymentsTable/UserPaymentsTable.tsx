"use client";
import { AuthContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

interface IPaymentDetail {
  preference_id: string;
  payment: string;
  status: string;
  date_created: string;
  date_last_update?: string;
  transaction_amount: number;
  payment_method_id: string;
  payment_type_id: string;
}

const PaymentHistoryPanel: React.FC<{ payments: IPaymentDetail[] }> = ({
  payments,
}) => {
  const { currentUser } = useContext(AuthContext);

  const handleEditPayment = (preference_id: string) => {
    console.log(`Editing payment with Preference ID: ${preference_id}`);
  };

  return (
    <>
      <div className="mt-20 justify-start items-center flex-col flex">
        <h1 className="radhiumz text-3xl mx-4 md:mx-0 md:text-4xl text-center uppercase text-white">
          HISTORIAL DE PAGOS
          <hr className="h-2 w-full text-white"></hr>
        </h1>
        <h2 className="sfRegular text-md md:text-xl text-white mt-8">
          Lleva el registro de tus cuentas:
        </h2>
      </div>
      <div className=" p-8 shadow-md bg-white py-2 md:py-6 my-14 w-[90%] mx-auto rounded-3xl">
        <h3 className="text-lg m-4">
          Historial de Pagos de:{" "}
          <span className="uppercase radhiumz text-x m-2">
            {currentUser?.name}
          </span>
        </h3>
        <div className="overflow-auto w-full h-96 bg-white m-2">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">ID de Preferencia</th>
                <th className="px-4 py-2 text-left">Pago</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Fecha de Creación</th>
                <th className="px-4 py-2 text-left">Última Actualización</th>
                <th className="px-4 py-2 text-left">Monto de Transacción</th>
                <th className="px-4 py-2 text-left">Método de Pago</th>
                <th className="px-4 py-2 text-left">Tipo de Pago</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment) => (
                <tr key={payment.preference_id} className="border-t">
                  <td className="px-4 py-2">{payment.preference_id}</td>
                  <td className="px-4 py-2">{payment.payment}</td>
                  <td
                    className={`px-4 py-2 ${
                      payment.status === "completed"
                        ? "text-green-500"
                        : "text-orange-500"
                    }`}
                  >
                    {payment.status}
                  </td>
                  <td className="px-4 py-2">{payment.date_created}</td>
                  <td className="px-4 py-2">
                    {payment.date_last_update || "N/A"}
                  </td>
                  <td className="px-4 py-2">${payment.transaction_amount}</td>
                  <td className="px-4 py-2">{payment.payment_method_id}</td>
                  <td className="px-4 py-2">{payment.payment_type_id}</td>
                  <td className="px-4 py-2">
                    {payment.status === "pending" && (
                      <button
                        onClick={() => handleEditPayment(payment.preference_id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      >
                        Editar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistoryPanel;
