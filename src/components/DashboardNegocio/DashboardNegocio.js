import { useState } from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import ProductoTabla from "../ProductoTabla/ProductoTabla"
import productosJSON from "../../productos.json"
import "./DashboardNegocio.css"
import DatosNegocio from "../DatosNegocio/DatosNegocio"
import DatosNegocioJSON from "../../negocios.json"
import FormularioProducto from "../FormularioProducto/FormularioProducto"
import Swal from "sweetalert2"
import DatoModal from "../EditarDatoModal/DatoModal"

const DashboardNegocio = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("productos")
    const [show, setShow] = useState(false);
    const [showEditar, setShowEditar] = useState(false);

    const handleAgregar = () => {
        setShow(false);
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado correctamente'
        })
    }
    const handleEditar = () => {
        setShowEditar(false);
        Swal.fire({
            icon: 'success',
            title: 'Dato editado correctamente'
        })
    }
    const handleClose = () => setShow(false)
    const handleCloseEditar = () => setShowEditar(false)
    const handleShow = () => setShow(true);
    const handleShowEditar = () => setShowEditar(true);


    return (
        <>
            <Navbar />
            <div className="bodyDashboard">
                <div className="dashboard">
                    <div className="izquierdaDash">
                        <h2 className="tituloDashboard">Tu Negocio</h2>
                        <ul className="listaDashboard">
                            <li className="liDashboard"><button onClick={() => { setOpcionSeleccionada("productos") }} className="buttonLi">Productos</button></li>
                            <li className="liDashboard"><button onClick={() => { setOpcionSeleccionada("datos") }} className="buttonLi">Datos</button></li>
                            <li className="liDashboard"><button onClick={() => { setOpcionSeleccionada("provedores") }} className="buttonLi">Provedores</button></li>
                        </ul>
                    </div>
                    <ul className={`ulDash ${opcionSeleccionada === "datos" ? "dashDatos" : null} w-100`}>
                        {(() => {
                            switch (opcionSeleccionada) {
                                case "productos":
                                    return (
                                        <>
                                            <li className="liProductoTabla superior">
                                                <p className="nombreProductoTabla fw-bold">NOMBRE PRODUCTO</p>
                                                <p className="precioProductoTabla fw-bold">PRECIO POR UNIDAD</p>
                                                <p className="stockProductoTabla fw-bold">STOCK</p>
                                            </li>
                                            {productosJSON.map(producto => (
                                                <ProductoTabla
                                                    key={producto._id}
                                                    nombre={producto.titulo}
                                                    precio={producto.precio}
                                                    stock={producto.stock}
                                                />
                                            ))}
                                            <li className="liProductoTabla">
                                                <button onClick={handleShow} className="añadirProductoBtn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                </svg> Añadir Producto</button>
                                            </li>
                                            <FormularioProducto show={show} handleAgregar={handleAgregar} handleClose={handleClose} />
                                        </>
                                    );
                                case "datos":
                                    return (
                                        <>
                                            <li className="liProductoTabla liProductoTablaDatos">
                                                <p className="nombreNegocioTabla fw-bold">NOMBRE NEGOCIO</p>
                                                <p className="direccionNegocioTabla fw-bold">DIRECCIÓN</p>
                                                <p className="cbuNegocioTabla fw-bold">CBU</p>
                                                <p className="propietarioNegocioTabla fw-bold">PROPIETARIO</p>
                                            </li>
                                            {DatosNegocioJSON.map(datoNegocio => {
                                                return (
                                                    <DatosNegocio handleShowEditar={handleShowEditar} className="liProductoTablaDatos" propietario={datoNegocio.propietario} cbu={datoNegocio.cbu} direccion={datoNegocio.direccion} nombre={datoNegocio.nombre} />
                                                )
                                            })}
                                            <DatoModal handleEditar={handleEditar} showEditar={showEditar} handleCloseEditar={handleCloseEditar} />
                                        </>
                                    )
                                default:
                                    return null;
                            }
                        })()}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DashboardNegocio