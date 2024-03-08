import React, { useEffect, useRef } from 'react';

const Marcas = ({ marcas }) => {

  return (
    <section className='my-20 bg-gradient-to-l from-slate-300 z-10'>
      <div className="overflow-hidden h-36 p-8 flex z-10 ">
        <div className="inline-flex animate-slide gap-36 z-10">
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
