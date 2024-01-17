import Logo from "../../img/thedapia-logo.png";
import UserIcon from "../../img/user-icon.png";
import CartIcon from "../../img/cart-icon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import './Navbar.css'

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false)
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
    navigate('/', { state: { sectionId } });
    console.log(sectionId)
  }; 

  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  const marcas = ['marca1', 'marca2', 'marca3', 'marca4','marca5', 'marca6', 'marca7', 'marca8','marca9', 'marca10', 'marca11', 'marca12','marca13', 'marca14', 'marca15', 'marca16','marca17', 'marca18', 'marca19', 'marca20'];

  return (
    <nav className="flex sticky w-screen h-36 top-0 z-50">
      <div className="absolute top-0 flex w-screen h-24 bg-fuchsia-400 justify-between border-b-2">
        <div className="w-16 h-16 m-auto">
          <RouterLink to='/' ><img src={Logo} alt="" /></RouterLink>
        </div>

        <div className="w-1/2 h-12 m-auto relative flex">
          <input
            type="search"
            className="w-full pl-4 rounded-l-2xl outline-none"
            placeholder="Buscar productos..."
          />
          <button
            className="w-16 rounded-r-2xl bg-white flex items-center justify-center"
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

        <div className="w-44 m-auto flex items-center justify-around ">
          <div className="w-12 h-12 ">
            <a href="">
              <img src={UserIcon} alt="" />
            </a>
            
          </div>

          <div className="w-12 h-12 ">
            <a href="">
              <img src={CartIcon} alt="" />
            </a>
            
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-screen h-12 bg-emerald-400 flex items-center justify-center">
        <ul className= "space-x-14">
            <li className="inline-block"> <RouterLink to='/' className="text-base text-black  hover:text-white">INICIO</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos' className="text-base text-black  hover:text-white">LIBRERIA</RouterLink> </li>
            <li className="inline-block"> <RouterLink to='/productos' className="text-base text-black  hover:text-white">JUGUETES</RouterLink> </li>
            <li className="inline-block">
              <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                <DropdownToggle caret className="text-base text-black  hover:text-white">
                  MARCAS
                </DropdownToggle>
                <DropdownMenu>
                  {marcas.map((item, index) => (
                    <DropdownItem key={index} >{item}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
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
    </nav>
  )
};

export default Navbar;