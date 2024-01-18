import {React,useState} from "react";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import Footer from '../../components/Footer/Footer';
import Filtros from '../../components/Filtros/Filtros';


const Productos = () => {

  const [filtrosSeleccionados, setFiltrosSeleccionados] = useState({});

  const handleFiltroChange = (nuevosFiltros) => {
    setFiltrosSeleccionados(nuevosFiltros);
    };
  
    const articulos = [
        { id: 1, title: 'Cartuchera Mooving Homero Simpsons', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990 },
        { id: 2, title: 'Artículo 2', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 3, title: 'Artículo 3', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 4, title: 'Artículo 4', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 5, title: 'Artículo 5', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 6, title: 'Artículo 6', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 7, title: 'Artículo 7', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 8, title: 'Artículo 8', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 9, title: 'Artículo 9', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 10, title: 'Artículo 10', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 11, title: 'Artículo 11', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 12, title: 'Artículo 12', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 13, title: 'Artículo 13', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 14, title: 'Artículo 14', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        { id: 15, title: 'Artículo 15', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg", precio: 19990  },
        // Otros artículos...
      ];



    return (
        <>
        <section className="w-full min-h-256 bg-gray-200 flex justify-center">
            <Filtros onFiltroChange={handleFiltroChange} />
            <ArticulosGrid articulos={articulos} />
        </section>
        <Footer/>
        </>
    )
}

export default Productos;