import React from "react";
import Logo from '../../../img/thedapia-logo.png';
import {Link as RouterLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky w-full h-24 bg-slate-800 ">
            <div className="w-full h-full p-4 flex items-center justify-around">
                <div className="p-4 absolute left-0 ml-8">
                    <RouterLink to='/' className="text-xl text-white">Ir a Pagina Principal</RouterLink>
                </div>
                <div className="p-4 flex items-center">
                    <img className="w-16 h-auto" src={Logo} alt="thedapia-logo.png" />
                    <h2 className="text-2xl ml-4 text-white"> Panel de Administador</h2>
                </div>
                <div className="w-auto p-4 absolute right-0 mr-8">
                    <ul className="p-4 space-x-16 text-xl text-white">
                        <li className="inline-block">Agregar / Quitar Producto </li>
                        <li className="inline-block">Ver Ordenes </li>

                    </ul>
                </div>
            </div>


        </nav>

    );
};

export default Navbar;