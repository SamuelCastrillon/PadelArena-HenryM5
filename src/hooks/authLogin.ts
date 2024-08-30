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

const useAuth = () => {
  const router = useRouter();
  const { data: session } = useSession();
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
        const newUser = response.googleUserWithoutPassword;
        console.log(newUser);
        const { phone, country, city, address, category } = newUser;
        const existingUser = response.newUser;

        if (
          phone !== null &&
          country !== null &&
          city !== null &&
          address !== null &&
          category !== null
        ) {
          console.log(newUser);
          saveGoogleUser(newUser);
          setCurrentUser(newUser);
          router.push("/dashboard/user/profile");
        } else if (newUser) {
          setUserIdGoogle(newUser.id);
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
      if (userId) {
        const updatedUser = await updateUserProfile(userId, formData);
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

  const logIn = async (data: IUserLoginReq) => {
    try {
      const response: IUserLoginRes = await HandlerLogIn(data);
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
