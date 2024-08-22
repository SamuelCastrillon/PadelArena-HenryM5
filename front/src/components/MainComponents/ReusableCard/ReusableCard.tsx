import React from "react";
import Image from "next/image";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  additionalInfo,
  className,
}) => {
  console.log(className);
  return (
    <div className={`w-full overflow-hidden shadow-lg bg-white ${className}`}>
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
        width={500}
        height={500}
      />
      <div className="px-6 py-4">
        <div className="radhiumz text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-base sfMedium">{description}</p>
        {additionalInfo && (
          <div className="mt-4 sfBold text-black">
            {Object.entries(additionalInfo).map(([key, value]) => (
              <div
                key={key}
                className={`text-sm ${
                  key === "Inscripciones" && value === "cerrada"
                    ? "text-red-500"
                    : ""
                }`}
              >
                <span className="sfRegular text-gray-600">{key}:</span> {value}
              </div>
            ))}
          </div>
        )}
      </div>
      <NavigateButton
        href="/tournaments/register"
        className="w-full h-12 bg-lime text-black radhiumz"
      >
        Inscribite
      </NavigateButton>
    </div>
  );
};

export default Card;
