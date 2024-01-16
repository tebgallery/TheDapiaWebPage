import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import CarouselSection from './components/Carousel/CarouselSection';
import ProductsCarousel from './components/OfferCarousel/ProductsCarrousel';
import Features from './components/Features/Features';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from  './components/Contact/Form';

const App = () => {

  return (
    <>
    <Navbar/>
    <CarouselSection/>
    <Features/>
    <Aboutus/>
    <ProductsCarousel/>
    <ProductsCarousel/>
    <Contact/>
    </>
  );
};

export default App
