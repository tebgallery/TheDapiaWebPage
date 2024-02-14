import axios from "axios";
import { useState } from "react";
import { Link as RouterLink ,useNavigate} from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    contrasena2: ""
  })
  const [errors, setErrors] = useState("");

  const handleValidation = () => {
    const errors = {};

    if (!userData.nombre.trim()) {
      errors.nombre = "El nombre es requerido";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(userData.nombre)) {
      errors.nombre = "El nombre solo debe contener letras";
    }

    if (!userData.apellido.trim()) {
      errors.apellido = "El apellido es requerido";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(userData.apellido)) {
      errors.apellido = "El apellido solo debe contener letras";
    }

    if (!userData.email.trim()) {
      errors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "El email no es válido";
    }

    if (!userData.contrasena.trim()) {
      errors.contrasena = "La contraseña es requerida";
    }

    if (!userData.contrasena2.trim()) {
      errors.contrasena2 = "La confirmación de contraseña es requerida";
    } else if (userData.contrasena2 !== userData.contrasena) {
      errors.contrasena2 = "Las contraseñas no coinciden";
    }

    return errors;
  };

  const handleRegister = (e) =>{
    e.preventDefault();
    const errors = handleValidation();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }
    axios
    .post('http://localhost:3000/usuarios/register', userData)
    .then((res) =>{
      navigate('/login');
    })
    .catch((err) =>{
      setErrors({ general: err.response.data.error });
    })
  }

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
          <form action="">
            {errors.general && (
              <div className="text-red-500 text-sm mb-4">
                {errors.general}
              </div>
            )}
            <div className="relative mt-6">
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="nombre"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={userData.nombre}
                onChange={(e) => setUserData({...userData, nombre: e.target.value})}
              />
              {errors.nombre && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.nombre}
                </div>
              )}
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
                placeholder="apellido"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={userData.apellido}
                onChange={(e) => setUserData({...userData, apellido: e.target.value})}
              />
              {errors.apellido && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.apellido}
                </div>
              )}
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
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autoComplete="NA"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.email}
                </div>
              )}
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
                placeholder="contrasena"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={userData.contrasena}
                onChange={(e) => setUserData({...userData, contrasena: e.target.value})}
              />
              {errors.contrasena && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.contrasena}
                </div>
              )}
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
                placeholder="contrasena2"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={userData.contrasena2}
                onChange={(e) => setUserData({...userData, contrasena2: e.target.value})}
              />
              {errors.contrasena2 && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.contrasena2}
                </div>
              )}
              <label
                htmlFor="contrasena2"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Confirmar Contraseña
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                onClick={handleRegister}
              >
                Crear Cuenta
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
                Ya tenes cuenta?
                <RouterLink to="/login"className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"> 
                  Inicia Sesion
                </RouterLink>
                .
              </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;