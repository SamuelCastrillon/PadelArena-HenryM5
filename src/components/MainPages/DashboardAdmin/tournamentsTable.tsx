"use client";
import React from "react";
import { useState } from "react";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import useTournamentData from "@/hooks/fetchTournamentData";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";
import { formatDate } from "@/helpers/dateTimeHelper";

const TournamentsTable: React.FC = () => {
  const { tournaments, loading, categories } = useTournamentData();
  const [filteredCategory, setFilteredCategory] = useState<string>("");

  if (loading) return <p>Loading...</p>;

  const handleSearch = (selectedCategory: string) => {
    setFilteredCategory(selectedCategory);
  };

  const handleClearSearch = () => {
    setFilteredCategory("");
  };

  const filteredTournaments = tournaments.filter((tournament: any) =>
    filteredCategory ? tournament.category?.name === filteredCategory : true
  );

  //   return (
  //     <>
  //       <div className="mt-20 flex flex-col items-center justify-start">
  //         <h1 className="text-4xl text-[#f8fafc] uppercase radhiumz">
  //           Tabla de torneos
  //         </h1>
  //         <h2 className="text-xl text-[#f8fafc] sfRegular">
  //           Organización, gestión y seguimiento de todos tus torneos.
  //         </h2>
  //       </div>
  //       {tournaments && tournaments.length > 0 ? (
  //         <>
  //           <div className="w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
  //             <div className="flex items-center justify-center w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
  //               <label
  //                 htmlFor="category-filter"
  //                 className="px-4 py-4 bg-lime rounded-l-lg sfBold">
  //                 Filtrar por Categoría:
  //               </label>
  //               <select
  //                 id="category-filter"
  //                 value={filteredCategory}
  //                 onChange={(e) => handleSearch(e.target.value)}
  //                 className="px-4 py-4 bg-white border-2 border-slate rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfBold text-center">
  //                 <option value="">Todas las categorías</option>
  //                 {categories.map((cat) => (
  //                   <option key={cat.id} value={cat.name}>
  //                     {cat.name}
  //                   </option>
  //                 ))}
  //               </select>

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start">
        <h1 className="text-4xl text-[#f8fafc] uppercase radhiumz">
          Tabla de torneos
        </h1>
        <h2 className="text-xl text-[#f8fafc] sfRegular">
          Organización, gestión y seguimiento de todos tus torneos.
        </h2>
      </div>
      {tournaments && tournaments.length > 0 ? (
        <>
          <div className="flex items-center justify-center w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
            <label
              htmlFor="category-filter"
              className="px-4 py-4 bg-lime rounded-l-lg sfBold">
              Filtrar por Categoría:
            </label>
            <select
              id="category-filter"
              value={filteredCategory}
              onChange={(e) => handleSearch(e.target.value)}
              className="px-4 py-4 bg-white border-2 border-slate rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfBold text-center">
              <option value="">Todas las categorías</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" w-[70%] mx-auto my-8 bg-[#f8fafc] rounded-3xl py-6">
            <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-center dark:bg-meta-4">
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      TORNEOS
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      FECHA DE INICIO
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      ESTADO
                    </th>
                    <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                      ACCIONES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTournaments.map((tournamentsItem: any, key: any) => (
                    <tr key={key} className="text-center">
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <h5 className="font-medium text-black">
                          {tournamentsItem.name}
                        </h5>
                        <p className="text-sm text-gray-500">
                          {tournamentsItem.category?.name ||
                            "Categoría no disponible"}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <p className="text-gray-500">
                          {formatDate(tournamentsItem.startDate)}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark relative">
                        <p className="inline-flex items-center rounded-full text-gray-500 px-3 py-1 text-bold text-sm font-medium group relative">
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className={`${
                              tournamentsItem.status === "por comenzar"
                                ? "text-yellow-500"
                                : tournamentsItem.status === "finalizado"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}>
                            <path
                              d="M12 22c-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10 .451 0 .891.04 1.325.098-4.1.687-6.982 3.301-8.252 6.282-2.447 5.743 1.359 10.347 5.599 10.343 2.746 0 5.152-1.853 6.583-4.202 1.336-2.191 2.835-2.584 3.706-2.257.612.229.95.797.885 1.429-.807 4.712-4.905 8.307-9.846 8.307m9.874-11.509c-2.379-1.075-4.844.555-6.326 2.988-1.007 1.652-2.444 2.795-3.941 3.136-3.359.765-6.683-2.785-4.694-7.451 1.341-3.147 5.12-6.292 11.386-4.925 1.886 1.533 3.193 3.74 3.575 6.252m2.126 1.509c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12c6.68 0 12-5.459 12-12"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-75 whitespace-nowrap hidden group-hover:block">
                            {tournamentsItem.status.toUpperCase()}
                          </span>
                        </p>
                      </td>
                      <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                        <div className="flex items-center justify-center space-x-3.5">
                          <button className="hover:text-primary">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd">
                              <path d="M12 17.925l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-7.807 0l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm15.614 0l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-8.307 3.52l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm-7.807 0l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm15.614 0l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm1.693-4.445h-17.997l-.003-1.162c-.009-2.446.372-3.273 2.938-3.858 2.661-.601 3.739-.995 3.126-2.123-1.718-3.16-2.043-5.94-.916-7.828.769-1.29 2.175-2.029 3.852-2.029 1.666 0 3.06.729 3.828 1.999 1.126 1.865.811 4.654-.89 7.854-.632 1.194.621 1.56 3.159 2.135 2.512.573 2.913 1.406 2.903 3.868v1.144zm-16.996-1h15.992c.013-1.965.071-2.536-2.121-3.037-1.783-.404-3.465-.786-3.974-1.89-.229-.499-.178-1.067.151-1.688 1.529-2.878 1.854-5.317.917-6.87-.59-.977-1.645-1.515-2.969-1.515-1.334 0-2.397.547-2.99 1.541-.94 1.572-.607 4.001.936 6.84.336.619.392 1.187.165 1.687-.505 1.108-2.257 1.505-3.952 1.888-2.171.495-2.167.949-2.155 3.044z" />
                            </svg>
                          </button>
                          <button className="hover:text-primary">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd">
                              <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                            </svg>{" "}
                          </button>
                          <button className="hover:text-primary">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd">
                              <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-20 my-20 flex flex-col items-center justify-start w-[90%] md:w-1/2 px-4 py-6 mx-auto bg-glass backdrop-blur-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
          <h2 className="text-xl sfRegular m-5 text-white">
            Aún no creaste ningún torneo
          </h2>
          <NavigateButton
            href="/dashboard/admin/tournaments/create"
            className="m-5 p-8 rounded-md bg-[#BEF164] min-w-[150px] px-4 py-2 text-black radhiumz transition-transform transform hover:translate-y-[-2px] hover:shadow-lg">
            CREAR UN TORNEO
          </NavigateButton>
        </div>
      )}
    </>
  );
};

export default TournamentsTable;
