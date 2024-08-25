"use client";
import React from "react";
import Image from "next/image";
import HoverBadge from "@/components/GeneralComponents/HoverBadge/HoverBadgeCircular";

interface TournamentCardProps {
  src: string;
  alt: string;
  title: string;
  genero: string;
  categoria: string;
  inscripciones?: "abierta" | "cerrada";
  href: string;
  className?: string;
  isHovered?: boolean; // Nuevo prop para saber si la tarjeta debe estar desenfocada
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  src,
  alt,
  title,
  genero,
  categoria,
  inscripciones,
  href,
  className = "",
  isHovered = false,
}) => {
  const handleImageClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div
      className={`relative flex-none w-full px-4 cursor-pointer ${className}`}
      onClick={() => handleImageClick(href)}
    >
      <div
        className={`relative w-full h-full rounded-xl ${
          isHovered ? "filter blur-md" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="block w-full h-full rounded-xl transition duration-300 ease-in-out "
        />
        <div
          className={`absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="text-2xl sfBold text-lime">{title}</h3>
          <p className="text-lg sfBold">{genero}</p>
          <p className="text-lg sfBold">{categoria}</p>
          {inscripciones && (
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
              <HoverBadge status={inscripciones} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
