import Image from "next/image"
import LocalesPlaceholder from "./LocalesPlaceholder"
const CardProducto = ({ imagen, titulo, precio, descuento, comercio }) => {
  return (
    <div className="flex flex-col w-full items-center rounded p-4 bg-slate-100">
      {imagen ? (
        <Image
          rel="preload"
          loading="lazy"
          src={imagen}
          className=""
          width="200"
          height="200"
          alt={titulo}
        />
      ) : (
        <div className="flex justify-center items-center w-full mb-3">
          <LocalesPlaceholder />
        </div>
      )}
      <h5>{titulo}</h5>
      <div className="flex"><p className="precioCardProducto">${precio}</p><p className="descuento">%{descuento}</p></div>
      <h6>{comercio}</h6>
    </div>
  )
}

export default CardProducto
