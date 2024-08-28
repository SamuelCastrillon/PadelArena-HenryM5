"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react"; // importaciones de next auth
import { useRouter } from "next/navigation";
import { postNextAuthSession } from "@/Server/User/postNextAuthSession";

export interface ButtonNextAuthProps {
  children: React.ReactNode;
  className: string;
}

const ButtonNextAuthSignIn: React.FC<ButtonNextAuthProps> = ({
  className,
  children,
}) => {
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    if (
      session &&
      session.user &&
      session.user.email &&
      session.user.name &&
      session.user.image
    ) {
      const user = {
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
      };
      postNextAuthSession(user);
      //la ruta al form de completar los datos de perfil sino esta registrado!!
    }
  }, [session]);
  const signInGoogle = () => {
    signIn("google");
  };

  return (
    <button className={className} onClick={signInGoogle}>
      {children}
    </button>
  );
};

export default ButtonNextAuthSignIn;
