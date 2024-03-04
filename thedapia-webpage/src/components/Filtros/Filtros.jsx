import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faChessKnight, faSortDown, faBars,faBox } from '@fortawesome/free-solid-svg-icons';

const Filtros = () => {
  const [libreriaCategories, setLibreriaCategories] = useState(false);
  const [agendasVisible, setAgendasVisible] = useState(false);
  const [artisticaVisible, setArtisticaVisible] = useState(false);
  const [comercialVisible, setComercialVisible] = useState(false);
  const [escolarVisible, setEscolarVisible] = useState(false);
  const [regaleriaVisible, setRegaleriaVisible] = useState(false);
  const [resmasVisible, setResmasVisible] = useState(false);
  const [tecnicoVisible, setTecnicoVisible] = useState(false);
  const [tecnologiaVisible, setTecnologiaVisible] = useState(false);

  const [mochilasCategories, setMochilasCategories] = useState(false);
  const [mochilasCreskoVisible, setMochilasCreskoVisible] = useState(false);
  const [mochilasMoovingVisible, setMochilasMoovingVisible] = useState(false);
  

  const [juguetesCaegories, setJuguetesCategories] = useState(false);
  const [juegosMesaVisible, setJuegosMesaVisible] = useState(false);
  const [juguetesBebeVisible, setJuguetesBebeVisible] = useState(false);
  const [puzzlesVisible, setPuzzlesVisible] = useState(false);
  const [deportesVisible, setDeportesVisible] = useState(false);
  const [peluchesVisible, setPeluchesVisible] = useState(false);
  const [personajesVisible, setPersonajesVisible] = useState(false);

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


  return (
    <div className="sticky top-0 w-1/5 py-16 px-8">
      <div className="border-b-4 border-gray-200 pb-6">
        <div className='py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer' onClick={toggleLibreriaCategories}>
          <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5 mr-3" />
          <h4 className="text-lg" >Libreria</h4>
        </div>
        <div className='py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer' onClick={toggleMochilasCategories}>
          <FontAwesomeIcon icon={faBox} className="w-5 h-5 mr-3" />
          <h4 className="text-lg" >Mochilas</h4>
        </div>
        <div className='py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer' onClick={toggleJuguetesCategories}>
          <FontAwesomeIcon icon={faChessKnight} className="w-5 h-5 mr-3" />
          <h4 className="text-lg" >Juguetes</h4>
        </div>
      </div>
      {libreriaCategories && (
        
        <div className="border-b-4 border-gray-200 pb-4">
        <h5 className="uppercase text-sm text-gray-400 py-6">Categorias</h5>
      
          <ul>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Todo</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Artistica</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Comercial</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Escolar</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Regaleria</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Resmas y Papeleria</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Tecnico</li>
            <li className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Tecnologia</li>
          </ul>
          </div>
    
      )}

        {mochilasCategories && (
      <div className="border-b-4 border-gray-200 pb-4">
        <h5 className="uppercase text-sm text-gray-400 py-6">Categorias</h5>
          <ul>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Todo</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Escolar</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Informal</li>
          </ul>
          </div>
        )}

      {juguetesCaegories && (
      <div className="border-b-4 border-gray-200 pb-4">
        <h5 className="uppercase text-sm text-gray-400 py-6">Categorias</h5>
          <ul>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Todo</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Juegos de Mesa</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Juguetes para Bebes</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Puzzles y Rompecabezas</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Deportes y Aire Libre</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Peluches</li>
            <li className="py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer">Personajes</li>
          </ul>
          </div>
        )}

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
