import React from "react";
import PaymentHistoryPanel from "../../UserPaymentsTable/UserPaymentsTable";

const payments = [
  {
    preference_id: "abc123",

    status: "completed",
    date_created: "2024-08-01T10:30:00Z",

    transaction_amount: 150.75,

    tournament: {
      name: "Torneo de Verano",
      team: [
        {
          users: [
            { id: "2fdb8177-9457-421f-bc91-ec1d69bc585d", name: "rosita" },
            { id: "user456", name: "Ana" },
          ],
        },
      ],
    },
  },
  {
    preference_id: "def456",

    status: "completed",
    date_created: "2024-08-03T14:45:00Z",
    transaction_amount: 200.0,

    tournament: {
      name: "Torneo de Primavera",
      team: [
        {
          users: [
            { id: "2fdb8177-9457-421f-bc91-ec1d69bc585d", name: "rosita" }, // Usuario sin compañero
          ],
        },
      ],
    },
  },
  {
    preference_id: "ghi789",

    status: "failed",
    date_created: "2024-08-05T09:15:00Z",

    transaction_amount: 75.5,

    tournament: {
      name: "Torneo de Otoño",
      team: [
        {
          users: [
            { id: "user123", name: "Carlos" },
            { id: "user456", name: "Ana" },
          ],
        },
      ],
    },
  },
  {
    preference_id: "jkl012",

    status: "completed",
    date_created: "2024-08-06T16:00:00Z",
    transaction_amount: 120.3,

    tournament: {
      name: "Torneo de Invierno aca",
      team: [
        {
          users: [
            { id: "user123", name: "Carlos" },
            { id: "user789", name: "Luis" },
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
