import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home'
import Products from './pages/products/Products'
import Marcas from './pages/marcas/Marcas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/marcas" element={<Marcas />} />
        </Routes>
      </Router>
    </>
  );
};

export default App
