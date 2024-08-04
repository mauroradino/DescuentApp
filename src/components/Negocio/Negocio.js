
import Footer from "../Footer/Footer"
import FormularioNegocios from "../FormularioNegocios/FormularioNegocios"
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom"
import "./Negocio.css"


const Negocio = () => {
    return (
        <>
            <Navbar />
            <body className="bodyNegocios">
                <h2 className="tituloNegocios">Registrá Tu Negocio</h2>
                <FormularioNegocios />
                <Link to="/DashboardNegocio" className="loginBtn btn btn-primary py-2" type="submit">Inicia Sesión</Link>
            </body>
            <Footer />
        </>
    )
}

export default Negocio