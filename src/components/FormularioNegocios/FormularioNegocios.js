import "./FormularioNegocios.css"


const FormularioNegocios = () => {
    return (
        <div className="formulario">
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder='"El almacén de Juan"' />
                <label for="floatingInput">Presiona "Inicia Sesión"</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Calle 123" />
                <label for="floatingPassword">Dirección</label>
            </div>
        </div>
    )
}

export default FormularioNegocios