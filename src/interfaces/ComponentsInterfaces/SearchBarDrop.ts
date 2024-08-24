export interface ISearchBarDropProps {
  onSearch: (category: string) => void;
  categorias: string[]; // Cambiado de [] a string[]
  onClear: () => void;
}
