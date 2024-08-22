// SearchBarDrop.tsx

import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { ISearchBarDropProps } from "@/interfaces/SearchBarDrop";
import React, { useState } from "react";

const SearchBarDrop: React.FC<ISearchBarDropProps> = ({
  onSearch,
  categorias,
  onClear,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    // Si la categoría seleccionada es válida, actualiza el campo de búsqueda
    if (newCategory) {
      setSearchTerm(newCategory);
    }
  };
  const handleClearSearch = () => {
    setSearchTerm("");
    setSelectedCategory(undefined);
    onClear();
  };

  const handleSearch = () => {
    // Asigna una categoría predeterminada si no se ha seleccionado ninguna
    const categoryToSearch = selectedCategory || categorias[0];
    onSearch(categoryToSearch);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="flex w-full mb-4">
        <div className="bg-white flex border-none rounded-xl">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>

          <ActionButton
            onClick={handleClearSearch}
            className="px-4 py-2 bg-lime text-black rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
              viewBox="0 0 384 512"
            >
              <path
                fill="#000000"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </ActionButton>
          <div className="relative ">
            <select
              value={selectedCategory || ""}
              onChange={handleCategoryChange}
              className="px-4 py-4 border border-gray-300 bg-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 sfBold"
            >
              <option value="" disabled>
                Categorías
              </option>
              {categorias.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-lime text-black sfBold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBarDrop;
