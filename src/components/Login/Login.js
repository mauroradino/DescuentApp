import { Link } from "react-router-dom"
import "./Login.css"


const Login = () => {
    return (
        <body className="bodyLogin d-flex align-items-center py-4">
            <h1 className="logoLogin">D</h1>
            <main className="form-signin">
                <form>
                    <h2 className="h3 mb-3 fw-normal">Inicia Sesión</h2>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Autenticación no disponible, presionar 'Inicia Sesión'" />
                        <label for="floatingInput">presionar 'Inicia Sesión'</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>

                    <div className="form-check text-start">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Recordame
                        </label>
                    </div>
                    <Link to="/Locales" className="loginBtn btn btn-primary w-50 py-2" type="submit">Inicia Sesión</Link>
                </form>
            </main>
            <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <div id="crx-root-main"></div></body>
    )
}

export default Login