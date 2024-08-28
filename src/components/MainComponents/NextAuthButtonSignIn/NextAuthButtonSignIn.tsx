"use client";
import React from "react";
import { signIn } from "next-auth/react";

export interface ButtonNextAuthProps {
  children: React.ReactNode;
  className: string;
}

const ButtonNextAuthSignIn: React.FC<ButtonNextAuthProps> = ({
  className,
  children,
}) => {
  const signInGoogle = () => {
    // Inicia sesión con Google
    signIn("google");
  };

  return (
    <button className={className} onClick={signInGoogle}>
      {children}
    </button>
  );
};

export default ButtonNextAuthSignIn;
