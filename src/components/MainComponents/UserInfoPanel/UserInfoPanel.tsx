"use client";
import React, { useContext, useEffect, useState } from "react";
import { IUserLogin } from "@/interfaces/RequestInterfaces";
import Image from "next/image";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { updateUserProfile } from "@/Server/User/updateUserProfile";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import { updatePhotoUserProfile } from "@/Server/User/updatePhotoUserProfile";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/GlobalContext";
import { useCookies } from "react-cookie";
import { useUserCookies } from "@/hooks/useUserCookies";

const UserInfoPanel: React.FC<{ user: IUserLogin }> = ({ user }) => {
  const [userInfo, setUserInfo] = useState<IUserLogin>(user);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  console.log(userInfo.profileImg);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const { currentUser, updateUserPhoto, setCurrentUser } =
    useContext(AuthContext);
  const { saveRegularUser } = useUserCookies();
  const currentPhoto = currentUser?.profileImg;

  const userId = userInfo.id;

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    } else {
      setIsEditing(!isEditing);
    }
  };

  const handleUpdatePhotoUser = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile || !userId) {
      console.error("Archivo o ID de torneo no seleccionado.");
      return;
    }

    try {
      const response = await updatePhotoUserProfile(userId, selectedFile);

      if (response) {
        const updatedUserInfo = { ...userInfo, profileImg: response };
        setUserInfo(updatedUserInfo);
        setCurrentUser(updatedUserInfo);
        saveRegularUser(updatedUserInfo);
      } else {
        console.error("Error al subir la imagen:", response);
      }
    } catch (error) {
      console.error("Error al actualizar la foto:", error);
    }

    setIsModalOpen(false);
  };
  const handleSave = async () => {
    setIsUpdating(true);
    try {
      await updateUserProfile(userInfo.id, {
        address: userInfo.address,
        city: userInfo.city,
        phone: userInfo.phone,
        country: userInfo.country,
        category: userInfo.category?.id || "",
      });
      setCurrentUser(userInfo);
      saveRegularUser(userInfo);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  //VALIDACION IMG
  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  return (
    <div className="bg-blue-700/20 rounded-lg h-auto flex items-center justify-center my-10">
      <div className="bg-gray-100 p-6 m-2 rounded-lg text-center w-full sm:w-3/4 shadow-md shadow-lime">
        <div className="relative w-fit mx-auto">
          <Image
            src={getImageUrl(
              userInfo.profileImg || "/images/default-image.jpg"
            )}
            alt="Profile Picture"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 hover:scale-110 transition duration-300 ease-in-out"
            width={192}
            height={192}
          />
          {/* Botón de lápiz para editar la imagen */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 -0.5 25 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.265 4.16231L19.21 5.74531C19.3978 5.9283 19.5031 6.17982 19.5015 6.44201C19.5 6.70421 19.3919 6.9545 19.202 7.13531L17.724 8.93531L12.694 15.0723C12.6069 15.1749 12.4897 15.2473 12.359 15.2793L9.75102 15.8793C9.40496 15.8936 9.10654 15.6384 9.06702 15.2943L9.18902 12.7213C9.19806 12.5899 9.25006 12.4652 9.33702 12.3663L14.15 6.50131L15.845 4.43331C16.1743 3.98505 16.7938 3.86684 17.265 4.16231Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 18.2413C5.08579 18.2413 4.75 18.5771 4.75 18.9913C4.75 19.4056 5.08579 19.7413 5.5 19.7413V18.2413ZM19.2 19.7413C19.6142 19.7413 19.95 19.4056 19.95 18.9913C19.95 18.5771 19.6142 18.2413 19.2 18.2413V19.7413ZM14.8455 6.22062C14.6904 5.83652 14.2534 5.65082 13.8693 5.80586C13.4852 5.9609 13.2995 6.39796 13.4545 6.78206L14.8455 6.22062ZM17.8893 9.66991C18.2933 9.57863 18.5468 9.17711 18.4556 8.77308C18.3643 8.36904 17.9628 8.1155 17.5587 8.20678L17.8893 9.66991ZM5.5 19.7413H19.2V18.2413H5.5V19.7413ZM13.4545 6.78206C13.6872 7.35843 14.165 8.18012 14.8765 8.8128C15.6011 9.45718 16.633 9.95371 17.8893 9.66991L17.5587 8.20678C16.916 8.35198 16.3609 8.12551 15.8733 7.69189C15.3725 7.24656 15.0128 6.63526 14.8455 6.22062L13.4545 6.78206Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>

        <h2 className="text-lg sm:text-xl radhiumz uppercase mb-2">
          {userInfo.name} {userInfo.lastName}
        </h2>

        <p className="uppercase mb-4 text-lg sm:text-xl sfBold text-green-600">
          {userInfo.role}
        </p>
        <ul className="space-y-2 text-center">
          <li className="border-b border-gray-300 pb-2">
            <p className="sfRegular text-sm sm:text-base">
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
              <p className="sfRegular text-sm sm:text-base">
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
              <p className="sfRegular text-sm sm:text-base">
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
                  className="p-1 border-b border-gray-300 rounded w-full text-center mb-2"
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
              <p className="sfRegular text-sm sm:text-base">
                Tu País: <span className="sfBold">{userInfo.country}, </span>
                Tu Ciudad: <span className="sfBold">{userInfo.city}</span>
              </p>
            )}
          </li>
          {userInfo.category && (
            <li className="border-b border-gray-300 pb-2">
              <p className="sfRegular text-sm sm:text-base">
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
          {isEditing ? (isUpdating ? "Guardando..." : "Guardar") : "Editar"}
        </ActionButton>
      </div>
      {isModalOpen && (
        <ReusableModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h2 className="text-2xl font-bold mb-4">Cargar Archivo</h2>
          <form onSubmit={handleUpdatePhotoUser} className="space-y-4">
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              required
            />
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Subir
              </button>
            </div>
          </form>
        </ReusableModal>
      )}
    </div>
  );
};

export default UserInfoPanel;
