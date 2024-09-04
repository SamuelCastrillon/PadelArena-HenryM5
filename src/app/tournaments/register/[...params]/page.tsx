import RegisterForTournaments from "@/components/MainPages/RegisterForTournaments/RegisterForTournaments";
import React from "react";

const page = async ({ params }: { params: { params: any } }) => {
  return <RegisterForTournaments allParams={params} />;
};

export default page;
