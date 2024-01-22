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
    <div className="sticky w-1/5 p-8 mx-4 my-8">
      <h2 className="text-2xl text-center mb-4">Filtros</h2>
        <span className="mr-4 text-xl">Librería</span>
          <ul className="ml-4">
            <li>Agendas </li>
              <ul className="ml-4 my-2">
                  <li>Ver Todo</li>
                  <li>Dia Por Pagina</li>
                  <li>2 Dias Por Semana</li>
                  <li>Semana A la Vista</li>
              </ul>
            <li>Artística </li>
            <li>Comercial </li>
            <li>Escolar </li>
            <li>Regalería </li>
            <li>Resmas Y Papeles </li>
            <li>Técnico </li>
            <li>Tecnología </li>
          </ul>
      <label>
        <ul className="mr-4">Juguetes</ul>
      </label>
      {/* Agrega más elementos de filtro según sea necesario */}
    </div>
  );
};

export default Filtros;
