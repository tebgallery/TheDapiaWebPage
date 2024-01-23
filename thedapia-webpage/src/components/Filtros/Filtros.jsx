import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faChessKnight, faSortDown, faBars,faBox } from '@fortawesome/free-solid-svg-icons';

const Filtros = () => {
  const [libreriaVisible, setLibreriaVisible] = useState(true);
  const [agendasVisible, setAgendasVisible] = useState(false);
  const [artisticaVisible, setArtisticaVisible] = useState(false);
  const [comercialVisible, setComercialVisible] = useState(false);
  const [escolarVisible, setEscolarVisible] = useState(false);
  const [regaleriaVisible, setRegaleriaVisible] = useState(false);
  const [resmasVisible, setResmasVisible] = useState(false);
  const [tecnicoVisible, setTecnicoVisible] = useState(false);
  const [tecnologiaVisible, setTecnologiaVisible] = useState(false);

  const [mochilasVisible, setMochilasVisible] = useState(false);
  const [mochilasCreskoVisible, setMochilasCreskoVisible] = useState(false);
  const [mochilasMoovingVisible, setMochilasMoovingVisible] = useState(false);
  

  const [jugueteriaVisible, setJugueteriaVisible] = useState(false);
  const [juegosMesaVisible, setJuegosMesaVisible] = useState(false);
  const [juguetesBebeVisible, setJuguetesBebeVisible] = useState(false);
  const [puzzlesVisible, setPuzzlesVisible] = useState(false);
  const [deportesVisible, setDeportesVisible] = useState(false);
  const [peluchesVisible, setPeluchesVisible] = useState(false);
  const [personajesVisible, setPersonajesVisible] = useState(false);

  const toggleLibreria = () => {
    setLibreriaVisible(!libreriaVisible);
    setAgendasVisible(false); // Oculta las subopciones al cambiar de categoría
  };

  const toggleAgendas = () => {
    setAgendasVisible(!agendasVisible);
  };

  const toggleArtistica = () => {
    setArtisticaVisible(!artisticaVisible);
  };

  const toggleComercial = () => {
    setComercialVisible(!comercialVisible);
  };

  const toggleEscolar = () => {
    setEscolarVisible(!escolarVisible);
  };

  const toggleRegaleria = () => {
    setRegaleriaVisible(!regaleriaVisible);
  };

  const toggleResmas = () => {
    setResmasVisible(!resmasVisible);
  };

  const toggleTecnico = () => {
    setTecnicoVisible(!tecnicoVisible);
  };

  const toggleTecnologia = () => {
    setTecnologiaVisible(!tecnologiaVisible);
  };

  const toggleMochilas = () => {
    setMochilasVisible(!mochilasVisible);
  };

  const toggleMochilasCresko = () => {
    setMochilasCreskoVisible(!mochilasCreskoVisible);
  };

  const toggleMochilasMooving = () => {
    setMochilasMoovingVisible(!mochilasMoovingVisible);
  };

  const toggleJugueteria = () => {
    setJugueteriaVisible(!jugueteriaVisible);
  };

  const toggleJuegosMesa = () => {
    setJuegosMesaVisible(!juegosMesaVisible);
  };

  const toggleJuguetesBebe = () => {
    setJuguetesBebeVisible(!juguetesBebeVisible);
  };

  const togglePuzzles = () => {
    setPuzzlesVisible(!puzzlesVisible);
  };

  const toggleDeportes = () => {
    setDeportesVisible(!deportesVisible);
  };

  const togglePeluches = () => {
    setPeluchesVisible(!peluchesVisible);
  };

  const togglePersonajes = () => {
    setPersonajesVisible(!personajesVisible);
  };

  return (
    <div className="w-1/5 py-16 mx-8">
      <div className="pl-2 flex items-center justify-between">
        <h2 className="text-2xl text-center mb-2">Filtros</h2>
        <button > 
          <FontAwesomeIcon className= "h-full w-6 "icon={faBars} />
        </button>

      </div>
      <div className="border border-black">
      <div className='p-3 flex items-center hover:text-white cursor-pointer bg-purple-400' onClick={toggleLibreria}>
        <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-2" />
        <h4 className="text-xl" >Libreria</h4>
        <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-2 " />
      </div>
      {libreriaVisible && (
        <ul className="text-base text-white bg-pink-400">

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

      <div className="border border-black">
      <div className='p-3 flex items-center hover:text-white cursor-pointer bg-purple-400' onClick={toggleMochilas}>
        <FontAwesomeIcon icon={faBox} className="w-8 h-8 mr-2" />
        <h4 className="text-xl" >Mochilas</h4>
        <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-2 " />
      </div>
      {mochilasVisible && (
        <ul className="text-base text-white bg-pink-400">

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

      <div className="border border-black">
      <div className='p-3 flex items-center hover:text-white cursor-pointer bg-purple-400' onClick={toggleJugueteria}>
        <FontAwesomeIcon icon={faChessKnight} className="w-8 h-8 mr-2" />
        <h4 className="text-xl" >Jugueteria</h4>
        <FontAwesomeIcon icon={faSortDown} className="ml-2 mb-2 " />
      </div>
      {jugueteriaVisible && (
        <ul className="text-base text-white bg-pink-400">
          
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
      </div>

      
    </div>
  );
};

export default Filtros;
