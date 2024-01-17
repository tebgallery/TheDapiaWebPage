import { React, useState } from "react";

const Filtros = ({ onFiltroChange }) => {
  const filtrosIniciales = {
    filtro1: false,
    filtro2: false,
    // Agrega más filtros según sea necesario
  };

  const [filtros, setFiltros] = useState(filtrosIniciales);

  const handleFiltroChange = (filtro) => {
    const nuevosFiltros = { ...filtros, [filtro]: !filtros[filtro] };
    setFiltros(nuevosFiltros);
    onFiltroChange(nuevosFiltros);
  };

  return (
    <div className="w-1/5 p-8 mx-4 my-8">
      <h2 className="text-lg mb-4">Filtros</h2>
      <label className="block">
        <span className="mr-4">Librería</span>
        <input
          type="checkbox"
          checked={filtros.filtro1}
          onChange={() => handleFiltroChange("filtro1")}
        />
      </label>
      <label>
        <span className="mr-4">Juguetes</span>
        <input
          type="checkbox"
          checked={filtros.filtro2}
          onChange={() => handleFiltroChange("filtro2")}
        />
      </label>
      {/* Agrega más elementos de filtro según sea necesario */}
    </div>
  );
};

export default Filtros;
