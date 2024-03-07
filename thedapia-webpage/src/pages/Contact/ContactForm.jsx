import React from "react";

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
    <div className="w-5/12 bg-fuchsia-300 rounded-2xl shadow-2xl p-16">
      <h2 className="text-4xl text-black text-center mb-20 ">Envianos tu mensaje</h2>
      <div className="px-12 mb-20">
        <input
          type="text"
          className="w-full h-16 border-b-2 border-black bg-transparent outline-none pl-4 text-lg mb-8"
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
        <button className="w-full h-12 rounded-3xl bg-black hover:bg-white duration-300 hover:scale-105 hover:text-black"
          onSubmit={onSubmit}
        >
          Enviar Mensaje
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
