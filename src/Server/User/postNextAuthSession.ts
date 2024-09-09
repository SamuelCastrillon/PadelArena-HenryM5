import { axiosInstance } from "../AxiosConfig";
import { IUserGoogle } from "@/interfaces/RequestInterfaces";
import Swal from "sweetalert2";

export const postNextAuthSession = async (user: IUserGoogle) => {
  try {
    const response = await axiosInstance.post("/auth/google-sign", user);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// import { axiosInstance } from "../AxiosConfig";
// import { IUserGoogle } from "@/interfaces/RequestInterfaces";
// import Swal from "sweetalert2";
// import { getSession } from "next-auth/react"; // Importa getSession de next-auth

// export const postNextAuthSession = async (user: IUserGoogle) => {
//   try {
//     const session = await getSession(); // Obtén la sesión actual
//     if (!session) {
//       throw new Error("No se pudo obtener la sesión.");
//     }

//     // Extrae el token de la sesión
//     const token = session.token;

//     // Realiza la solicitud a tu backend con el token en los headers
//     const response = await axiosInstance.post("/auth/google-sign", user, {
//       headers: {
//         Authorization: `Bearer ${token}`, // Agrega el token al header
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     Swal.fire({
//       title: "Error al autenticar con Google.",
//       text: "Por favor, intenta de nuevo.",
//       icon: "error",
//       confirmButtonText: "Cerrar",
//     });
//     throw error;
//   }
// };
