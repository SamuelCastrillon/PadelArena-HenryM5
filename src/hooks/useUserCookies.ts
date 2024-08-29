import Cookies from "js-cookie";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export function useUserCookies() {
  // Guardar el usuario de Google en la cookie
  const saveGoogleUser = (newGoogleUser: IUserGooglePut) => {
    const dataToString = JSON.stringify(newGoogleUser);
    Cookies.set(googleUserKey, dataToString, { expires: 7 }); // expira en 7 días
  };

  // Guardar un usuario regular en la cookie
  const saveRegularUser = (newRegularUser: IUserLogin) => {
    const dataToString = JSON.stringify(newRegularUser);
    Cookies.set(regularUserKey, dataToString, { expires: 7 }); // expira en 7 días
  };

  // Obtener el usuario de Google desde la cookie
  const getGoogleUser = (): IUserGooglePut | null => {
    const googleUser = Cookies.get(googleUserKey);
    console.log(googleUser);
    if (googleUser) {
      // try {
      const cookieParse = JSON.parse(googleUser);
      console.log("aqui estas maldita", cookieParse);
      return cookieParse;
    }
    //  } catch (error) {
    //  console.error("Error parsing Google User from cookies:", error);
    //  return null;
    // }
    else {
      return null;
    }
  };
  const getRegularUser = (): IUserLogin | null => {
    const regularUser = Cookies.get(regularUserKey);
    if (regularUser) {
      try {
        return JSON.parse(regularUser);
      } catch (error) {
        console.error("Error parsing Regular User from cookies:", error);
        return null;
      }
    } else {
      return null;
    }
  };

  const deleteGoogleUser = () => {
    Cookies.remove(googleUserKey);
  };

  const deleteRegularUser = () => {
    Cookies.remove(regularUserKey);
  };

  return {
    saveGoogleUser,
    saveRegularUser,
    getGoogleUser,
    getRegularUser,
    deleteRegularUser,
    deleteGoogleUser,
  };
}
