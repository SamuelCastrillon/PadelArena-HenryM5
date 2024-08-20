"use client";

import SearchBar from "@/components/MainComponents/SearchBar/SearchBar";
import React from "react";

const handleSearch = () => {
  console.log("Search here");
};

const TournamentsView: React.FC = () => {
  return (
    <div className="flex  border-8 border-red-600">
      <div className="items-center justify-center border-2 border-red-500 h-1/2 w-full">
        <h1>ACA PAGE</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="bg-black h-1/2 w-3/4"></div>
      </div>
    </div>
  );
};

export default TournamentsView;
