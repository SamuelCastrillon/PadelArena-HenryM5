import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  blurBackground?: boolean; // Controlar el desenfoque del fondo
  backgroundColor?: string; // Color de fondo del modal
  textColor?: string; // Color del texto del modal
  className?: string; // Clases adicionales para el modal
}

const ReusableModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  blurBackground = false, // Valor por defecto
  backgroundColor = "bg-white", // Fondo por defecto
  textColor = "text-black", // Color del texto por defecto
  className = "", // Clases adicionales por defecto
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        blurBackground ? "backdrop-blur-sm" : ""
      }`}
      onClick={onClose} // Cerrar modal al hacer clic en el fondo
    >
      <div
        className={`${backgroundColor} ${textColor} p-8 rounded-lg max-w-3xl w-full relative ${className}`}
        onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
      >
        <button
          className="absolute top-4 right-4"
          onClick={onClose} // Cerrar modal al hacer clic en la "X"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ReusableModal;
