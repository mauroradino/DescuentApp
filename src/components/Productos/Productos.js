import ProductosJSON from "../../productos.json";
import CardProducto from "../CardProducto/CardProducto";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Productos.css";

const Productos = () => {
    return (
        <>
            <Navbar />
            <main className="bodyProductos">
                <div className="gridProductos">
                    {ProductosJSON.map((producto) => (
                        <CardProducto
                            key={producto.id}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            descuento={producto.descuento}
                            titulo={producto.titulo}
                            comercio={producto.comercio}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Productos;

