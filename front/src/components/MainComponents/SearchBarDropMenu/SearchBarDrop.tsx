// SearchBarDrop.tsx

import { ISearchBarDropProps } from "@/interfaces/SearchBarDrop";
import React, { useState } from "react";

const SearchBarDrop: React.FC<ISearchBarDropProps> = ({
  onSearch,
  categorias,
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

  const handleSearch = () => {
    // Asigna una categoría predeterminada si no se ha seleccionado ninguna
    const categoryToSearch = selectedCategory || categorias[0];
    onSearch(searchTerm, categoryToSearch);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="flex w-full mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative">
          <select
            value={selectedCategory || ""}
            onChange={handleCategoryChange}
            className="px-4 py-2 border border-gray-300 bg-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBarDrop;
