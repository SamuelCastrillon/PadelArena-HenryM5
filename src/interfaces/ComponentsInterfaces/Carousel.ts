export interface ICarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    href: string;
    categoria: string;
    genero: string;
    inscripciones: "abierta" | "cerrada";
  }[];
}
