"use client";
import React, { useEffect, useState } from "react";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { getAllUsers, updateUserCategory } from "@/Server/Users/getUsers";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { getCategories } from "@/Server/Category/getCategories";
import Swal from "sweetalert2";

interface UserProp {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  category: Category | undefined;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

const UsersManagement: React.FC = () => {
  const [users, setUsers] = useState<UserProp[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<{
    [key: string]: string;
  }>({});
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState<string>(""); // Nuevo estado para la categoría seleccionada para filtrar

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchCategories();
    fetchUsers();
  }, []);

  const handleCategoryChange = (userId: string, newCategoryId: string) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [userId]: newCategoryId,
    }));
  };

  const handleSaveCategory = async (userId: string) => {
    const newCategoryId = selectedCategories[userId];
    if (!newCategoryId) return;

    try {
      await updateUserCategory(userId, newCategoryId);
      const updatedUsers = await getAllUsers();
      setUsers(updatedUsers);

      Swal.fire({
        title: "Categoría actualizada con éxito.",
        width: 400,
        padding: "3em",
      });
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
      Swal.fire({
        title: "Error al actualizar categoría.",
        text: "Comprueba que la categoría que seleccionaste es diferente a la que ya tiene asignada el usuario.",
        width: 400,
        padding: "3em",
      });
    }
  };

  const handleFilterChange = (categoryId: string) => {
    setSelectedFilterCategory(categoryId);
  };

  // Filtrar usuarios por categoría seleccionada
  const filteredUsers = selectedFilterCategory
    ? users.filter((user) => user.category?.id === selectedFilterCategory)
    : users;

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-start">
        <h1 className="text-4xl text-[#f8fafc] uppercase radhiumz">
          Tabla de Usuarios
        </h1>
        <h2 className="text-xl text-[#f8fafc] sfRegular">
          Seguimiento de todos los usuarios registrados.
        </h2>
        <div className="flex items-center justify-center w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
          <label
            htmlFor="category-filter"
            className="px-4 py-4 bg-lime rounded-l-lg sfBold">
            Filtrar por Categoría:
          </label>
          <select
            id="category-filter"
            value={selectedFilterCategory}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="px-4 py-4 bg-white border-2 border-slate rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-500 sfBold text-center">
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <CustomTable
        headers={[
          "NOMBRE",
          "EMAIL",
          "TELÉFONO",
          "DIRECCIÓN",
          "CATEGORÍA",
          "ACCIONES",
        ]}>
        {filteredUsers.map((user, index) => (
          <tr key={index} className="text-center">
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <h5 className="font-medium text-black">{`${user.name} ${user.lastName}`}</h5>
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
              <select
                value={selectedCategories[user.id] || user.category?.id || ""}
                onChange={(e) => handleCategoryChange(user.id, e.target.value)}
                className="hover:text-primary text-black font-bold text-center p-1 rounded-lg bg-customBlue/10">
                <option value="" disabled>
                  Seleccione una categoría
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </td>
            <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
              <ActionButton
                onClick={() => handleSaveCategory(user.id)}
                className="bg-lime text-black sfBold px-4 rounded-lg hover:text-white py-2 hover:bg-blue-600 radhiumz">
                <p className="radhiumz text-xs">GUARDAR</p>
              </ActionButton>
            </td>
          </tr>
        ))}
      </CustomTable>
    </>
  );
};

export default UsersManagement;
