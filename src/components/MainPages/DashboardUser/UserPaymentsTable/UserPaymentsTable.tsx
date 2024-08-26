import React from "react";

interface IPayment {
  orderId: string;
  status: string;
  amount: number;
  date: string;
}

const PaymentHistoryPanel: React.FC<{ payments: IPayment[] }> = ({
  payments,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Payment Overview</h3>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Total Amount</th>
            <th className="px-4 py-2 text-left">Order Date</th>
            <th className="px-4 py-2 text-left">Options</th>
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
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">
                  Options
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoryPanel;
