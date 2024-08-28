import { useCookies } from "react-cookie";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";

const googleUserKey = "googleUser";
const regularUserKey = "regularUser";

export function useUserCookies() {
  const [cookies, setCookie, removeCookie] = useCookies([
    googleUserKey,
    regularUserKey,
  ]);

  const saveGoogleUser = (newGoogleUser: IUserGooglePut) => {
    const dataToString = JSON.stringify(newGoogleUser);
    setCookie(googleUserKey, dataToString, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    });
  };

  const saveRegularUser = (newRegularUser: IUserLogin) => {
    const dataToString = JSON.stringify(newRegularUser);
    setCookie(regularUserKey, dataToString, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    });
  };

  const getRegularUser = (): IUserLogin | null => {
    const getData = cookies[regularUserKey];
    if (getData) return JSON.parse(getData);
    else {
      console.error("Regular User not found in cookies");
      return null;
    }
  };

  const deleteGoogleUser = () => {
    removeCookie(googleUserKey, { path: "/" });
  };

  const deleteRegularUser = () => {
    removeCookie(regularUserKey, { path: "/" });
  };

  return {
    saveGoogleUser,
    saveRegularUser,

    getRegularUser,
    deleteGoogleUser,
    deleteRegularUser,
  };
}
