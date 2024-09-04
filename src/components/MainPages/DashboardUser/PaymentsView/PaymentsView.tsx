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
            { id: "04c7e986-7372-4f3b-856f-2c09ead869e8", name: "rosario" },
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
