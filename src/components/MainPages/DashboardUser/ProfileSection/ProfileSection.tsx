"use client";
import React, { useContext } from "react";
import UserInfoPanel from "../../../MainComponents/UserInfoPanel/UserInfoPanel";
import { AuthContext } from "@/context/GlobalContext";

const ProfileSection: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  const user = currentUser;

  console.log(user);

  return (
    <div className="w-3/4 mx-auto">
      {user ? (
        <UserInfoPanel user={user} />
      ) : (
        <p>No se encontró un usuario disponible.</p>
      )}
    </div>
  );
};

export default ProfileSection;
