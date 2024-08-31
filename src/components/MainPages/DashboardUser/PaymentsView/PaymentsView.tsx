import React from "react";
import PaymentHistoryPanel from "../../UserPaymentsTable/UserPaymentsTable";

const payments = [
  {
    preference_id: "abc123",
    payment: "Pago 1",
    status: "completed",
    date_created: "2024-08-01T10:30:00Z",
    date_last_update: "2024-08-02T12:00:00Z",
    transaction_amount: 150.75,
    payment_method_id: "visa",
    payment_type_id: "credit_card",
  },
  {
    preference_id: "def456",
    payment: "Pago 2",
    status: "pending",
    date_created: "2024-08-03T14:45:00Z",
    transaction_amount: 200.0,
    payment_method_id: "master",
    payment_type_id: "debit_card",
  },
  {
    preference_id: "ghi789",
    payment: "Pago 3",
    status: "failed",
    date_created: "2024-08-05T09:15:00Z",
    date_last_update: "2024-08-05T09:45:00Z",
    transaction_amount: 75.5,
    payment_method_id: "paypal",
    payment_type_id: "paypal",
  },
  {
    preference_id: "jkl012",
    payment: "Pago 4",
    status: "completed",
    date_created: "2024-08-06T16:00:00Z",
    transaction_amount: 120.3,
    payment_method_id: "amex",
    payment_type_id: "credit_card",
  },
  {
    preference_id: "mno345",
    payment: "Pago 5",
    status: "refunded",
    date_created: "2024-08-07T11:20:00Z",
    date_last_update: "2024-08-08T13:30:00Z",
    transaction_amount: 300.9,
    payment_method_id: "visa",
    payment_type_id: "credit_card",
  },
];
const PaymentsView = () => {
  return (
    <div>
      <div className="md:col-span-2 w-[80%] mx-auto">
        <PaymentHistoryPanel payments={payments} />
      </div>
    </div>
  );
};

export default PaymentsView;
