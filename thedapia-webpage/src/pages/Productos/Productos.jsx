import React from "react";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import Footer from '../../components/Footer/Footer';

const Productos = () => {
    const articulos = [
        { id: 1, title: 'Cartuchera Mooving Homero Simpsons', img: "https://www.tiendaforeva.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/4/0/4064524_20231130160006.jpg" /* Otros detalles del artículo */ },
        { id: 2, title: 'Artículo 2', /* Otros detalles del artículo */ },
        { id: 3, title: 'Artículo 3', /* Otros detalles del artículo */ },
        { id: 4, title: 'Artículo 4', /* Otros detalles del artículo */ },
        { id: 5, title: 'Artículo 5', /* Otros detalles del artículo */ },
        { id: 6, title: 'Artículo 6', /* Otros detalles del artículo */ },
        { id: 7, title: 'Artículo 7', /* Otros detalles del artículo */ },
        { id: 8, title: 'Artículo 8', /* Otros detalles del artículo */ },
        { id: 9, title: 'Artículo 9', /* Otros detalles del artículo */ },
        { id: 10, title: 'Artículo 10', /* Otros detalles del artículo */ },
        { id: 11, title: 'Artículo 11', /* Otros detalles del artículo */ },
        { id: 12, title: 'Artículo 12', /* Otros detalles del artículo */ },
        { id: 13, title: 'Artículo 13', /* Otros detalles del artículo */ },
        { id: 14, title: 'Artículo 14', /* Otros detalles del artículo */ },
        { id: 15, title: 'Artículo 15', /* Otros detalles del artículo */ },
        // Otros artículos...
      ];



    return (
        <>
        <section className="w-full min-h-256 bg-gray-200 flex items-center justify-center">
            <ArticulosGrid articulos={articulos} />
        </section>
        <Footer/>
        </>
    )
}

export default Productos;