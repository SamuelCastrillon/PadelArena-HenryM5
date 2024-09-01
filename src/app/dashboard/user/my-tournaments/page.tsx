import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import StadisticsView from "@/components/MainPages/DashboardUser/StadisticsSection/StadisticsView";
import PersonalizedTournamentView from "@/components/MainPages/PersonalizedTournamentView/PersonalizedTournamentView";

import React from "react";

const Stadistics = () => {
  return (
    <div className="flex flex-col w-full">
      <StadisticsView />

      <PersonalizedTournamentView />
    </div>
  );
};

export default Stadistics;
