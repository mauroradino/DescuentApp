import "./FormularioModal.css"


const FormularioModal = () => {
    return (
        <div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Autenticación no disponible, presionar 'Inicia Sesión'" />
                <label for="floatingInput">Nombre del Producto</label>
            </div>
            <div className="form-floating">
                <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Precio</label>
            </div>
            <div className="form-floating">
                <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Cantidad</label>
            </div>
        </div>
    )
}
export default FormularioModal