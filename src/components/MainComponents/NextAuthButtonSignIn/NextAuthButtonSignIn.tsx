"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
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

  useEffect(() => {
    const handlePostSession = async () => {
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

        try {
          // Llamada al backend para registrar o actualizar el usuario
          const response = await postNextAuthSession(user);
          console.log(response);

          // Verifica si la respuesta es exitosa
          if (
            response?.message ===
            "Registro e inicio de sesion realizado con exito"
          ) {
            const newUser = response.newGoogleUser;
            const existingUser = response.userClean;

            if (newUser) {
              // Usuario nuevo - verifica si hay campos incompletos
              const datosIncompletos =
                !newUser.lastName ||
                !newUser.phone ||
                !newUser.country ||
                !newUser.city ||
                !newUser.address;

              if (datosIncompletos) {
                // Redirige al formulario de completar perfil si faltan datos
                router.push("/form/completar-perfil");
              } else {
                // Si todos los datos están completos, redirige al dashboard
                router.push("/dashboard/user/profile");
              }
            } else if (existingUser) {
              // Usuario existente - redirige directamente al dashboard
              router.push("/dashboard/user/profile");
            }
          } else {
            console.error("Error en el registro o login del usuario.");
          }
        } catch (error) {
          console.error("Error al enviar los datos al backend:", error);

          // Si algo sale mal y el nombre no coincide con el email
          if (
            session.user.name
              .toLowerCase()
              .includes(session.user.email.split("@")[0].toLowerCase())
          ) {
            alert("El nombre no coincide con el correo electrónico.");
          }
        }
      }
    };

    handlePostSession();
  }, [session, router]);

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
