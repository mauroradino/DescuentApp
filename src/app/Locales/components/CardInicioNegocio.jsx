import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const CardInicioNegocio = ({local, i}) => {
  return (
    <Link key={i} href={{
        pathname: "/Local",
        query:{
            comercio: local.nombre
        }
    }} className="w-full aspect-square rounded p-4 bg-slate-100 hover:bg-slate-200 md:aspect-square md:flex md:justify-center md:flex-col md:items-center">
        {/*<Image src={local.imagen} width="200" height="100" alt="negocio" />*/}
    </Link>
  )
}

export default CardInicioNegocio
