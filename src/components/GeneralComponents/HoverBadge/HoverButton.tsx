// HoverBadge.tsx
import React from "react";

interface HoverBadgeProps {
  primaryText: string;
  secondaryText: string;
}

const HoverButton: React.FC<HoverBadgeProps> = ({
  primaryText,
  secondaryText,
}) => {
  return (
    <div className="relative group">
      {/* Botón con estilo y efectos */}
      <button
        data-ripple-light="true"
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {primaryText}
      </button>

      {/* Tooltip que aparece al hacer hover sobre el botón */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
        {secondaryText}
      </div>
    </div>
  );
};

export default HoverButton;
