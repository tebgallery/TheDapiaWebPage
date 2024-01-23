import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faShoppingCart, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Logo from "../../img/thedapia-logo.png";
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import ModalMarcas from './ModalMarcas';


const Navbar = () => {

  const [showMarcasModal, setShowMarcasModal] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
    navigate('/', { state: { sectionId } });
    console.log(sectionId)
  }; 


  const marcas = ['marca1', 'marca2', 'marca3', 'marca4','marca5', 'marca6', 'marca7', 'marca8','marca9', 'marca10', 'marca11', 'marca12','marca13', 'marca14', 'marca15', 'marca16','marca17', 'marca18', 'marca19', 'marca20'];

  return (
    <nav className="flex sticky w-full h-36 top-0 z-50">
      <div className="absolute top-0 flex items-center w-full h-24 bg-gradient-to-r from-fuchsia-300 to-fuchsia-400 justify-around border-b-2">
        <div className="w-64">
          <RouterLink  to='/' >
            <img className = "w-16 h-16" src={Logo} alt="thedapia-logo" />
          </RouterLink>
        </div>

        <div className="w-1/2 h-12 relative flex">
          <input
            type="search"
            className="w-full pl-4 outline-none"
            placeholder="Buscar productos..."
          />
          <button
            className="w-16 bg-white flex items-center justify-center"
            type="button"
          >
            <svg className="w-7 h-7" viewBox="0 0 1000 1000">
              <path
                className="path1"
                d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 
                                            55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 
                                            140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 
                                            79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 
                                            218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="w-64 flex text-center justify-around pt-2 ">
          <div className="w-32 h-full">
            <a href="">
              <FontAwesomeIcon icon={faUser} className='w-8 h-8' />
            </a>
            <p>Iniciar Sesión </p>
            
          </div>

          <div className="w-32">
            <a href="">
             <FontAwesomeIcon icon={faShoppingCart} className='w-8 h-8'  />
            </a>
            <p>Ver carrito</p>
            
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full h-12 bg-gradient-to-r from-teal-400 to-emerald-400 flex items-center justify-center">
        <ul className= "space-x-14">
            <li className="inline-block"> <RouterLink to='/' className="hover:text-white cursor-pointer">INICIO</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos' className="hover:text-white cursor-pointer">LIBRERIA</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos' className="hover:text-white cursor-pointer">MOCHILAS</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos' className="hover:text-white cursor-pointer">JUGUETES</RouterLink> </li>

            <li className="inline-block hover:text-white cursor-pointer" onClick={() => setShowMarcasModal(true)}> 
            <button>
              MARCAS </button>
            <FontAwesomeIcon className =" ml-1 mb-0.5 w-3 h-3"icon={faChevronDown}/>
            </li>

            <li className="inline-block"> 
              <a onClick={() => handleNavigateToSection('aboutus-section')} className="hover:text-white cursor-pointer"  >
                NOSOTROS
              </a>
            </li>
            <li className="inline-block"> 
              <a onClick={() => handleNavigateToSection('contact-section')} className="hover:text-white cursor-pointer" >
                CONTACTO
              </a>
            </li>
        </ul>
      </div>
      {showMarcasModal && (
        <ModalMarcas marcas={marcas} onClose={() => setShowMarcasModal(false)} />
      )}
    </nav>
  )
};

export default Navbar;