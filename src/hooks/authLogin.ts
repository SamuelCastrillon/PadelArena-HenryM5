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
  const { categories } = useTournamentData();
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
      try {
        const response = await postNextAuthSession(userGoogleData);

        console.log(
          "los datos del user luego del post session",
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
          if (newUser) {
            if (newUser.profileImg && !isValidUrl(newUser.profileImg)) {
              console.error(
                "URL de la imagen de perfil no válida:",
                newUser.profileImg
              );
              newUser.profileImg = "/images/default-image.jpg"; // Establecer una imagen predeterminada
            }

            setUserIdGoogle(newUser.id);

            const { city, country, address, phone, category } = newUser;

            if (!city && !country && !address && !phone && !category) {
              setIsModalOpen(true);
            } else {
              saveGoogleUser(newUser);
              setCurrentUser(newUser);
              router.push("/dashboard/user/profile");
            }
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

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  // const handleUpdateProfile = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     const userId = userIdGoogle;

  //     if (userId) {
  //       if (!formData.category) {
  //         Swal.fire({
  //           title: "Por favor selecciona una categoría válida.",
  //           width: 400,
  //           padding: "3em",
  //         });
  //         return;
  //       }

  //       const updatedUser = await updateUserProfile(userId, formData);

  //       if (updatedUser) {
  //         saveGoogleUser(updatedUser);
  //         setCurrentUser(updatedUser);
  //         handleCloseModal();
  //         Swal.fire({
  //           title: "Tu perfil se actualizó correctamente.",
  //           width: 400,
  //           padding: "3em",
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error al actualizar el perfil:", error);
  //   }
  // };

  const handleUpdateProfile = async (values: IUpdateUser) => {
    try {
      const userId = userIdGoogle;

      if (userId) {
        if (!values.category) {
          Swal.fire({
            title: "Por favor selecciona una categoría válida.",
            width: 400,
            padding: "3em",
          });
          return;
        }

        const updatedUser = await updateUserProfile(userId, values);

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
      const selectedCategory = categories.find(
        (category) => category.name === value
      );

      setFormData({
        ...formData,
        category: selectedCategory?.id || "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const logIn = async (data: IUserLoginReq) => {
    try {
      const response: IUserLoginRes = await HandlerLogIn(data);

      if (response?.token) {
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
