import React, { Suspense } from "react"
import CardInicioNegocio from "./components/CardInicioNegocio"
import Navbar from "@/components/Navbar"
import getNegocios from "@/scripts/getNegocios"

const Locales = async () => {
let Negocios =  await getNegocios()
    return (
        <>
            <Navbar nav={true} volver={"/"} />
            <div className="flex justify-center mt-6">
    <h1 className="text-3xl font-bold text-white">Locales Adheridos</h1>
</div>

            <div className="flex flex-col gap-4 w-60 mx-auto p-4 mt-4 md:grid md:grid-cols-2 md:w-9/12 md:mb-4 lg:w-6/12">
                {Negocios.map((local, i) => {
                    return (
                        <Suspense key={i} fallback={<div>Loading...</div>}>
                        <CardInicioNegocio key={i} i={i} local={local}/>
                        </Suspense>
                    )
                })}
            </div>
        </>
    )
}

export default Locales