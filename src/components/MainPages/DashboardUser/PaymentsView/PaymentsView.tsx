import React from "react";
import PaymentHistoryPanel from "../../UserPaymentsTable/UserPaymentsTable";

const payments = [
  {
    preference_id: "abc123",

    status: "completed",
    date_created: "2024-08-01T10:30:00Z",

    transaction_amount: 150.75,

    tournament: {
      id: "ae1da3dd-3844-4499-9764-f0ffab34fa20",
      name: "Summer Padel Cup",
      team: [
        {
          users: [
            { id: "2fdb8177-9457-421f-bc91-ec1d69bc585d", name: "rosita" },
          ],
        },
      ],
    },
  },
];

const PaymentsView = () => {
  return (
    <div>
      <div className="md:col-span-2 w-[95%] mx-auto">
        <PaymentHistoryPanel payments={payments} />
      </div>
    </div>
  );
};

export default PaymentsView;
