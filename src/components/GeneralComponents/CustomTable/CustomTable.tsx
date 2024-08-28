import React from "react";

interface CustomTableProps {
  headers: string[];
  children: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, children }) => {
  return (
    <div className=" w-[70%] mx-auto my-8 bg-[#f8fafc] rounded-3xl py-6">
      <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-center dark:bg-meta-4">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="min-w-[200px] px-4 py-4 font-medium text-black radhiumz">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
