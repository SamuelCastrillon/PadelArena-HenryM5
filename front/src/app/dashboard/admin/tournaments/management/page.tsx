import React from "react";
import TournamentsTable from "@/components/MainPages/DashboardAdmin/tournamentsTable";
import { getTournaments } from "@/Server/Tournament/getTournaments";

const Page: React.FC = async () => {
  const tableData = await getTournaments();

  return (
    <>
      <TournamentsTable tableData={tableData} />
    </>
  );
};

export default Page;
