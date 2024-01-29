import React from 'react';
import Modal from './Modal';

const RemoveProductModal = ({ isOpen, handleCloseRemoveProductModal, handleRemoveProduct }) => (
  <Modal isOpen={isOpen} onClose={handleCloseRemoveProductModal}>
    <h2 className="text-2xl text-center font-bold">Seguro que desea eliminar el producto?</h2>
    <div className="mt-8 flex justify-center">
      <button className="bg-red-400 text-white px-4 py-2 rounded" onClick={handleRemoveProduct}>
        Eliminar
      </button>
      <button
        className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
        onClick={handleCloseRemoveProductModal}
      >
        Cancelar
      </button>
    </div>
  </Modal>
);

export default RemoveProductModal;