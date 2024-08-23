"use client";
import React, { createContext, useState } from "react";
import { IAuthcontext } from "../interfaces/GlobalContextInterfaces";
import { IUserLoginRes } from "@/interfaces/RequestInterfaces";

export const AuthContext = createContext<IAuthcontext>({
  currentUser: null,
  setCurrentUser: () => {},
});
const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserLoginRes | null>(null);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>
  );
};

export default GlobalContext;
