import React from "react";

const ContactForm = () => {
  return (
    <div className="w-5/12 bg-fuchsia-200 rounded-2xl shadow-2xl p-16">
      <div className="text-center mb-20">
        <h2 className="text-4xl text-black ">Contactanos</h2>
      </div>
      <div className="px-12 mb-20">
        <input
          type="text"
          className="w-full h-16 border-b-2 border-gray-400 bg-transparent outline-none pl-4 text-lg mb-8"
          placeholder="Nombre"
        />
        <input
          type="text"
          className="w-full h-16 border-b-2 border-black bg-transparent outline-none pl-4 text-lg mb-8"
          placeholder="Email"
        />
        <textarea
          required
          className="w-full h-16 border-b-2 border-black bg-transparent pl-4"
          id="mensaje"
          name="mensaje"
          placeholder="Mensaje"
        />
      </div>
      <div className="w-full px-12 text-white">
        <button className="w-full h-12 rounded-3xl bg-black hover:bg-black duration-300 hover:scale-105">
          Enviar Mensaje
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
