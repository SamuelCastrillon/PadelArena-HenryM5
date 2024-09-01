"use client";
import React from "react";
import Image from "next/image";

interface TournamentCardProps {
  src: string;
  alt: string;
  title: string;
  genero: string;
  categoria?: string;
  inscripciones?: "abiertas" | "cerradas";
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
      className={`flex-none w-full px-4 cursor-pointer ${className} group`}
      onClick={() => handleImageClick(href)}
    >
      <div className="w-full h-[300px] bg-white shadow-lg shadow-lime rounded-xl overflow-hidden flex flex-col justify-end border-2 border-lime relative">
        {/* Image */}
        <div className="flex-1">
          <Image
            src={src}
            alt={alt}
            width={500}
            height={300}
            className="block w-full h-full object-cover"
          />
        </div>
        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-2xl radhiumz text-white">{title}</h3>
          <p className="text-lg sfRegular">{genero}</p>
          {categoria && (
            <p className="text-lg text-white sfRegular">{categoria}</p>
          )}
          {inscripciones && (
            <p className="text-lg text-white sfRegular">{inscripciones}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
