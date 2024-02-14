import { useState } from "react";

const RegisterForm = ({values, handleRegisterUser,handleChange}) => {
  const [contrasena2, setContrasena2] = useState("");
  const [errorMensaje, setErrorMensaje] = useState('');
  const handlePasswordForm = () => {
    if (values.contrasena !== contrasena2) {
      setErrorMensaje('Las contraseñas no coinciden');
      return false;
    }
    setErrorMensaje('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (handlePasswordForm()) {
      // Solo llama a handleRegisterUser si las contraseñas coinciden
      handleRegisterUser();
    }
  };

  return (
    <div className="relative m-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Crear Cuenta</h1>
          <p className="mt-2 text-gray-500">
            Registrate para comenzar tus compras!
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-6">
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={values.nombre}
                onChange={(e) => handleChange('nombre', e.target.value)}
              />
              <label
                htmlFor="nombre"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Nombre
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Apellido"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={values.apellido}
                onChange={(e) => handleChange('apellido', e.target.value)}
              />
              <label
                htmlFor="apellido"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Apellido
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Dirección de correo electronico"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Dirección de correo electronico
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="contrasena"
                id="contrasena"
                placeholder="Contraseña"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={values.contrasena}
                onChange={(e) => handleChange('contrasena', e.target.value)}
              />
              <label
                htmlFor="contrasena"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Contraseña
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="contrasena2"
                id="contrasena2"
                placeholder="Password2"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={contrasena2}
                onChange={(e) => {
                  setContrasena2(e.target.value);
                  setErrorMensaje('');
                }}
              />
              <label
                htmlFor="contrasena2"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Confirmar Contraseña
              </label>

            </div>

            <div className="my-6">
              {errorMensaje && <p className="text-red-500">{errorMensaje}</p>}
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:bg-fuchsia-400"
                disabled= {!handlePasswordForm()}
                onClick={() => {
                  handlePasswordForm();
                  handleRegisterUser();
                }}
              >
                Crear Cuenta
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
                Ya tenes cuenta?
                <a
                  href="/login"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Inicia Sesion
                </a>
                .
              </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
