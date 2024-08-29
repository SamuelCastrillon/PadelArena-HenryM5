"use client";
import React, { useContext } from "react";
import UserInfoPanel from "../../../MainComponents/UserInfoPanel/UserInfoPanel";
import { AuthContext } from "@/context/GlobalContext";

const ProfileSection: React.FC = () => {
  const { currentUser, currentUserGoogle } = useContext(AuthContext);

  const user = currentUser || currentUserGoogle; // Selecciona el usuario disponible

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {user ? (
          <UserInfoPanel user={user} />
        ) : (
          <p>No se encontró un usuario disponible.</p> // Mensaje en caso de no encontrar usuario
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
