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

  const { getGoogleUser } = useUserCookies();

  useEffect(() => {
    const userGoogle = getGoogleUser();
    if (userGoogle) {
      setCurrentUserGoogle(userGoogle);
    }
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
