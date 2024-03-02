import React,{useState}  from 'react';
import OptionArtistica from './OptionSubCategoria/OptionArtistica'
import OptionLibreria from './OptionCategoria/OptionLibreria';
import OptionJuguetes from './OptionCategoria/OptionJuguetes';
import OptionMochilas from './OptionCategoria/OptionMochilas';
import OptionAgendas from './OptionSubCategoria/OptionAgendas';
import OptionComercial from './OptionSubCategoria/OptionComercial';
import OptionEscolar from './OptionSubCategoria/OptionEscolar';
import OptionRegaleria from './OptionSubCategoria/OptionRegaleria';
import OptionResmaPapeles from './OptionSubCategoria/OptionResmaPapeles'
import OptionTecnico from './OptionSubCategoria/OptionTecnico'
import OptionTecnologia from './OptionSubCategoria/OptionTecnologia'
// import OptionNone from './OptionSubCategoria/OptionNone'

const ModifyProductModalForm = ({ handleChange, values }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState('');

  const handleCategoriaChange = (e) => {
    const categoria = e.target.value;
    setCategoriaSeleccionada(categoria);
    handleChange('categoria', categoria);
    handleChange('subcategoria', '');
  };
  const handleSubcategoriaChange = (e) => {
    const subcategoria = e.target.value;
    setSubcategoriaSeleccionada(subcategoria);
    handleChange('subcategoria', subcategoria);
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
      value={subcategoriaSeleccionada}
      onChange={handleSubcategoriaChange}
    >
      <option value="" disabled hidden>Selecciona una subCategoria</option>
      {categoriaSeleccionada === 'Libreria' &&(
        <OptionLibreria></OptionLibreria>
      )}
      {categoriaSeleccionada === 'Juguetes' &&(
        <OptionJuguetes></OptionJuguetes>
      )}
      {categoriaSeleccionada === 'Mochilas' &&(
        <OptionMochilas></OptionMochilas>
      )}
    </select>
    <select
      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
      id="item"
      name="Item"
      value={values.item}
      onChange={(e) => handleChange('item', e.target.value)}
    >
      <option value="" disabled hidden>Selecciona un Item</option>
      {subcategoriaSeleccionada === 'Agendas' &&(
        <OptionAgendas></OptionAgendas>
      )}
      {subcategoriaSeleccionada === 'Artistica' &&(
        <OptionArtistica></OptionArtistica>
      )}
      {subcategoriaSeleccionada === 'Comercial' &&(
        <OptionComercial></OptionComercial>
      )}
      {subcategoriaSeleccionada === 'Escolar' &&(
        <OptionEscolar></OptionEscolar>
      )}
      {subcategoriaSeleccionada === 'Regaleria' &&(
        <OptionRegaleria></OptionRegaleria>
      )}
      {subcategoriaSeleccionada === 'Resmas y Papeleria' &&(
        <OptionResmaPapeles></OptionResmaPapeles>
      )}
      {subcategoriaSeleccionada === 'Tecnico' &&(
        <OptionTecnico></OptionTecnico>
      )}
      {subcategoriaSeleccionada === 'Tecnologia' &&(
        <OptionTecnologia></OptionTecnologia>
      )}
      {/* {subcategoriaSeleccionada === 'JuegosDeMesa' &&(
        <OptionNone></OptionNone>
      )} */}
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