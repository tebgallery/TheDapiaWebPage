import LoginForm from "./LoginForm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Login = () => {
  return (
    <>
      <Navbar/>
      <div className="h-176 flex items-center justify-center">
        <LoginForm/>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
