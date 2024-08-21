"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ICarouselProps } from "@/interfaces/Carousel";

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const imagesPerSlide = 3; // Número de imágenes visibles por slide
  const gap = 4; // Espacio entre imágenes en Tailwind CSS (espacio de 1rem)
  const imageWidth = "w-80"; // Ancho fijo de las imágenes (por ejemplo, 20rem)
  const imageHeight = "h-60"; // Alto fijo de las imágenes (por ejemplo, 15rem)

  // Función para mover al siguiente slide
  const goToNext = () => {
    const newIndex =
      currentIndex === Math.ceil(images.length / imagesPerSlide) - 1
        ? 0
        : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Función para mover al slide anterior
  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0
        ? Math.max(0, Math.ceil(images.length / imagesPerSlide) - 1)
        : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Manejo del clic en la imagen para redireccionar
  const handleImageClick = (href: string) => {
    router.push(href);
  };

  // Efecto para mover el carrusel automáticamente
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // Cambia de slide cada 3 segundos

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-[1.2s] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-none ${imageWidth} ${imageHeight} px-${gap} cursor-pointer`}
              onClick={() => handleImageClick(image.href)}
            >
              <div className="relative w-full h-full rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill" // Llena el contenedor
                  objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                  className="block w-full h-full rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full text-white p-4">
                  <h3 className="text-lg font-bold">{image.title}</h3>

                  <p className="text-sm">{image.genero}</p>
                  <p className="text-sm">{image.categoria}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
