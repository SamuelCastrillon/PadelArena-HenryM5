"use client";
import React, { createContext, useEffect, useState } from "react";
import { IAuthcontext } from "../interfaces/GlobalContextInterfaces";
import { IUserLogin } from "@/interfaces/RequestInterfaces";
import { getCurrentUser } from "@/helpers/localDataManagment";

export const AuthContext = createContext<IAuthcontext>({
  currentUser: null,
  setCurrentUser: () => {},
});
const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserLogin | null>(null);

  //? get current user from local storage and set it in state
  useEffect(() => {
    if (!currentUser) {
      const dataUser = getCurrentUser();
      dataUser && setCurrentUser(dataUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>
  );
};

export default GlobalContext;
