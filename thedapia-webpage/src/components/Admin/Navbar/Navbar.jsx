import React, {useState} from "react";
import Logo from '../../../img/thedapia-logo.png';
import {Link as RouterLink} from 'react-router-dom'

const Navbar = ({ handleFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState("none");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
        handleFilterChange(selectedValue);
      };
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
                        <li className="inline-block">Ver Ordenes </li>
                        <select
                            name="ProductosHomePage"
                            id="productoshomepage"
                            className="bg-slate-800 px-2 py-1"
                            value={selectedFilter}
                            onChange={handleSelectChange}
                        >
                            <option value="none">Todos</option>
                            <option value="ultimos-ingresos">Ultimos Ingresos</option>
                            <option value="mas-vendido">Lo Mas Vendido</option>
                            <option value="ofertas">Ofertas</option>
                        </select>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;