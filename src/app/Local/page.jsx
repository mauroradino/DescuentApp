import React from 'react'
import Navbar from '@/components/Navbar'
import CardProducto from './components/CardProducto'
import filtrarPorComercios from '@/scripts/filtrarPorComercios'

const Local = ({searchParams}) => {
   let productosFiltrados = filtrarPorComercios(searchParams.comercio)

    return (
        <>
            <Navbar nav={false} volver="/Locales" />
            <h1 className="mt-6 text-center text-4xl font-bold text-white">Productos</h1>
            <div className='flex flex-col w-11/12 mx-auto mt-6 gap-2 p-4 md:grid md:grid-cols-2 md:w-8/12 lg:w-6/12'>
              {/* {productosFiltrados.map((producto, i) => {
                    return (
                        <CardProducto key={i} comercio={producto.comercio} titulo={producto.titulo} precio={producto.precio} descuento={producto.descuento} imagen={producto.imagen} />
                    )
                })} */}
            </div>
        </>
    )
}

export default Local
