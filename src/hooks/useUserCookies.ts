import Cookies from "js-cookie";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export function useUserCookies() {
  // Guardar el usuario de Google en la cookie
  const saveGoogleUser = (newGoogleUser: IUserGooglePut) => {
    const dataToString = JSON.stringify(newGoogleUser);
    Cookies.set(googleUserKey, dataToString, { expires: 7 }); // Expira en 7 días
  };

  // Guardar un usuario regular en la cookie
  const saveRegularUser = (newRegularUser: IUserLogin) => {
    const dataToString = JSON.stringify(newRegularUser);
    Cookies.set(regularUserKey, dataToString, { expires: 7 }); // Expira en 7 días
  };

  // Obtener el usuario de Google desde la cookie
  const getGoogleUser = (): IUserGooglePut | null => {
    const googleUser = Cookies.get(googleUserKey);

    if (googleUser) {
      try {
        const cookieParse = JSON.parse(googleUser);
        console.log("Google User retrieved:", cookieParse);
        return cookieParse;
      } catch (error) {
        console.error("Error parsing Google User from cookies:", error);
        return null; // Retorna null si hay un error en el parseo
      }
    } else {
      console.warn("Google User cookie not found.");
      return null; // Retorna null si la cookie no existe
    }
  };

  // Obtener el usuario regular desde la cookie
  const getRegularUser = (): IUserLogin | null => {
    const regularUser = Cookies.get(regularUserKey);

    if (regularUser) {
      try {
        const cookieParse = JSON.parse(regularUser);
        console.log("Regular User retrieved:", cookieParse);
        return cookieParse;
      } catch (error) {
        console.error("Error parsing Regular User from cookies:", error);
        return null; // Retorna null si hay un error en el parseo
      }
    } else {
      console.warn("Regular User cookie not found.");
      return null; // Retorna null si la cookie no existe
    }
  };

  // Eliminar la cookie del usuario de Google
  const deleteGoogleUser = () => {
    Cookies.remove(googleUserKey);
    console.log("Google User cookie removed.");
  };

  // Eliminar la cookie del usuario regular
  const deleteRegularUser = () => {
    Cookies.remove(regularUserKey);
    console.log("Regular User cookie removed.");
  };

  return {
    saveGoogleUser,
    saveRegularUser,
    getGoogleUser,
    getRegularUser,
    deleteGoogleUser,
    deleteRegularUser,
  };
}
