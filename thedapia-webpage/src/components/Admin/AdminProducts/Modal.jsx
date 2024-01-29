import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl w-1/2">
        {children}
      </div>
    </div>
  );
};

export default Modal;