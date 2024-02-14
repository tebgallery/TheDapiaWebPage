import axios from "axios";
import { useContext, useState } from "react";
import { Link as RouterLink ,useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Cookies from 'js-cookie'

const LoginForm = () => {
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext)
  const [userData, setUserData] = useState({
    email: "",
    contrasena: ""
  })
  const [error, setError] = useState("");

  const handleLogin = (e) =>{
    e.preventDefault();
    axios
    .post('http://localhost:3000/usuarios/login', userData)
    .then((res) =>{
      console.log(res)
      setUser(res.data.usuario);
      Cookies.set('jwToken', res.data.jwToken, {expires: 1})
      navigate('/')
    })
    .catch((err) =>{
      if (err.response) {
        setError(err.response.data.msj);
      } else {
        console.log("Error en la respuesta:", err.message);
      }
    })
  }
    return (
      <div className="relative w-full max-w-xl h-104 bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Iniciar sesión</h1>
            <p className="mt-2 text-gray-500">Inicia sesión para comenzar tus compras!</p>
          </div>
          <div className="mt-5">
            <form action="">
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
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  value={userData.contrasena}
                  onChange={(e) => setUserData({...userData, contrasena: e.target.value})}
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Contraseña
                </label>
              </div>
              {error && (
                <div className="text-red-500 mb-4 mt-2">
                  {error}
                </div>
              )}
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                  onClick={handleLogin}
                >
                  Inicia Sesión
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                No tenes cuenta todavía?
                <RouterLink to="/register" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                  Crear Cuenta
                </RouterLink>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginForm;