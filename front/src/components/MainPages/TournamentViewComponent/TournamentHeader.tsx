// components/Header.tsx
import React from "react";

const Header: React.FC = () => (
  <div className="mt-20 justify-start items-center flex-col flex">
    <h1 className="radhiumz text-4xl uppercase text-white">
      Torneos de hoy, ayer y siempre
    </h1>
    <h2 className="sfRegular text-xl text-white">
      Una mirada a nuestros más recientes torneos
    </h2>
  </div>
);

export default Header;
