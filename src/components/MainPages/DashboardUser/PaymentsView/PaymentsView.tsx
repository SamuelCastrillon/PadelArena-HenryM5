import React from "react";
import PaymentHistoryPanel from "../../UserPaymentsTable/UserPaymentsTable";
const payments = [
  {
    orderId: "ODR2387",
    status: "Completed",
    amount: 820.0,
    date: "20 Jan 2023, 9:30 am",
  },
  {
    orderId: "ODR2388",
    status: "Pending",
    amount: 360.5,
    date: "21 Jan 2023, 2:15 pm",
  },
  {
    orderId: "ODR2389",
    status: "Pending",
    amount: 990.0,
    date: "22 Jan 2023, 5:45 pm",
  },
  {
    orderId: "ODR2390",
    status: "Completed",
    amount: 280.75,
    date: "23 Jan 2023, 10:30 am",
  },
  {
    orderId: "ODR2391",
    status: "Pending",
    amount: 615.25,
    date: "25 Jan 2023, 3:15 pm",
  },
];
const PaymentsView = () => {
  return (
    <div>
      <div className="md:col-span-2">
        <PaymentHistoryPanel payments={payments} />
      </div>
    </div>
  );
};

export default PaymentsView;
