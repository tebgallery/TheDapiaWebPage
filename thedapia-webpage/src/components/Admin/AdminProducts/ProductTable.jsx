import React from 'react';

const ProductTable = ({ headers, products, handleOpenModifProductModal, handleOpenRemoveProductModal }) => (
  <div className="w-11/12 m-auto">
    <table className="table-auto border-2 border-slate-100 border-separate border-spacing-1 w-full bg-slate-500 ">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border-black p-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="bg-slate-300 border-black hover:bg-slate-200">
            {headers.map((header, idx) => (
              <td key={idx} className="border border-white p-2 ">
                {header === 'Imagen' ? (
                  <img
                    src={product.imagen}
                    alt={`Imagen de ${product.nombre}`}
                    className="w-16 h-16 object-cover"
                  />
                ) : header === 'Acciones' ? (
                  <div className="flex space-x-2">
                    <button
                      className="bg-amber-400 text-white px-2 py-1 rounded"
                      onClick={() => handleOpenModifProductModal(product)}
                    >
                      Modificar
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleOpenRemoveProductModal(product)}
                    >
                      Eliminar
                    </button>
                  </div>
                ): (
                  product[header.toLowerCase()]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;