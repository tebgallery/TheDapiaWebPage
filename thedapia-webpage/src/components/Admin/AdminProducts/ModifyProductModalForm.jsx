import React,{useState}  from 'react';

const ModifyProductModalForm = ({ handleChange, values }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const handleCategoriaChange = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
    handleChange('categoria', categoria);
  };

  return (
  <form className="text-center">
    <input
      type="text"
      name="Nombre"
      placeholder="Nombre del Producto"
      value={values.nombre}
      onChange={(e) => handleChange('nombre', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="text"
      name="Marca"
      placeholder="Marca del Producto"
      value={values.marca}
      onChange={(e) => handleChange('marca', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="number"
      name="codigoBarra"
      placeholder="Codigo de Barra"
      value={values.codigobarra}
      onChange={(e) => handleChange('codigobarra', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="number"
      name="Precio"
      placeholder="Precio"
      value={values.precio}
      onChange={(e) => handleChange('precio', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="number"
      name="Descuento"
      placeholder="Descuento"
      value={values.descuento}
      onChange={(e) => handleChange('descuento', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="number"
      name="Cantidad"
      placeholder="Cantidad"
      value={values.cantidad}
      onChange={(e) => handleChange('cantidad', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <select
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
      id="categoria"
      name="Categoria"
      value={categoriaSeleccionada}
      onChange={handleCategoriaChange}
    >
      <option value="" disabled hidden>Selecciona una categoria</option>
      <option value="Libreria">Libreria</option>
      <option value="Juguetes">Juguetes</option>
      <option value="Mochilas">Mochilas</option>
    </select>
    <select
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
      id="subcategoria"
      name="subCategoria"
      value={values.subcategoria}
      onChange={(e) => handleChange('subcategoria', e.target.value)}
    >
      <option value="" disabled hidden>Selecciona una subCategoria</option>
      {categoriaSeleccionada === 'Libreria' &&(
        <>
          <option value="Agendas">Agendas</option>
          <option value="Artistica">Artistica</option>
          <option value="Comercial">Comercial</option>
          <option value="Escolar">Escolar</option>
          <option value="Regaleria">Regaleria</option>
          <option value="ResmasPapeleria">Resmas y Papeleria</option>
          <option value="Tecnico">Tecnico</option>
          <option value="Tecnologia">Tecnologia</option>
        </>
      )}
      {categoriaSeleccionada === 'Juguetes' &&(
        <>
          <option value="JuegosDeMesa">Juegos de Mesa</option>
          <option value="JuguetesBebes">Juguetes para Bebes</option>
          <option value="PuzzlesRompecabezas">Puzzles y Rompecabezas</option>
          <option value="DeportesAireLibre">Deportes y Aire Libre</option>
          <option value="Peluches">Peluches</option>
          <option value="Personajes">Personajes</option>
        </>
      )}
      {categoriaSeleccionada === 'Mochilas' &&(
        <>
          <option value="Cresko">Cresko</option>
          <option value="Mooving">Mooving</option>
        </>
      )}
      
    </select>
    <select
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
      id="seccionEnPagina"
      name="SeccionEnPagina"
      value={values.seccionenpagina}
      onChange={(e) => handleChange('seccionenpagina', e.target.value)}
    >
      <option value="" disabled hidden>Categorias Home </option>
      <option value="ultimos-ingresos">Ultimos Ingresos</option>
      <option value="mas-vendido">Lo Mas Vendido</option>   
      <option value="ofertas">Ofertas</option>
      <option value="none">Ninguna</option> 
    </select>
    <input
      type="text"
      name="Color"
      placeholder="Color"
      value={values.color}
      onChange={(e) => handleChange('color', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="text"
      name="Imagen"
      placeholder="Imagen"
      value={values.imagen}
      onChange={(e) => handleChange('imagen', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <input
      type="text"
      name="Descripcion"
      placeholder="Descripcion"
      value={values.descripcion}
      onChange={(e) => handleChange('descripcion', e.target.value)}
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
    />
    <select
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
      id="estado"
      name="Estado"
      value={values.estado}
      onChange={(e) => handleChange('estado', e.target.value)}
    >
      <option value="" disabled hidden>Estado </option>
      <option value="true">Activo</option>
      <option value="false">Desactivado</option>
    </select>
  </form>
  );
};

export default ModifyProductModalForm;