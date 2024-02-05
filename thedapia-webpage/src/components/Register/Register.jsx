import RegisterForm from './RegisterForm';
import Navbar from "../Navbar/Navbar";
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const url = "http://localhost:3000/usuarios/";
  const today = new Date();
  const [userFormValues, setUserFormValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    ultFechaConexion: today,
    tipo: "Usuario",
    estado: "Activo"
  });

  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  }; 

  const handleRegisterUser = async () => {
    try {
      console.log(userFormValues);
      const response = await axios.post(url, userFormValues);

      setUserFormValues({
        nombre: "",
        apellido: "",
        email: "",
        contrasena: "",
      });

      handleNavigateToHome();

    } catch (error) {
      console.error("Error al registrar al usuario:", error);
    }
  };

  const handleChange = (name, value) => {
    setUserFormValues({
      ...userFormValues,
      [name]: value,
    });
  };


  return (
    <>
      <Navbar />
      <RegisterForm values={userFormValues} handleRegisterUser = {handleRegisterUser} handleChange = {handleChange}/>
    </>
  );
};

export default Register;