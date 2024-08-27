"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react"; //importaciones de next auth
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  //HAGO EL POST AL BACK CON EL USER
  const signInGoogle = () => {
    signIn("google");

    if (session) {
      router.push("/dashboard/user/profile");
    }
  };
  return (
    <button className={className} onClick={signInGoogle}>
      {children}
    </button>
  );
};

export default ButtonNextAuthSignIn;
