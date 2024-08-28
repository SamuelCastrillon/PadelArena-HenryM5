import RegisterForTournaments from "@/components/MainPages/RegisterForTournaments/RegisterForTournaments";
import React from "react";

const page = ({ params }: { params: { tournamentID: string } }) => {
  return <RegisterForTournaments id={params.tournamentID} />;
};

export default page;
