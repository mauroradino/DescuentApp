import "./Navbar.css"


const Navbar = () => {
    return (
        <header className="p-3">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <h1 className="tituloNav">D</h1>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2">Inicio</a></li>
                        <li><a href="/Productos" className="nav-link px-2">Productos</a></li>
                        <li><a href="/Locales" className="nav-link px-2">Locales</a></li>
                    </ul>
                    <a href="/Negocios" className="nav-link">Soy Negocio</a>
                </div>
            </div>
        </header>
    )
}
export default Navbar