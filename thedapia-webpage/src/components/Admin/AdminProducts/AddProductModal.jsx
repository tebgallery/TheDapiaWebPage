import React from 'react';
import Modal from './Modal';
import ModifyProductModalForm from './ModifyProductModalForm';

const AddProductModal = ({ isOpen, handleCloseAddProductModal, handleAddProduct, handleChange, values }) => (
  <Modal isOpen={isOpen} onClose={handleCloseAddProductModal}>
    <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
    <ModifyProductModalForm handleChange={handleChange} values={values} />
    <div className="mt-16 flex justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddProduct}>
        Agregar Producto
      </button>
      <button
        className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={handleCloseAddProductModal}
      >
        Cancelar
      </button>
    </div>
  </Modal>
);

export default AddProductModal;