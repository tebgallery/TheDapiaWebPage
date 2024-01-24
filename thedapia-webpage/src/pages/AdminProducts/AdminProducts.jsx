import { React, useState } from "react";

const AdminProducts = () => {
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [showModifProductModal, setShowModifProductModal] = useState(false);
    const [showRemoveProductModal, setShowRemoveProductModal] = useState(false);

    const headers = [
        "Nombre",
        "Marca",
        "CodBarra",
        "Precio",
        "Descuento",
        "Cantidad",
        "Categoria",
        "Color",
        "Imagen",
        "FechaModificacion",
        "Descripcion",
        "Estado",
        "Acciones",
    ];
    const productos = [
        {
            Nombre: "Cartuchera Homero Simpsons Mooving",
            Marca: "Mooving",
            CodBarra: 2332120880,
            Precio: 19990,
            Descuento: 10,
            Cantidad: 50,
            Categoria: "Libreria",
            Imagen: "https://tiendup.b-cdn.net/business/48/products/gyNKV0_656f73ae4d4a9_large.jpg",
            FechaModificacion: "2024-01-10",
            Descripcion: "Cartuchera Mooving Homero Simpsos 2 Pisos, no incluye accesorios dentro",
            Estado: "Activo",
        },
        {
            Nombre: "Mochila Cresko Sonic SO213",
            Marca: "Cresko",
            CodBarra: 2337850880,
            Precio: 79990,
            Descuento: 5,
            Cantidad: 30,
            Categoria: "Mochilas",
            Imagen: "https://catalogos.cresko.com/Content/images/articulos/SO123_4.jpg",
            FechaModificacion: "2024-01-11",
            Descripcion: "Mochila Sonic Cresko SO213 18'' con 2 bolsillos",
            Estado: "Inactivo",
        },


    ];

    const handleOpenAddProductModal = () => {
        setShowAddProductModal(true);
    };

    const handleCloseAddProductModal = () => {
        setShowAddProductModal(false);
    };

    const handleOpenModifProductModal = () => {
        setShowModifProductModal(true);
    };

    const handleCloseModifProductModal = () => {
        setShowModifProductModal(false);
    };

    const handleOpenRemoveProductModal = () => {
        setShowRemoveProductModal(true);
    };

    const handleCloseRemoveProductModal = () => {
        setShowRemoveProductModal(false);
    };


    return (
        <section className="w-full bg-slate-200">
            <div className="w-full">
                <div className="relative m-auto w-11/12 flex items-center justify-center">
                    <h1 className="text-4xl text-center mb-20 mt-12">Productos Subidos</h1>
                    <button
                        className="absolute right-0 bg-emerald-500 text-white px-2 py-1 rounded"
                        onClick={handleOpenAddProductModal}
                    >
                        Agregar Producto
                    </button>
                </div>
                <div className="w-11/12 m-auto">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index} className="border-b border-black p-2">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key={index} className="border-black">
                                    {headers.map((header, idx) => (
                                        <td key={idx} className="border-b border-black p-2">
                                            {header === "Imagen" ? (
                                                <img
                                                    src={producto[header]}
                                                    alt={`Imagen de ${producto.Nombre}`}
                                                    className="w-16 h-16 object-cover"
                                                />
                                            ) : header === "Acciones" ? (
                                                <div className="flex space-x-2">
                                                    <button
                                                        className="bg-amber-400 text-white px-2 py-1 rounded"
                                                        onClick={handleOpenModifProductModal}
                                                    >
                                                        Modificar
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                                        onClick={handleOpenRemoveProductModal}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            ) : (
                                                producto[header]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showAddProductModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl w-10/12">
                  <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
                  <form className="text-center">
                    <input
                      type="text"
                      name="Nombre"
                      placeholder="Nombre del Producto"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Marca"
                      placeholder="Marca del Producto"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="CodBarra"
                      placeholder="Codigo de Barra"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Precio"
                      placeholder="Precio"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descuento"
                      placeholder="Descuento"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Cantidad"
                      placeholder="Cantidad"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Categoria"
                      placeholder="Categoria"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Color"
                      placeholder="Color"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="file"
                      name="Imagen"
                      placeholder="Imagen"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descripcion"
                      placeholder="Descripcion"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                  </form>
                  <div className="mt-16 flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Agregar Producto
                    </button>
                    <button
                      className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
                      onClick={handleCloseAddProductModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showModifProductModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl w-10/12">
                  <h2 className="text-2xl font-bold mb-4">Modificar Producto</h2>
                  <form className="text-center">
                    <input
                      type="text"
                      name="Nombre"
                      placeholder="Nombre del Producto"
                      
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Marca"
                      placeholder="Marca del Producto"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="CodBarra"
                      placeholder="Codigo de Barra"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Precio"
                      placeholder="Precio"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descuento"
                      placeholder="Descuento"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Cantidad"
                      placeholder="Cantidad"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Categoria"
                      placeholder="Categoria"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Color"
                      placeholder="Color"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="file"
                      name="Imagen"
                      placeholder="Imagen"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descripcion"
                      placeholder="Descripcion"
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                  </form>
                  <div className="mt-16 flex justify-center">
                    <button className="bg-amber-400 text-white px-4 py-2 rounded">
                      Modificar Producto
                    </button>
                    <button
                      className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
                      onClick={handleCloseModifProductModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showRemoveProductModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl w-1/3">
                  <h2 className="text-2xl text-center font-bold">Seguro que desea eliminar el producto?</h2>
                  <div className="mt-8 flex justify-center">
                    <button className="bg-red-400 text-white px-4 py-2 rounded">
                      Eliminar
                    </button>
                    <button
                      className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
                      onClick={handleCloseRemoveProductModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>    
            )}
        </section>
    );
};

export default AdminProducts;