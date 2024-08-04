import "./CardProducto.css"


const CardProducto = ({ imagen, titulo, precio, descuento, comercio }) => {
    return (
        <div className="divCardProducto">
            <img rel="preload" className="imagenCardProducto" src={imagen} alt={titulo} />
            <h5>{titulo}</h5>
            <div className="divPrecio"><p className="precioCardProducto">${precio}</p><p className="descuento">%{descuento}</p></div>
            <h6>{comercio}</h6>
        </div>
    )
}

export default CardProducto