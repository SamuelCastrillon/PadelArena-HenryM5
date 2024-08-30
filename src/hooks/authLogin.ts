// useAuth.ts
"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import {
  IUserGoogle,
  IUserLoginReq,
  IUserLoginRes,
} from "@/interfaces/RequestInterfaces";
import { AuthContext } from "@/context/GlobalContext";
import { postNextAuthSession } from "@/Server/User/postNextAuthSession";
import {
  IUpdateUser,
  updateUserProfile,
} from "@/Server/User/updateUserProfile";
import HandlerLogIn from "@/Server/HandlerFormsFuctions/HandlerLogIn";
import { useUserCookies } from "@/hooks/useUserCookies";
import useTournamentData from "./fetchTournamentData";

const useAuth = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { categories, error } = useTournamentData();
  const { setCurrentUser, setUserIdGoogle, userIdGoogle } =
    useContext(AuthContext);
  const { saveGoogleUser, saveRegularUser } = useUserCookies();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<IUpdateUser>({
    phone: "",
    country: "",
    city: "",
    address: "",
    category: "",
  });

  console.log(formData);
  useEffect(() => {
    if (session) {
      handlePostSession();
    }
  }, [session]);

  const handlePostSession = async () => {
    const userGoogleData = session?.user as IUserGoogle;
    if (userGoogleData) {
      try {
        const response = await postNextAuthSession(userGoogleData);
        console.log(
          response.googleUserWithoutPassword || response.newGoogleUser
        );
        const newUser =
          response.googleUserWithoutPassword || response.newGoogleUser;
        if (
          response &&
          response.message &&
          typeof response.message === "string" &&
          response.message.includes("realizado con exito")
        ) {
          const newUser = response;

          if (newUser) {
            const phone = newUser.phone || "";
            const country = newUser.country || "";
            const city = newUser.city || "";
            const address = newUser.address || "";
            const category = newUser.category || "";

            if (!phone || !country || !city || !address || !category) {
              setUserIdGoogle(newUser.id);
              console.log(userIdGoogle);
              setIsModalOpen(true);
            } else {
              saveGoogleUser(newUser);
              setCurrentUser(newUser);
              router.push("/dashboard/user/profile");
            }
          } else {
            console.error(
              "Error: El usuario no fue encontrado en la respuesta."
            );
          }
        }
      } catch (error: any) {
        console.error(
          "Error al realizar la sesión del usuario:",
          error.message,
          error
        );
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
      if (userId) {
        if (!formData.category) {
          Swal.fire({
            title: "Por favor selecciona una categoría válida.",
            width: 400,
            padding: "3em",
          });
          return;
        }

        const updatedUser = await updateUserProfile(userId, formData);
        console.log(updatedUser);
        if (updatedUser) {
          saveGoogleUser(updatedUser);
          setCurrentUser(updatedUser);
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

    if (name === "category") {
      // Encuentra la categoría seleccionada por nombre y obtiene el ID
      const selectedCategory = categories.find(
        (category) => category.name === value
      );

      // Asigna el ID de la categoría al formData
      setFormData({ ...formData, category: selectedCategory?.id || "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const logIn = async (data: IUserLoginReq) => {
    try {
      const response: IUserLoginRes = await HandlerLogIn(data);
      console.log(response);
      if (response?.token) {
        console.log(response.userClean);
        saveRegularUser(response.userClean);
        setCurrentUser(response.userClean);
        Swal.fire({
          title: "Te has logueado con éxito.",
          width: 400,
          padding: "3em",
        });
        router.push("/dashboard/user/profile");
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
  };

  return {
    isModalOpen,
    formData,
    handleCloseModal,
    handleUpdateProfile,
    handleInputChange,
    logIn,
  };
};

export default useAuth;
