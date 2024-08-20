import React from "react";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-md border-2 border-black">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md text-black sfRegular"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="p-2 bg-blue-500 text-black rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
