import { React, useState } from "react";
import MainFilters from "./MainFilters/MainFilters";
import CategoryList from "./Categories/CategoryList";

const Filtros = () => {
  const [libreriaCategories, setLibreriaCategories] = useState(false);
  const [agendasCategory, setAgendasCategory] = useState(false);

  const [mochilasCategories, setMochilasCategories] = useState(false);

  const [juguetesCaegories, setJuguetesCategories] = useState(false);

  const toggleLibreriaCategories = () => {
    setLibreriaCategories(!libreriaCategories);
    setMochilasCategories(false);
    setJuguetesCategories(false);
  };


  const toggleMochilasCategories = () => {
    setMochilasCategories(!mochilasCategories);
    setLibreriaCategories(false);
    setJuguetesCategories(false);
  };

  const toggleJuguetesCategories = () => {
    setJuguetesCategories(!juguetesCaegories);
    setLibreriaCategories(false);
    setMochilasCategories(false);
  };

  const libCategories = [
    "Todo",
    "Agendas",
    "Artistica",
    "Comercial",
    "Escolar",
    "Regaleria",
    "Resmas y Papeleria",
    "Tecnico",
    "Tecnologia",
  ];

  const agendasList = [
    "Todo",
    "Diarias",
    "Dos Dias x Pagina",
    "Semana a La Vista",
  ];

  const artisticaList = [
    "Todo",
    "Accesorios para Manualidadas",
    "Accesorios de Madera",
    "Accesorios para Pizarras y Pizarrones",
    "Accesorios para Artistica",
    "Acetatos",
    "Acrilicos Profesionales",
    "Acuarelas",
    "Adhesivos Escolares",
    "Adhesivos Varios",
    "Atriles",
    "Bastidores",
    "Blocks",
    "Brillantina/Gibre/Purpurina",
    "Carbonicos",
    "Carteleras y Planchas de Corchos",
    "Carton",
    "Carton Enetelado",
    "Cartulinas",
    "Cizallas y Guillotinas",
    "Crayones y Pasteles",
    "Engrampadoras",
    "Fibrofacil",
    "Goma Eva",
    "Gomas de Borrar",
    "Imanes",
    "Lapices Acuarelables",
    "Lapices de Colores",
    "Lapices de Grafito",
    "Letrografos",
    "Maquinas Varias",
    "Marcadores",
    "Masas para Moldear",
    "Mezcladores",
    "Oleos y Temperas Profesionales",
    "Palitos Helado y Brochettes",
    "Papel",
    "Papel para Dibujo",
    "Pinceles",
    "Pinturas",
    "Pistolas Encoladoras",
    "Plastilinas",
    "Plumines y Repuestos de Plumas",
    "Portaminas",
    "Respuestos de Dibujos",
    "Resmas",
    "Rollos de PVC",
    "Sobres",
    "Telgopor",
    "Temperas Escolares",
    "Tintas Varias",
  ];

  const comercialList = [
    "Todo",
    "Abrochadoras de Mesa",
    "Accesorios para Pizarras y Pizarrones",
    "Accesorios para Artistica",
    "Adhesivos Escolares",
    "Adhesivos Varios",
    "Alfileres y Chinches",
    "Almohadillas",
    "Anotadores",
    "Aprietapapeles",
    "Arandelas y Tornillos",
    "Atriles",
    "Bandas Elasticas",
    "Bandejas para Papeles",
    "Banderas Escarapelas y Cintas",
    "Biblioratos",
    "Blocks",
    "Bobinas de Papel para Regalos",
    "Boligrafos",
    "Bolsas para Regalos",
    "Broches para Abrochadoras",
    "Broches Varios",
    "Cajas",
    "Cajas con Elastico",
    "Calculadoras",
    "Calendarios",
    "Carbonicos",
    "Carpetas",
    "Carteleras y Planchas de Corchos",
    "Cartuchos y Tanques",
    "Cestos Papeleros",
    "Chinches y Alfileres",
    "Cintas Adhesivas",
    "Cintas para Maquina e Impresoras",
    "Cintas y Rodillos",
    "Cizallas y Guillotinas",
    "Clasificadores",
    "Clips",
    "Cofres",
    "Correctores",
    "Cortantes y Cuchillas",
    "Cuadernillos",
    "Cuadernos 16/21",
    "Cuadernos 16/21 Forrados",
    "Cuadernos 19/24",
    "Cuadernos 21/27",
    "Cuadernos 29/7",
    "Cuadernos Comerciales",
    "Cuadernos Especiales",
    "Detector de Billetes",
    "Engrampadoras",
    "Espirales para Anillados",
    "Etiquetas Autoadhesivas",
    "Etiquetas Manila",
    "Exhibidores",
    "Fichas y Ficheros",
    "Folios",
    "Formularios Comerciales",
    "Formularios Continuos",
    "Globos Terraqueos",
    "Gomas de Borrar",
    "Hilos",
    "Imanes",
    "Indices",
    "Lapiceras Pluma",
    "Lapices de Grafito",
    "Libretas",
    "Libros Comerciales",
    "Lupas",
    "Mapas",
    "Maquinas Varias",
    "Marcadores",
    "Minas",
    "Mojadedos",
    "Notas Adhesivas",
    "Ojalillo",
    "Organizadores y Planificadores",
    "Papel",
    "Perforadoras",
    "Pincha Papeles",
    "Pinza Abrochadora",
    "Pizarras y Pizarrones",
    "Placas Portapapeles",
    "Portaclips",
    "Portacredenciales y Accesorios",
    "Portalaminas",
    "Portalapices y Portatarjetas",
    "Portaminas",
    "Portarrollos",
    "Portatacos para Papeles",
    "Respuestos Especiales",
    "Respuestos Rayados y Cuadriculados",
    "Resaltadores",
    "Resmas",
    "Rollers Ball",
    "Rollos de PVC",
    "Rollos para Maquina",
    "Rollos Varios",
    "Sacabroches",
    "Sacapuntas",
    "Sellos",
    "Separadores",
    "Sobres",
    "Sobres para Plastificar",
    "Talonarios Comerciales",
    "Tapas para Anillado",
    "Tarjetas Opalinas y Tacos",
    "Tijeras",
    "Tintas Varias",
    "Tizas para Pizarra",
  ];

  const escolarList = [
    "Todo",
    "Abrochadoras de Mesa",
    "Accesorios para Dibujo Tecnico",
    "Accesorios para Manualidades",
    "Accesorios de Madera",
    "Accesorios para Pizarras y Pizarrones",
    "Accesorios para Artistica",
    "Acetatos",
    "Acuarelas",
    "Adhesivos Escolares",
    "Adhesivos Varios",
    "Alfileres y Chinches",
    "Anotadores",
    "Aros para Carpetas",
    "Atriles",
    "Bandas Elasticas",
    "Banderas Escarapelas y Cintas",
    "Bastidores",
    "Biblioratos",
    "Blocks",
    "Boligrafos",
    "Borratintas",
    "Botellas y Termos",
    "Brillantina/Gibre/Purpurina",
    "Broches para Abrochadoras",
    "Broches Varios",
    "Cajas con Elastico",
    "Calculadoras",
    "Canoplas",
    "Carpetas",
    "Carpetas Escolares",
    "Carteleras y Planchas de Corchos",
    "Carton",
    "Carton Enetelado",
    "Cartuchos y Tanques",
    "Cartulina",
    "Chinches y Alfileres",
    "Cintas Adhesivas",
    "Clips",
    "Compases",
    "Conjuntos Geometricos",
    "Constituciones y Reglamentos",
    "Correctores",
    "Crayones y Pasteles",
    "Cuadernillos",
    "Cuadernos 16/21",
    "Cuadernos 16/21 Forrados",
    "Cuadernos 19/24",
    "Cuadernos 21/27",
    "Cuadernos 29/7",
    "Cuadernos Comerciales",
    "Cuadernos Especiales",
    "Diccionarios",
    "Escuadras",
    "Espirales para Anillados",
    "Etiquetas Autoadhesivas",
    "Fibrofacil",
    "Fichas y Ficheros",
    "Flautas",
    "Folios",
    "Fundas y Laminas para Forrar",
    "Globos Terraqueos",
    "Goma Eva",
    "Gomas de Borrar",
    "Hilos",
    "Imanes",
    "Indices",
    "Juegos",
    "Kits y Set Infantiles",
    "Laminas y Albumes Educativos",
    "Lapiceras Pluma",
    "Lapices de Colores",
    "Lapices de Grafito",
    "Libretas",
    "Libros Infantiles",
    "Luncheras y Tuppers",
    "Lupas",
    "Mapas",
    "Maquinas Varias",
    "Marcadores",
    "Masas para Moldear",
    "Mezcladores",
    "Minas",
    "Mochilas",
    "Notas Adhesivas",
    "Ojalillo",
    "Oleos y Temperas Profecionales",
    "Palitos Helado y Brochetas",
    "Papel",
    "Perforadoras",
    "Pinceles",
    "Pintorcitos",
    "Pinturas",
    "Pinza Abrochadora",
    "Pistolas Encoladoras",
    "Pizarras y Pizarrones",
    "Placas Portapapeles",
    "Plastilinas",
    "Plastipinturitas",
    "Plumines y Respuestos de Plumas",
    "Portaminas",
    "Portalapices y Portatarjetas",
    "Portaminas",
    "Portarrollos",
    "Reglas",
    "Respuestos de Dibujos",
    "Respuestos Especiales",
    "Respuestos Rayados y Cuadriculados",
    "Resaltadores",
    "Resmas",
    "Rollers Ball",
    "Rollos de PVC",
    "Sacapuntas",
    "Separadores",
    "Sobres para Plastificar",
    "Tablas Periodicas",
    "Telgopor",
    "Temperas Escolares",
    "Tijeras",
    "Tintas Varias",
    "Tizas para Pizarra",
    "Transportadores",
    "Vasos y Tazas",
  ];

  const regaleriaList = [
    "Todo",
    "Accesorios para Manualidades",
    "Accesorios para Artistica",
    "Adhesivos Escolares",
    "Anotadores",
    "Bandas Elasticas",
    "Bobinas de Papel para Regalos",
    "Boligrafos",
    "Bolsas para Regalos",
    "Botellas y Termos",
    "Canoplas",
    "Carpetas",
    "Carpetas Escolares",
    "Cartuchos y Tanques",
    "Chinches y Alfileres",
    "Cintas Adhesivas",
    "Clips",
    "Compases",
    "Crayones y Pasteles",
    "Cuadernos 16/21",
    "Cuadernos 29/7",
    "Cuadernos Especiales",
    "Diarios Intimos",
    "Flautas",
    "Globos Terraqueos",
    "Goma Eva",
    "Gomas de Borrar",
    "Imanes",
    "Juegos",
    "Kits y Set Infantiles",
    "Lapiceras Pluma",
    "Lapices Acuarelables",
    "Lapices de Colores",
    "Lapices de Grafito",
    "Libretas",
    "Libros Infantiles",
    "Luncheras y Tuppers",
    "Mapas",
    "Marcadores",
    "Masas para Moldear",
    "Mochilas",
    "Moños y Cintas para Regalo",
    "Notas Adhesivas",
    "Papel",
    "Pinturas",
    "Placas Portapapeles",
    "Portaclips",
    "Reglas",
    "Resaltadores",
    "Rollers Ball",
    "Sacapuntas",
    "Separadores",
    "Sobres",
    "Stickers",
    "Tableros y Portatableros para Dibujo",
    "Tintas Varias",
    "Tizas para Pizarra",
    "Vasos y Tazas",
  ];

  const resmasList = [
    "Todo",
    "Carbonicos",
    "Papel",
    "Papel para Dibujo",
    "Resmas",
  ];

  const tecnicoList = [
    "Todo",
    "Accesorios para Dibujo Tecnico",
    "Accesorios para Artistica",
    "Carpetas",
    "Compases",
    "Cuadernos Especiales",
    "Escuadras",
    "Gomas de Borrar",
    "Lapices de Grafito",
    "Letrografos",
    "Marcadores",
    "Minas",
    "Papel",
    "Plantillas y Accesorios para Dibujo Tecnico",
    "Portalaminas",
    "Portaminas",
    "Reglas",
    "Tableros y Portatableros para Dibujo",
  ];
  const tecnologiaList = [
    "Todo",
    "Accesorios para Dispositivos Moviles",
    "Calculadoras",
  ];

  const mochilaCategories = ["Todo", "Escolar", "Informal"];

  const jugueteCategories = [
    "Todo",
    "Juegos de Mesa",
    "Juguetes para Bebes",
    "Puzzles y Rompecabezas",
    "Deportes y Aire Libre",
    "Peluches",
    "Personajes",
  ];

  return (
    <div className="sticky top-0 w-1/5 py-16 px-8">
      <MainFilters toggleLibCat = {toggleLibreriaCategories} toggleMochCat = {toggleMochilasCategories} toggleJugCat= {toggleJuguetesCategories}/>

      {libreriaCategories && (
        <CategoryList title="Libreria" categories={libCategories} />
      )}

      {mochilasCategories && (
        <CategoryList title="Mochilas" categories={mochilaCategories} />
      )}

      {juguetesCaegories && (
        <CategoryList title="Juguetes" categories={jugueteCategories} />
      )}
      <CategoryList title="Libreria > Agendas" categories={agendasList} />
{/*
      <CategoryList title="Libreria > Artistica" categories={artisticaList} />

      <CategoryList title="Libreria > Comercial" categories={comercialList} />

      <CategoryList title="Libreria > Escolar" categories={escolarList} />

      <CategoryList title="Libreria > Regaleria" categories={regaleriaList} />

      <CategoryList title="Libreria > Resmas y Papeles" categories={resmasList}/>

      <CategoryList title="Libreria > Tecnico" categories={tecnicoList} />

      <CategoryList title="Libreria > Tecnologia" categories={tecnologiaList} />
      */}
      {/*
      {libreriaVisible && (
        <ul className="text-base text-black ">

          <div className="mb-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleAgendas}>
            <li className="p-2">Agendas</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {agendasVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
              <li>Dia Por Pagina</li>
              <li>2 Dias Por Semana</li>
              <li>Semana A la Vista</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleArtistica}>
            <li className="p-2">Artistica</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {artisticaVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleComercial}>
            <li className="p-2">Comercial</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {comercialVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleEscolar}>
            <li className="p-2">Escolar</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {escolarVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleRegaleria}>
            <li className="p-2">Regaleria</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {regaleriaVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleResmas}>
            <li className="p-2">Resmas Y Papeleria</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {resmasVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleTecnico}>
            <li className="p-2">Tecnico</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {tecnicoVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="mt-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleTecnologia}>
            <li className="p-2">Tecnologia</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {tecnologiaVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

        </ul>
      )}
      </div>
      

      <div className="">
      {mochilasVisible && (
        <ul className="text-base text-black">

          <div className="flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleMochilasCresko}>
            <li className="p-2">Cresko</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {mochilasCreskoVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
              <li>Dia Por Pagina</li>
              <li>2 Dias Por Semana</li>
              <li>Semana A la Vista</li>
            </ul>
          )}

          <div className="flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleMochilasMooving}>
            <li className="p-2">Mooving</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {mochilasMoovingVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
              <li>Dia Por Pagina</li>
              <li>2 Dias Por Semana</li>
              <li>Semana A la Vista</li>
            </ul>
          )}

        </ul>
      )}
      </div>

      <div className="">
      {jugueteriaVisible && (
        <ul className="text-base text-black">
          
          <div className="mb-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleJuegosMesa}>
            <li className="p-2">Juegos De Mesa</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {juegosMesaVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleJuguetesBebe}>
            <li className="p-2">Juguetes para Bebes</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {juguetesBebeVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={togglePuzzles}>
            <li className="p-2">Puzzles y Rompecabezas</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {puzzlesVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={toggleDeportes}>
            <li className="p-2">Deportes Y Aire Libre</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {deportesVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="my-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={togglePeluches}>
            <li className="p-2">Peluches</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {peluchesVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}

          <div className="mt-2 flex items-center cursor-pointer hover:text-black hover:bg-white" onClick={togglePersonajes}>
            <li className="p-2">Personajes</li>
            <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-1 w-3 h-3" />
          </div>
          {personajesVisible && (
            <ul className="ml-4 my-2">
              <li>Ver Todo</li>
            </ul>
          )}
        </ul>
      )}
          </div>*/}
    </div>
  );
};

export default Filtros;
