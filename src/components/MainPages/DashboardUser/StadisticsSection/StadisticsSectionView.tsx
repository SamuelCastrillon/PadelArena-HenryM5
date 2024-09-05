"use client";

import React, { useContext } from "react";
import StadisticsView from "./StadisticsView";
import { AuthContext } from "@/context/GlobalContext";

const StadisticsSectionView = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.id ?? "";
  return (
    <div>
      <StadisticsView userId={userId} />
    </div>
  );
};

export default StadisticsSectionView;
