import { ICategories } from "./TournamentCategorias";

export interface ICarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    href: string;
    categoria: string;
    inscripciones: "abierta" | "cerrada";
  }[];
}
