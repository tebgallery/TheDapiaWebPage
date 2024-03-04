import { React, useState, useEffect } from "react";
import axios from "axios";
import ProductTable from "./ProductTable";
import AddProductModal from "./AddProductModal";
import ModifyProductModal from "./ModifyProductModal";
import RemoveProductModal from "./RemoveProductModal";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdminProducts = () => {
  const url = "http://localhost:3000/productos";
  const today = new Date();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showModifProductModal, setShowModifProductModal] = useState(false);
  const [showRemoveProductModal, setShowRemoveProductModal] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: "",
    marca: "",
    codigobarra: "",
    precio: "",
    descuento: "",
    preciototal: "",
    cantidad: "",
    categoria: "",
    subcategoria: "",
    item: "",
    seccionenpagina: "",
    color: "",
    imagen: "",
    fechamodificacion: "",
    descripcion: "",
    estado: "",
  });
  const [selectedFilter, setSelectedFilter] = useState("none");
  
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filterProducts = (products) => {
    if (selectedFilter === "none") {
      return products;
    } else {
      const filteredProducts = products.filter((product) => product.seccionenpagina === selectedFilter);
      return filteredProducts;
    }
  };

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const headers = [
    "Nombre",
    "Imagen",
    "Marca",
    /*
  "codigoBarra",*/
    "Precio",
    "Descuento",
    "PrecioTotal",
    "Cantidad",
    "Categoria",
    "SubCategoria",
    "Item",
    "SeccionEnPagina",
    "Color",
    "Imagen",
    "FechaModificacion",
    "Descripcion",
    "Estado",
    "Acciones",
    ""
  ];

  useEffect(() => {
    getProducts();
  }, [selectedFilter]);

  const getProducts = async () => {
    const response = await axios.get(url);
    setProducts(response.data);
  };

  const handleAddProduct = async () => {
    try {
      console.log("precio:",formValues.precio);
      console.log("descuento:",formValues.descuento);
      const tempFormValues = {
        ...formValues,
        preciototal:  Number(formValues.precio) - (Number(formValues.precio) * Number(formValues.descuento)) / 100,
        fechamodificacion: today,
      };

      const response = await axios.post(url, tempFormValues);

      setFormValues({
        nombre: "",
        marca: "",
        codigobarra: "",
        precio: "",
        descuento: "",
        preciototal: "",
        cantidad: "",
        categoria: "",
        subcategoria: "",
        item: "",
        seccionenpagina: "",
        color: "",
        imagen: "",
        fechamodificacion: "",
        descripcion: "",
        estado: "",
      });

      getProducts();
      handleCloseAddProductModal();
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  const handleModifyProduct = async () => {
    try {
      const tempFormValues = {
        ...formValues,
        preciototal:  formValues.precio - (formValues.precio * formValues.descuento) / 100,
        fechamodificacion: today,
      };
      const response = await axios.put(
        `${url}/${selectedProduct._id}`,
        tempFormValues
      );
      setFormValues({
        nombre: "",
        marca: "",
        codigobarra: "",
        precio: "",
        descuento: "",
        preciototal: "",
        cantidad: "",
        categoria: "",
        subcategoria: "",
        item: "",
        seccionenpagina: "",
        color: "",
        imagen: "",
        fechamodificacion: "",
        descripcion: "",
        estado: "",
      });

      getProducts();
      handleCloseModifProductModal();
    } catch (error) {
      console.error("Error al modificar el producto:", error.response.data);
    }
  };

  const handleRemoveProduct = async () => {
    try {
      const response = await axios.delete(
        `${url}/eliminar/${selectedProduct._id}`
      );

      getProducts();
      handleCloseRemoveProductModal();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
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
      nombre: selectedProduct.nombre || "",
      marca: selectedProduct.marca || "",
      codigobarra: selectedProduct.codigobarra || "",
      precio: selectedProduct.precio || "",
      descuento: selectedProduct.descuento || "",
      preciototal: selectedProduct.preciototal || "",
      cantidad: selectedProduct.cantidad || "",
      categoria: selectedProduct.categoria || "",
      subcategoria: selectedProduct.subcategoria || "",
      item: selectedProduct.item || "",
      seccionenpagina: selectedProduct.seccionenpagina || "",
      color: selectedProduct.color || "",
      imagen: selectedProduct.imagen || "",
      fechamodificacion: selectedProduct.fechamodificacion || "",
      descripcion: selectedProduct.descripcion || "",
      estado: selectedProduct.estado || "",
    });
  };

  const handleCloseModifProductModal = () => {
    setShowModifProductModal(false);
    setSelectedProduct(null);
    setFormValues({
      nombre: "",
      marca: "",
      codigobarra: "",
      precio: "",
      descuento: "",
      preciototal: "",
      cantidad: "",
      categoria: "",
      subcategoria: "",
      item: "",
      seccionenpagina: "",
      color: "",
      imagen: "",
      fechamodificacion: "",
      descripcion: "",
      estado: "",
    });
  };

  const handleOpenRemoveProductModal = (product) => {
    setSelectedProduct(product);
    setShowRemoveProductModal(true);
  };

  const handleCloseRemoveProductModal = () => {
    setShowRemoveProductModal(false);
  };

  console.log(products);

  return (
    <section className="w-full">
      <Navbar handleFilterChange={handleFilterChange} />
      <div className="w-full">
        <div className="relative m-auto w-11/12 flex items-center justify-between">
          <h1 className="text-4xl font-semibold mb-16 mt-12">
            Productos
          </h1>
          <button
            className="absolute right-0 bg-emerald-500 opacity-80 text-white px-4 py-4 rounded-full flex items-center justify-center hover:opacity-100 shadow-xl duration-500 transition-transform transform hover:scale-110"
            onClick={handleOpenAddProductModal}
          >
            <FontAwesomeIcon
                  icon={faPlus}
                  className="w-4 h-4"
          />
          </button>

        </div>
        <div className="w-full flex justify-center">
        <ProductTable
          headers={headers}
          products={filterProducts(products)}
          handleOpenModifProductModal={handleOpenModifProductModal}
          handleOpenRemoveProductModal={handleOpenRemoveProductModal}
          selectedFilter={selectedFilter}
        />
        </div>
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
