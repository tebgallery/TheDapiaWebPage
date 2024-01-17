import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import Productos from './pages/Productos/Productos';
import Marcas from './pages/marcas/Marcas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/marcas" element={<Marcas />} />
        </Routes>
      </Router>
    </>
  );
};

export default App
