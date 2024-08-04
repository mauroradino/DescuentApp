import { Link } from "react-router-dom"
import "./Hero.css"


const Hero = () => {
    return (
        <div className="heroDiv px-4 py-5 text-center">
            <h1 className="letraLogo">D</h1>
            <h2 className="tituloHero display-5 fw-bold">DescuentApp</h2>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">La app que te da los mejores descuentos en los negocios de tu zona</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/Login" type="button" className="btn btn-primary btn-lg px-4 gap-3">Inicia Sesión</Link>
                    <Link to="/Login" type="button" className="btn btn-outline-secondary btn-lg px-4">Registrate</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero