import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import ProductosJSON from "../../productos.json"
import CardProducto from "../CardProducto/CardProducto"
import "./Local.css"


const Local = () => {
    const selectedStore = sessionStorage.getItem("tienda")
    const productosFiltrados = ProductosJSON.filter((producto) => producto.comercio === selectedStore)
    return (
        <>
            <Navbar />
            <body className="bodyLocal">
                <h2 className="tituloLocal">{selectedStore}</h2>
                <div className="gridLocal">
                    {productosFiltrados.map((producto) => {
                        return (
                            <CardProducto precio={producto.precio} imagen={producto.imagen} descuento={producto.descuento} titulo={producto.titulo} comercio={producto.comercio} />
                        )
                    })}
                </div>
            </body>
            <Footer />
        </>
    )
}

export default Local