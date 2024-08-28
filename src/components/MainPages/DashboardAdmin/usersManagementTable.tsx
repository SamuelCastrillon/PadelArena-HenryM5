"use client";
import React, { useEffect, useState } from "react";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { getAllUsers } from "@/Server/Users/getUsers";
import MenuDropDaw from "@/components/HeaderComponents/UserMenuReusable/MenuDropDaw/MenuDropDaw";

interface UserProp {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
}

const UsersManagement: React.FC = () => {
  const [users, setUsers] = useState<UserProp[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start">
        <h1 className="text-4xl text-[#f8fafc] uppercase radhiumz">
          Tabla de Usuarios
        </h1>
        <h2 className="text-xl text-[#f8fafc] sfRegular">
          Seguimiento de todos los usuarios registrados.
        </h2>
      </div>
      <CustomTable
        headers={["NOMBRE", "EMAIL", "TELÉFONO", "DIRECCIÓN", "CATEGORÍA"]}>
        {users.map((user, index) => (
          <tr key={index} className="text-center">
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <h5 className="font-medium text-black">
                {`${user.name} ${user.lastName}`}
              </h5>
            </td>
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <p className="text-gray-500">{user.email}</p>
            </td>
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <p className="text-gray-500">{user.phone}</p>
            </td>
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <p className="text-gray-500">{`${user.city}, ${user.country}.`}</p>
            </td>
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <div className="flex items-center justify-center space-x-3.5">
                <select className="hover:text-primary"></select>
              </div>
            </td>
          </tr>
        ))}
      </CustomTable>
    </>
  );
};

export default UsersManagement;
