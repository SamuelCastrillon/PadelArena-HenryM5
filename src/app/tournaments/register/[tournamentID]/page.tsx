import RegisterForTournaments from "@/components/MainPages/RegisterForTournaments/RegisterForTournaments";
import { getDataToContructFormRegisterTournament } from "@/components/MainPages/RegisterForTournaments/RegisterForTournamentsData";
import React from "react";

const page = async ({ params }: { params: { tournamentID: string } }) => {
  return <RegisterForTournaments id={params.tournamentID} />;
};

export default page;
