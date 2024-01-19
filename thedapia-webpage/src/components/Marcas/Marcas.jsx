import React, { useEffect, useRef } from 'react';

const Marcas = ({ marcas }) => {

  return (
    <section className='mb-8 bg-gradient-to-l from-fuchsia-200'>
      <div className="overflow-hidden h-36 p-8 flex ">
        <div className="inline-flex animate-slide gap-20 ">
        {marcas.map((marca, index) => (
            <img 
              key={index}
              className='w-48 object-contain'
              src={marca.url} 
              alt={`Marca ${index + 1}`} />
          ))}

          {marcas.map((marca, index) => (
            <img key={index} src={marca.url} alt={`Marca ${index + 1}`} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Marcas;
