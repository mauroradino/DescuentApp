import "./Footer.css"


const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-3">
            <p className="col-md-4 mb-0 nav-link-footer">© 2024 DescuentApp</p>
            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <h4 className="logoFooter">D</h4>
            </a>
            <ul className="nav navFooter col-md-4 justify-content-end">
                <li className="nav-item"><a href="/" className="nav-link-footer px-2">Inicio</a></li>
                <li className="nav-item"><a href="/" className="nav-link-footer px-2">Productos</a></li>
                <li className="nav-item"><a href="/" className="nav-link-footer px-2">Locales</a></li>
                <li className="nav-item"><a href="/" className="nav-link-footer px-2">Soy Negocio</a></li>
            </ul>
        </footer>
    )
}

export default Footer