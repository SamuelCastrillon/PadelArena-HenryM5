interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  additionalInfo?: { [key: string]: string | number };
  className?: string;
}
