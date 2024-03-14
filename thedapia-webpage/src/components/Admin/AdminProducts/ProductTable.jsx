import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const ProductTable = ({
  headers,
  products,
  handleOpenModifProductModal,
  handleOpenRemoveProductModal,
  selectedFilter,
}) => {

  const [infoModal,setInfoModal] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  console.log(products);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour12: false,
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  const formatProductStatus = (status) => {
    let stringStatus = "";
    if (status) {
      stringStatus = "Activo";
    } else {
      stringStatus = "Inactivo";
    }

    return stringStatus;
  };

  const filteredProducts =
    selectedFilter === "none"
      ? products
      : products.filter(
          (product) => product.seccionenpagina === selectedFilter
        );

  return (
    <>
    <table className="table-auto border-collapse rounded-2xl">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="text-lg border-b-4 py-4 px-4 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product,index) => (
          <tr
            key={product._id}
            className="hover:bg-slate-200 duration-500 transition-transform transform hover:scale-102"
          >
            <td className="border-b-4 px-2 py-2 capitalize">{product.nombre}</td>
            <td className="border-b-4 px-2 py-2">
              <img
                src={product.imagen}
                alt={`Imagen de ${product.nombre}`}
                className="w-14 h-14 border border-black rounded-full object-cover"
              />
            </td>
            <td className="border-b-4 px-2 py-2 capitalize">{product.marca}</td>
            <td className="border-b-4 px-2 py-2 font-semibold">
              ${product.precio}
            </td>
            <td className="border-b-4 px-2 py-2 text-gray-500 font-semibold">
              {product.descuento} %
            </td>
            <td className="border-b-4 px-2 py-2 text-blue-600 font-semibold">
              ${product.preciototal}
            </td>
            <td className="border-b-4 px-2 py-2">{product.cantidad}</td>
            <td className="border-b-4 px-2 py-2">{product.categoria}</td>
            <td className="border-b-4 px-2 py-2">
              {formatDate(product.fechamodificacion)}
            </td>
            <td className="border-b-4 px-2 py-2">
              {formatProductStatus(product.estado)}
            </td>
            <td className="border-b-4 px-2 py-2">
              <div className="flex items-center justify-around">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="w-6 h-6 hover:cursor-pointer hover:text-amber-400"
                  onClick={() => handleOpenModifProductModal(product)}
                />
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-6 h-6 hover:cursor-pointer hover:text-red-500"
                  onClick={() => handleOpenRemoveProductModal(product)}
                />
              </div>
            </td>
            <td className="border-b-4 px-2 py-2">
              <button className="border-2 border-pink-400 text-pink-400 rounded-xl px-4 py-1 hover:bg-white-500 flex items-center justify-center hover:bg-pink-400 hover:text-white"
                onClick={() => {
                  setSelectedProductIndex(index);
                  setInfoModal(true);
                }}
              >
                Ver
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {infoModal && selectedProductIndex !== null &&  (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex items-center justify-center z-50" onClick={() => setInfoModal(false)}>
        <div className="bg-white p-8 shadow-2xl w-1/3">
          <div className="w-full h-32 border-b-2 border-red-500 mb-4">
              <img 
                src={filteredProducts[selectedProductIndex].imagen} 
                alt="" 
                className="object-center w-auto h-28 object-fill"
              />
          </div>
          <p>Codigo de Barra: {filteredProducts[selectedProductIndex].codigobarra}</p>
          <p>Color: {filteredProducts[selectedProductIndex].color}</p>
          <p>SubCategoria: {filteredProducts[selectedProductIndex].subcaegoria}</p>
          <p>Item: {filteredProducts[selectedProductIndex].item}</p>
          <p>Seccion en pagina: {filteredProducts[selectedProductIndex].seccionenpagina}</p>
          <p>Descripción: {filteredProducts[selectedProductIndex].descripcion}</p>
        </div>
      </div>
    )}
    </>
  );
};

export default ProductTable;
