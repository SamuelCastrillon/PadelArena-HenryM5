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
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  src,
  alt,
  title,
  genero,
  categoria,
  inscripciones,
  href,
}) => {
  const handleImageClick = (href: string) => {
    window.location.href = href;
  };
  return (
    <div
      className="flex-none w-full h-80 px-4 cursor-pointer relative"
      onClick={() => handleImageClick(href)}
    >
      <div className="relative w-full h-full rounded-xl">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="block w-full h-full rounded-xl transition duration-300 ease-in-out filter grayscale hover:grayscale-0"
        />
        <div className="absolute bottom-0 left-0 w-full text-white p-4 bg-gradient-to-t from-black">
          <h3 className="text-xl sfBold text-lime">{title}</h3>
          <p className="text-sm sfMedium">{genero}</p>
          <p className="text-sm sfMedium">{categoria}</p>
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
