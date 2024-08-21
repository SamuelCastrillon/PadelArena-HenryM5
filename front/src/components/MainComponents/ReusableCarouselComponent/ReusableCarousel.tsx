"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
    href: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const imagesPerSlide = 3; // Número de imágenes visibles por slide
  const gap = 4; // Espacio entre imágenes en Tailwind CSS (espacio de 1rem)
  const imageWidth = "w-80"; // Ancho fijo de las imágenes (por ejemplo, 20rem)
  const imageHeight = "h-60"; // Alto fijo de las imágenes (por ejemplo, 15rem)

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0
        ? Math.max(0, Math.ceil(images.length / imagesPerSlide) - 1)
        : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === Math.ceil(images.length / imagesPerSlide) - 1
        ? 0
        : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleImageClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-none ${imageWidth} ${imageHeight} px-${gap} cursor-pointer `}
              onClick={() => handleImageClick(image.href)}
            >
              <div className="relative w-full h-full rounded-xl ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill" // Llena el contenedor
                  objectFit="cover" // Ajusta la imagen para cubrir el contenedor
                  className="block w-full h-full rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full text-white p-4">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
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
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
