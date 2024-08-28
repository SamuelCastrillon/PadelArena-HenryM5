"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React, { useContext, useEffect, useState } from "react";
import {
  butonsLogInForm,
  inputsLogIngFormValues,
  logInInitialValues,
  logInSchema,
} from "./LognInData";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import HandlerLogIn from "@/Server/HandlerFormsFuctions/HandlerLogIn";
import { useCookies } from "react-cookie";
import {
  IUserGoogle,
  IUserLoginReq,
  IUserLoginRes,
} from "@/interfaces/RequestInterfaces";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/GlobalContext";
import Swal from "sweetalert2";
import ButtonNextAuthSignIn from "@/components/MainComponents/NextAuthButtonSignIn/NextAuthButtonSignIn";
import { useSession } from "next-auth/react";
import { postNextAuthSession } from "@/Server/User/postNextAuthSession";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import {
  IUpdateUser,
  updateUserProfile,
} from "@/Server/User/updateUserProfile";
import useTournamentData from "@/hooks/fetchTournamentData";
import { useUserCookies } from "@/hooks/useUserCookies";

const LogInView: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { setCurrentUser, setUserIdGoogle, userIdGoogle } =
    useContext(AuthContext);
  const { saveGoogleUser } = useUserCookies();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<IUpdateUser>({
    phone: "",
    country: "",
    city: "",
    address: "",
    category: "",
  });
  const { categories, error } = useTournamentData();

  useEffect(() => {
    console.log(userIdGoogle);
  }, [userIdGoogle]);

  useEffect(() => {
    if (session) {
      handlePostSession();
    }
  }, [session]);

  const handlePostSession = async () => {
    const userGoogleData = session?.user as IUserGoogle;
    if (userGoogleData) {
      const response = await postNextAuthSession(userGoogleData);
      console.log(response);

      if (response?.message.includes("realizado con exito")) {
        const newUser = response.googleUserFromDb;
        const { phone, country, city, address, category } = newUser;
        const existingUser = response.newUser;

        console.log(existingUser);

        if (
          phone !== null &&
          country !== null &&
          city !== null &&
          address !== null &&
          category !== null
        ) {
          saveGoogleUser(newUser);
          setCurrentUser(newUser);
          router.push("/dashboard/user/profile");
        } else if (newUser) {
          console.log(newUser);
          console.log(phone);
          setUserIdGoogle(newUser.id);

          console.log(userIdGoogle);
          setIsModalOpen(true);
        }
      } else {
        console.error("Error en el registro o login del usuario.");
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  const handleUpdateProfile = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userId = userIdGoogle;
      console.log(userId);

      if (userId) {
        const updatedUser = await updateUserProfile(userId, formData);
        console.log(updatedUser.newUser);
        if (updatedUser) {
          saveGoogleUser(updatedUser.newUser);
          setCurrentUser(updatedUser.newUser);
          handleCloseModal();
          Swal.fire({
            title: "Tu perfil se actualizó correctamente.",
            width: 400,
            padding: "3em",
          });
        }
      } else {
        console.error("No se encontró el ID del usuario.");
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  async function SaveData(data: IUserLoginReq) {
    try {
      const response: IUserLoginRes = await HandlerLogIn(data);

      if (response?.token) {
        console.log(response);

        setCurrentUser(response.userClean);

        Swal.fire({
          title: "Te has logueado con éxito.",
          width: 400,
          padding: "3em",
        });
        router.push("/");
      }
    } catch (error: any) {
      Swal.fire({
        title: "No eres un usuario registrado. Por favor completa el registro.",
        width: 400,
        padding: "3em",
      });
      router.push("/register");
      console.error(error);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
      <FormComponent
        iniValues={logInInitialValues}
        valiSchema={logInSchema}
        handelerSubmit={SaveData}
        butonsForm={butonsLogInForm}
        dataContructor={inputsLogIngFormValues}
      />
      <ButtonNextAuthSignIn className="rounded-md bg-black text-white">
        Iniciar sesión con Google
      </ButtonNextAuthSignIn>
      {/* Navigate Button to create an account */}
      <div className="flex items-center gap-8 m-8">
        <span className="text-white">Necesitas una cuenta?</span>
        <NavigateButton
          href="/register"
          className="rounded-md bg-customBlue w-full h-fit py-[5px] px-[10px] text-white hover:shadow-lg"
        >
          Crear Cuenta
        </NavigateButton>
      </div>
      {/* Modal para completar perfil */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blurBackground={true}
        backgroundColor="bg-white"
        textColor="text-black"
        className="p-4"
        bgImageUrl="https://example.com/your-background-image.jpg" // Imagen de fondo opcional
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Guardar
          </button>
        </form>
      </ReusableModal>
    </section>
  );
};

export default LogInView;
