import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { postNextAuthSession } from "@/Server/User/postNextAuthSession";

const usePostSession = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handlePostSession = async () => {
      if (session?.user) {
        const { email, name, image } = session.user;

        if (email && name && image) {
          const user = { email, name, image };

          try {
            const response = await postNextAuthSession(user);
            console.log(response);

            if (response?.message === "realizado con exito") {
              const newUser = response.newGoogleUser;
              const existingUser = response.userClean;

              if (newUser) {
                const datosIncompletos =
                  !newUser.lastName ||
                  !newUser.phone ||
                  !newUser.country ||
                  !newUser.city ||
                  !newUser.address;

                if (datosIncompletos) {
                  router.push("/form/completar-perfil");
                } else {
                  router.push("/");
                }
              } else if (existingUser) {
                router.push("/");
              } else {
                console.error("Usuario no encontrado en la respuesta.");
              }
            } else {
              console.error("Error en el registro o login del usuario.");
            }
          } catch (error) {
            console.error("Error al enviar los datos al backend:", error);

            if (name && email) {
              if (
                name.toLowerCase().includes(email.split("@")[0].toLowerCase())
              ) {
                alert("El nombre no coincide con el correo electrónico.");
              }
            }
          }
        }
      }
    };

    handlePostSession();
  }, []);

  return;
};

export default usePostSession;
