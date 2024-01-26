import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';
import Productos from './pages/Productos/Productos';
import AdminPage from './pages/AdminPage/AdminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/libreria" element={<Productos categoria = "Libreria" />} />
          <Route path="/productos/mochilas" element={<Productos categoria = "Mochilas" />} />
          <Route path="/productos/juguetes" element={<Productos categoria = "Juguetes" />} />
          <Route path="/productos/buscar:palabra" element={<Productos categoria = "Juguetes" />} />
          <Route path="/adminpage" element = {<AdminPage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
