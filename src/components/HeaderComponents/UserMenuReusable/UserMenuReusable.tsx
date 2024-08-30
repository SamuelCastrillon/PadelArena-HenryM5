"use client";
import React, { useContext, useEffect } from "react";
import MenuDropDaw from "./MenuDropDaw/MenuDropDaw";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { IMenuReusableData } from "./UserMenuReusableInterfaces";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/GlobalContext";
import { deletCurrentUser } from "@/helpers/localDataManagment";
import { useCookies } from "react-cookie";
import { signOut } from "next-auth/react";
import { useUserCookies } from "@/hooks/useUserCookies";
const UserMenuReusable: React.FC<IMenuReusableData> = () => {
  const { currentUser, setCurrentUser, currentUserGoogle } =
    useContext(AuthContext);
  const user = currentUser || currentUserGoogle;
  console.log(user);
  const [menuStatus, setMenuStatus] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userSignIn"]);
  const { deleteGoogleUser, deleteRegularUser } = useUserCookies();

  const navigate = usePathname();
  const router = useRouter();
  const handlerLogOut = async () => {
    try {
      console.log("Iniciando cierre de sesión...");
      await signOut();
      console.log("Sesión cerrada. Eliminando cookies...");
      deleteGoogleUser();
      deleteRegularUser();
      setCurrentUser(null);
      console.log("Redireccionando al home...");
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  useEffect(() => {
    setMenuStatus(false);
  }, [navigate]);

  return (
    <div className="absolute top-[10px] right-[10px] flex justify-center gap-5 sm:static h-fit sm:w-fit">
      <button
        type="button"
        className="rounded-[50%] sm:mr-[10px]"
        onClick={() => setMenuStatus(!menuStatus)}
      >
        <UserCircleIcon
          className={`w-[40px] h-auto ${
            menuStatus ? "text-lime" : "text-white"
          }`}
        />
      </button>
      <MenuDropDaw
        menuStatus={menuStatus}
        handlerLogOut={handlerLogOut}
        currentUser={user}
      />
    </div>
  );
};

export default UserMenuReusable;
