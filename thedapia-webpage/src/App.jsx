import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import AdminPage from './pages/AdminPage/AdminPage';
import Order from './pages/Order/Order';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminOrders from './pages/AdminPage/AdminOrders';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element ={<ProtectedRoute/>}>
            {/* rutas protegidas
            ej: <Route path="/adminpage" element = {<AdminPage/>}/> */}
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/libreria" element={<Productos categoria = "Libreria" />} />
          <Route path="/productos/mochilas" element={<Productos categoria = "Mochilas" />} />
          <Route path="/productos/juguetes" element={<Productos categoria = "Juguetes" />} />
          <Route path="/productos/buscar:palabra" element={<Productos categoria = "Juguetes" />} />
          <Route path="/adminpage" element = {<AdminPage/>}/>
          <Route path="/adminpage/orders" element = {<AdminOrders/>}/>
          <Route path="/order/:cart" element={<Order/>} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
