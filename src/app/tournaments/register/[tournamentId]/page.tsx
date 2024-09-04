import RegisterForTournaments from "@/components/MainPages/RegisterForTournaments/RegisterForTournaments";
import React from "react";

const page = async ({ tournamentId }: { tournamentId: { tournamentId: string } }) => {
  return <RegisterForTournaments tournamentId={tournamentId} />;
};

export default page;
