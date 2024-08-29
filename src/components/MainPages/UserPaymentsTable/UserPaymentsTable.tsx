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
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
        Historial de Pagos de el usuario:{" "}
        <span className="uppercase radhiumz">{currentUser?.name}</span>
      </h3>
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
          {payments.map((payment) => (
            <tr key={payment.orderId} className="border-t">
              <td className="px-4 py-2">{payment.orderId}</td>
              <td
                className={`px-4 py-2 ${
                  payment.status === "Completed"
                    ? "text-green-500"
                    : "text-orange-500"
                }`}
              >
                {payment.status}
              </td>
              <td className="px-4 py-2">${payment.amount}</td>
              <td className="px-4 py-2">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryPanel;
