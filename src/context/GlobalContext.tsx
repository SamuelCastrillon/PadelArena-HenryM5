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

  const { getGoogleUser, getRegularUser } = useUserCookies();

  const syncUserWithCookies = () => {
    const userGoogle = getGoogleUser();
    console.log("aqui el maldito user", userGoogle);
    if (userGoogle) {
      setCurrentUser(userGoogle);
      console.log(userGoogle);
    } else {
      const regularUser = getRegularUser();
      if (regularUser) {
        setCurrentUser(regularUser);
      }
    }
  };

  useEffect(() => {
    syncUserWithCookies();
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
