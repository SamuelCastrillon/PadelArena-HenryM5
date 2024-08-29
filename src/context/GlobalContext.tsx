"use client";

import React, { createContext, useEffect, useState } from "react";
import { IAuthcontext } from "../interfaces/GlobalContextInterfaces";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";
import { useUserCookies } from "@/hooks/useUserCookies";

export const AuthContext = createContext<IAuthcontext>({
  currentUser: null,
  setCurrentUser: () => {},
  userIdGoogle: null,
  setUserIdGoogle: () => {},
});

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserLogin | null>(null);
  const [userIdGoogle, setUserIdGoogle] = useState<string | null>(null);
  const [currentUserGoogle, setCurrentUserGoogle] =
    useState<IUserGooglePut | null>(null);

  const { getGoogleUser, getRegularUser } = useUserCookies(); // Asumiendo que tienes este hook

  const syncUserWithCookies = () => {
    // Obtén el usuario de Google desde las cookies
    const userGoogle = getGoogleUser();
    if (userGoogle) {
      setCurrentUserGoogle(userGoogle);
    } else {
      // Obtén el usuario regular desde las cookies
      const regularUser = getRegularUser();
      if (regularUser) {
        setCurrentUser(regularUser);
      }
    }
  };

  useEffect(() => {
    // Sincroniza el estado del usuario con las cookies cuando el componente se monta
    syncUserWithCookies();

    // También puedes agregar un listener para cambios en las cookies si es necesario
    // window.addEventListener('cookiechange', syncUserWithCookies);

    // Cleanup (opcional)
    // return () => window.removeEventListener('cookiechange', syncUserWithCookies);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userIdGoogle,
        setUserIdGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
