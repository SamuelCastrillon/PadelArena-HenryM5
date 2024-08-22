import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  blurBackground?: boolean; // Controlar el desenfoque del fondo
  backgroundColor?: string; // Color de fondo del modal
  textColor?: string; // Color del texto del modal
  className?: string;
}

const ReusableModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  blurBackground = false,
  backgroundColor = "bg-white",
  textColor = "text-black",
  className = "",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        blurBackground ? "backdrop-blur-sm" : ""
      }`}
      onClick={onClose}
    >
      <div
        className={`${backgroundColor} ${textColor} p-8 rounded-lg max-w-3xl w-full relative ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ReusableModal;
