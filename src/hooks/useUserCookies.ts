import Cookies from "js-cookie";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export function useUserCookies() {
  const saveGoogleUser = (newGoogleUser: IUserGooglePut) => {
    const dataToString = JSON.stringify(newGoogleUser);
    Cookies.set(googleUserKey, dataToString, { expires: 7 });
  };

  const saveRegularUser = (newRegularUser: IUserLogin) => {
    const dataToString = JSON.stringify(newRegularUser);
    Cookies.set(regularUserKey, dataToString, { expires: 7 });
  };

  const getGoogleUser = (): IUserGooglePut | null => {
    const googleUser = Cookies.get(googleUserKey);

    if (googleUser) {
      try {
        const cookieParse = JSON.parse(googleUser);
        console.log("Google User retrieved:", cookieParse);
        return cookieParse;
      } catch (error) {
        console.error("Error parsing Google User from cookies:", error);
        return null;
      }
    } else {
      console.warn("Google User cookie not found.");
      return null;
    }
  };

  const getRegularUser = (): IUserLogin | null => {
    const regularUser = Cookies.get(regularUserKey);

    if (regularUser) {
      try {
        const cookieParse = JSON.parse(regularUser);
        console.log("Regular User retrieved:", cookieParse);
        return cookieParse;
      } catch (error) {
        console.error("Error parsing Regular User from cookies:", error);
        return null;
      }
    } else {
      console.warn("Regular User cookie not found.");
      return null;
    }
  };

  const deleteGoogleUser = () => {
    Cookies.remove(googleUserKey);
    console.log("Google User cookie removed.");
  };

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
