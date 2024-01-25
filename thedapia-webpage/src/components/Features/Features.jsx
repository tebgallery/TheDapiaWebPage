import React from 'react';
import EnvioLogo from '../../img/envio-logo.png';
import LibroLogo from '../../img/libro-logo.png';
import CreditCardLogo from '../../img/creditcard-logo.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruckFast,faBookOpen,faCreditCard} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <section class="w-full h-36 bg-gray-100">
            <div class="w-full h-36 flex items-center justify-center">
                <div class =" flex items-center w-80 h-20 p-2 text-center">
                    <FontAwesomeIcon className='w-9 h-9' icon={faTruckFast}/>   
                    <div class="w-64">
                        <p> ENVIOS EN TODO GBA Y CABA </p>
                        <p> Envios Gratis desde $20.000 </p>
                    </div>
                </div>
                <div class =" flex items-center w-80 h-20 p-2 text-center border-gray-400 border-x-2">
                        <FontAwesomeIcon className='w-9 h-9 ml-2' icon={faBookOpen}/>  
                    <div class ="w-64">
                        <p> PRODUCTOS IMPORTADOS</p>
                        <p> Marcas Internacionales</p>
                    </div>
                </div>
                <div class =" flex items-center w-80 h-20 p-2 text-center">
                        <FontAwesomeIcon className='w-9 h-9 ml-2' icon={faCreditCard}/>  
                    <div class ="w-64">
                        <p> 3 CUOTAS SIN INTERES</p>
                        <p> Todas las tarjetas de crédito</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Features;