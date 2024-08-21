import React from "react";

const TournamentDetail = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default TournamentDetail;
