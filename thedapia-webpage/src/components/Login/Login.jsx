import LoginForm from "./LoginForm";
import Navbar from "../Navbar/Navbar";
const Login = () => {
  return (
    <section className = "w-screen h-screen flex h-screen bg-white m-auto">
      <Navbar/>
      <LoginForm/>
    </section>
  );
};

export default Login;
