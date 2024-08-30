"use client";
import React, { useContext } from "react";
import UserInfoPanel from "../../../MainComponents/UserInfoPanel/UserInfoPanel";
import { AuthContext } from "@/context/GlobalContext";

const ProfileSection: React.FC = () => {
  const { currentUser, currentUserGoogle } = useContext(AuthContext);

  const user = currentUser || currentUserGoogle; // Selecciona el usuario disponible

  console.log(user);

  return (
    <div className="w-3/4">
      {user ? (
        <UserInfoPanel user={user} />
      ) : (
        <p>No se encontró un usuario disponible.</p> // Mensaje en caso de no encontrar usuario
      )}
    </div>
  );
};

export default ProfileSection;
