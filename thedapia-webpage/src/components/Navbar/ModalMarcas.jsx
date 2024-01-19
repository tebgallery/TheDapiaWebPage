import React from 'react';


const ModalMarcas = ({ marcas, onClose }) => {

  const columnCount = 4;
  const rowCount = 5;
  const groupedMarcas = Array.from({ length: columnCount }, (_, colIndex) =>
      marcas.slice(colIndex * rowCount, (colIndex + 1) * rowCount)
  );
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center" onClick={onClose}>
      <div className="bg-white p-8 w-4/6 h-2/6 m-36 grid grid-cols-4 gap-4 bg-gradient-to-r from-teal-400 to-emerald-400">
          {groupedMarcas.map((column, colIndex) => (
            <div key={colIndex}>
              {column.map((marca, rowIndex) => (
                <p key={rowIndex} className="text-lg mb-2">{marca}</p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ModalMarcas;