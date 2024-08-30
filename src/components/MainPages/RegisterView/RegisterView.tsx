"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import {
  butonsRegisterForm,
  inputsFormValues,
  registerSchema,
  signInInitialValues,
} from "./RegisterData";
import HandlerRegister from "@/Server/HandlerFormsFuctions/HandlerRegister";
import { IUserRegisterReq } from "@/interfaces/RequestInterfaces";
import ButtonNextAuthSignIn from "@/components/MainComponents/NextAuthButtonSignIn/NextAuthButtonSignIn";
import useTournamentData from "@/hooks/fetchTournamentData";
import useAuth from "@/hooks/authLogin"; // Importa el hook useAuth
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal"; // Importa el modal reutilizable

const RegisterView = () => {
  const {
    isModalOpen,
    formData,
    handleCloseModal,
    handleUpdateProfile,
    handleInputChange,
    logIn,
  } = useAuth(); // Usa el hook para la lógica de autenticación
  const navigate = useRouter();
  const { categories, error } = useTournamentData();

  async function RegisterHandeler(data: IUserRegisterReq) {
    const transformedData = {
      ...data,
      phone: String(data.phone),
    };

    try {
      const response = await HandlerRegister(transformedData);

      Swal.fire({
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      navigate.push("/login");
    } catch (error) {
      Swal.fire({
        title: "Error al registrarse",
        text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    name: category.name,
  }));

  const updatedInputsFormValues = inputsFormValues.map((input) => {
    if (input.FieldType === "select" && input.FieldName === "category") {
      return {
        ...input,
        selectOptions: categoryOptions,
      };
    }
    return input;
  });

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 h-fit my-20">
      <h1 className="text-white text-3xl sfRegular ">
        Registrate para ser parte de
        <br />
        <span className="radhiumz text-5xl text-lime uppercase">
          {" "}
          la accion
        </span>
      </h1>
      <FormComponent
        iniValues={signInInitialValues}
        valiSchema={registerSchema}
        handelerSubmit={RegisterHandeler}
        dataContructor={updatedInputsFormValues}
        butonsForm={butonsRegisterForm}
      />
      {/* Botón para registrarse con Google */}
      <ButtonNextAuthSignIn className="bg-black text-white">
        Registrate con Google
      </ButtonNextAuthSignIn>

      {/* Modal para completar perfil si se registra con Google */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blurBackground={true}
        backgroundColor="bg-white"
        textColor="text-black"
        className="p-4"
        bgImageUrl="https://example.com/your-background-image.jpg"
      >
        <h2 className="text-xl font-bold mb-4">Completa tu perfil</h2>
        <form onSubmit={handleUpdateProfile}>
          {/* Campos para completar el perfil */}
          <div className="mb-4">
            <label className="block mb-2">Teléfono</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Teléfono"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">País</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="País"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Ciudad</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ciudad"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Dirección</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Categoría</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Selecciona una categoría</option>
              {error && <option>Error al cargar categorías</option>}
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Actualizar Perfil
          </button>
        </form>
      </ReusableModal>
    </section>
  );
};

export default RegisterView;
