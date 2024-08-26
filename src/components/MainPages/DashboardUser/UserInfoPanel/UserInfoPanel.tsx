import React from "react";
import { IUserLogin } from "@/interfaces/RequestInterfaces";
import Image from "next/image";
const UserInfoPanel: React.FC<{ user: IUserLogin }> = ({ user }) => {
  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center">
      <Image
        src={getImageUrl(user.profileImg || "/images/default-image.jpg")}
        alt="Profile Picture"
        className="rounded-full mx-auto mb-4"
        width={100}
        height={100}
      />
      <h2 className="text-xl font-semibold mb-2">
        {user.name} {user.lastName}
      </h2>
      <p className="text-gray-600 mb-4">{user.role}</p>
      <ul className="text-left space-y-2">
        <li>
          <strong>{user.email}</strong>
        </li>
        <li>
          <strong>{user.phone}</strong>
        </li>
        <li>
          <strong>
            {user.country}, {user.city}
          </strong>
        </li>
      </ul>
      <div className="mt-4">
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
    </div>
  );
};

export default UserInfoPanel;
