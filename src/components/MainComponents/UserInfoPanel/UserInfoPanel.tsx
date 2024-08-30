"use client";
import React, { useState } from "react";
import { IUserLogin } from "@/interfaces/RequestInterfaces";
import Image from "next/image";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";

const UserInfoPanel: React.FC<{ user: IUserLogin }> = ({ user }) => {
  const [userInfo, setUserInfo] = useState<IUserLogin>(user);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  return (
    <div className="bg-blue-700/20 rounded-lg h-3/4 flex items-center justify-center my-10">
      <div className="bg-gray-100 p-6 m-2 rounded-lg text-center w-3/4 shadow-md shadow-lime">
        <Image
          src={getImageUrl(userInfo.profileImg || "/images/default-image.jpg")}
          alt="Profile Picture"
          className="rounded-full mx-auto mb-4"
          width={200}
          height={200}
        />

        <h2 className="text-xl radhiumz uppercase mb-2">
          {userInfo.name} {userInfo.lastName}
        </h2>

        <p className="uppercase mb-4 text-xl sfBold text-green-600">
          {userInfo.role}
        </p>
        <ul className="space-y-2 text-center">
          <li className="border-b border-gray-300 pb-2">
            <p className="sfRegular">
              Tu Email: <span className="sfBold">{userInfo.email}</span>
            </p>
          </li>
          <li className="border-b border-gray-300 pb-2">
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="p-1 border-b border-gray-300 rounded w-full text-center"
              />
            ) : (
              <p className="sfRegular">
                Tu Teléfono: <span className="sfBold">{userInfo.phone}</span>
              </p>
            )}
          </li>
          <li className="border-b border-gray-300 pb-2">
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
                className="p-1 border-b border-gray-300 rounded w-full text-center"
              />
            ) : (
              <p className="sfRegular">
                Tu Dirección: <span className="sfBold">{userInfo.address}</span>
              </p>
            )}
          </li>
          <li className="border-b border-gray-300 pb-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="country"
                  value={userInfo.country}
                  onChange={handleChange}
                  className="p-1 border-b border-gray-300 rounded w-full text-center"
                />
                <input
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  className="p-1 border-b border-gray-300 rounded w-full text-center"
                />
              </>
            ) : (
              <p className="sfRegular">
                Tu País: <span className="sfBold">{userInfo.country}, </span>
                Tu Ciudad: <span className="sfBold">{userInfo.city}</span>
              </p>
            )}
          </li>
          {userInfo.category && (
            <li className="border-b border-gray-300 pb-2">
              <p className="sfRegular">
                Tu Categoría es:{" "}
                <span className="sfBold text-blue-700 uppercase">
                  {userInfo.category.name}
                </span>
              </p>
            </li>
          )}
        </ul>
        <ActionButton
          onClick={toggleEdit}
          className="mt-4 bg-lime text-black px-4 py-2 rounded hover:bg-black hover:text-white"
        >
          {isEditing ? "Guardar" : "Editar"}
        </ActionButton>
      </div>
    </div>
  );
};

export default UserInfoPanel;
