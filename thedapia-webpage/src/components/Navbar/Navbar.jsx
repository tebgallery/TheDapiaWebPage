import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext } from "react";
import Logo from "../../img/thedapia-logo.png";
import { AuthContext } from '../../context/AuthContext';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import ModalMarcas from './ModalMarcas';
import { FaRegUserCircle } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import CartModal from '../CartModal/CartModal';

const Navbar = () => {

  const [showMarcasModal, setShowMarcasModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartModal,setCartModal] = useState(false);
  const {user, logOutUser} = useContext(AuthContext);
  const [searchBarValue,setSearchBarValue] = useState(null);
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

  const handleSearch = () => {
    navigate(`/productos/buscar/${searchBarValue}`);
  };

  const marcas = ['marca1', 'marca2', 'marca3', 'marca4','marca5', 'marca6', 'marca7', 'marca8','marca9', 'marca10', 'marca11', 'marca12','marca13', 'marca14', 'marca15', 'marca16','marca17', 'marca18', 'marca19', 'marca20'];
  return (
    <>
    <nav className="flex sticky w-full h-36 top-0 z-50">
      <div className="absolute top-0 flex items-center w-full h-24 bg-gradient-to-r from-fuchsia-300 to-fuchsia-400 justify-between">
        <div className="w-1/4 flex items-center justify-center">
          <RouterLink  to='/' >
            <img className = "w-20 h-20 " src={Logo} alt="thedapia-logo" />
          </RouterLink>
        </div>

        <div className="w-1/2 h-12 relative flex">
          <input
            type="search"
            className="w-full pl-8 outline-none rounded-l-3xl"
            placeholder="Buscar productos..."
            onChange={(e) => setSearchBarValue(e.target.value)}
          />
          <button
            className="w-16 bg-white flex items-center justify-center rounded-r-3xl "
            type="button"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6 text-slate-700 hover:text-emerald-400" />
          </button>
        </div>

        <div className="w-1/4 pl-10 flex justify-center mt-2">
        <div className="py-2 px-4 cursor-pointer text-white hover:text-slate-800" onClick={() => handleCloseOpenLoginModal()}>
          <FaRegUserCircle className='w-8 h-8 m-auto mb-1' />
          <p>Mi Usuario</p> {/* Texto debajo del icono de usuario */}
        </div>

        <div className="py-2 px-4 cursor-pointer text-white hover:text-slate-800">
          <MdAddShoppingCart className='w-8 h-8 m-auto mb-1' onClick={() => setCartModal(true)} />
          <p>Carrito</p> {/* Texto debajo del icono del carrito */}
        </div>
      </div>
      </div>
      <div className="absolute bottom-0 flex w-full h-12 bg-slate-800 flex items-center justify-center">
        <ul className= "space-x-20 text-white">
            <li className="inline-block"> <RouterLink to='/' className="hover:text-emerald-400 cursor-pointer hover:border-b-2">Inicio</RouterLink> </li>
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
              <a onClick={() => navigate('/contact')} className="cursor-pointer bg-gradient-to-r from-purple-400 to-indigo-500 py-2 px-4 rounded-full hover:opacity-80" >
                Contacto
              </a>
            </li>
        </ul>
      </div>
      {showMarcasModal && (
        <ModalMarcas marcas={marcas} onClose={() => setShowMarcasModal(false)} />
      )}

      {showLoginModal && (
        <div className="fixed top-24 bg-white p-4 border border-gray-300 rounded shadow-md" style={{right: '8%'}}>
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
    {cartModal && (
      <CartModal cart= {cart} onClose={() => setCartModal(false)} />
    )}
  </>
  )
};

export default Navbar;