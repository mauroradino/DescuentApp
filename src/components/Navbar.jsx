import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] })

const Navbar = ({ nav, volver }) => {
    return (
        <div className="flex w-full items-center justify-between h-auto p-4 shadow-md bg-transparent">
            <a href="/" className={`ml-4 text-white text-5xl ${pacifico.className}`}>D</a>
            {
                nav ? (
                    <div className="flex gap-2">
                        <a href="/Mapa" className="text-white">Ver Locales</a>
                        <a href="https://diegocc14.pythonanywhere.com/admin/" className="text-white">Soy Negocio</a>
                    </div>
                ) : <a href={volver} className="text-white" >Volver</a>
            }
        </div>
    )
}


export default Navbar