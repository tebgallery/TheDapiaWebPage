import React from 'react';
import Modal from './Modal';
import ModifyProductModalForm from './ModifyProductModalForm';

const ModifyProductModal = ({
  isOpen,
  handleCloseModifProductModal,
  handleModifyProduct,
  handleChange,
  values,
}) => (
  <Modal isOpen={isOpen} onClose={handleCloseModifProductModal}>
    <h2 className="text-2xl font-bold mb-4">Modificar Producto</h2>
    <ModifyProductModalForm handleChange={handleChange} values={values} />
    <div className="mt-16 flex justify-center">
      <button className="bg-amber-400 text-white px-4 py-2 rounded" onClick={handleModifyProduct}>
        Modificar Producto
      </button>
      <button
        className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={handleCloseModifProductModal}
      >
        Cancelar
      </button>
    </div>
  </Modal>
);

export default ModifyProductModal;