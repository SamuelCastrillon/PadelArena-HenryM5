"use client";
import React, { useContext } from "react";
import UserInfoPanel from "../UserInfoPanel/UserInfoPanel";
import PaymentHistoryPanel from "../UserPaymentsTable/UserPaymentsTable";
import { AuthContext } from "@/context/GlobalContext";

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
const ProfileSection: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentUser && <UserInfoPanel user={currentUser} />}
        <div className="md:col-span-2">
          <PaymentHistoryPanel payments={payments} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
