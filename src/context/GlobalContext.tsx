"use client";
import React, { createContext, useEffect, useState } from "react";
import { IAuthcontext } from "../interfaces/GlobalContextInterfaces";
import { IUserGooglePut, IUserLogin } from "@/interfaces/RequestInterfaces";
import { getCurrentUser } from "@/helpers/localDataManagment";

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

  useEffect(() => {
    if (!currentUser) {
      const dataUser = getCurrentUser();
      dataUser && setCurrentUser(dataUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, userIdGoogle, setUserIdGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
