import React from 'react';
import { tournaments } from '@/helpers/tournamentsData';

const tableData = tournaments;

const TournamentsTable: React.FC = () => {
  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start">
        <h1 className="text-4xl text-white uppercase radhiumz">Tabla de torneos</h1>
        <h2 className="text-xl text-white sfRegular">Organización, gestión y seguimiento de todos tus torneos.</h2>
      </div>
      <div className="min-h-screen w-[70%] mx-auto my-8 bg-white rounded-3xl py-6">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-center dark:bg-meta-4">
                <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">TORNEOS</th>
                <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">FECHA DE INICIO</th>
                <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">ESTADO</th>
                <th className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tableDataItem, key) => (
                <tr key={key} className="text-center">
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black">{tableDataItem.name}</h5>
                    <p className="text-sm">${tableDataItem.name}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-gray-500">{tableDataItem.startDate}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                        tableDataItem.status === 'upcoming' || tableDataItem.status === 'inProgress'
                          ? 'bg-success text-success'
                          : tableDataItem.status === 'finished'
                          ? 'bg-danger text-danger'
                          : 'bg-warning text-warning'
                      }`}
                    >
                      {tableDataItem.status}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center justify-center space-x-3.5">
                      <button className="hover:text-primary">
                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 17.925l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-7.807 0l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm15.614 0l-.976 2.014-2.217.305 1.615 1.552-.395 2.204 1.973-1.057 1.973 1.056-.393-2.203 1.613-1.552-2.217-.305-.976-2.014zm-8.307 3.52l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm-7.807 0l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm15.614 0l-.512-.491.702-.097.31-.639.31.639.703.097-.511.491.125.699-.627-.335-.625.334.125-.698zm1.693-4.445h-17.997l-.003-1.162c-.009-2.446.372-3.273 2.938-3.858 2.661-.601 3.739-.995 3.126-2.123-1.718-3.16-2.043-5.94-.916-7.828.769-1.29 2.175-2.029 3.852-2.029 1.666 0 3.06.729 3.828 1.999 1.126 1.865.811 4.654-.89 7.854-.632 1.194.621 1.56 3.159 2.135 2.512.573 2.913 1.406 2.903 3.868v1.144zm-16.996-1h15.992c.013-1.965.071-2.536-2.121-3.037-1.783-.404-3.465-.786-3.974-1.89-.229-.499-.178-1.067.151-1.688 1.529-2.878 1.854-5.317.917-6.87-.59-.977-1.645-1.515-2.969-1.515-1.334 0-2.397.547-2.99 1.541-.94 1.572-.607 4.001.936 6.84.336.619.392 1.187.165 1.687-.505 1.108-2.257 1.505-3.952 1.888-2.171.495-2.167.949-2.155 3.044z"/></svg>

                      </button>
                      <button className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M7.02832 14.8219C7.16995 14.8219 7.31157 14.7657 7.41657 14.6607L9.00032 13.0769L10.5841 14.6607C10.7891 14.8657 11.1416 14.8657 11.3466 14.6607C11.5516 14.4557 11.5516 14.1032 11.3466 13.8982L9.76282 12.3144L11.3466 10.7307C11.5516 10.5257 11.5516 10.1732 11.3466 9.96819C11.1416 9.76319 10.7891 9.76319 10.5841 9.96819L9.00032 11.552L7.41657 9.96819C7.21157 9.76319 6.85907 9.76319 6.65407 9.96819C6.44907 10.1732 6.44907 10.5257 6.65407 10.7307L8.23782 12.3144L6.65407 13.8982C6.44907 14.1032 6.44907 14.4557 6.65407 14.6607C6.73157 14.7657 6.8732 14.8219 7.02832 14.8219Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      <button className="hover:text-primary">
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.2749 2.72461C14.2537 1.70336 12.7262 1.70336 11.705 2.72461L10.6112 3.81836L14.1806 7.38773L15.2749 6.29398C16.2961 5.27273 16.2961 3.74524 15.2749 2.72461Z"
                            fill=""
                          />
                          <path
                            d="M9.47871 6.08981L2.89623 12.6723C2.7806 12.788 2.70247 12.9377 2.67247 13.0992L2.05622 16.1686C2.01697 16.3605 2.08247 16.5561 2.22872 16.7023C2.37497 16.8486 2.5706 16.9141 2.76247 16.8749L5.83185 16.2586C5.99335 16.2286 6.14303 16.1504 6.25871 16.0348L12.8412 9.45231L9.47871 6.08981ZM5.47497 14.9561L4.0906 15.2286L4.3631 13.8442L9.00003 9.2073L10.1806 10.3877L5.47497 14.9561Z"
                            fill=""
                          />
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
  );
};

export default TournamentsTable;
