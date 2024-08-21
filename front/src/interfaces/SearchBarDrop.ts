export interface ISearchBarDropProps {
  onSearch: (searchTerm: string, category: string) => void;
  categorias: string[]; // Cambiado de [] a string[]
}
