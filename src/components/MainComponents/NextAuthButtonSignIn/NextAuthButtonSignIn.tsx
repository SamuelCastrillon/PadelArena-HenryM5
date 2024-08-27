"use client";
import React from "react";
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
  const router = useRouter();

  // HAGO EL POST AL BACK CON EL USER
  const signInGoogle = async () => {
    try {
      const result = await signIn("google"); // Espera a que el signIn se complete

      if (result?.error) {
        console.log("Error durante la autenticación:", result.error);
        return;
      }

      if (session) {
        if (
          session.user &&
          session.user.name &&
          session.user.email &&
          session.user.image
        ) {
          const user = {
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
          };

          await postNextAuthSession(user);

          router.push("/dashboard/user/profile");
        } else {
          console.log("Error: session.user is missing required properties");
        }
      }
    } catch (error) {
      console.error(
        "Error en el proceso de autenticación o en el post:",
        error
      );
    }
  };

  return (
    <button className={className} onClick={signInGoogle}>
      {children}
    </button>
  );
};

export default ButtonNextAuthSignIn;
