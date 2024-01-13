import React, { useRef, useEffect } from 'react';
import Logo from '../../img/thedapia-logo2.png';
import './Aboutus.css';

const Aboutus = () => {

  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const elementTop = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          imageRef.current.classList.add('fade-in');
          imageRef.current.classList.remove('opacity-0')
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-full h-192 flex items-center justify-center">
      <div className="w-8/12 h-128 border-gray-500 p-4 flex justify-center items-center">
        <div className="p-4 w-96 h-96 flex justify-center items-center">
          <img
            ref={imageRef}
            src={Logo}
            alt="logo"
            className="w-80 h-80 opacity-0 transition-opacity duration-1800 fade-in"
          />
        </div>
        <div className="p-4 w-3/6 h-96">
          <h2 className="text-4xl mb-8">“The Dapia” Librería - Juguetería</h2>
          <p className="text-lg">
            Con más de 50 años en el mercado.
            <br />
            Acá encontrarás una gran variedad de juguetes y útiles escolares para todas las edades.
            <br />
            Nuestra amplia selección garantiza diversión y aprendizaje para tus pequeños.
            <br/>
            <br/>
            Contamos con un local ubicado en la zona de Parque Chacabuco CABA

          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
