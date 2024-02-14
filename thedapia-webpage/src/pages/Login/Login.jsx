import LoginForm from "../../components/Login/LoginForm";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
