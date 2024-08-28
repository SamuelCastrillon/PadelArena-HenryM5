"use client";
import FormComponent from "@/components/MainComponents/ReusableFormComponent/FormComponent";
import React, { useContext, useEffect } from "react";
import {
  butonsLogInForm,
  inputsLogIngFormValues,
  logInInitialValues,
  logInSchema,
} from "./LognInData";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import HandlerLogIn from "@/Server/HandlerFormsFuctions/HandlerLogIn";
import { useCookies } from "react-cookie";
import {
  IUserGoogle,
  IUserLoginReq,
  IUserLoginRes,
} from "@/interfaces/RequestInterfaces";
import { saveCurrentUser } from "@/helpers/localDataManagment";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/GlobalContext";
import Swal from "sweetalert2";
import ButtonNextAuthSignIn from "@/components/MainComponents/NextAuthButtonSignIn/NextAuthButtonSignIn";
import { useSession } from "next-auth/react";
import { postNextAuthSession } from "@/Server/User/postNextAuthSession";

const LogInView: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { setCurrentUser } = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(["userSignIn"]);

  useEffect(() => {
    if (session) {
      handlePostSession();
    }
  }, [session]);

  console.log(session);
  const handlePostSession = async () => {
    const userGoogleData = session?.user as IUserGoogle;
    if (userGoogleData) {
      const response = await postNextAuthSession(userGoogleData);
      //pregunto si es userfromdb(login)/newuserfromgoogle(register)->voy al form de editar o newuser->for al perfil de user
      console.log(response);
      return response;
    }
  };

  async function SaveData(data: IUserLoginReq) {
    try {
      const response: IUserLoginRes = await HandlerLogIn(data);

      if (response?.token) {
        console.log(response);
        saveCurrentUser(response.userClean);
        setCurrentUser(response.userClean);
        setCookie("userSignIn", response.token);
        Swal.fire({
          title: "Te has logueado con éxito.",
          width: 400,
          padding: "3em",
        });
        router.push("/");
      }
    } catch (error: any) {
      Swal.fire({
        title: "No eres un usuario registrado. Por favor completa el registro.",
        width: 400,
        padding: "3em",
      });
      router.push("/register");
      console.error(error);
    }
  }

  return (
    <section className="flex flex-col items-center justify-center w-screen gap-2 min-h-fit">
      <FormComponent
        iniValues={logInInitialValues}
        valiSchema={logInSchema}
        handelerSubmit={SaveData}
        butonsForm={butonsLogInForm}
        dataContructor={inputsLogIngFormValues}
      />
      <ButtonNextAuthSignIn className="rounded-md bg-black text-white">
        Iniciar sesión con Google
      </ButtonNextAuthSignIn>
      {/* Navigate Button to create an account */}
      <div className="flex items-center gap-8 m-8">
        <span className="text-white">Necesitas una cuenta?</span>
        <NavigateButton
          href="/register"
          className="rounded-md bg-customBlue w-full h-fit py-[5px] px-[10px] text-white hover:shadow-lg"
        >
          Crear Cuenta
        </NavigateButton>
      </div>
    </section>
  );
};

export default LogInView;
