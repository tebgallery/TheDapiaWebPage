import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c65291ab-110e-430b-a6d6-7cd1c1cc09ff"); //cambiar key a la de patrick

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <div className="w-5/12 px-4 py-20 mr-12">
      <h2 className="pl-16 text-4xl text-slate-700 font-semibold text-left mb-14">Envianos tu mensaje</h2>
      <div className="px-12 mb-8">
      <div className="relative mb-6">
          <input
            type="text"
            className="w-full h-16 rounded-full bg-gray-200 outline-none pl-16 text-lg"
            placeholder="Nombre"
          />
          <span className="absolute left-6 top-5"><FaUser className="w-6 h-6 text-gray-600" /></span>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            className="w-full h-16 rounded-full bg-gray-200 outline-none pl-16 text-lg"
            placeholder="Email"
          />
          <span className="absolute left-6 top-5"><IoIosMail  className="w-6 h-6 text-gray-600" /></span>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            className="w-full h-36 rounded-3xl bg-gray-200 outline-none pl-8 pb-20 text-lg"
            placeholder="Mensaje..."
          />
        </div>
      </div>
      <div className="w-full px-12 text-white">
        <button className="w-full h-16 rounded-full bg-violet-400 text-lg hover:bg-violet-500 duration-300 hover:scale-105"
          onSubmit={onSubmit}
        >
          Enviar Mensaje
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
