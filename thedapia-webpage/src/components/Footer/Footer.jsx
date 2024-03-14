import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/thedapia-logo.png';
import { FaInstagram,FaFacebook,FaWhatsapp   } from "react-icons/fa6";

const Footer = () => {

  const navigatetoSocialMedia = (num) => {
      if (num === 1){
        window.open('https://wa.me/5491123998384?text=Hola!%20Quisiera%20realizar%20una%20consulta');
      }
  }

  return (
    <footer className="w-full bg-gray-700 text-white">
      <div className='w-full flex justify-around py-12 px-20'>
        <div className='w-1/4 p-4'>
          <h6 className='text-lg mb-7 font-semibold text-fuchsia-400'>Contactanos</h6>
          <div className='w-full mb-5 flex items-center'>
            <FontAwesomeIcon icon={faLocationDot} size='1x' className='text-fuchsia-400' />
            <p className='ml-4'>Av. Asamblea 483, C1424 Parque Chacabuco, Buenos Aires </p>
          </div>
          <div className='w-full mb-5 flex items-center '>
            <FontAwesomeIcon icon={faEnvelope} size='1x' className='text-fuchsia-400' />
            <p className='ml-4'>thedapia23@gmail.com </p>
          </div>
          <div className='w-full mb-5 flex items-center '>
            <FontAwesomeIcon icon={faPhone} size='1x' className='text-fuchsia-400' />
            <p className='ml-4'>+5411222333444 </p>
          </div>
        </div>
        <div className='w-1/4 p-4 text-center'>
            <h6 className='text-lg mb-7 font-semibold text-fuchsia-400'> Productos </h6>
            <a href="/productos" className="block mb-5">Catalogo</a>
            <a href="/productos/libreria" className="block mb-5">Libreria</a>
            <a href="/productos/mochilas" className="block mb-5">Mochilas</a>
            <a href="/productos/juguetes" className="block mb-5">Juguetes</a>
        </div>

        <div className='w-1/4 p-4 text-center'>
            <h6 className='text-lg mb-7 font-semibold text-fuchsia-400'>Información</h6>
            <a href="" className="block mb-5">Ayuda</a>
            <a href="" className="block mb-5">Terminos y Condiciones</a>
            <a href="" className="block mb-5">Devoluciones</a>
        </div>

        <div className='w-1/4 p-4'>
            <h6 className='text-lg mb-7 font-semibold text-fuchsia-400 text-center'>Redes sociales</h6>
            <div className='w-full flex items-center justify-center'>
              <FaWhatsapp   className="w-10 h-10 mx-4 bg-fuchsia-400 p-2 rounded-full hover:bg-black hover:cursor-pointer"
                onClick={() => {navigatetoSocialMedia(1)}}
              />
              <FaInstagram className="w-10 h-10 mx-4 bg-fuchsia-400 p-2 rounded-full hover:bg-black hover:cursor-pointer" />
              <FaFacebook  className="w-10 h-10 mx-4 bg-fuchsia-400 p-2 rounded-full hover:bg-black hover:cursor-pointer" />
            </div>
        </div>

      </div>
      <div className="w-full bg-gray-800 py-5">
          <p className="text-center "> © The Dapia Sitio Web 2024. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;
