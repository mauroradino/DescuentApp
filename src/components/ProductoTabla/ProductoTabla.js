import "./ProductoTabla.css"


const ProductoTabla = ({ nombre, precio, stock }) => {
    return (
        <li className="liProductoTabla">
            <p className="nombreProductoTabla">{nombre}</p>
            <p className="precioProductoTabla">${precio}</p>
            <p className="stockProductoTabla">{stock}</p>
        </li>
    )
}

export default ProductoTabla