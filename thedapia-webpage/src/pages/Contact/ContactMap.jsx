import React, { useState } from 'react';

const ContactMap = () => {
    const [modalMap,setModalMap] = useState(false);

    const navigateToGoogleMap = () => {
        window.open('https://www.google.com/maps/place/Libreria+y+Jugueteria+The+Dapia/@-34.6336107,-58.4350196,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbb311c8c89f:0xb9d96133215fd9ab!8m2!3d-34.6336151!4d-58.4324447!16s%2Fg%2F1tfznjkw?entry=ttu', '_blank');
    }

    return (
        <div 
            className="w-6/12 h-96 bg-map bg-no-repeat bg-center bg-cover rounded-r-2xl shadow-2xl hover:cursor-pointer"
            onMouseEnter={() => {setModalMap(true)}}
            onMouseLeave={() => {setModalMap(false)}}
        >
            {modalMap && (
                <div className='w-full bg-gray-950 opacity-70 rounded-r-2xl w-full h-full flex items-center justify-center'>
                <div className='text-center text-white text-lg'>
                    <h5 className='mb-4'> Como llegar:</h5>
                    <p className='mb-4'> Subte E, Estación Jose M. Moreno</p>
                    <p className='mb-4'> Colectivos: 4, 7, 25, 42, 134, 135 </p>
                    <button className='px-16 py-2 bg-violet-500 rounded-2xl hover:scale-105 opacity-100'
                        onClick={navigateToGoogleMap}
                    >
                        Ver en Google maps
                    </button>
                </div>
            </div>
            )}
        </div>
        
    );
};


export default ContactMap;