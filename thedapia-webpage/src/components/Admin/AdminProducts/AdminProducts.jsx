import { React, useState, useEffect } from "react";
import axios from 'axios';
import ProductTable from './ProductTable';
import AddProductModal from './AddProductModal';
import ModifyProductModal from './ModifyProductModal';
import RemoveProductModal from './RemoveProductModal';

const AdminProducts = () => {
  const url = 'http://localhost:3000/productos';

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showModifProductModal, setShowModifProductModal] = useState(false);
  const [showRemoveProductModal, setShowRemoveProductModal] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: '',
    marca: '',
    codigobarra: '',
    precio: '',
    descuento: '',
    cantidad: '',
    categoria: '',
    seccionEnPagina: '',
    color: '',
    imagen: '',
    fechaModificacion: '',
    descripcion: '',
    estado: '',
  });
  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // Los meses se indexan desde 0, por lo que sumamos 1
  const year = today.getFullYear();


  const headers = [
    "Nombre",
    "Marca",
    "codigoBarra",
    "Precio",
    "Descuento",
    "Cantidad",
    "Categoria",
    "SeccionEnPagina",
    "Color",
    "Imagen",
    "FechaModificacion",
    "Descripcion",
    "Estado",
    "Acciones",
  ];

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(url);
    setProducts(response.data);
  }
  const handleAddProduct = async () => {
    try {
      
      const response = await axios.post(url, formValues);
    
      setFormValues({
        nombre: '',
        marca: '',
        codigobarra: '',
        precio: '',
        descuento: '',
        cantidad: '',
        categoria: '',
        seccionenpagina: '',
        color: '',
        imagen: '',
        fechamodificacion: `${day}/${month}/${year}`,
        descripcion: '',
        estado: '',
      })

      getProducts();
      handleCloseAddProductModal();
    } catch (error) {
      console.error('Error al agregar el producto:', error);
    }
  }

  const handleModifyProduct = async () => {
    try {
      const response = await axios.put(`${url}/${selectedProduct._id}`, formValues);
      setFormValues({
        nombre: '',
        marca: '',
        codigobarra: '',
        precio: '',
        descuento: '',
        cantidad: '',
        categoria: '',
        seccionenpagina: '',
        color: '',
        imagen: '',
        fechamodificacion: `${day}/${month}/${year}`,
        descripcion: '',
        estado: '',
      })

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

    setFormValues({
      nombre: selectedProduct.nombre || '',
      marca: selectedProduct.marca || '',
      codigobarra: selectedProduct.codigobarra || '',
      precio: selectedProduct.precio || '',
      descuento: selectedProduct.descuento || '',
      cantidad: selectedProduct.cantidad || '',
      categoria: selectedProduct.categoria || '',
      seccionenpagina: selectedProduct.seccionenpagina || '',
      color: selectedProduct.color || '',
      imagen: selectedProduct.imagen || '',
      fechamodificacion: selectedProduct.fechamodificacion || '',
      descripcion: selectedProduct.descripcion || '',
      estado: selectedProduct.estado || '',
    });
  };

  const handleCloseModifProductModal = () => {
    setShowModifProductModal(false);
    setSelectedProduct(null);
    setFormValues({
      nombre: '',
      marca: '',
      codigobarra: '',
      precio: '',
      descuento: '',
      cantidad: '',
      categoria: '',
      seccionenpagina: '',
      color: '',
      imagen: '',
      fechamodificacion: '',
      descripcion: '',
      estado: '',
    })
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
        <ProductTable
          headers={headers}
          products={products}
          handleOpenModifProductModal={handleOpenModifProductModal}
          handleOpenRemoveProductModal={handleOpenRemoveProductModal}
        />
      </div>
      {showAddProductModal && (
        <AddProductModal
          isOpen={showAddProductModal}
          handleCloseAddProductModal={handleCloseAddProductModal}
          handleAddProduct={handleAddProduct}
          handleChange={handleChange}
          values={formValues}
        />
      )}

      {showModifProductModal && (
        <ModifyProductModal
          isOpen={showModifProductModal}
          handleCloseModifProductModal={handleCloseModifProductModal}
          handleModifyProduct={handleModifyProduct}
          handleChange={handleChange}
          values={formValues}
        />
      )}

      {showRemoveProductModal && (
        <RemoveProductModal
          isOpen={showRemoveProductModal}
          handleCloseRemoveProductModal={handleCloseRemoveProductModal}
          handleRemoveProduct={handleRemoveProduct}
        />
      )}
    </section>
  );
};

export default AdminProducts;