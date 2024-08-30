"use client";
import { AuthContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

interface IPayment {
  orderId: string;
  status: string;
  amount: number;
  date: string;
}

const PaymentHistoryPanel: React.FC<{ payments: IPayment[] }> = ({
  payments,
}) => {
  const { currentUser } = useContext(AuthContext);
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
      <div className="max-w-4xl p-8 shadow-md  bg-white py-2 md:py-6 my-14 w-[90%] mx-auto rounded-3xl">
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
                <th className="px-4 py-2 text-left">Id de Orden</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Importe Total</th>
                <th className="px-4 py-2 text-left">Fecha de la Orden</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment) => (
                <tr key={payment.orderId} className="border-t">
                  <td className="px-4 py-2">{payment.orderId}</td>
                  <td
                    className={`px-4 py-2 ${
                      payment.status === "Completed"
                        ? "text-green-500"
                        : "text-orange-500"
                    }`}>
                    {payment.status}
                  </td>
                  <td className="px-4 py-2">${payment.amount}</td>
                  <td className="px-4 py-2">{payment.date}</td>
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
