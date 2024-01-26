import { React, useState, useEffect } from "react";
import axios from 'axios';

const AdminProducts = () => {
    const url = 'http://localhost:3000/productos';

    const [products, setProducts] = useState([]);
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [codigobarra, setcodigoBarra] = useState();
    const [precio, setPrecio] = useState();
    const [descuento, setDescuento] = useState();
    const [cantidad, setCantidad] = useState();
    const [categoria, setCategoria] = useState('');
    const [color, setColor] = useState('');
    const [imagen, setImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    // const [estado, setEstado] = useState();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [showModifProductModal, setShowModifProductModal] = useState(false);
    const [showRemoveProductModal, setShowRemoveProductModal] = useState(false);

    const headers = [
        "Nombre",
        "Marca",
        "codigoBarra",
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

    useEffect( () =>{
      getProducts();
    },[]);
    
    const getProducts = async () =>{
      const response = await axios.get(url);
      setProducts(response.data);
    }
    const handleAddProduct = async () => {
      try {
          const newProduct = {
              nombre,
              marca,
              codigobarra,
              precio,
              descuento,
              cantidad,
              categoria,
              color,
              imagen,
              descripcion,
          };
          const response = await axios.post(url, newProduct);

          setNombre('');
          setMarca('');
          setcodigoBarra('');
          setPrecio('');
          setDescuento('');
          setCantidad('');
          setCategoria('');
          setColor('');
          setImagen('');
          setDescripcion('');

          getProducts();
          handleCloseAddProductModal();
      } catch (error) {
          console.error('Error al agregar el producto:', error);
      }
    }

    const handleModifyProduct = async () => {
      try {
          const modifiedProduct = {
              nombre,
              marca,
              codigobarra,
              precio,
              descuento,
              cantidad,
              categoria,
              color,
              imagen,
              descripcion,
          };
          const response = await axios.put(`${url}/${selectedProduct._id}`, modifiedProduct);

          getProducts();
          handleCloseModifProductModal();
      } catch (error) {
          console.error('Error al modificar el producto:', error);
      }
    }

    const handleRemoveProduct = async () => {
      try {
        const response = await axios.delete(`${url}/eliminar/${selectedProduct._id}`);
    
        getProducts();
        handleCloseRemoveProductModal();
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    };
   


    const handleOpenAddProductModal = () => {
        setShowAddProductModal(true);
    };

    const handleCloseAddProductModal = () => {
        setShowAddProductModal(false);
    };

    const handleOpenModifProductModal = (selectedProduct) => {
      setSelectedProduct(selectedProduct);

      setShowModifProductModal(true);

      setNombre(selectedProduct.nombre || '');
      setMarca(selectedProduct.marca || '');
      setcodigoBarra(selectedProduct.codigobarra || '');
      setPrecio(selectedProduct.precio || '');
      setDescuento(selectedProduct.descuento || '');
      setCantidad(selectedProduct.cantidad || '');
      setCategoria(selectedProduct.categoria || '');
      setColor(selectedProduct.color || '');
      setImagen(selectedProduct.imagen || '');
      setDescripcion(selectedProduct.descripcion || "");
    };

    const handleCloseModifProductModal = () => {
        setShowModifProductModal(false);
        setSelectedProduct(null);
    };

    const handleOpenRemoveProductModal = (product) => {
      setSelectedProduct(product);
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
                            {products.map((product, _id) => (
                                <tr key={product._id} className="border-black">
                                    {headers.map((header, idx) => (
                                        <td key={idx} className="border-b border-black p-2">
                                            {header === "Imagen" ? (
                                                <img
                                                    src={product.imagen}
                                                    alt={`Imagen de ${product.nombre}`}
                                                    className="w-16 h-16 object-cover"
                                                />
                                            ) : header === "Acciones" ? (
                                                <div className="flex space-x-2">
                                                    <button
                                                        className="bg-amber-400 text-white px-2 py-1 rounded"
                                                        onClick={()=>handleOpenModifProductModal(product)}
                                                    >
                                                        Modificar
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                                        onClick={()=>handleOpenRemoveProductModal(product)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            ) : (
                                                product[header.toLowerCase()]
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
                      onChange={(e)=> setNombre(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Marca"
                      placeholder="Marca del Producto"
                      onChange={(e)=> setMarca(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="codigoBarra"
                      placeholder="Codigo de Barra"
                      value={codigobarra}
                      onChange={(e)=> setcodigoBarra(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Precio"
                      placeholder="Precio"
                      onChange={(e)=> setPrecio(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descuento"
                      placeholder="Descuento"
                      onChange={(e)=> setDescuento(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Cantidad"
                      placeholder="Cantidad"
                      onChange={(e)=> setCantidad(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <select  className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500" id="categoria" name="Categoria" onChange={(e)=> setCategoria(e.target.value)}>
                      <option value="Liberia">Libreria</option>
                      <option value="Juguetes">Juguetes</option>
                      <option value="Mochilas">Mochilas</option>
                    </select>
                    <input
                      type="text"
                      name="Color"
                      placeholder="Color"
                      onChange={(e)=> setColor(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Imagen"
                      placeholder="Imagen"
                      onChange={(e)=> setImagen(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descripcion"
                      placeholder="Descripcion"
                      onChange={(e)=> setDescripcion(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                  </form>
                  <div className="mt-16 flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddProduct}>
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
                      value={nombre}
                      onChange={(e)=> setNombre(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Marca"
                      placeholder="Marca del Producto"
                      value={marca}
                      onChange={(e)=> setMarca(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="codigoBarra"
                      placeholder="Codigo de Barra"
                      value={codigobarra}
                      onChange={(e)=> setcodigoBarra(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Precio"
                      placeholder="Precio"
                      value={precio}
                      onChange={(e)=> setPrecio(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descuento"
                      placeholder="Descuento"
                      value={descuento}
                      onChange={(e)=> setDescuento(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Cantidad"
                      placeholder="Cantidad"
                      value={cantidad}
                      onChange={(e)=> setCantidad(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <select
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                      id="categoria"
                      name="Categoria"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                    >
                      <option value="Libreria">Libreria</option>
                      <option value="Juguetes">Juguetes</option>
                      <option value="Mochilas">Mochilas</option>
                    </select>
                    <input
                      type="text"
                      name="Color"
                      placeholder="Color"
                      value={color}
                      onChange={(e)=> setColor(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Imagen"
                      placeholder="Imagen"
                      value={imagen}
                      onChange={(e)=> setImagen(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                    <input
                      type="text"
                      name="Descripcion"
                      placeholder="Descripcion"
                      value={descripcion}
                      onChange={(e)=> setDescripcion(e.target.value)}
                      className="w-5/12 border-2 rounded-xl border-gray-400 mx-2 my-4 px-3 py-2 hover:border-sky-500"
                    />
                  </form>
                  <div className="mt-16 flex justify-center">
                    <button className="bg-amber-400 text-white px-4 py-2 rounded"
                    onClick={handleModifyProduct}>
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
                    <button className="bg-red-400 text-white px-4 py-2 rounded"
                    onClick={handleRemoveProduct}>
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