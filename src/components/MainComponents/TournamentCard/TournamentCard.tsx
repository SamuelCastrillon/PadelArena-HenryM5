"use client";
import React from "react";
import Image from "next/image";

interface TournamentCardProps {
  src: string;
  alt: string;
  title: string;
  genero: string;
  categoria?: string;
  inscripciones?: "abierta" | "cerrada";
  href: string;
  className?: string;
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
}) => {
  const handleImageClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div
      className={`flex-none w-full px-4 cursor-pointer ${className}`}
      onClick={() => handleImageClick(href)}
    >
      <div className="w-full h-[300px] rounded-xl overflow-hidden flex flex-col justify-end border-2 border-lime">
        {/* Image */}
        <div className="flex-1">
          <Image
            src={src}
            alt={alt}
            width={500}
            height={300}
            className="block w-full h-full object-cover "
          />
        </div>
        {/* Text */}
        <div className="border-2 border-lime text-black p-4">
          <h3 className="text-2xl radhiumz text-black">{title}</h3>
          <p className="text-lg sfRegular">{genero}</p>
          <p className="text-lg sfRegular">{categoria}</p>
          <p className="text-lg sfRegular">{inscripciones}</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
