import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Nuovo Finance</a>
        </div>

        {/* Menú de navegación */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#metodologia" className="hover:text-blue-600">Nuestra Metodología</a>
          <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </nav>

        {/* Selector de idioma */}
        <div>
          <select className="border rounded px-2 py-1">
            <option>ES</option>
            <option>EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
