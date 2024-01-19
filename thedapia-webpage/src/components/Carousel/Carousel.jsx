import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Cambia la imagen cada 3 segundos (ajusta este valor según sea necesario)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-128">
      <div className="relative w-full h-full">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Slide ${i+1}`}
            className={`absolute transition-opacity duration-1000 w-full h-128 object-cover ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;