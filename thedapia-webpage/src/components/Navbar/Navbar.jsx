import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faShoppingCart, faChevronDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import Logo from "../../img/thedapia-logo.png";
import { AuthContext } from '../../context/AuthContext';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import ModalMarcas from './ModalMarcas';
import { FaRegUserCircle } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const Navbar = ( {onCartClick, cart} ) => {

  const [showMarcasModal, setShowMarcasModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const {user, logOutUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCloseOpenLoginModal = () =>{
    if(showLoginModal === false){
      setShowLoginModal(true)
    }else{
      setShowLoginModal(false)
    }
  }
  const handleNavigateToSection = (sectionId) => {
    navigate('/', { state: { sectionId } });
  }; 

  const marcas = ['marca1', 'marca2', 'marca3', 'marca4','marca5', 'marca6', 'marca7', 'marca8','marca9', 'marca10', 'marca11', 'marca12','marca13', 'marca14', 'marca15', 'marca16','marca17', 'marca18', 'marca19', 'marca20'];
  return (
    <nav className="flex sticky w-full h-36 top-0 z-50">
      <div className="absolute top-0 flex items-center w-full h-24 bg-gradient-to-r from-fuchsia-300 to-fuchsia-400 justify-between">
        <div className="w-1/4 flex items-center justify-center">
          <RouterLink  to='/' >
            <img className = "w-16 h-16" src={Logo} alt="thedapia-logo" />
          </RouterLink>
        </div>

        <div className="w-1/2 h-12 relative flex">
          <input
            type="search"
            className="w-full pl-4 outline-none rounded-l-3xl"
            placeholder="Buscar productos..."
          />
          <button
            className="w-16 bg-white flex items-center justify-center rounded-r-3xl "
            type="button"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-7 h-7 text-slate-700 hover:text-fuchsia-400" />
          </button>
        </div>

        <div className="w-1/4 pl-10 flex justify-center ">
          <div className="cursor-pointer pl-10" onClick={() => handleCloseOpenLoginModal()}>
              <FaRegUserCircle className='text-white w-8 h-8 hover:text-slate-800' />
          </div>

          <div className="cursor-pointer pl-10 relative" onClick={onCartClick}>
              {cart!== undefined && cart.length > 0 && <div className='absolute top-0 right-0 text-white bg-red-500 rounded-full w-4 h-4 text-center text-sm'>
                {cart.length}
              </div>}
             <MdAddShoppingCart className='text-white w-8 h-8 hover:text-slate-800'  />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full h-12 bg-slate-800 flex items-center justify-center rounded-b-3xl">
        <ul className= "space-x-16 text-white">
            <li className="inline-block"> <RouterLink to='/' className="hover:text-emerald-400 cursor-pointer">Inicio</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos' className="hover:text-emerald-400 cursor-pointer">Catálogo</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos/libreria' className="hover:text-emerald-400 cursor-pointer">Librería</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos/mochilas' className="hover:text-emerald-400 cursor-pointer">Mochilas</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos/juguetes' className="hover:text-emerald-400 cursor-pointer">Juguetes</RouterLink> </li>
            {/*
            <li className="inline-block hover:text-white cursor-pointer" onClick={() => setShowMarcasModal(true)}> 
            <button>
              MARCAS </button>
            <FontAwesomeIcon className =" ml-1 mb-0.5 w-3 h-3"icon={faChevronDown}/>
            </li>*/}

            <li className="inline-block"> 
              <a onClick={() => handleNavigateToSection('aboutus-section')} className="hover:text-emerald-400 cursor-pointer"  >
                Nosotros
              </a>
            </li>
            <li className="inline-block"> 
              <a onClick={() => navigate('contact')} className="hover:text-emerald-400 cursor-pointer" >
                Contacto
              </a>
            </li>
        </ul>
      </div>
      {showMarcasModal && (
        <ModalMarcas marcas={marcas} onClose={() => setShowMarcasModal(false)} />
      )}

      {showLoginModal && (
        <div className="fixed top-24 bg-white p-4 border border-gray-300 rounded shadow-md" style={{right: '20%'}}>
          {
            user ?
            <>
              <RouterLink onClick={() => logOutUser()} to='/login'>Cerrar sesion</RouterLink>
            </>
            :
            <>
              <RouterLink to='/login' className="block mb-2">Iniciar Sesión</RouterLink>
              <RouterLink to='/register'>Registrarse</RouterLink>
            </>
          }
        </div>
      )}
    </nav>
  )
};

export default Navbar;